import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Code, Zap, Shield, Clock } from 'lucide-react';
import { getProductData } from '../data/productDetails';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

const ProductPage = () => {
    const { id } = useParams();
    const product = getProductData(id);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Generate image using Unsplash
        const query = encodeURIComponent(product.imageKeyword || 'technology');
        setImageUrl(`https://source.unsplash.com/800x600/?${query}`);
        window.scrollTo(0, 0);
    }, [id, product.imageKeyword]);

    return (
        <main className="pt-24 min-h-screen bg-background">
            <SEO
                title={`${product.title} | DevFamz Products`}
                description={product.intro}
            />
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8">
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">{product.title}</h1>
                        <p className="text-2xl text-primary font-mono mb-6">{product.tagline}</p>
                        <p className="text-lg text-muted mb-8">{product.intro}</p>

                        <div className="flex items-center gap-8 mb-8">
                            <div className="flex items-center gap-2">
                                <Zap className="text-primary" size={24} />
                                <div>
                                    <div className="text-sm text-muted">Projects Delivered</div>
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

                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                        >
                            Get Started Now
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                        <img
                            src={imageUrl}
                            alt={product.title}
                            className="relative rounded-2xl shadow-2xl border border-border/10 w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                </motion.div>
            </section>

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

            {/* Pricing */}
            <section className="bg-surface/50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4 text-center text-foreground">Pricing Plans</h2>
                    <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. All plans include free updates and support.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {product.pricing?.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-8 rounded-2xl border ${idx === 1 ? 'bg-primary/5 border-primary shadow-xl scale-105' : 'bg-background border-border/10'}`}
                            >
                                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-6 text-primary">{plan.price}</div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-muted">
                                            <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className={`block w-full text-center py-3 rounded-lg font-bold transition-all ${idx === 1 ? 'bg-primary text-black hover:bg-primary/90' : 'bg-surface border border-border/10 text-foreground hover:border-primary/30'}`}
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 text-center border border-primary/20">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Transform Your Business?</h2>
                    <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                        Join {product.projectsShipped} successful projects. Let's build something amazing together.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                    >
                        <Clock size={20} />
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;
