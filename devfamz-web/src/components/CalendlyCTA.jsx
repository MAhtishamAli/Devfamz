import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare, Briefcase, Clock, Calendar } from 'lucide-react';

const CalendlyCTA = () => {
    return (
        <section id="schedule-call" className="py-24 bg-background relative overflow-hidden">
            {/* Elegant Background Orchestration */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-3xl overflow-hidden glass-card border border-border/10 shadow-2xl bg-surface/40 backdrop-blur-xl">

                        {/* Shimmer Effect */}
                        <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="absolute bottom-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

                            {/* Left Side: Editorial Content */}
                            <div className="lg:col-span-3 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-border/10 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary self-start mb-6">
                                    <Sparkles size={14} className="animate-pulse" />
                                    <span className="text-xs font-mono font-bold tracking-wide uppercase">Priority Access</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
                                    Accelerate your <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary">product scale.</span>
                                </h2>

                                <p className="text-muted text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                                    Stop dealing with technical debt and unreliable delivery. Book a high-level technical strategy session with our lead architects to outline your next enterprise move.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 text-primary">
                                            <Briefcase size={16} />
                                        </div>
                                        <div className="text-sm font-medium text-foreground">Technical Strategy</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 text-primary">
                                            <Clock size={16} />
                                        </div>
                                        <div className="text-sm font-medium text-foreground">30-Minute Deep Dive</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: The Action Panel */}
                            <div className="lg:col-span-2 bg-black/20 p-10 md:p-14 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-cyan-400 p-[1px] mb-8 shadow-xl shadow-primary/20 transform -rotate-6 group-hover:rotate-0 transition-transform">
                                    <div className="w-full h-full bg-surface rounded-2xl flex items-center justify-center">
                                        <Calendar size={28} className="text-primary" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3">Schedule a Vision Call</h3>
                                <p className="text-sm text-muted mb-8 max-w-[250px]">
                                    Find a time directly on our calendar. No back and forth required.
                                </p>

                                <a
                                    href="https://calendly.com/arslanrashee1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full inline-flex justify-center items-center gap-3 px-8 py-4 bg-foreground text-background font-bold text-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,232,255,0.2)]"
                                >
                                    {/* Hover shine effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                                    <span className="relative flex items-center gap-2">
                                        Find a Time
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>

                                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted/70 font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    Accepting new clients for Q3
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
};

export default CalendlyCTA;
