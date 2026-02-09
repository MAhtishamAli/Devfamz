import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Users, ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';

const benefits = [
    {
        icon: (props) => <ShieldCheck {...props} />,
        color: "text-emerald-400",
        title: "Enterprise Grade Security",
        desc: "We implement banking-level encryption and security best practices by default."
    },
    {
        icon: (props) => <Zap {...props} />,
        color: "text-yellow-400",
        title: "Blazing Fast Performance",
        desc: "Optimized for core web vitals. We target sub-500ms load times."
    },
    {
        icon: (props) => <Clock {...props} />,
        color: "text-blue-400",
        title: "On-Time Delivery",
        desc: "Our project managers ensure we hit every milestone. No excuses."
    },
    {
        icon: (props) => <Users {...props} />,
        color: "text-purple-400",
        title: "Top 1% Talent",
        desc: "Work directly with senior engineers. No junior trainees."
    }
];

const Benefits = () => {
    return (
        <Section id="benefits">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                    <SectionHeader
                        kicker="Why Choose Us"
                        title={<>We Deliver Results, <br /> Not Just Promises.</>}
                        subtitle="Partnering with DevFamz means gaining a technical advantage. We treat your project as our own."
                        align="left"
                        className="mb-10"
                    />

                    <button className="text-primary font-semibold hover:text-white transition-colors flex items-center gap-2 group font-mono text-sm tracking-wide">
                        View our culture manifesto <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Right Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                borderColor: ["rgba(255,255,255,0.1)", "rgba(0,232,255,0.6)", "rgba(255,255,255,0.1)"],
                                boxShadow: ["0 0 0px rgba(0,232,255,0)", "0 0 20px rgba(0,232,255,0.2)", "0 0 0px rgba(0,232,255,0)"]
                            }}
                            viewport={{ once: true }}
                            transition={{
                                opacity: { duration: 0.4, delay: idx * 0.1 },
                                scale: { duration: 0.4, delay: idx * 0.1 },
                                borderColor: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: idx * 0.2 },
                                boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: idx * 0.2 }
                            }}
                            className="cyber-card p-6 rounded-2xl group cursor-default relative overflow-hidden border border-white/10"
                        >
                            {/* Icon Container with Flash Animation */}
                            <motion.div
                                className={`mb-4 relative inline-block ${item.color}`}
                                animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [1, 1.2, 1],
                                    filter: ["brightness(1)", "brightness(2)", "brightness(1)"]
                                }}
                                transition={{
                                    duration: 1.5,
                                    times: [0, 0.2, 1], // Sharp attack
                                    delay: 0.5 + (idx * 0.1), // Flash shortly after appearing
                                    ease: "easeOut"
                                }}
                            >
                                {/* Glowing Blur Backdrop */}
                                <div className="absolute inset-0 bg-current blur-2xl opacity-40 rounded-full" />

                                {/* The Icon */}
                                <item.icon size={32} className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                            </motion.div>

                            <h3 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-mono">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default Benefits;
