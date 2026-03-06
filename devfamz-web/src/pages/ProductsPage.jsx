import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Globe, Tag, Sparkles, Users, Trophy, Rocket } from 'lucide-react';
import { productDetails } from '../data/productDetails';
import SEO from '../components/SEO';

const projects = Object.entries(productDetails).map(([id, product]) => ({
    id,
    title: product.title,
    tagline: product.tagline,
    description: product.intro,
    screenshot: product.screenshot,
    liveUrl: product.liveUrl,
    category: product.category,
    year: product.year,
    techStack: product.techStack?.slice(0, 4) || []
}));

const ProductsPage = () => {
    return (
        <main className="pt-24 min-h-screen bg-background">
            <SEO
                title="Our Portfolio | DevFamz"
                description="Explore our portfolio of live products and platforms we've built. Real projects delivering real impact across AI, SaaS, and enterprise solutions."
            />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-mono text-primary font-bold mb-8">
                            <Sparkles size={14} />
                            Shipped & Live in Production
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-sans tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portfolio</span>
                        </h1>
                        <p className="text-xl text-muted font-mono max-w-2xl mx-auto leading-relaxed">
                            Real products we've architected, developed, and launched — transforming businesses worldwide.
                        </p>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-8 mt-14"
                    >
                        {[
                            { icon: Trophy, label: "Projects Completed", value: "50+" },
                            { icon: Users, label: "Happy Customers", value: "35+" },
                            { icon: Rocket, label: "Years Experience", value: "12+" },
                        ].map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-surface/50 border border-border/10 rounded-xl">
                                <stat.icon size={20} className="text-primary" />
                                <div>
                                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                                    <div className="text-xs text-muted font-mono">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center`}>
                                    {/* Screenshot Side - 7 cols */}
                                    <div className={`md:col-span-7 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                                        <Link to={`/products/${project.id}`} className="block group">
                                            <div className="relative">
                                                {/* Glow behind image */}
                                                <div className="absolute inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Image container */}
                                                <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,232,255,0.15)] group-hover:-translate-y-2">
                                                    <img
                                                        src={project.screenshot}
                                                        alt={`${project.title} — ${project.tagline}`}
                                                        className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                                                        loading="lazy"
                                                    />

                                                    {/* Hover overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                                        <span className="text-white font-bold text-lg flex items-center gap-2">
                                                            View Case Study <ArrowRight size={18} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Info Side - 5 cols */}
                                    <div className={`md:col-span-5 ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                                        {/* Category & Year */}
                                        <div className="flex flex-wrap gap-3 mb-5">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold bg-primary/10 text-primary border border-primary/20 rounded-full">
                                                <Tag size={11} />
                                                {project.category}
                                            </span>
                                            <span className="px-3 py-1 text-xs font-mono font-bold bg-surface border border-border/20 text-muted rounded-full">
                                                {project.year}
                                            </span>
                                        </div>

                                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                                            {project.title}
                                        </h2>
                                        <p className="text-lg text-primary font-mono mb-5">{project.tagline}</p>
                                        <p className="text-muted leading-relaxed mb-8 text-base">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.techStack.map((tech, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="px-3 py-1.5 text-xs font-mono font-bold bg-surface border border-border/20 text-muted rounded-lg hover:text-primary hover:border-primary/20 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                to={`/products/${project.id}`}
                                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(0,232,255,0.3)] group/btn"
                                            >
                                                View Details
                                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-border/20 text-muted hover:text-primary hover:border-primary/30 font-bold rounded-xl transition-all"
                                                >
                                                    <Globe size={16} />
                                                    Live Site
                                                    <ExternalLink size={12} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl p-12 md:p-16 text-center border border-primary/10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                        Let's turn your idea into the next product in our portfolio. We specialize in building AI-powered platforms that scale.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-black text-lg font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-[0_0_40px_rgba(0,232,255,0.3)]"
                    >
                        <Rocket size={22} />
                        Start Your Project
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};

export default ProductsPage;
