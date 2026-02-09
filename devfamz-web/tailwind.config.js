/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#07070A", // Void Black
                surface: "#0B0D10", // Deep Charcoal
                primary: "#00E8FF", // Electric Cyan
                secondary: "#8A00FF", // Deep Violet
                accent: "#00E8FF", // Cyan for highlights
                "text-main": "#f1f5f9",
                "text-muted": "#94a3b8",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'], // Technical Mono
            },
            animation: {
                "fade-up": "fadeUp 0.8s ease-out forwards",
                "fade-in": "fadeIn 1s ease-out forwards",
                "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "blob": "blob 7s infinite",
                "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
            },
            keyframes: {
                "text-shimmer": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "100%": { backgroundPosition: "100% 50%" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                }
            }
        },
    },
    plugins: [],
}
