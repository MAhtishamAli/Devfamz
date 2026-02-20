import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Terminal, ChevronDown, ChevronRight, Smartphone, Globe, Bot, Cloud } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Mobile state
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // Desktop Mega Menu state
    const [activeService, setActiveService] = useState(0);
    const location = useLocation();

    // Check if we are on the home page
    const isHome = location.pathname === '/';

    // Determine if navbar should be transparent (only at top of home page)
    const isTransparent = isHome && !isScrolled;

    const textColorClass = 'text-foreground';
    const mutedColorClass = 'text-muted';
    const logoColorClass = 'text-foreground';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close all menus on route change
    useEffect(() => {
        setIsOpen(false);
        setIsServicesOpen(false);
        setIsMegaMenuOpen(false); // Force close desktop menu
    }, [location]);

    // Services Data Structure (Synced with Services.jsx IDs)
    const services = [
        {
            category: "App Development",
            path: "/services#app-development",
            icon: Smartphone,
            items: [
                { label: "Cross-Platform (Flutter)", id: "flutter-dev" },
                { label: "Native iOS (Swift)", id: "native-ios" },
                { label: "Native Android (Kotlin)", id: "native-android" },
                { label: "App Modernization", id: "app-modernization" },
                { label: "Wearable Tech", id: "wearable-tech" },
                { label: "UI/UX for Mobile", id: "ui-ux-mobile" },
                { label: "AR/VR Experiences", id: "ar-vr-mobile" },
                { label: "IoT Companion Apps", id: "iot-apps" }
            ]
        },
        {
            category: "Web Development",
            path: "/services#web-development",
            icon: Globe,
            items: [
                { label: "Enterprise SaaS", id: "enterprise-saas" },
                { label: "Next.js & React Apps", id: "nextjs-react" },
                { label: "E-commerce Solutions", id: "ecommerce-web" },
                { label: "Progressive Web Apps", id: "pwa-web" },
                { label: "CMS Development", id: "cms-dev" },
                { label: "Web3 & Blockchain", id: "web3-blockchain" },
                { label: "Jamstack Solutions", id: "jamstack" }
            ]
        },
        {
            category: "AI Services",
            path: "/services#ai-intelligence",
            icon: Bot,
            items: [
                { label: "Generative AI & LLMs", id: "gen-ai-llm" },
                { label: "Custom Chatbots", id: "chatbots" },
                { label: "Computer Vision", id: "computer-vision" },
                { label: "NLP Solutions", id: "nlp-solutions" },
                { label: "Data Engineering", id: "data-engineering" }
            ]
        },
        {
            category: "Cloud Architecture",
            path: "/services#cloud-architecture",
            icon: Cloud,
            items: [
                { label: "AWS Solutions", id: "aws-solutions" },
                { label: "Serverless Solutions", id: "serverless" },
                { label: "Cost Optimization", id: "cost-optimization" },
                { label: "Disaster Recovery", id: "disaster-recovery" }
            ]
        },
        {
            category: "DevOps & SRE",
            path: "/services#devops-engineering",
            icon: Terminal,
            items: [
                { label: "CI/CD Pipelines", id: "ci-cd" },
                { label: "Kubernetes & Docker", id: "kubernetes-k8s" },
                { label: "Security & Compliance", id: "security-compliance" },
                { label: "Monitoring (ELK)", id: "monitoring-elk" }
            ]
        }
    ];

    // Products Data Structure
    const products = [
        { label: "AI Automation Suite", id: "ai-automation-suite" },
        { label: "Cloud Dashboard Pro", id: "cloud-dashboard-pro" },
        { label: "Blockchain Identity System", id: "blockchain-identity-system" },
        { label: "IoT Device Manager", id: "iot-device-manager" },
        { label: "CMS Headless Platform", id: "cms-headless-platform" },
        { label: "Cybersecurity Shield", id: "cybersecurity-shield" }
    ];

    const navItems = [
        { name: 'Process', path: '/process' },
        // { name: 'Pricing', path: '/pricing' }, // Commented out as requested
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    // Helper to get active icon component safely
    const ActiveIcon = services[activeService].icon;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${!isTransparent ? 'py-4 bg-background/80 backdrop-blur-md border-border/10' : 'py-6 bg-transparent border-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative">

                {/* 1. LEFT: Logo */}
                <Link to="/" className={`flex items-center gap-2 group transition-all duration-300 z-50`}>
                    <img
                        src="/devfamz-logo.png"
                        alt="DevFamz Logo"
                        className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(0,232,255,0.4)] group-hover:drop-shadow-[0_0_14px_rgba(0,232,255,0.7)] transition-all duration-300 group-hover:scale-110"
                    />
                    <span className={`text-2xl font-bold font-sans tracking-tight ${logoColorClass} transition-colors duration-300`}>dev<span className="text-primary">famz</span></span>
                </Link>

                {/* 2. CENTER: Navigation Links (Absolute Center) */}
                <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link to="/" className={`relative group text-sm font-medium tracking-wide transition-colors duration-300 ${isHome ? 'text-primary' : `${mutedColorClass} hover:text-primary`}`}>
                        Home
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isHome ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Interactive Mega Menu Wrapper */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => { setIsMegaMenuOpen(false); setActiveService(0); }}
                    >
                        <button
                            className={`relative group text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 hover:text-primary ${isMegaMenuOpen || location.pathname.startsWith('/services') ? 'text-primary' : mutedColorClass}`}
                        >
                            Services <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isMegaMenuOpen || location.pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </button>

                        <AnimatePresence>
                            {isMegaMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, x: "-30%" }}
                                    animate={{ opacity: 1, y: 0, x: "-30%" }}
                                    exit={{ opacity: 0, y: 10, x: "-30%" }}
                                    transition={{ duration: 0.2 }}
                                    // FIXED COMPONENT: Centered
                                    // BRIDGE: Invisible 'before' element handles hover gap
                                    // POINTERS: Always interactive
                                    className={`absolute left-1/2 w-[750px] max-w-[90vw] z-[60] pointer-events-auto 
                            top-full ${isTransparent ? 'mt-8 before:-top-8 before:h-8' : 'mt-5 before:-top-5 before:h-5'}
                            before:absolute before:left-0 before:w-full before:bg-transparent`}
                                >
                                    <div className="bg-background/95 backdrop-blur-xl border border-border/10 rounded-2xl p-1 shadow-2xl flex relative overflow-hidden h-[380px]">

                                        {/* Left Column: Categories List */}
                                        <div className="w-3/12 border-r border-border/10 py-4 px-2 bg-surface/30 flex flex-col gap-1">
                                            {services.map((service, idx) => {
                                                const CategoryIcon = service.icon;
                                                return (
                                                    <div
                                                        key={idx}
                                                        onMouseEnter={() => setActiveService(idx)}
                                                        className={`p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group/item relative ${activeService === idx ? 'bg-primary/10 text-primary' : 'text-muted hover:text-foreground hover:bg-surface'}`}
                                                    >
                                                        <CategoryIcon size={18} className={activeService === idx ? "text-primary" : "text-muted group-hover/item:text-foreground"} />
                                                        <Link to={service.path} className="text-sm font-bold flex-1">{service.category}</Link>

                                                        {/* Active Indicator Line */}
                                                        {activeService === idx && (
                                                            <motion.div
                                                                layoutId="active-pill"
                                                                className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                            />
                                                        )}
                                                        {activeService === idx && <ChevronRight size={14} className="text-primary" />}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Right Column: Dynamic Sub-Services */}
                                        <div className="w-9/12 p-6 flex flex-col relative bg-background/50">
                                            <AnimatePresence mode='wait'>
                                                <motion.div
                                                    key={activeService}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="h-full flex flex-col"
                                                >
                                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-foreground border-b border-border/10 pb-4">
                                                        <ActiveIcon size={24} className="text-primary" />
                                                        {services[activeService].category}
                                                    </h3>

                                                    {/* Sub Items Grid - 2 Columns for smaller size */}
                                                    <div className="grid grid-cols-2 gap-3 mb-4 overflow-y-auto max-h-[280px] pr-2 custom-scrollbar">
                                                        {services[activeService].items.map((subItem, sIdx) => (
                                                            <Link
                                                                key={sIdx}
                                                                to={`/services/${subItem.id}`} // Dynamic Page Link
                                                                onClick={() => setIsMegaMenuOpen(false)} // Explicit Close
                                                                className="flex items-center gap-2 text-sm text-muted hover:text-primary hover:bg-surface/50 p-2 rounded transition-all group/sub"
                                                            >
                                                                <div className="w-1.5 h-1.5 min-w-[6px] rounded-full bg-border group-hover/sub:bg-primary transition-colors" />
                                                                <span className="truncate">{subItem.label}</span>
                                                            </Link>
                                                        ))}
                                                    </div>

                                                    {/* REMOVED: Detailed Capabilities Link Footer as Requested */}
                                                </motion.div>
                                            </AnimatePresence>

                                            {/* Background decorative blob */}
                                            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                                        </div>

                                        {/* Decorative Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none -z-10" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Products - Single Link */}
                    <NavLink
                        to="/products/ai-automation-suite"
                        className={({ isActive }) => `relative group text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${isActive ? 'text-primary' : mutedColorClass}`}
                    >
                        {({ isActive }) => (
                            <>
                                Products
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </>
                        )}
                    </NavLink>

                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `relative group text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-primary' : `${mutedColorClass} hover:text-primary`}`}
                        >
                            {({ isActive }) => (
                                <>
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* 3. RIGHT: Actions (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        to="/contact"
                        className={`px-5 py-2 border rounded font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 
                        ${isTransparent
                                ? 'bg-primary/10 border-primary/50 text-primary hover:bg-primary hover:text-black shadow-[0_0_10px_rgba(0,232,255,0.1)] hover:shadow-[0_0_20px_rgba(0,232,255,0.3)]'
                                : 'bg-primary border-primary text-black hover:bg-transparent hover:text-primary shadow-[0_0_10px_rgba(0,232,255,0.2)]'}`}
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Menu Button (Right) */}
                <div className="lg:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className={`p-2 rounded transition-colors duration-300 ${textColorClass} hover:bg-surface`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background border-b border-border/10 overflow-hidden shadow-xl"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
                            <NavLink to="/" className={({ isActive }) => `text-lg font-medium py-3 border-b border-border/10 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                                Home
                            </NavLink>

                            {/* Mobile Services Accordion */}
                            <div>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="w-full flex justify-between items-center text-lg font-medium py-3 border-b border-border/10 text-foreground"
                                >
                                    Services <ChevronDown size={20} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden pl-4 border-l-2 border-primary/20 ml-2 mt-2"
                                        >
                                            {services.map((service, idx) => {
                                                const CategoryIcon = service.icon;
                                                return (
                                                    <div key={idx} className="mb-4 last:mb-0">
                                                        <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                                            <CategoryIcon size={14} />
                                                            <Link to={service.path} onClick={() => setIsOpen(false)}>{service.category}</Link>
                                                        </h4>
                                                        <ul className="space-y-2 pl-2 border-l border-border/10">
                                                            {service.items.map((item, sIdx) => (
                                                                <li key={sIdx}>
                                                                    <Link to={`/services/${item.id}`} onClick={() => setIsOpen(false)} className="text-sm text-muted block py-1">
                                                                        {item.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>


                            {/* Mobile Products Link */}
                            <NavLink
                                to="/products/ai-automation-suite"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => `text-lg font-medium py-3 border-b border-border/10 ${isActive ? 'text-primary pl-2' : 'text-muted'}`}
                            >
                                Products
                            </NavLink>


                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `text-lg font-medium py-3 border-b border-border/10 last:border-0 ${isActive ? 'text-primary pl-2' : 'text-muted'}`}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 w-full text-center py-3 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(0,232,255,0.3)]">
                                Start Your Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
