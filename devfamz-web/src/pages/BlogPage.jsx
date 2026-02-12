import React from 'react';
import Blog from '../components/Blog';

import SEO from '../components/SEO';

const BlogPage = () => {
    return (
        <main className="pt-20 min-h-screen bg-background">
            <SEO
                title="Engineering Blog | DevFamz"
                description="Insights on Cloud Architecture, AI Implementation, and Modern Web Development from the DevFamz team."
            />
            <Blog />
        </main>
    );
};

export default BlogPage;
