import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Do you sign NDAs before initial consultations?",
        answer: "Yes. We take intellectual property security extremely seriously. We are happy to sign an NDA before our first call."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary based on complexity. A standard MVP typically takes 4-8 weeks, while full enterprise transformations can take 3-6 months. We work in 2-week agile sprints."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely. We offer tailored maintenance packages including 24/7 uptime monitoring, security patching, and iterative feature updates."
    },
    {
        question: "Can you take over an existing codebase?",
        answer: "Yes. Our 'System Audit' service is designed exactly for this. We analyze your current architecture, document it, and propose a refactoring or takeover plan."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="cyber-card rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-slate-200">{faq.question}</span>
                                <span className="text-primary">
                                    {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
