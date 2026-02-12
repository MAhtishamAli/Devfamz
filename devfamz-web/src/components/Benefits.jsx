import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Users, ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';

const benefits = [
    {
        icon: (props) => <ShieldCheck {...props} />,
        colorClass: "text-emerald-600 dark:text-emerald-400", // Emerald
        lightStyle: "bg-emerald-50/80 border-emerald-200 shadow-emerald-100",
        title: "Enterprise Grade Security",
        desc: "We implement banking-level encryption and security best practices by default."
    },
    {
        icon: (props) => <Zap {...props} />,
        colorClass: "text-amber-600 dark:text-amber-400", // Amber
        lightStyle: "bg-amber-50/80 border-amber-200 shadow-amber-100",
        title: "Blazing Fast Performance",
        desc: "Optimized for core web vitals. We target sub-500ms load times."
    },
    {
        icon: (props) => <Clock {...props} />,
        colorClass: "text-blue-600 dark:text-blue-400", // Blue
        lightStyle: "bg-blue-50/80 border-blue-200 shadow-blue-100",
        title: "On-Time Delivery",
        desc: "Our project managers ensure we hit every milestone. No excuses."
    },
    {
        icon: (props) => <Users {...props} />,
        colorClass: "text-purple-600 dark:text-purple-400", // Purple
        lightStyle: "bg-purple-50/80 border-purple-200 shadow-purple-100",
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

                    <Link to="/blog" className="text-primary font-semibold hover:text-foreground transition-colors flex items-center gap-2 group font-mono text-sm tracking-wide">
                        View our culture manifesto <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Right Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -8, 0], // Subtle Floating
                                borderColor: ["rgba(var(--border) / 0.1)", "rgba(var(--border) / 0.3)", "rgba(var(--border) / 0.1)"]
                            }}
                            viewport={{ once: true }}
                            transition={{
                                opacity: { duration: 0.5, delay: idx * 0.1 },
                                scale: { duration: 0.5, delay: idx * 0.1 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 },
                                borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -12,
                                // Color handled by class
                            }}
                            // Replaced bg-slate-800 with cyber-card equivalent but explicitly handled for theme
                            className={`
                                p-6 rounded-2xl group cursor-default relative overflow-hidden backdrop-blur-md transition-all duration-300
                                border ${item.lightStyle} dark:bg-surface/20 dark:border-white/10
                                hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
                            `}
                        >
                            {/* Icon Container with Fast Buffer (Ripple) Animation */}
                            <motion.div
                                className={`mb-4 relative inline-block ${item.colorClass}`}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Ripple Layers */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-current opacity-50"
                                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                                />
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-current opacity-30"
                                    animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                                    transition={{ duration: 1, delay: 0.2, repeat: Infinity, ease: "easeOut" }}
                                />

                                {/* Glowing Blur Backdrop (Adjusted for Light Mode) */}
                                <div className="absolute inset-0 bg-current blur-2xl opacity-20 rounded-full" />

                                <item.icon size={32} className="relative z-10 drop-shadow-sm" />
                            </motion.div>

                            <h3 className="text-lg font-extrabold mb-2 font-sans group-hover:text-primary transition-colors text-slate-900 dark:text-foreground">{item.title}</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed font-mono font-semibold">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default Benefits;
