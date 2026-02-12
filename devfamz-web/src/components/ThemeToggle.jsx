import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.add('light');
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
            root.classList.remove('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full relative overflow-hidden bg-background border border-border/20 text-muted hover:text-primary transition-all group"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'light' ? 0 : 360,
                    scale: theme === 'light' ? 1 : 1
                }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                {theme === 'light' ? (
                    <Sun size={20} className="text-amber-500" />
                ) : (
                    <Moon size={20} className="text-secondary" />
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
