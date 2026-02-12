import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Share2, BookOpen, TrendingUp } from 'lucide-react';
import { getPostBySlug, blogPosts } from '../data/blogData';
import SEO from './SEO';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getPostBySlug(slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // If post not found, redirect to blog page
    useEffect(() => {
        if (!post) {
            navigate('/blog');
        }
    }, [post, navigate]);

    if (!post) {
        return null;
    }

    // Get related posts (same category, different post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    // Share functionality
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <main className="pt-24 pb-20 bg-background min-h-screen">
            <SEO
                title={post.title}
                description={post.excerpt}
                type="article"
            />
            {/* Back Button */}
            <div className="container mx-auto px-6 mb-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>
            </div>

            {/* Article Header */}
            <article className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Category Badge */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20">
                            {post.category}
                        </span>
                        {post.featured && (
                            <span className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold border border-secondary/20">
                                <TrendingUp size={16} />
                                Featured
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-xl text-muted leading-relaxed mb-8">
                        {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-border/10">
                        <div className="flex items-center gap-2 text-muted">
                            <Calendar size={18} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted">
                            <Clock size={18} />
                            <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted">
                            <BookOpen size={18} />
                            <span>{post.author}</span>
                        </div>
                        <button
                            onClick={handleShare}
                            className="ml-auto flex items-center gap-2 px-4 py-2 bg-surface border border-border/10 rounded-full text-muted hover:text-primary hover:border-primary/30 transition-all"
                        >
                            <Share2 size={18} />
                            Share
                        </button>
                    </div>

                    {/* Featured Image Placeholder */}
                    <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground/80 mb-2">{post.category}</h2>
                                <p className="text-muted">Featured Image</p>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div
                        className="prose prose-lg prose-invert max-w-none
                            prose-headings:font-bold prose-headings:text-foreground
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border/10
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
                            prose-p:text-muted prose-p:leading-relaxed prose-p:mb-6
                            prose-ul:text-muted prose-ul:my-6
                            prose-li:my-2 prose-li:leading-relaxed
                            prose-strong:text-foreground prose-strong:font-semibold
                            prose-code:text-primary prose-code:bg-surface prose-code:px-2 prose-code:py-1 prose-code:rounded
                            prose-pre:bg-surface prose-pre:border prose-pre:border-border/10
                            prose-blockquote:text-muted prose-blockquote:border-primary
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-table:border prose-table:border-border/10
                            prose-th:bg-surface prose-th:text-foreground
                            prose-td:text-muted"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-border/10">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Tag size={18} />
                            Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, idx) => (
                                <Link
                                    key={idx}
                                    to={`/blog?search=${tag}`}
                                    className="px-4 py-2 bg-surface border border-border/10 rounded-full text-sm text-muted hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                                >
                                    #{tag}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Author Card */}
                    <div className="mt-12 p-8 bg-surface/50 border border-border/10 rounded-2xl">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-black">
                                {post.author.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold mb-2">{post.author}</h4>
                                <p className="text-muted leading-relaxed">
                                    Expert team at DevFamz specializing in {post.category.toLowerCase()}.
                                    We bring years of production experience and cutting-edge technical expertise to every project.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-6xl mx-auto mt-20"
                    >
                        <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blog/${relatedPost.slug}`}
                                    className="group"
                                >
                                    <div className="h-full bg-surface/30 backdrop-blur-sm border border-border/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                                        {/* Image */}
                                        <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20">
                                            <div className="absolute bottom-3 left-3">
                                                <span className="px-3 py-1 bg-primary/90 text-black rounded-full text-xs font-bold backdrop-blur-sm">
                                                    {relatedPost.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-muted line-clamp-2 mb-4">
                                                {relatedPost.excerpt}
                                            </p>
                                            <div className="flex items-center gap-3 text-xs text-muted">
                                                <span className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    {relatedPost.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto mt-20 text-center p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Build Your Next Project?</h2>
                    <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                        Let's discuss how DevFamz can help you leverage {post.category.toLowerCase()} technologies to build exceptional digital products.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-4 bg-primary text-black rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        Start Your Project
                    </Link>
                </motion.div>
            </article>
        </main>
    );
};

export default BlogPost;
