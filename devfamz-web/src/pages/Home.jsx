import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TrustBar from '../components/TrustBar';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';

import SEO from '../components/SEO';

const Home = () => {
    return (
        <main>
            <SEO
                title="DevFamz | Architecting the Intelligence Layer"
                description="DevFamz provides enterprise-grade Cloud, AI, and Cybersecurity solutions. We architect digital infrastructure for the future."
            />
            <Hero />
            <Stats />
            <TrustBar />
            <Benefits />
            <Testimonials />
        </main>
    );
};

export default Home;
