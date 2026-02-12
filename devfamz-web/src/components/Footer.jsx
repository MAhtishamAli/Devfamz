import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-border/10 pt-20 pb-10 mt-auto relative z-10 transition-colors duration-300">
            {/* <div className="section-divider absolute top-0 left-0" />  -- Removed to clean up potential clash, using simple border-t instead */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-foreground">
                            Dev<span className="text-primary">Famz</span>.
                        </Link>
                        <p className="mt-4 text-muted text-sm leading-relaxed">
                            Pioneering the future of digital infrastructure. Enterprise-grade security, AI-driven performance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-6 font-sans">Services</h4>
                        <ul className="space-y-3 text-sm text-muted font-mono">
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">AI Solutions</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Cloud Architecture</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-6 font-sans">Company</h4>
                        <ul className="space-y-3 text-sm text-muted font-mono">
                            <li><Link to="/process" className="hover:text-primary transition-colors">Process</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-6 font-sans">Stay Updated</h4>
                        <p className="text-muted text-sm mb-4">
                            Latest insights on AI & Security.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-border/5 border border-border/10 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors font-mono"
                            />
                            <button className="bg-primary hover:bg-cyan-400 text-black font-bold py-3 rounded-lg transition-all text-sm uppercase tracking-wider font-mono">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted font-mono">
                    <p>&copy; {new Date().getFullYear()} DevFamz. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span>Designed in Europe</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
