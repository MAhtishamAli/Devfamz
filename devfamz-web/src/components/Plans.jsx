import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const plansData = [
    {
        name: "Startup",
        price: { monthly: "$2,999", yearly: "$29,990" },
        desc: "Perfect for MVPs & small business AI integration.",
        features: ["Custom Design System", "React & Tailwind Codebase", "Basic AI Chatbot Integration", "SEO & Performance Audit", "1 Month Support"],
        highlight: false
    },
    {
        name: "Business",
        price: { monthly: "$5,999", yearly: "$59,990" },
        desc: "Scalable solutions for growing tech companies.",
        features: ["Everything in Startup", "Advanced CMS (Sanity/Strapi)", "User Auth & Database", "Google Analytics & PostHog", "3 Months Priority Support"],
        highlight: true
    },
    {
        name: "Enterprise",
        price: { monthly: "Custom", yearly: "Custom" },
        desc: "Full-scale digital transformation & AI R&D.",
        features: ["Microservices Architecture", "Custom LLM Model Training", "Cloud Infrastructure (AWS/GCP)", "Security Audit & Compliance", "24/7 Dedicated Team"],
        highlight: false
    }
];

const Plans = () => {
    const [billing, setBilling] = useState('monthly');

    return (
        <section id="plans" className="py-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm">Flexible Pricing</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Choose Your Growth Path</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">Transparent pricing for every stage of your journey. No hidden fees, just results.</p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
                        <button
                            onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
                            className="w-14 h-7 bg-white/10 rounded-full p-1 relative transition-colors hover:bg-white/20"
                        >
                            <motion.div
                                layout
                                className="w-5 h-5 bg-primary rounded-full shadow-lg"
                                animate={{ x: billing === 'yearly' ? 28 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-medium ${billing === 'yearly' ? 'text-white' : 'text-slate-500'}`}>
                            Yearly <span className="text-xs text-emerald-400 font-bold ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plansData.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-3xl flex flex-col transition-all duration-300 cyber-card ${plan.highlight ? 'border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10 from-white/15 to-white/5' : 'hover:scale-[1.02]'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-slate-300 mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-white mb-2">
                                    {plan.price[billing]}
                                    {plan.price.monthly !== "Custom" && <span className="text-sm font-normal text-slate-500">/{billing === 'monthly' ? 'mo' : 'yr'}</span>}
                                </div>
                                <p className="text-sm text-slate-400">{plan.desc}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-semibold transition-all shadow-lg ${plan.highlight ? 'bg-primary hover:bg-indigo-600 text-white shadow-primary/25' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
