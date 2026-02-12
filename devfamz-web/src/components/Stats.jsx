import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 35, label: "Happy Customers", suffix: "+" },
    { value: 15, label: "Team Members", suffix: "+" },
    { value: 12, label: "Years Experience", suffix: "+" },
];

function Counter({ from, to, suffix, duration = 2 }) {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true, margin: "-20px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        const controls = animate(from, to, {
            duration: duration,
            ease: "easeOut",
            onUpdate(value) {
                node.textContent = Math.round(value) + suffix;
            }
        });

        return () => controls.stop();
    }, [from, to, suffix, inView, duration]);

    return (
        <span ref={nodeRef} className="tabular-nums flex items-baseline">
            {from}{suffix}
        </span>
    );
}

const Stats = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="section-divider absolute top-0 left-0" />
            <div className="section-divider absolute bottom-0 left-0" />
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-6 cyber-card backdrop-blur-sm rounded-2xl group hover:border-primary/50 transition-colors"
                        >
                            <span className="text-4xl md:text-5xl font-mono font-black text-foreground mb-2 group-hover:text-primary transition-colors flex items-center justify-center">
                                <Counter from={0} to={stat.value} suffix={stat.suffix} />
                            </span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                                className="text-xs md:text-sm text-muted uppercase tracking-widest text-center font-bold"
                            >
                                {stat.label}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
