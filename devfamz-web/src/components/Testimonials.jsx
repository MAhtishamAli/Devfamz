import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Jensen",
        role: "CTO, FinBlock",
        quote: "DevFamz re-architected our entire blockchain infrastructure. Their attention to security protocols is unmatched.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sarah Connors",
        role: "Director of Product, CyberSafe",
        quote: "We needed an enterprise-grade dashboard with real-time AI analytics. They delivered ahead of schedule.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Chen",
        role: "Founder, Nexus AI",
        quote: "A true partner. Not just a dev shop. They helped us define our technical roadmap for the next 5 years.",
        image: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
        name: "Elena Vostrov",
        role: "CEO, QuantAlgorithms",
        quote: "Their neural network optimization reduced our model inference costs by 40%. Absolute engineering wizardry.",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        name: "David Okonjo",
        role: "CTO, SecureHealth",
        quote: "HIPAA compliance was baked in from line one. Seamless integration with our legacy hospital systems.",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Marcus Thorne",
        role: "Lead Architect, def_sys",
        quote: "Finally, a development team that understands Zero-Trust Architecture implicitly. No hand-holding required.",
        image: "https://randomuser.me/api/portraits/men/54.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-sans">
                        Trusted by Visionaries
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        We don't just build software; we build long-term technical partnerships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="cyber-card p-8 rounded-2xl relative group transition-all"
                        >
                            <Quote size={40} className="text-primary/20 absolute top-6 right-6" />

                            <p className="text-foreground/80 mb-8 leading-relaxed relative z-10">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-border/10 grayscale group-hover:grayscale-0 transition-all" />
                                <div>
                                    <h4 className="text-foreground font-bold font-sans">{t.name}</h4>
                                    <p className="text-xs text-primary font-mono">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
