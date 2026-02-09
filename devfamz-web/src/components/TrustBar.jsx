import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Brain, Globe, Lock } from 'lucide-react';

const items = [
    { icon: <ShieldCheck size={16} />, text: "ISO 27001 CERTIFIED" },
    { icon: <Lock size={16} />, text: "GDPR COMPLIANT" },
    { icon: <Activity size={16} />, text: "UPTIME 99.99%" },
    { icon: <Brain size={16} />, text: "AI-DRIVEN SECURITY" },
    { icon: <Globe size={16} />, text: "24/7 GLOBAL MONITORING" },
    { icon: <ShieldCheck size={16} />, text: "SOC2 TYPE II READY" },
];

const TrustBar = () => {
    return (
        <div className="w-full bg-gradient-to-r from-background via-white/5 to-background relative backdrop-blur-md overflow-hidden py-4 border-y border-white/5">
            <div className="section-divider absolute top-0 left-0" />
            <div className="section-divider absolute bottom-0 left-0" />

            <div className="flex relative w-full overflow-hidden mask-gradient-x">
                {/* Mask for fading edges if desired, but let's stick to simple first */}
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...items, ...items, ...items, ...items].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-slate-400 font-mono text-sm tracking-widest uppercase">
                            <span className="text-secondary">{item.icon}</span>
                            <span className="hover:text-primary transition-colors cursor-default">{item.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TrustBar;
