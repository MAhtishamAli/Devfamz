const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-background via-white/5 to-background pt-20 pb-10 mt-auto relative z-10">
            <div className="section-divider absolute top-0 left-0" />
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
                            Dev<span className="text-primary">Famz</span>.
                        </a>
                        <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                            Pioneering the future of digital infrastructure. Enterprise-grade security, AI-driven performance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-sans">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-400 font-mono">
                            <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">AI Solutions</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cloud Architecture</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-sans">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-400 font-mono">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Legal (EU)</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-sans">Stay Updated</h4>
                        <p className="text-slate-400 text-sm mb-4">
                            Latest insights on AI & Security.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors font-mono"
                            />
                            <button className="bg-primary hover:bg-cyan-400 text-black font-bold py-3 rounded-lg transition-all text-sm uppercase tracking-wider font-mono">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-mono">
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
