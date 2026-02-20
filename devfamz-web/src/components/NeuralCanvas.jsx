import { useEffect, useRef, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════════════
   HeroCanvas — Dual-Mode Animation
   ─────────────────────────────────────────────────────────────────
   DARK MODE  → Full 3D Particle Morphing Mesh
   LIGHT MODE → Clean, elegant falling snow particles
═══════════════════════════════════════════════════════════════════ */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SHARED
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const rand = (a, b) => Math.random() * (b - a) + a;
const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  LIGHT MODE — Crystalline Snowfall
//  ─ Real hexagonal crystal flakes with fractal branches
//  ─ Soft bokeh orbs drifting in background
//  ─ Random sparkle glints that flash & fade
//  ─ Periodic wind gusts
//  ─ Shimmering frost line near bottom
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SNOW_COUNT = 70;
const BOKEH_COUNT = 8;
const SPARKLE_COUNT = 25;

// ─── Crystal Snowflake ────────────────────────────────────────────
class CrystalFlake {
    constructor(w, h, init = false) {
        this.w = w; this.h = h;
        this.reset(init);
    }
    reset(init = false) {
        this.x = rand(0, this.w);
        this.y = init ? rand(-40, this.h) : rand(-80, -15);
        this.size = rand(2.5, 8.0);
        this.vy = rand(0.2, 0.6);
        this.vx = 0;
        this.baseVx = rand(-0.08, 0.08);
        this.opacity = rand(0.12, 0.45);
        this.wobblePhase = rand(0, Math.PI * 2);
        this.wobbleSpeed = rand(0.004, 0.015);
        this.wobbleAmp = rand(0.2, 0.6);
        this.depth = rand(0.3, 1.0);
        this.rotation = rand(0, Math.PI * 2);
        this.rotSpeed = rand(-0.008, 0.008);
        this.branches = Math.random() < 0.4 ? 6 : (Math.random() < 0.5 ? 4 : 8);
        this.branchDepth = Math.random() < 0.35 ? 2 : 1; // fractal depth
        this.colorIdx = Math.floor(rand(0, 3));
        // Whether this is a detailed crystal or a simple dot
        this.isCrystal = this.size > 3.5;
    }
    update(windForce) {
        this.wobblePhase += this.wobbleSpeed;
        this.rotation += this.rotSpeed;
        this.vx = this.baseVx + Math.sin(this.wobblePhase) * this.wobbleAmp + windForce;
        this.x += this.vx;
        this.y += this.vy * this.depth;
        if (this.y > this.h + 30) this.reset(false);
        if (this.x < -20) this.x = this.w + 20;
        if (this.x > this.w + 20) this.x = -20;
    }
}

// ─── Bokeh Orb ────────────────────────────────────────────────────
class BokehOrb {
    constructor(w, h) {
        this.w = w; this.h = h;
        this.x = rand(0, w);
        this.y = rand(h * 0.1, h * 0.9);
        this.r = rand(30, 80);
        this.opacity = rand(0.03, 0.08);
        this.vy = rand(-0.08, 0.08);
        this.vx = rand(-0.06, 0.06);
        this.phase = rand(0, Math.PI * 2);
        this.colorIdx = Math.floor(rand(0, 4));
    }
    update() {
        this.phase += 0.005;
        this.x += this.vx + Math.sin(this.phase) * 0.05;
        this.y += this.vy + Math.cos(this.phase * 0.8) * 0.04;
        if (this.x < -this.r) this.x = this.w + this.r;
        if (this.x > this.w + this.r) this.x = -this.r;
        if (this.y < -this.r) this.y = this.h + this.r;
        if (this.y > this.h + this.r) this.y = -this.r;
    }
}

// ─── Sparkle Glint ────────────────────────────────────────────────
class Sparkle {
    constructor(w, h) {
        this.w = w; this.h = h;
        this.respawn();
    }
    respawn() {
        this.x = rand(0, this.w);
        this.y = rand(0, this.h);
        this.life = 0;
        this.maxLife = rand(40, 100);
        this.size = rand(1.5, 4.0);
        this.delay = rand(0, 200); // frames before appearing
    }
    update() {
        if (this.delay > 0) { this.delay--; return; }
        this.life++;
        if (this.life > this.maxLife) this.respawn();
    }
    get alpha() {
        if (this.delay > 0) return 0;
        const t = this.life / this.maxLife;
        // Fade in then out, peaking at 30%
        if (t < 0.3) return (t / 0.3);
        return 1 - ((t - 0.3) / 0.7);
    }
}

// ─── Draw a fractal crystal arm ───────────────────────────────────
function drawCrystalArm(ctx, x, y, angle, length, depth, maxDepth, lineW) {
    const ex = x + Math.cos(angle) * length;
    const ey = y + Math.sin(angle) * length;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(ex, ey);
    ctx.lineWidth = lineW;
    ctx.stroke();

    // Small tip diamond
    if (depth === maxDepth) {
        const ds = lineW * 2;
        ctx.beginPath();
        ctx.arc(ex, ey, ds * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }

    if (depth < maxDepth) {
        const subLen = length * 0.45;
        const branchPos = 0.55;
        const bx = x + Math.cos(angle) * length * branchPos;
        const by = y + Math.sin(angle) * length * branchPos;
        drawCrystalArm(ctx, bx, by, angle + Math.PI / 5, subLen, depth + 1, maxDepth, lineW * 0.6);
        drawCrystalArm(ctx, bx, by, angle - Math.PI / 5, subLen, depth + 1, maxDepth, lineW * 0.6);
    }
}

// ─── Draw full crystal snowflake ──────────────────────────────────
function drawCrystalSnowflake(ctx, x, y, size, rotation, branches, branchDepth) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.lineCap = 'round';

    const armLen = size;
    for (let i = 0; i < branches; i++) {
        const angle = (i / branches) * Math.PI * 2;
        drawCrystalArm(ctx, 0, 0, angle, armLen, 1, branchDepth, size * 0.12);
    }

    // Center jewel
    const jewGrd = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.25);
    jewGrd.addColorStop(0, 'rgba(255,255,255,0.8)');
    jewGrd.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = jewGrd;
    ctx.fill();

    ctx.restore();
}

// ─── Main light mode draw ─────────────────────────────────────────
function drawSnowMode(ctx, W, H, lightState, time) {
    const { snow, bokeh, sparkles } = lightState;

    const snowColors = [
        { stroke: (a) => `rgba(90,145,195,${a})`, fill: (a) => `rgba(110,165,215,${a})` },
        { stroke: (a) => `rgba(130,110,185,${a})`, fill: (a) => `rgba(150,130,200,${a})` },
        { stroke: (a) => `rgba(70,155,150,${a})`, fill: (a) => `rgba(90,175,170,${a})` },
    ];

    const bokehColors = [
        (a) => `rgba(100,170,220,${a})`,
        (a) => `rgba(140,120,200,${a})`,
        (a) => `rgba(80,180,160,${a})`,
        (a) => `rgba(170,130,190,${a})`,
    ];

    // Wind gust — periodic sideways force
    const windCycle = Math.sin(time * 0.008) * Math.sin(time * 0.003);
    const windForce = windCycle * 0.5;

    // ── 1. Bokeh orbs (soft out-of-focus circles) ────────────
    for (const b of bokeh) {
        b.update();
        const pulse = 0.85 + 0.15 * Math.sin(b.phase);
        const r = b.r * pulse;
        const colorFn = bokehColors[b.colorIdx];

        // Outer ring
        ctx.beginPath();
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = colorFn(b.opacity * 0.6);
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner fill
        const grd = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
        grd.addColorStop(0, colorFn(b.opacity * 0.5));
        grd.addColorStop(0.5, colorFn(b.opacity * 0.15));
        grd.addColorStop(1, colorFn(0));
        ctx.beginPath();
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
    }

    // ── 2. Crystal snowflakes ────────────────────────────────
    for (const f of snow) {
        f.update(windForce);
        const c = snowColors[f.colorIdx];
        const depthAlpha = f.opacity * f.depth;

        if (f.isCrystal) {
            // Detailed hexagonal crystal
            ctx.globalAlpha = depthAlpha;
            ctx.strokeStyle = c.stroke(1);
            ctx.fillStyle = c.fill(0.6);

            // Soft glow behind crystal
            const glowR = f.size * 2.5;
            const grd = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, glowR);
            grd.addColorStop(0, c.fill(depthAlpha * 0.3));
            grd.addColorStop(1, c.fill(0));
            ctx.beginPath();
            ctx.arc(f.x, f.y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            ctx.strokeStyle = c.stroke(depthAlpha * 1.2);
            ctx.fillStyle = c.fill(depthAlpha * 0.5);
            drawCrystalSnowflake(ctx, f.x, f.y, f.size, f.rotation, f.branches, f.branchDepth);
        } else {
            // Simple soft dot for small/far flakes
            ctx.globalAlpha = depthAlpha * 0.8;
            const r = f.size * f.depth;
            const grd = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r * 2.5);
            grd.addColorStop(0, c.fill(0.6));
            grd.addColorStop(0.5, c.fill(0.2));
            grd.addColorStop(1, c.fill(0));
            ctx.beginPath();
            ctx.arc(f.x, f.y, r * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(f.x, f.y, r * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = c.fill(0.9);
            ctx.fill();
        }
    }
    ctx.globalAlpha = 1;

    // ── 3. Sparkle glints ────────────────────────────────────
    for (const sp of sparkles) {
        sp.update();
        const a = sp.alpha;
        if (a <= 0.01) continue;

        const glintColor = `rgba(255,255,255,${a * 0.9})`;
        const glintColor2 = `rgba(180,210,240,${a * 0.6})`;

        ctx.save();
        ctx.translate(sp.x, sp.y);

        // 4-pointed star glint
        const s = sp.size * (0.6 + 0.4 * a);
        ctx.strokeStyle = glintColor;
        ctx.lineWidth = s * 0.3;
        ctx.lineCap = 'round';

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(0, -s * 2);
        ctx.lineTo(0, s * 2);
        ctx.stroke();

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(-s * 2, 0);
        ctx.lineTo(s * 2, 0);
        ctx.stroke();

        // Diagonal lines (thinner)
        ctx.lineWidth = s * 0.15;
        ctx.strokeStyle = glintColor2;
        ctx.beginPath();
        ctx.moveTo(-s, -s);
        ctx.lineTo(s, s);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(s, -s);
        ctx.lineTo(-s, s);
        ctx.stroke();

        // Bright center dot
        const cGrd = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 0.8);
        cGrd.addColorStop(0, `rgba(255,255,255,${a})`);
        cGrd.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = cGrd;
        ctx.fill();

        ctx.restore();
    }

    // ── 4. Shimmering frost line near bottom ─────────────────
    const frostY = H * 0.92;
    const frostGrd = ctx.createLinearGradient(0, frostY - 30, 0, frostY + 10);
    frostGrd.addColorStop(0, 'rgba(180,210,240,0)');
    frostGrd.addColorStop(0.5, `rgba(180,210,240,${0.04 + 0.02 * Math.sin(time * 0.02)})`);
    frostGrd.addColorStop(1, 'rgba(180,210,240,0)');
    ctx.fillStyle = frostGrd;
    ctx.fillRect(0, frostY - 30, W, 40);

    // Tiny shimmer dots along frost line
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    for (let i = 0; i < 30; i++) {
        const sx = (i / 30) * W + Math.sin(time * 0.015 + i * 2.1) * 8;
        const sy = frostY + Math.sin(time * 0.02 + i * 1.7) * 3;
        const sr = 0.5 + 0.5 * Math.sin(time * 0.04 + i * 3.3);
        ctx.globalAlpha = 0.15 + 0.25 * Math.sin(time * 0.03 + i * 4.2);
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.globalAlpha = 1;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DARK MODE — Particle Morphing Mesh
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MORPH_COUNT = 200;
const AMBIENT_COUNT = 120;
const CONNECT_DIST = 110;
const CONNECT_DIST_AMBIENT = 140;
const MORPH_DURATION = 380;
const HOLD_DURATION = 220;
const ROTATION_SPEED = 0.0018;
const PARALLAX_STRENGTH = 25;

const DARK_PALETTE = {
    particle: (a) => `rgba(0,210,255,${a})`,
    particleAlt: (a) => `rgba(160,80,255,${a})`,
    particleAccent: (a) => `rgba(0,255,180,${a})`,
    line: (a) => `rgba(0,190,240,${a})`,
    lineAlt: (a) => `rgba(130,60,255,${a})`,
    glow: (a) => `rgba(0,200,255,${a})`,
    glowAlt: (a) => `rgba(140,50,255,${a})`,
    grid: 'rgba(0,180,230,0.02)',
    ambient: (a) => `rgba(0,200,240,${a})`,
    ambientAlt: (a) => `rgba(120,60,255,${a})`,
    ambientAccent: (a) => `rgba(0,255,160,${a})`,
    ambientLine: (a) => `rgba(0,180,220,${a})`,
    orb: ['rgba(0,210,255,0.07)', 'rgba(140,40,255,0.055)', 'rgba(0,255,180,0.04)', 'rgba(80,0,200,0.04)'],
};

// ─── Shape generators ─────────────────────────────────────────────
function makeTorus(count) {
    const pts = [];
    const R = 0.7, r = 0.28;
    for (let i = 0; i < count; i++) {
        const u = (i / count) * Math.PI * 2;
        const v = rand(0, Math.PI * 2);
        pts.push({
            x: (R + r * Math.cos(v)) * Math.cos(u),
            y: (R + r * Math.cos(v)) * Math.sin(u),
            z: r * Math.sin(v),
        });
    }
    return pts;
}

function makeHelix(count) {
    const pts = [];
    const turns = 3.5;
    const r = 0.45;
    for (let i = 0; i < count; i++) {
        const t = (i / count) * turns * Math.PI * 2;
        const strand = i % 2 === 0 ? 1 : -1;
        pts.push({
            x: r * Math.cos(t) * strand,
            y: (i / count - 0.5) * 2.0,
            z: r * Math.sin(t) * strand,
        });
    }
    return pts;
}

function makeSphere(count) {
    const pts = [];
    for (let i = 0; i < count; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        pts.push({
            x: 0.75 * Math.sin(phi) * Math.cos(theta),
            y: 0.75 * Math.sin(phi) * Math.sin(theta),
            z: 0.75 * Math.cos(phi),
        });
    }
    return pts;
}

function makeWaveGrid(count) {
    const pts = [];
    const side = Math.ceil(Math.sqrt(count));
    for (let i = 0; i < count; i++) {
        const col = i % side;
        const row = Math.floor(i / side);
        const x = (col / side - 0.5) * 2.0;
        const y2 = (row / side - 0.5) * 2.0;
        const z = Math.sin(col * 0.7) * Math.cos(row * 0.7) * 0.35;
        pts.push({ x, y: y2, z });
    }
    return pts;
}

const SHAPES = [makeTorus, makeHelix, makeSphere, makeWaveGrid];

class AmbientParticle {
    constructor(w, h) {
        this.w = w; this.h = h;
        this.x = rand(0, w);
        this.y = rand(0, h);
        this.r = rand(1.0, 3.0);
        this.vx = rand(-0.15, 0.15);
        this.vy = rand(-0.12, 0.12);
        this.wanderAngle = rand(0, Math.PI * 2);
        this.wanderSpeed = rand(0.003, 0.01);
        this.opacity = rand(0.15, 0.55);
        this.phase = rand(0, Math.PI * 2);
        this.colorType = Math.random() < 0.15 ? 'accent' : Math.random() < 0.35 ? 'alt' : 'main';
        this.glowR = this.r * rand(4, 7);
    }
    update() {
        this.wanderAngle += this.wanderSpeed;
        this.phase += 0.02;
        this.vx += Math.cos(this.wanderAngle) * 0.003;
        this.vy += Math.sin(this.wanderAngle) * 0.003;
        this.vx *= 0.992; this.vy *= 0.992;
        this.x += this.vx; this.y += this.vy;
        if (this.x < -10) this.x = this.w + 10;
        if (this.x > this.w + 10) this.x = -10;
        if (this.y < -10) this.y = this.h + 10;
        if (this.y > this.h + 10) this.y = -10;
    }
}

class FloatingOrb {
    constructor(w, h, idx) {
        this.idx = idx;
        this.x = rand(w * 0.05, w * 0.95);
        this.y = rand(h * 0.05, h * 0.95);
        this.r = rand(w * 0.14, w * 0.32);
        this.vx = rand(-0.12, 0.12);
        this.vy = rand(-0.08, 0.08);
        this.phase = rand(0, Math.PI * 2);
        this.w = w; this.h = h;
    }
    update() {
        this.phase += 0.006;
        this.x += this.vx + Math.sin(this.phase) * 0.12;
        this.y += this.vy + Math.cos(this.phase * 0.7) * 0.08;
        if (this.x < -this.r) this.x = this.w + this.r;
        if (this.x > this.w + this.r) this.x = -this.r;
        if (this.y < -this.r) this.y = this.h + this.r;
        if (this.y > this.h + this.r) this.y = -this.r;
    }
}

function drawDarkMode(ctx, W, H, state, mouse) {
    const P = DARK_PALETTE;
    const s = state;

    // Mouse parallax
    let px = 0, py = 0;
    if (mouse.x !== null) {
        px = (mouse.x / W - 0.5) * PARALLAX_STRENGTH;
        py = (mouse.y / H - 0.5) * PARALLAX_STRENGTH;
    }

    // 1. Floating orbs
    ctx.save();
    ctx.filter = 'blur(70px)';
    for (const orb of s.orbs) {
        orb.update();
        const pulse = 0.8 + 0.2 * Math.sin(orb.phase);
        const ox = orb.x + px * 0.2;
        const oy = orb.y + py * 0.2;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r * pulse);
        grad.addColorStop(0, P.orb[orb.idx % P.orb.length]);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
    }
    ctx.filter = 'none';
    ctx.restore();

    // 2. Radial grid
    const cxGrid = W / 2 + px * 0.4;
    const cyGrid = H / 2 + py * 0.4;
    const gridPulse = 0.75 + 0.25 * Math.sin(s.time * 0.012);
    const maxGridR = Math.max(W, H) * 0.7;

    ctx.strokeStyle = P.grid;
    ctx.lineWidth = 0.5;
    for (let i = 1; i <= 12; i++) {
        const r = i * maxGridR / 12 * gridPulse;
        ctx.beginPath();
        ctx.arc(cxGrid, cyGrid, r, 0, Math.PI * 2);
        ctx.globalAlpha = 0.3 + 0.7 * (1 - i / 12);
        ctx.stroke();
    }
    ctx.globalAlpha = 1;

    ctx.strokeStyle = P.grid;
    ctx.lineWidth = 0.3;
    for (let a = 0; a < 16; a++) {
        const ang = (a / 16) * Math.PI * 2 + s.time * 0.0008;
        ctx.beginPath();
        ctx.moveTo(cxGrid, cyGrid);
        ctx.lineTo(cxGrid + Math.cos(ang) * maxGridR, cyGrid + Math.sin(ang) * maxGridR);
        ctx.stroke();
    }

    // 3. Ambient particles
    for (const ap of s.ambient) ap.update();

    ctx.lineCap = 'round';
    for (let i = 0; i < s.ambient.length; i++) {
        const ai = s.ambient[i];
        for (let j = i + 1; j < s.ambient.length; j++) {
            const aj = s.ambient[j];
            const dx = ai.x - aj.x;
            const dy = ai.y - aj.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > CONNECT_DIST_AMBIENT) continue;
            const proximity = 1 - dist / CONNECT_DIST_AMBIENT;
            const alpha = proximity * 0.1;
            ctx.beginPath();
            ctx.moveTo(ai.x + px * 0.15, ai.y + py * 0.15);
            ctx.lineTo(aj.x + px * 0.15, aj.y + py * 0.15);
            ctx.strokeStyle = P.ambientLine(alpha);
            ctx.lineWidth = proximity * 0.8;
            ctx.stroke();
        }
    }

    for (const ap of s.ambient) {
        const breathe = 0.8 + 0.2 * Math.sin(ap.phase);
        const r = ap.r * breathe;
        const drawX = ap.x + px * 0.15;
        const drawY = ap.y + py * 0.15;
        const colorFn = ap.colorType === 'accent' ? P.ambientAccent
            : ap.colorType === 'alt' ? P.ambientAlt : P.ambient;

        const glowGrd = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, ap.glowR);
        glowGrd.addColorStop(0, colorFn(ap.opacity * 0.12));
        glowGrd.addColorStop(1, colorFn(0));
        ctx.beginPath();
        ctx.arc(drawX, drawY, ap.glowR, 0, Math.PI * 2);
        ctx.fillStyle = glowGrd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(drawX, drawY, r, 0, Math.PI * 2);
        ctx.fillStyle = colorFn(ap.opacity);
        ctx.fill();
    }

    // 4. Morph state machine
    if (s.phase === 'morph') {
        s.morphFrame++;
        if (s.morphFrame >= MORPH_DURATION) {
            s.morphFrame = MORPH_DURATION;
            s.phase = 'hold';
            s.holdFrame = 0;
        }
    } else {
        s.holdFrame++;
        if (s.holdFrame >= HOLD_DURATION) {
            const nextIdx = (s.shapeIndex + 1) % SHAPES.length;
            s.from = s.to.map(p => ({ ...p }));
            s.to = SHAPES[nextIdx](MORPH_COUNT);
            s.shapeIndex = nextIdx;
            s.morphFrame = 0;
            s.phase = 'morph';
        }
    }

    // 5. Rotation
    s.rotY += ROTATION_SPEED;
    s.rotX = Math.sin(s.time * 0.004) * 0.25;
    const cosY = Math.cos(s.rotY);
    const sinY = Math.sin(s.rotY);
    const cosX = Math.cos(s.rotX);
    const sinX = Math.sin(s.rotX);

    // 6. Project morph particles
    const t = easeInOut(Math.min(s.morphFrame / MORPH_DURATION, 1));
    const scale = Math.min(W, H) * 0.48;
    const cx = W / 2 + px;
    const cy = H / 2 + py;
    const projected = [];

    for (let i = 0; i < MORPH_COUNT; i++) {
        const fx = lerp(s.from[i].x, s.to[i].x, t);
        const fy = lerp(s.from[i].y, s.to[i].y, t);
        const fz = lerp(s.from[i].z, s.to[i].z, t);
        let rx = fx * cosY - fz * sinY;
        let rz = fx * sinY + fz * cosY;
        let ry = fy * cosX - rz * sinX;
        rz = fy * sinX + rz * cosX;
        const perspective = 2.2;
        const pScale = perspective / (perspective + rz);
        const sx = cx + rx * scale * pScale;
        const sy = cy + ry * scale * pScale;
        const depth = (rz + 1) / 2;
        projected.push({ x: sx, y: sy, depth, pScale, idx: i });
    }
    projected.sort((a, b) => a.depth - b.depth);

    // 7. Morph connections
    for (let i = 0; i < projected.length; i++) {
        const pi = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
            const pj = projected[j];
            const dx = pi.x - pj.x;
            const dy = pi.y - pj.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > CONNECT_DIST) continue;
            const proximity = 1 - dist / CONNECT_DIST;
            const avgDepth = (pi.depth + pj.depth) / 2;
            const alpha = proximity * avgDepth * 0.2;
            const isAlt = (pi.idx + pj.idx) % 5 === 0;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = isAlt ? P.lineAlt(alpha) : P.line(alpha);
            ctx.lineWidth = proximity * avgDepth * 1.4;
            ctx.stroke();
        }
    }

    // 8. Morph particles
    for (const p of projected) {
        const baseR = lerp(1.2, 4.0, p.depth) * p.pScale;
        const breathe = 0.85 + 0.15 * Math.sin(s.time * 0.035 + p.idx * 0.4);
        const r = baseR * breathe;
        const alpha = lerp(0.2, 0.95, p.depth);
        const colorType = p.idx % 7 === 0 ? 'accent' : p.idx % 3 === 0 ? 'alt' : 'main';
        const colorFn = colorType === 'accent' ? P.particleAccent
            : colorType === 'alt' ? P.particleAlt : P.particle;
        const glowFn = colorType === 'alt' ? P.glowAlt : P.glow;

        if (p.depth > 0.25) {
            const glowR = r * 5.5;
            const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
            grd.addColorStop(0, glowFn(alpha * 0.18));
            grd.addColorStop(1, glowFn(0));
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
        }

        const coreGrd = ctx.createRadialGradient(p.x - r * 0.3, p.y - r * 0.3, 0, p.x, p.y, r);
        coreGrd.addColorStop(0, colorFn(Math.min(1, alpha + 0.25)));
        coreGrd.addColorStop(0.65, colorFn(alpha * 0.85));
        coreGrd.addColorStop(1, colorFn(alpha * 0.3));
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = coreGrd;
        ctx.fill();
    }

    // 9. Cross-layer connections
    for (const ap of s.ambient) {
        const apx = ap.x + px * 0.15;
        const apy = ap.y + py * 0.15;
        for (const mp of projected) {
            const dx = apx - mp.x;
            const dy = apy - mp.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > CONNECT_DIST_AMBIENT * 0.8) continue;
            const proximity = 1 - dist / (CONNECT_DIST_AMBIENT * 0.8);
            const alpha = proximity * mp.depth * 0.06;
            ctx.beginPath();
            ctx.moveTo(apx, apy);
            ctx.lineTo(mp.x, mp.y);
            ctx.strokeStyle = P.line(alpha);
            ctx.lineWidth = proximity * 0.6;
            ctx.stroke();
        }
    }

    // 10. Scanning rings
    const ringMax = Math.max(W, H) * 0.65;
    for (let ri = 0; ri < 3; ri++) {
        const ringPhase = ((s.time + ri * 133) % 500) / 500;
        const ringR = ringPhase * ringMax;
        const ringAlpha = (1 - ringPhase) * 0.08;
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = ri % 2 === 0 ? P.glow(ringAlpha) : P.glowAlt(ringAlpha);
        ctx.lineWidth = 1.2;
        ctx.stroke();
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const NeuralCanvas = () => {
    const canvasRef = useRef(null);
    const frameRef = useRef(null);
    const mouse = useRef({ x: null, y: null });
    const stateRef = useRef({
        // Dark mode state
        from: [], to: [],
        shapeIndex: 0, morphFrame: 0,
        phase: 'morph', holdFrame: 0,
        rotY: 0, rotX: 0,
        orbs: [], ambient: [],
        // Light mode state
        lightState: { snow: [], bokeh: [], sparkles: [] },
        // Shared
        time: 0,
    });

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const W = canvas.width;
        const H = canvas.height;

        const isDark = !document.documentElement.classList.contains('light');
        const s = stateRef.current;
        s.time++;

        ctx.clearRect(0, 0, W, H);

        if (isDark) {
            drawDarkMode(ctx, W, H, s, mouse.current);
        } else {
            drawSnowMode(ctx, W, H, s.lightState, s.time);
        }

        frameRef.current = requestAnimationFrame(draw);
    }, []);

    // ── Mount ──────────────────────────────────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };
        resize();
        window.addEventListener('resize', resize);

        const W = canvas.width;
        const H = canvas.height;
        const s = stateRef.current;

        // Dark mode init
        s.shapeIndex = 0;
        s.from = makeSphere(MORPH_COUNT);
        s.to = SHAPES[0](MORPH_COUNT);
        s.morphFrame = 0;
        s.phase = 'morph';
        s.holdFrame = 0;
        s.rotY = 0;
        s.rotX = 0;
        s.time = 0;
        s.ambient = Array.from({ length: AMBIENT_COUNT }, () => new AmbientParticle(W, H));
        s.orbs = Array.from({ length: 5 }, (_, i) => new FloatingOrb(W, H, i));

        // Light mode init
        s.lightState = {
            snow: Array.from({ length: SNOW_COUNT }, () => new CrystalFlake(W, H, true)),
            bokeh: Array.from({ length: BOKEH_COUNT }, () => new BokehOrb(W, H)),
            sparkles: Array.from({ length: SPARKLE_COUNT }, () => new Sparkle(W, H)),
        };

        frameRef.current = requestAnimationFrame(draw);

        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };
        const onLeave = () => {
            mouse.current.x = null;
            mouse.current.y = null;
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);

        return () => {
            cancelAnimationFrame(frameRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default NeuralCanvas;
