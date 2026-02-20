import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { blogPosts, getCategories, getAllTags } from '../data/blogData';

// Map blog post 'image' field to real SVG file paths
const blogImageMap = {
    'ai-future': '/blog/ai-future.svg',
    'flutter-react': '/blog/flutter-react.svg',
    'nextjs': '/blog/nextjs.svg',
    'kubernetes': '/blog/kubernetes.svg',
    'serverless': '/blog/serverless.svg',
    'web3': '/blog/web3.svg',
};

const getBlogImage = (imageKey) => blogImageMap[imageKey] || null;

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const categories = ['All', ...getCategories()];
    const allTags = getAllTags();

    // Filter posts based on category and search
    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredPost = blogPosts.find(post => post.featured);

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                        Tech Insights & Innovations
                    </h2>
                    <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                        Deep dives into cutting-edge technologies, practical development guides, and industry insights from the DevFamz team
                    </p>
                </motion.div>

                {/* Featured Post - Hero Style */}
                {featuredPost && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <Link to={`/blog/${featuredPost.slug}`}>
                            <div className="relative group overflow-hidden rounded-3xl border border-border/10 bg-surface/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Image Side */}
                                    <div className="relative h-[400px] md:h-auto overflow-hidden">
                                        {getBlogImage(featuredPost.image) ? (
                                            <img
                                                src={getBlogImage(featuredPost.image)}
                                                alt={featuredPost.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                style={{ minHeight: '300px' }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-700" />
                                        )}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full text-sm font-bold">
                                                <TrendingUp size={16} />
                                                Featured Post
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                                {featuredPost.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-sm text-muted">
                                                <Calendar size={14} />
                                                {featuredPost.date}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                                            {featuredPost.title}
                                        </h3>

                                        <p className="text-muted text-lg mb-6 line-clamp-3">
                                            {featuredPost.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-sm text-muted">
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    {featuredPost.readTime}
                                                </span>
                                                <span>By {featuredPost.author}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                                                Read Article <ArrowRight size={18} />
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-6">
                                            {featuredPost.tags.slice(0, 5).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-surface border border-border/10 px-3 py-1 rounded-full text-muted">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Search and Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles by title, topic, or technology..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-surface border border-border/10 rounded-xl focus:outline-none focus:border-primary/30 transition-colors text-foreground placeholder:text-muted"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-primary text-black'
                                    : 'bg-surface border border-border/10 text-muted hover:text-foreground hover:border-primary/30'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`}>
                                <div className="group h-full bg-surface/30 backdrop-blur-sm border border-border/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col">
                                    {/* Blog Post Image */}
                                    <div className="relative h-52 overflow-hidden bg-surface/50">
                                        {getBlogImage(post.image) ? (
                                            <img
                                                src={getBlogImage(post.image)}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <span className="inline-block px-3 py-1 bg-primary/90 text-black rounded-full text-xs font-bold backdrop-blur-sm shadow-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-sm text-muted mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted mb-4 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-background border border-border/10 px-2 py-1 rounded text-muted flex items-center gap-1">
                                                    <Tag size={10} />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Read More */}
                                        <div className="flex items-center justify-between pt-4 border-t border-border/10">
                                            <span className="text-sm text-muted">{post.author}</span>
                                            <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                                Read More <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-2xl text-muted mb-4">No articles found</p>
                        <p className="text-muted mb-6">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </motion.div>
                )}

                {/* Popular Tags Cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-bold mb-6">Popular Topics</h3>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {allTags.map((tag, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSearchQuery(tag)}
                                className="px-4 py-2 bg-surface/50 border border-border/10 rounded-full text-sm text-muted hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                            >
                                #{tag}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
