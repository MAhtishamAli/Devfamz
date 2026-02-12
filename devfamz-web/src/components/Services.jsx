import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Globe, Bot, Cloud, CheckCircle2, ChevronRight, Terminal, BarChart3, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const categories = [
    {
        id: "app-development", // Main Section ID
        title: "App Development",
        icon: Smartphone,
        stats: "45+ Apps Shipped",
        description: "Native and cross-platform mobile experiences defined by performance and intuitive design.",
        items: [
            {
                id: "flutter-dev",
                title: "Cross-Platform (Flutter)",
                desc: "Single codebase, native performance on iOS & Android.",
                longDesc: "We build high-performance apps using Flutter 3.x, ensuring 60fps rendering and pixel-perfect UI across all devices. Ideal for startups and enterprise MVPs.",
                projects: "18+ Delivered",
                critical: "State management via Riverpod/Bloc ensures crash-free scaling."
            },
            {
                id: "native-ios",
                title: "Native iOS (Swift)",
                desc: "High-fidelity apps optimized for the Apple ecosystem.",
                longDesc: "Leveraging SwiftUI and UIKit for maximum performance, accessing native APIs like HealthKit and ARKit directly.",
                projects: "12+ Delivered",
                critical: "Memory leak protection using strict ARC and Instrument profiling."
            },
            {
                id: "native-android",
                title: "Native Android (Kotlin)",
                desc: "Performance-oriented development for Android devices.",
                longDesc: "Modern Android development using Jetpack Compose and Coroutines for smooth, responsive user interfaces.",
                projects: "10+ Delivered",
                critical: "Fragment lifecycle handling to prevent ANR (App Not Responding)."
            },
            {
                id: "app-modernization",
                title: "App Modernization",
                desc: "Refactoring legacy apps to modern architectures.",
                longDesc: "Converting Obj-C/Java apps to Swift/Kotlin, improving maintainability and removing tech debt.",
                projects: "8+ Delivered",
                critical: "Incremental migration strategies to ensure zero user disruption."
            },
            {
                id: "wearable-tech",
                title: "Wearable Tech",
                desc: "WatchOS and WearOS companion apps.",
                longDesc: "Building standalone and companion apps for Apple Watch and Android Wear, focusing on battery efficiency.",
                projects: "5+ Delivered",
                critical: "Optimized background sync to preserve device battery life."
            },
            {
                id: "ui-ux-mobile",
                title: "UI/UX for Mobile",
                desc: "User-centric design systems for touch interfaces.",
                longDesc: "Crafting intuitive gestures and micro-interactions that make apps feel alive and responsive.",
                projects: "40+ Delivered",
                critical: "Accessibility (WCAG) compliance for inclusive usability."
            },
            {
                id: "ar-vr-mobile",
                title: "AR/VR Experiences",
                desc: "Immersive augmented reality applications.",
                longDesc: "Using ARKit/ARCore to build retail, education, and gaming experiences that blend digital and physical worlds.",
                projects: "4+ Delivered",
                critical: "Low-latency rendering to prevent motion sickness."
            },
            {
                id: "iot-apps",
                title: "IoT Companion Apps",
                desc: "Control smart devices from your phone.",
                longDesc: "Bluetooth (BLE) and WiFi integrations for smart home and industrial IoT control panels.",
                projects: "7+ Delivered",
                critical: "Secure handshake protocols to prevent unauthorized device access."
            }
        ]
    },
    {
        id: "web-development",
        title: "Web Development",
        icon: Globe,
        stats: "120+ Websites Live",
        description: "Scalable, secure, and SEO-optimized web solutions for enterprise growth.",
        items: [
            {
                id: "enterprise-saas",
                title: "Enterprise SaaS",
                desc: "Complex multi-tenant architectures.",
                longDesc: "Building scalable B2B platforms with role-based access control (RBAC) and subscription management.",
                projects: "25+ Delivered",
                critical: "Database sharding for high-volume tenant data isolation."
            },
            {
                id: "nextjs-react",
                title: "Next.js & React",
                desc: "Server-side rendering for speed and SEO.",
                longDesc: "Full-stack React applications with Next.js 14, utilizing Server Actions and hydration optimization.",
                projects: "45+ Delivered",
                critical: "Edge caching strategies for sub-100ms global latency."
            },
            {
                id: "ecommerce-web",
                title: "E-commerce Solutions",
                desc: "Headless Shopify & Custom payments.",
                longDesc: "Custom storefronts using Shopify Hydrogen or MedusaJS for unique brand experiences.",
                projects: "30+ Delivered",
                critical: "PCI-DSS compliant payment gateways and fraud detection."
            },
            {
                id: "pwa-web",
                title: "Progressive Web Apps",
                desc: "Offline-first capabilities.",
                longDesc: "Web apps that install like native apps, complete with push notifications and offline storage (IndexedDB).",
                projects: "15+ Delivered",
                critical: "Service Worker caching strategies for reliable offline access."
            },
            {
                id: "cms-dev",
                title: "CMS Development",
                desc: "Sanity/Strapi implementations.",
                longDesc: "Headless CMS setups allowing marketing teams to manage content without touching code.",
                projects: "22+ Delivered",
                critical: "Structured content modeling to prevent layout breakage."
            },
            {
                id: "web3-blockchain",
                title: "Web3 & Blockchain",
                desc: "dApps and Smart Contracts.",
                longDesc: "Integrating wallet connection (RainbowKit) and Smart Contract interaction (Wagmi/Viem).",
                projects: "8+ Delivered",
                critical: "Gas optimization audits/checks to minimize transaction costs."
            },
            {
                id: "jamstack",
                title: "Jamstack Solutions",
                desc: "Static site generation for security.",
                longDesc: "Pre-rendered static sites served via CDN for unhackable surace area and instant load times.",
                projects: "18+ Delivered",
                critical: "Atomic deployments for instant rollback capability."
            }
        ]
    },
    {
        id: "ai-intelligence",
        title: "AI & Intelligence",
        icon: Bot,
        stats: "15+ AI Models Deployed",
        description: "Data-driven decision making and automation powered by cutting-edge algorithms.",
        items: [
            {
                id: "gen-ai-llm",
                title: "Generative AI & LLMs",
                desc: "Custom fine-tuned models.",
                longDesc: "Implementing RAG (Retrieval Augmented Generation) pipelines with OpenAI/Llama 3 for business data querying.",
                projects: "12+ Delivered",
                critical: "Hallucination guardrails using semantic verification steps."
            },
            {
                id: "chatbots",
                title: "Custom Chatbots",
                desc: "Intelligent support agents.",
                longDesc: "Context-aware agents that can perform actions (API calls) not just answer questions.",
                projects: "20+ Delivered",
                critical: "Sentiment analysis handover to human agents during frustration."
            },
            {
                id: "computer-vision",
                title: "Computer Vision",
                desc: "Automated image analysis.",
                longDesc: "YOLO/OpenCV implementations for object detection, facial recognition, or quality control.",
                projects: "6+ Delivered",
                critical: "Edge deployment optimization for real-time video processing."
            },
            {
                id: "nlp-solutions",
                title: "NLP Solutions",
                desc: "Text processing pipelines.",
                longDesc: "Extracting entities, intent, and sentiment from unstructured text data at scale.",
                projects: "8+ Delivered",
                critical: "PII redaction pipelines to ensure data privacy."
            },
            {
                id: "data-engineering",
                title: "Data Engineering",
                desc: "ETL pipelines and warehousing.",
                longDesc: "Building robust data lakes using Snowflake/BigQuery and Airflow for orchestration.",
                projects: "5+ Delivered",
                critical: "Idempotent pipelines to prevent data duplication on retry."
            }
        ]
    },
    {
        id: "cloud-architecture",
        title: "Cloud Architecture",
        icon: Cloud,
        stats: "99.9% Uptime Achieved",
        description: "Resilient infrastructure designed for scale, redundancy, and cost-efficiency.",
        items: [
            {
                id: "aws-solutions",
                title: "AWS Solutions",
                desc: "EC2, S3, RDS architecture.",
                longDesc: "Well-Architected Framework implementations ensuring security, reliability, and performance efficiency.",
                projects: "40+ Delivered",
                critical: "Multi-AZ setup for automatic failover during outages."
            },
            {
                id: "serverless",
                title: "Serverless Solutions",
                desc: "Event-driven Lambda arch.",
                longDesc: "Building infinitely scalable backends using Lambda, DynamoDB, and API Gateway.",
                projects: "25+ Delivered",
                critical: "Dead Letter Queues (DLQ) to capture and retry failed events."
            },
            {
                id: "cost-optimization",
                title: "Cost Optimization",
                desc: "FinOps strategies.",
                longDesc: "Analyzing usage patterns to implement Savings Plans, Spot Instances, and rightsizing.",
                projects: "15+ Delivered",
                critical: "Budget alerts and anomaly detection to prevent bill shock."
            },
            {
                id: "disaster-recovery",
                title: "Disaster Recovery",
                desc: "Backup and failover.",
                longDesc: "RPO/RTO planning with cross-region replication strategies.",
                projects: "8+ Delivered",
                critical: "Regular 'Game Day' simulations to verify recovery procedures."
            }
        ]
    },
    {
        id: "devops-engineering",
        title: "DevOps & SRE",
        icon: Terminal,
        stats: "500+ Pipelines Built",
        description: "Automated workflows and infrastructure management for rapid, safe deployment.",
        items: [
            {
                id: "ci-cd",
                title: "CI/CD Pipelines",
                desc: "GitHub Actions / GitLab CI.",
                longDesc: "Automated linting, testing, building, and deployment workflows with approval gates.",
                projects: "50+ Delivered",
                critical: "Blue/Green deployment capability for zero-downtime releases."
            },
            {
                id: "kubernetes-k8s",
                title: "Kubernetes & Docker",
                desc: "Container orchestration.",
                longDesc: "Managing microservices at scale using EKS/AKS/GKE with Helm charts.",
                projects: "15+ Delivered",
                critical: "Pod disruption budgets and auto-scaling policies."
            },
            {
                id: "security-compliance",
                title: "Security & DevSecOps",
                desc: "SOC2 readiness.",
                longDesc: "Embedding security scanning (SAST/DAST/Container) directly into pipelines.",
                projects: "10+ Delivered",
                critical: "Secret rotation automation (HashiCorp Vault) to prevent leaks."
            },
            {
                id: "monitoring-elk",
                title: "Monitoring (ELK)",
                desc: "Observability stacks.",
                longDesc: "Centralized logging and metrics using Elastic Stack or Grafana/Prometheus.",
                projects: "20+ Delivered",
                critical: "Alert fatigue reduction using AIOps noise suppression."
            }
        ]
    }
];

const Services = () => {
    const location = useLocation();

    // Handle hash scrolling
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Center the card
                }, 200);
            }
        }
    }, [location]);

    return (
        <section id="services-page" className="py-20 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Main Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-sans tracking-tight">
                        Our <span className="text-primary">Capabilities</span>_
                    </h2>
                    <p className="text-muted text-lg font-mono">
                        Detailed expertise. Scalable execution. Critical reliability.
                    </p>
                </div>

                {/* Service Categories */}
                <div className="space-y-32">
                    {categories.map((cat, idx) => (
                        <div key={idx} id={cat.id} className="scroll-mt-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Category Header */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 border-b border-border/10 pb-8">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                        <cat.icon size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-extrabold text-foreground mb-2">{cat.title}</h3>
                                        <p className="text-muted text-lg font-semibold">{cat.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/20 text-sm font-mono font-bold text-primary shadow-sm whitespace-nowrap">
                                        <BarChart3 size={16} />
                                        {cat.stats}
                                    </div>
                                </div>

                                {/* Detailed Items Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {cat.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            id={item.id} // ID for deep linking
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: i * 0.1 }}
                                            whileHover={{ y: -5, borderColor: "rgba(0,232,255,0.5)" }}
                                            className="cyber-card p-6 rounded-xl border border-border/10 bg-surface/50 hover:bg-surface/80 transition-all group scroll-mt-32 relative overflow-hidden"
                                        >
                                            {/* Accent Line */}
                                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />

                                            <div className="pl-4">
                                                {/* Header & Stats */}
                                                <div className="flex justify-between items-start mb-3">
                                                    <h4 className="text-xl font-extrabold text-foreground">{item.title}</h4>
                                                    <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-background border border-border/20 text-muted group-hover:text-primary transition-colors">
                                                        {item.projects}
                                                    </span>
                                                </div>

                                                {/* Short Description */}
                                                <p className="text-muted font-semibold mb-3">{item.desc}</p>

                                                {/* Expanded Details */}
                                                <p className="text-sm text-foreground/80 dark:text-muted/80 leading-relaxed font-medium mb-4">
                                                    {item.longDesc}
                                                </p>

                                                {/* Critical Handling Section */}
                                                <div className="mt-4 pt-4 border-t border-border/10">
                                                    <div className="flex items-start gap-2 text-xs text-amber-500/90 font-mono">
                                                        <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                                                        <span>
                                                            <strong className="text-foreground/80">Critical Handling:</strong> {item.critical}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
