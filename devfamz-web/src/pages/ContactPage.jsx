import React from 'react';
import Contact from '../components/Contact';

import SEO from '../components/SEO';

const ContactPage = () => {
    return (
        <main className="pt-20 min-h-screen bg-background">
            <SEO
                title="Contact Use | DevFamz"
                description="Get in touch for your next project. We are ready to help you scale."
            />
            <Contact />
        </main>
    );
};

export default ContactPage;
