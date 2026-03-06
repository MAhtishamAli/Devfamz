import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Code, Zap, Shield, Clock, ExternalLink, Quote, Calendar, Globe, Tag } from 'lucide-react';
import { getProductData } from '../data/productDetails';
import { useEffect } from 'react';
import SEO from '../components/SEO';

const ProductPage = () => {
    const { id } = useParams();
    const product = getProductData(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <main className="pt-24 min-h-screen bg-background">
            <SEO
                title={`${product.title} | DevFamz Products`}
                description={product.intro}
            />
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-12">
                <Link to="/products" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8">
                    <ArrowLeft size={18} />
                    Back to Products
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <div>
                        {/* Category & Year Badges */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {product.category && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold bg-primary/10 text-primary border border-primary/20 rounded-full">
                                    <Tag size={12} />
                                    {product.category}
                                </span>
                            )}
                            {product.year && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold bg-surface border border-border/20 text-muted rounded-full">
                                    <Calendar size={12} />
                                    {product.year}
                                </span>
                            )}
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">{product.title}</h1>
                        <p className="text-2xl text-primary font-mono mb-6">{product.tagline}</p>
                        <p className="text-lg text-muted mb-8">{product.intro}</p>

                        <div className="flex items-center gap-8 mb-8">
                            <div className="flex items-center gap-2">
                                <Zap className="text-primary" size={24} />
                                <div>
                                    <div className="text-sm text-muted">Projects Completed</div>
                                    <div className="text-2xl font-bold text-foreground">{product.projectsShipped}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="text-primary" size={24} />
                                <div>
                                    <div className="text-sm text-muted">Enterprise Ready</div>
                                    <div className="text-lg font-bold text-foreground">Secure</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                            >
                                Get Started Now
                            </Link>
                            {product.liveUrl && (
                                <a
                                    href={product.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary/30 text-primary font-bold rounded hover:bg-primary/10 transition-all"
                                >
                                    <Globe size={18} />
                                    Visit Live Site
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right Image - Showcase */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                        <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                            <img
                                src={product.screenshot}
                                alt={`${product.title} - Product Showcase`}
                                className="w-full h-auto rounded-2xl"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Testimonial */}
            {product.testimonial && (
                <section className="container mx-auto px-6 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
                    >
                        <Quote className="text-primary/30 mb-4" size={48} />
                        <p className="text-xl md:text-2xl text-foreground font-medium italic mb-6 leading-relaxed">
                            "{product.testimonial.quote}"
                        </p>
                        <p className="text-primary font-mono font-bold">— {product.testimonial.author}</p>
                    </motion.div>
                </section>
            )}

            {/* Detailed Description */}
            <section className="bg-surface/30 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
                    <p className="text-lg text-muted leading-relaxed max-w-4xl">
                        {product.detailedDescription}
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Key Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.features?.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-surface/50 rounded-xl border border-border/10 hover:border-primary/30 transition-all"
                        >
                            <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                            <p className="text-muted">{feature}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            {product.useCases && product.useCases.length > 0 && (
                <section className="bg-surface/30 py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-8 text-foreground">Use Cases</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {product.useCases.map((useCase, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-background rounded-xl border border-border/10"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        {useCase.title}
                                    </h3>
                                    <p className="text-muted">{useCase.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Tech Stack */}
            {product.techStack && product.techStack.length > 0 && (
                <section className="container mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
                        <Code className="text-primary" size={32} />
                        Technology Stack
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {product.techStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg font-mono text-primary font-bold"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 text-center border border-primary/20">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Transform Your Business?</h2>
                    <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                        Join {product.projectsShipped} successful projects. Let's build something amazing together.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                        >
                            <Clock size={20} />
                            Schedule a Consultation
                        </Link>
                        {product.liveUrl && (
                            <a
                                href={product.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-primary/30 text-primary font-bold rounded hover:bg-primary/10 transition-all"
                            >
                                <ExternalLink size={20} />
                                View Live Project
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;
