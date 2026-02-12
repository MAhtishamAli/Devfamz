import React from 'react';
import { motion } from 'framer-motion';

/**
 * Standard Section Header Component
 * 
 * Provides consistent typography and spacing for section titles.
 * Supports kicker (small uppercase text), main title, and subtitle.
 * 
 * @param {string} title - The main heading.
 * @param {string} subtitle - Optional descriptive text below the title.
 * @param {string} kicker - Optional small uppercase text above title (e.g. "OUR SERVICES").
 * @param {string} align - text alignment 'center' | 'left' | 'right' (default: center).
 * @param {string} className - Additional classes.
 */
const SectionHeader = ({ title, subtitle, kicker, align = 'center', className = '' }) => {
    return (
        <div className={`mb-16 ${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'} ${className}`}>
            {kicker && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-3 block font-mono"
                >
                    {kicker}
                </motion.span>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-sans leading-tight"
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`text-muted max-w-2xl text-sm md:text-base leading-relaxed font-light ${align === 'center' ? 'mx-auto' : ''}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeader;
