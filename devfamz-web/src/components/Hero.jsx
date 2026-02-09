import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 md:pt-20">
            {/* Background Video: Circuit Board via Mixkit */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" /> {/* Dark tint for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-running-fast-4430-large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >


                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white font-sans">
                        Architecting the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-text-shimmer">Intelligence Layer.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl font-mono leading-relaxed">
                        Devfamz: Enterprise-grade Cloud, AI, and Cybersecurity Solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-8 py-4 bg-primary/10 border border-primary/50 text-primary hover:bg-primary/20 rounded-none font-mono font-bold transition-all shadow-[0_0_20px_rgba(0,232,255,0.2)] hover:shadow-[0_0_30px_rgba(0,232,255,0.4)] flex items-center gap-3">
                            <Terminal size={18} /> INITIATE_PROJECT
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/10 text-white hover:bg-white/5 rounded-none font-mono font-bold transition-all flex items-center gap-3">
                            <ShieldCheck size={18} /> SYSTEM_AUDIT
                        </button>
                    </div>
                </motion.div>

                {/* Right Content: Glassmorphism Scan Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex-1 w-full max-w-md"
                >
                    <div className="relative p-1 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-2xl backdrop-blur-3xl">
                        <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 animate-pulse-slow"></div>

                        <div className="bg-surface/90 rounded-xl p-8 border border-white/10 relative overflow-hidden h-96 flex flex-col justify-between">

                            {/* Scanning Animation Line */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1 bg-primary/80 shadow-[0_0_20px_#00E8FF] z-10"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            {/* "Code" / Data content */}
                            <div className="space-y-4 font-mono text-xs text-primary/80">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>STATUS</span>
                                    <span className="text-emerald-400">SECURE</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>ENCRYPTION</span>
                                    <span>AES-256-GCM</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>AI MODULES</span>
                                    <span className="animate-pulse">ACTIVE</span>
                                </div>
                                <div className="h-32 bg-background/50 rounded p-4 font-mono text-[10px] text-slate-500 overflow-hidden relative">
                                    <p className="typing-effect">
                                        {`> Establishing secure connection...`} <br />
                                        {`> Handshake verified.`} <br />
                                        {`> Loading neural weights [99%]...`} <br />
                                        {`> Deploying smart contracts...`} <br />
                                        {`> System Ready.`}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <div className="text-white font-bold font-sans">DevFamz Core</div>
                                    <div className="text-xs text-slate-400 font-mono">v4.0.2 Stable</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
