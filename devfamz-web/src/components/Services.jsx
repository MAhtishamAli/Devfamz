import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Code, Database, Server } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-20 relative">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
                        Our Capabilities_
                    </h2>
                    <div className="h-1 w-20 bg-primary"></div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

                    {/* 1. Machine Learning (Large Square) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 md:col-span-1 md:row-span-2 cyber-card p-8 rounded-2xl relative overflow-hidden group transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Brain size={48} className="text-secondary mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Machine Learning Intelligence</h3>
                        <p className="text-slate-400 leading-relaxed text-sm mb-6">
                            Custom LLM training, predictive analytics, and automated decision-making engines. We build brains for your business.
                        </p>
                        <div className="absolute bottom-8 right-8 text-primary/20 group-hover:text-primary transition-colors font-mono text-xs">
                    // AI_CORE_ACTIVE
                        </div>
                    </motion.div>

                    {/* 2. Cyber Defense (Wide) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 md:col-span-2 md:row-span-1 cyber-card p-8 rounded-2xl relative overflow-hidden group transition-colors flex flex-col justify-center"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-50 transition-opacity">
                            <Shield size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <Shield size={32} className="text-primary" />
                                <h3 className="text-xl font-bold text-white">Cyber-Defense Matrix</h3>
                            </div>
                            <p className="text-slate-400 text-sm max-w-lg">
                                Zero-trust architecture, penetration testing, and real-time threat detection protocols securely guarding your digital assets.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. Cloud (Standard) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 md:col-span-1 md:row-span-1 cyber-card p-8 rounded-2xl relative overflow-hidden group transition-colors"
                    >
                        <Cloud size={32} className="text-secondary mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Cloud Infrastructure</h3>
                        <p className="text-slate-400 text-xs">
                            Scalable AWS/Azure architectures with Kubernetes orchestration and serverless edge computing.
                        </p>
                    </motion.div>

                    {/* 4. Full Stack (Standard) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 md:col-span-1 md:row-span-1 cyber-card p-8 rounded-2xl relative overflow-hidden group transition-colors"
                    >
                        <Code size={32} className="text-primary mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Full-Stack Dev</h3>
                        <p className="text-slate-400 text-xs">
                            Next.js, React, Node.js. High-performance web applications built for speed and SEO.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Services;
