import React from 'react';
import Services from '../components/Services';

import SEO from '../components/SEO';

const ServicesPage = () => {
    return (
        <main className="pt-20 min-h-screen bg-background">
            <SEO
                title="Our Services | DevFamz"
                description="Explore our comprehensive services in AI, Cloud Architecture, Mobile Development, and Cybersecurity."
            />
            <Services />
        </main>
    );
};

export default ServicesPage;
