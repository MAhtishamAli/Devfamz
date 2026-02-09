import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Home, Layers, Settings, MessageSquare } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Home size={18} />, id: 'home' },
        { name: 'Services', href: '#services', icon: <Layers size={18} />, id: 'services' },
        { name: 'Plans', href: '#plans', icon: <Settings size={18} />, id: 'plans' },
        { name: 'Process', href: '#process', icon: <Settings size={18} />, id: 'process' },
        { name: 'Contact', href: '#contact', icon: <MessageSquare size={18} />, id: 'contact' },
    ];

    return (
        <>
            {/* Desktop Navbar (Top) */}
            <nav className={`hidden md:flex fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'py-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-white/5' : 'py-6 bg-transparent border-transparent'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-1 group">
                        <span className="text-2xl font-bold font-sans text-white group-hover:text-primary transition-colors tracking-tighter">Dev<span className="text-primary">famz</span></span>
                    </a>

                    <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-widest relative group"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    <button className="px-5 py-2 bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all text-xs font-mono font-bold tracking-wider clip-path-polygon">
                        LET'S_TALK
                    </button>
                </div>
            </nav>

            {/* Mobile Bottom Dock */}
            <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
                <div className="bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex justify-between items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveTab(link.id)}
                            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all w-16 ${activeTab === link.id ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            <div className={`p-2 rounded-full transition-all ${activeTab === link.id ? 'bg-primary/20 scale-110' : 'bg-transparent'}`}>
                                {link.icon}
                            </div>
                            <span className="text-[10px] font-medium">{link.name}</span>
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
