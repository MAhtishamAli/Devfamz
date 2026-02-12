import React from 'react';
import Plans from '../components/Plans';
import FAQ from '../components/FAQ';

const PricingPage = () => {
    return (
        <main className="pt-20 min-h-screen bg-background">
            <Plans />
            <div className="py-12" /> {/* Spacing */}
            <FAQ />
        </main>
    );
};

export default PricingPage;
