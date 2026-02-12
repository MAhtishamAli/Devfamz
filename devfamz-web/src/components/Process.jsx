import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Search size={24} />,
        title: "Discovery",
        desc: "We analyze your business goals and technical requirements to create a roadmap."
    },
    {
        icon: <PenTool size={24} />,
        title: "Design",
        desc: "Our UI/UX experts craft high-fidelity prototypes focused on user conversion."
    },
    {
        icon: <Code size={24} />,
        title: "Development",
        desc: "Agile sprints with bi-weekly updates. Clean, scalable, and tested code."
    },
    {
        icon: <CheckCircle size={24} />,
        title: "Testing",
        desc: "Rigorous QA automation to ensure 99.9% crash-free performance."
    },
    {
        icon: <Rocket size={24} />,
        title: "Launch",
        desc: "Seamless deployment with CI/CD pipelines and post-launch monitoring."
    },
];

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2500); // Cycle every 2.5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="process" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 border border-primary/30 rounded-full bg-primary/5 text-primary text-xs font-mono tracking-widest relative overflow-hidden"
                    >
                        <span className="relative z-10">SYSTEM_WORKFLOW</span>
                        <motion.div
                            className="absolute inset-0 bg-primary/10"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold font-sans text-foreground mb-6">
                        Execution Protocol
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto font-mono text-sm leading-relaxed">
                        Precision-engineered workflow designed for rapid deployment and maximum scalability.
                    </p>
                </div>

                <div className="relative mt-20">
                    {/* Background Line (Static) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border/10 z-0" />

                    {/* Progress Line (Dynamic) */}
                    <div className="hidden md:block absolute top-12 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent z-0 transition-all duration-1000 ease-linear"
                        style={{ width: `${((activeStep + 0.5) / steps.length) * 100}%`, maxWidth: '100%' }}
                    >
                        <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full blur-[2px] shadow-[0_0_10px_#00E8FF]"
                            layoutId="process-glow"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
                        {steps.map((step, idx) => {
                            const isActive = idx === activeStep;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (idx * 0.2), duration: 0.5 }}
                                    className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-700 ${isActive ? 'scale-105 opacity-100 blur-none' : 'opacity-40 blur-[1px] scale-95'}`}
                                    onClick={() => setActiveStep(idx)}
                                >
                                    {/* Icon Node */}
                                    <div className="relative mb-8">
                                        <div className={`w-24 h-24 rounded-full bg-background border flex items-center justify-center transition-all duration-500 relative z-10 cyber-card ${isActive ? 'border-primary text-primary bg-primary/10 shadow-[0_0_30px_rgba(0,232,255,0.2)]' : 'border-border/10 text-muted'}`}>
                                            {step.icon}
                                        </div>

                                        {/* Active Pulse Ring */}
                                        {isActive && (
                                            <>
                                                <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-20 duration-1000" />
                                                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                                            </>
                                        )}

                                        {/* Connector Dot for Mobile */}
                                        <div className="md:hidden absolute top-full left-1/2 w-0.5 h-12 bg-border/10 -translate-x-1/2" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <span className={`absolute -top-12 left-1/2 -translate-x-1/2 text-[100px] font-bold font-mono select-none pointer-events-none transition-colors duration-700 ${isActive ? 'text-primary/5' : 'text-foreground/5'}`}>
                                            0{idx + 1}
                                        </span>
                                        <h3 className={`text-lg font-bold mb-3 font-sans transition-colors duration-500 ${isActive ? 'text-foreground' : 'text-muted'}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-muted font-mono leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
