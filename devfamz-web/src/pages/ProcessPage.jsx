import React from 'react';
import Process from '../components/Process';

import SEO from '../components/SEO';

const ProcessPage = () => {
    return (
        <main className="pt-20 min-h-screen bg-background">
            <SEO
                title="Our Process | DevFamz"
                description="Our structured approach to building scalable, enterprise-grade software solutions."
            />
            <Process />
        </main>
    );
};

export default ProcessPage;
