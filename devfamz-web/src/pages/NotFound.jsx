import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-background text-foreground pt-20">
            <SEO title="404 - Page Not Found | DevFamz" description="The page you are looking for does not exist." />
            <div className="text-center px-6">
                <div className="inline-flex justify-center items-center w-24 h-24 bg-primary/10 rounded-full mb-6">
                    <AlertTriangle size={48} className="text-primary" />
                </div>
                <h1 className="text-5xl font-bold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-muted max-w-md mx-auto mb-8">
                    The digital pathway you are looking for seems to be disconnected or does not exist in this reality.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all"
                >
                    <Home size={20} />
                    Return to Home
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
