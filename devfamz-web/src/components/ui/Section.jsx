import React from 'react';

/**
 * Standard Section Container
 * 
 * Provides consistent padding, container width, and overflow handling for all major page sections.
 * Supports optional background gradients or patterns via children or className.
 * 
 * @param {string} id - The HTML id for anchor navigation.
 * @param {string} className - Additional Tailwind CSS classes.
 * @param {React.ReactNode} children - The section content.
 * @param {boolean} noPadding - If true, removes standard vertical padding.
 */
const Section = ({ id, className = '', children, noPadding = false, ...props }) => {
    return (
        <section
            id={id}
            className={`
                relative overflow-hidden 
                ${noPadding ? '' : 'py-24'} 
                ${className}
            `}
            {...props}
        >
            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
