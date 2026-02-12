import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap, ArrowRight, ShieldCheck, Cpu, Code } from 'lucide-react';
import { getServiceData } from '../data/serviceDetails';
import Section from '../components/ui/Section';

import SEO from '../components/SEO';

const ServicePage = () => {
    const { id } = useParams();
    const data = getServiceData(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Use a tech-themed placeholder if no specific image provided
    const heroImage = `https://source.unsplash.com/1600x900/?${data.imageKeyword || 'technology,code'}`;

    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            <SEO
                title={`${data.title} Solutions | DevFamz`}
                description={data.intro}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 md:py-24">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm font-bold mb-6">
                            SERVICE: {data.title.toUpperCase()}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            {data.tagline}
                        </h1>
                        <p className="text-xl text-muted md:w-3/4 font-medium leading-relaxed">
                            {data.intro}
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border/40 shadow-sm backdrop-blur-sm">
                                <span className="text-2xl font-black text-primary">{data.projectsShipped || "50+"}</span>
                                <span className="text-sm font-medium text-muted leading-tight">
                                    Projects<br />Shipped
                                </span>
                            </div>
                            <div className="h-10 w-px bg-border/20"></div>
                            <div className="text-sm text-muted">
                                Trust the experts with<br />
                                <span className="text-foreground font-semibold">proven delivery.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
            </section>

            {/* Visuals Section */}
            <Section className="py-12">
                <div className="relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                    {/* Using a placeholder service since Unsplash source is unreliable, specific static images recommended later */}
                    <div className="w-full h-[400px] md:h-[500px] bg-surface/50 flex items-center justify-center relative overflow-hidden group">
                        {/* Placeholder Abstract Tech Art */}
                        <div className="absolute inset-0 opacity-30 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"></div>
                        <div className="z-20 p-8 bg-background/80 backdrop-blur-md border border-border/20 rounded-xl text-center max-w-lg">
                            <Code size={48} className="mx-auto mb-4 text-primary" />
                            <h3 className="text-2xl font-bold mb-2">Visualizing {data.title}</h3>
                            <p className="text-muted">High-fidelity execution tailored for your business.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Detailed Description */}
            <Section className="py-12 -mt-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">About This Service</h2>
                    <p className="text-lg text-muted/80 leading-relaxed text-justify">
                        {data.detailedDescription}
                    </p>
                </div>
            </Section>

            {/* Unique Selling Points (Why Us) */}
            <Section id="why-us" className="bg-surface/30">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold mb-4">Why Choose Us?</h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        We don't just write code. We engineer unfair advantages into your product.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {(data.usps || []).map((usp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-xl border border-border/10 bg-background hover:border-primary/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-primary">
                                <Zap size={64} />
                            </div>
                            <h3 className="text-xl font-extrabold mb-3 group-hover:text-primary transition-colors">{usp.title}</h3>
                            <p className="text-muted font-medium">{usp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>



            {/* Specific Pricing Section */}
            <Section id="pricing">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold mb-4">Deployment Packages</h2>
                    <p className="text-muted text-lg">Transparent pricing for every stage of growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(data.pricing || []).map((plan, idx) => (
                        <div
                            key={idx}
                            className={`p-8 rounded-2xl border flex flex-col relative ${idx === 1 ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10 transform md:-translate-y-4' : 'border-border/20 bg-background hover:border-primary/30'} transition-all`}
                        >
                            {idx === 1 && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black font-bold text-xs uppercase tracking-widest rounded-full">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-3xl font-black mb-1">{plan.price}</div>
                            {plan.desc && <p className="text-sm text-muted mb-6">{plan.desc}</p>}

                            <hr className="border-border/10 mb-6" />

                            <ul className="space-y-4 flex-1 mb-8">
                                {(plan.features || []).map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm font-medium">
                                        <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${idx === 1 ? 'text-primary' : 'text-muted'}`} />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={`w-full py-3 rounded-lg font-bold text-center transition-all ${idx === 1 ? 'bg-primary text-black hover:bg-primary/90' : 'bg-surface hover:bg-surface/80 border border-border/10'}`}
                            >
                                Choose {plan.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Final CTA */}
            <section className="py-24 bg-primary text-black text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 max-w-4xl mx-auto">
                        Ready to Build the Best {data.title}?
                    </h2>
                    <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
                        Let's turn your vision into a high-performance reality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                        >
                            Start Project Now <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-4 bg-white/20 hover:bg-white/30 text-black rounded-lg font-bold transition-colors backdrop-blur-sm"
                        >
                            Explore Other Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
