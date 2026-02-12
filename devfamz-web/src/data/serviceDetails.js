
export const serviceDetails = {
    // --- APP DEVELOPMENT ---
    "flutter-dev": {
        title: "Flutter Mobile Development",
        tagline: "One Codebase. Native Performance.",
        intro: "We engineer high-performance cross-platform experiences. By leveraging the Skia graphics engine directly, we achieve 120fps rendering that rivals native Swift/Kotlin.",
        projectsShipped: "150+",
        detailedDescription: "Our Flutter development process is built on a foundation of rigorous architectural patterns and reusable component libraries. We don't just build screens; we architect scalable systems. By utilizing Bloc for predictable state management and ensuring 100% test coverage for critical business logic, we deliver applications that are robust and easy to maintain. Our team specializes in bridging the native gap, writing custom platform channels to access device-specific hardware features that standard plugins can't reach, ensuring your app has no limitations.",
        imageKeyword: "flutter mobile app",
        usps: [
            { title: "Custom RenderObjects", desc: "We write custom render objects for complex UI interactions others say are impossible." },
            { title: "Bi-Directional Channels", desc: "Proprietary platform channels for 10x faster Dart-to-Native communication." },
            { title: "Offline-First", desc: "Built-in aggressive caching ensuring your app works perfectly without internet." }
        ],
        pricing: [
            { name: "MVP Launch", price: "$5k+", features: ["Core Features", "iOS & Android Builds", "Firebase Backend"] },
            { name: "Growth Scale", price: "$12k+", features: ["Complex Animations", "Custom Backend", "Payment Gateway"] },
            { name: "Enterprise", price: "Custom", features: ["Microservices", "AI Integration", "SLA Support"] }
        ]
    },
    "native-ios": {
        title: "Native iOS Development",
        tagline: "Crafted for Apple Ecosystem.",
        intro: "Building strictly native Swift applications utilizing the full power of Apple Silicon, from Dynamic Islands to Metal-powered graphics.",
        projectsShipped: "85+",
        detailedDescription: "For applications demanding absolute peak performance and seamless system integration, our native iOS team delivers. We leverage the latest Swift concurrency models to ensure main-thread fludity while handling heavy data processing in the background. Our deep understanding of UIKit and SwiftUI allows us to create pixel-perfect implementations of complex designs. We also specialize in Apple-specific frameworks like ARKit, CoreML, and HealthKit, unlocking capabilities that cross-platform solutions simply cannot match.",
        imageKeyword: "iphone ios swift",
        usps: [
            { title: "Metal Graphics API", desc: "Direct GPU access for buttery smooth animations." },
            { title: "App Clips", desc: "Instant-use versions of your app for higher conversion." },
            { title: "Zero Memory Leaks", desc: "Manual ARC optimization for stability." }
        ],
        pricing: [
            { name: "Starter", price: "$6k+", features: ["Native Swift UI", "Core Data", "App Store Submission"] },
            { name: "Pro", price: "$15k+", features: ["Complex Animations", "CloudKit Sync", "Push Notifications"] },
            { name: "Enterprise", price: "Custom", features: ["Hardware Integration", "Video Processing", "Bank-grade Security"] }
        ]
    },
    "native-android": {
        title: "Native Android Development",
        tagline: "Performance for the Masses.",
        intro: "Leveraging Kotlin and Jetpack Compose to build robust Android applications that run smoothly on thousands of device variations.",
        projectsShipped: "90+",
        detailedDescription: "Navigating the fragmented Android ecosystem requires deep expertise. Our team builds resilience into every layer of the application, ensuring consistent behavior across manufacturers and OS versions. We embrace modern Android development practices, using Jetpack Compose for declarative UI and Hilt for dependency injection. Whether it's optimizing for foldable devices or ensuring backward compatibility, we build Android apps that feel premium and perform reliably under any conditions.",
        imageKeyword: "android phone kotlin",
        usps: [
            { title: "Fragment Optimization", desc: "Advanced lifecycle handling to prevent crashes." },
            { title: "Material You Design", desc: "Dynamic theming engine matching user wallpaper." },
            { title: "Background Services", desc: "Battery-efficient background processing for heavy tasks." }
        ],
        pricing: [
            { name: "MVP", price: "$5k+", features: ["Jetpack Compose UI", "Retrofit Networking", "Play Store Listing"] },
            { name: "Scale", price: "$12k+", features: ["Room Database", "WorkManager Sync", "Push Notifications"] },
            { name: "Enterprise", price: "Custom", features: ["NDK/C++ Modules", "Custom Hardware", "Enterprise Security"] }
        ]
    },
    "app-modernization": {
        title: "App Modernization",
        tagline: "Revive Legacy Code.",
        intro: "Transforming outdated Objective-C/Java apps into modern Swift/Kotlin architectures, improving maintainability and performance.",
        projectsShipped: "40+",
        detailedDescription: "Legacy code is a liability. Our modernization strategy focuses on risk mitigation and incremental improvement. We don't just rewrite; we re-architect for the future. By introducing modularization, automated testing, and CI/CD pipelines into legacy environments, we stop the bleeding and start the healing. We are experts at strangler fig patterns, slowly replacing monolithic legacy components with modern, micro-service or modular implementations without disrupting live operations.",
        imageKeyword: "code refactoring",
        usps: [
            { title: "Incremental Migration", desc: "Refactor module by module with zero downtime." },
            { title: "Debt Reduction", desc: "Eliminate years of accumulated technical debt." },
            { title: "UI Refresh", desc: "Update aging interfaces to modern design standards." }
        ],
        pricing: [
            { name: "Audit", price: "$2k", features: ["Codebase Analysis", "Architecture Review", "Migration Plan"] },
            { name: "Module Rewrite", price: "$5k+", features: ["High-Impact Modules", "Performance Optimization", "Bug Fixes"] },
            { name: "Full Rewrite", price: "Custom", features: ["Complete Overhaul", "Modern Stack", "Future-Proofing"] }
        ]
    },
    "wearable-tech": {
        title: "Wearable Technology",
        tagline: "Intelligence on Your Wrist.",
        intro: "Developing companion and standalone apps for Apple Watch (WatchOS) and Android Wear, focusing on glanceability and battery life.",
        projectsShipped: "35+",
        detailedDescription: "Wearables demand a different design philosophy: glanceability and efficiency. Our team optimizes every byte of memory and every millisecond of processor time to respect the constraints of wearable hardware. We build standalone apps that function independently of the phone, as well as rich companion experiences that extend your mobile app's reach. From health monitoring with sensor fusion to quick-action controls for IoT devices, we unlock the full potential of the wrist.",
        imageKeyword: "smartwatch apple watch",
        usps: [
            { title: "Battery Optimization", desc: "Algorithms designed to minimize power consumption." },
            { title: "HealthKit Integration", desc: "Secure handling of sensitive biometric data." },
            { title: "Complications", desc: "Custom watch face widgets for instant information." }
        ],
        pricing: [
            { name: "Companion", price: "$4k+", features: ["Phone Sync", "Notifications", "Simple UI"] },
            { name: "Standalone", price: "$8k+", features: ["Independent Ops", "GPS Tracking", "Health Metrics"] },
            { name: "Enterprise", price: "Custom", features: ["Industrial IoT", "Worker Safety", "Custom Hardware"] }
        ]
    },
    "ui-ux-mobile": {
        title: "Mobile UI/UX Design",
        tagline: "Interfaces That Delight.",
        intro: "Creating intuitive, gesture-driven mobile interfaces that users love. We focus on micro-interactions and accessibility.",
        projectsShipped: "200+",
        detailedDescription: "Great design is invisible; it just works. Our design process starts with deep empathy for the user, mapped out through comprehensive user journeys. We move from low-fidelity wireframes to high-fidelity, interactive prototypes that simulate the actual feel of the application. We pay special attention to the 'thumb zone' and gesture-based navigation, ensuring that your app is not just beautiful, but ergonomically sound and accessible to all users.",
        imageKeyword: "mobile app design ui",
        usps: [
            { title: "Micro-Interactions", desc: "Subtle animations that provide satisfying feedback." },
            { title: "Thumb-Zone Layouts", desc: "Controls placed for easy one-handed use." },
            { title: "Accessibility First", desc: "Fully WCAG compliant designs for all users." }
        ],
        pricing: [
            { name: "Audit", price: "$1.5k", features: ["Heuristic Evaluation", "User Flow Review", "Improvement Plan"] },
            { name: "Redesign", price: "$5k+", features: ["New Design System", "High-Fidelity Mockups", "Interactive Prototype"] },
            { name: "Full Product", price: "Custom", features: ["Research Phase", "User Testing", "Production Assets"] }
        ]
    },
    "ar-vr-mobile": {
        title: "AR/VR Experiences",
        tagline: "Immersive Realities.",
        intro: "Blending digital and physical worlds using ARKit and ARCore. From retail product previews to interactive gaming.",
        projectsShipped: "25+",
        detailedDescription: "Augmented Reality transforms how users interact with the world. We push the boundaries of ARKit and ARCore to build stable, markerless tracking experiences. Whether it's visualizing furniture in a living room with accurate scale and lighting, or creating immersive gamified marketing campaigns, our 3D artists and developers work in unison to create believable, high-performance AR overlays that run smoothly on consumer hardware.",
        imageKeyword: "augmented reality phone",
        usps: [
            { title: "SLAM Technology", desc: "Precise Simultaneous Localization and Mapping." },
            { title: "Photorealistic Rendering", desc: "High-quality 3D models with realistic lighting." },
            { title: "Markerless Tracking", desc: "Stable AR experiences on any surface." }
        ],
        pricing: [
            { name: "Filter/Effect", price: "$3k+", features: ["Social Media Filter", "Product Try-On", "Basic Interaction"] },
            { name: "Interactive App", price: "$10k+", features: ["Room Scale AR", "Multiplayer", "Physics Engine"] },
            { name: "Enterprise", price: "Custom", features: ["Industrial Training", "Maintenance Overlay", "Custom Hardware"] }
        ]
    },
    "iot-apps": {
        title: "IoT Companion Apps",
        tagline: "Connect Your World.",
        intro: "Bridging the gap between hardware and user. We build secure, reliable apps to control smart devices via BLE, WiFi, and MQTT.",
        projectsShipped: "45+",
        detailedDescription: "IoT apps require a unique blend of embedded systems knowledge and mobile development prowess. We understand the intricacies of Bluetooth Low Energy (BLE) handshakes, MQTT messaging protocols, and local network discovery. We build apps that handle the 'happy path' perfectly but also gracefully handle connection drops, latency, and hardware errors, ensuring that the user never feels disconnected from their devices.",
        imageKeyword: "internet of things smart home",
        usps: [
            { title: "Bluetooth Low Energy", desc: "Optimized protocols for instant device connection." },
            { title: "Secure Handshake", desc: "Bank-grade encryption for device pairing." },
            { title: "Real-time Telemetry", desc: "Live data visualization from sensors." }
        ],
        pricing: [
            { name: "Controller", price: "$6k+", features: ["Device Pairing", "Status Monitoring", "Remote Control"] },
            { name: "Smart Home", price: "$15k+", features: ["Automation Rules", "Multi-User Access", "Cloud Sync"] },
            { name: "Industrial", price: "Custom", features: ["Fleet Management", "Predictive Maintenance", "Offline Sync"] }
        ]
    },

    // --- WEB DEVELOPMENT ---
    "enterprise-saas": {
        title: "Enterprise SaaS Platforms",
        tagline: "Scalable. Secure. Multi-Tenant.",
        intro: "Architecting B2B platforms that handle complexity with ease. Multi-tenant architectures where data isolation is paramount.",
        projectsShipped: "60+",
        detailedDescription: "Enterprise SaaS is our bread and butter. We architect systems designed for multi-tenancy from the ground up, ensuring strict logical and physical data isolation. We implement complex Role-Based Access Control (RBAC) systems, detailed audit logging, and SSO integrations to meet the compliance needs of large organizations. Our focus on backend scalability means your platform remains responsive whether you have ten users or ten thousand.",
        imageKeyword: "dashboard analytics",
        usps: [
            { title: "Tenant Isolation", desc: "Physical data separation logic ensuring security." },
            { title: "Audit Logs", desc: "Complete trail of every action for compliance." },
            { title: "Sub-Second Reporting", desc: "Pre-aggregated analytics for instant dashboards." }
        ],
        pricing: [
            { name: "Startup", price: "$15k+", features: ["Multi-auth", "Subscription Mgmt", "Admin Dashboard"] },
            { name: "Scale", price: "$35k+", features: ["Advanced RBAC", "API Access", "Usage Billing"] },
            { name: "Enterprise", price: "Custom", features: ["On-Premise", "SSO/SAML", "Compliance Modules"] }
        ]
    },
    "nextjs-react": {
        title: "Next.js & React Apps",
        tagline: "The Modern Web, Fast.",
        intro: "Building the web of tomorrow using Next.js 14 App Router. Server Side Rendering (SSR) for perfect SEO and speed.",
        projectsShipped: "125+",
        detailedDescription: "We are at the bleeding edge of the React ecosystem, utilizing Next.js 14 and React Server Components to deliver web applications that are incredibly fast and SEO-friendly. By moving logic to the server, we reduce the client-side bundle size, leading to faster First Contentful Paint times. We integrate headless CMSs, diverse APIs, and modern animation libraries to create web experiences that are not just functional, but engaging and memorable.",
        imageKeyword: "react code monitor",
        usps: [
            { title: "Server Actions", desc: "Secure backend logic directly in components." },
            { title: "Edge Caching", desc: "Global content delivery in under 100ms." },
            { title: "Optimized Images", desc: "Automatic format conversion for speed." }
        ],
        pricing: [
            { name: "Landing", price: "$3k+", features: ["Perfect SEO", "CMS Integration", "Contact Forms"] },
            { name: "App", price: "$10k+", features: ["Auth", "Dashboard", "Database Integration"] },
            { name: "Platform", price: "Custom", features: ["High Scale", "Micro-frontends", "Global CDN"] }
        ]
    },
    "ecommerce-web": {
        title: "E-commerce Solutions",
        tagline: "Sell Without Limits.",
        intro: "Headless commerce architectures using Shopify Hydrogen or MedusaJS for unique, high-converting brand experiences.",
        projectsShipped: "75+",
        detailedDescription: "In e-commerce, speed equals revenue. Our headless approach decouples the frontend from the backend, allowing us to build blazing fast shopping experiences that aren't constrained by template limits. We focus on optimizing the conversion funnel, from instant-load product pages to streamlined one-page checkouts. We integrate with best-in-class tools for search (Algolia), payments (Stripe), and logistics, creating a unified and powerful selling machine.",
        imageKeyword: "ecommerce shopping cart",
        usps: [
            { title: "Headless Speed", desc: "Decoupled frontend for instant page loads." },
            { title: "Custom Checkout", desc: "Tailored flows to maximize conversion rates." },
            { title: "Omnichannel", desc: "Unified inventory across web, mobile, and social." }
        ],
        pricing: [
            { name: "Storefront", price: "$8k+", features: ["Custom Design", "Shopify/Woo Sync", "Payment Gateway"] },
            { name: "Marketplace", price: "$20k+", features: ["Multi-Vendor", "Commission Logic", "Advanced Search"] },
            { name: "Enterprise", price: "Custom", features: ["Global Tax/Duty", "ERP Integration", "High Volume"] }
        ]
    },
    "pwa-web": {
        title: "Progressive Web Apps",
        tagline: "App-Like Web Experiences.",
        intro: "Web apps that install like native apps. Offline capabilities, push notifications, and home screen access.",
        projectsShipped: "55+",
        detailedDescription: "PWAs offer the best of both worlds: the reach of the web with the engagement of an app. We build sophisticated Service Worker strategies to ensure your app loads instantly, even on flaky networks. We implement 'Add to Home Screen' flows that dramatically increase retention. With capabilities like Push Notifications and Background Sync, we enable you to engage users just like a native app, but without the friction of the App Store.",
        imageKeyword: "mobile web browser",
        usps: [
            { title: "Offline First", desc: "Service workers cache content for no-network use." },
            { title: "Installable", desc: "Add to home screen without an app store." },
            { title: "Push Notifications", desc: "Re-engage users directly on their device." }
        ],
        pricing: [
            { name: "Enhancement", price: "$3k+", features: ["Add PWA Manifest", "Service Worker", "Cache Strategy"] },
            { name: "Full PWA", price: "$10k+", features: ["App Shell Arch", "Background Sync", "Push Notifs"] },
            { name: "Enterprise", price: "Custom", features: ["Biometric Auth", "Bluetooth Web API", "Complex Sync"] }
        ]
    },
    "cms-dev": {
        title: "CMS Development",
        tagline: "Content Without Chaos.",
        intro: "Headless CMS implementations (Sanity, Strapi) that give marketing teams total freedom without breaking designs.",
        projectsShipped: "110+",
        detailedDescription: "Content management shouldn't be a bottleneck. We implement Headless CMS solutions that empower non-technical teams to manage content with ease, while developers maintain control over the frontend presentation. We structure data content-first, making it reusable across web, mobile, and social channels. With features like real-time preview and granular workflow approvals, we harmonize the relationship between marketing agility and engineering stability.",
        imageKeyword: "content management system",
        usps: [
            { title: "Structured Content", desc: "Future-proof data modeling for any channel." },
            { title: "Live Preview", desc: "Real-time editing experience for safe updates." },
            { title: "Role Management", desc: "Granular permissions for content teams." }
        ],
        pricing: [
            { name: "Setup", price: "$4k+", features: ["Model Design", "API Setup", "Frontend Integration"] },
            { name: "Migration", price: "$8k+", features: ["Data Import", "Redirect Mgmt", "SEO Preservation"] },
            { name: "Enterprise", price: "Custom", features: ["Multi-Language", "Workflow Approval", "SLA Support"] }
        ]
    },
    "web3-blockchain": {
        title: "Web3 & Blockchain",
        tagline: "Decentralized Future.",
        intro: "Building dApps, Smart Contracts, and NFT marketplaces. We bridge the gap between Web2 usability and Web3 power.",
        projectsShipped: "30+",
        detailedDescription: "Blockchain is redefining trust. Our team builds secure, gas-efficient smart contracts on Ethereum, Solana, and Polygon. We understand that the biggest barrier to Web3 adoption is UX, so we build intuitive frontends that abstract away the complexity of wallets and transactions. From tokenomics design to auditing and deployment, we guide you through the entire decentralized landscape safely and effectively.",
        imageKeyword: "blockchain crypto",
        usps: [
            { title: "Gas Optimization", desc: "Smart contracts written to minimize transaction costs." },
            { title: "Wallet Agnostic", desc: "Support for MetaMask, Rainbow, Coinbase, and more." },
            { title: "Security Audits", desc: "Rigorous testing to prevent contract exploits." }
        ],
        pricing: [
            { name: "dApp Frontend", price: "$8k+", features: ["Wallet Connect", "Contract Interaction", "UI/UX"] },
            { name: "Smart Contract", price: "$12k+", features: ["Development", "Unit Testing", "Deployment"] },
            { name: "Ecosystem", price: "Custom", features: ["Tokenomics", "DAO Governance", "Full Audit"] }
        ]
    },
    "jamstack": {
        title: "Jamstack Solutions",
        tagline: "Fast. Secure. Scalable.",
        intro: "Pre-rendered static sites served via CDN. The ultimate architecture for performance and security.",
        projectsShipped: "95+",
        detailedDescription: "For content-heavy sites, Jamstack is unbeatable. We build sites that are pre-rendered at build time and served directly from the Edge, resulting in near-instant load times globally. This architecture effectively eliminates the risk of server-side hacks, as there is no traditional server to hack. We integrate serverless functions for dynamic needs like form handling and payments, keeping your infrastructure simple, cheap, and infinitely scalable.",
        imageKeyword: "server rack fast",
        usps: [
            { title: "Unhackable Surface", desc: "No database or server to exploit directly." },
            { title: "Instant Load", desc: "Pre-built HTML served from the edge." },
            { title: "Atomic Deploys", desc: "Instant rollbacks if anything goes wrong." }
        ],
        pricing: [
            { name: "Site", price: "$3k+", features: ["Static Gen", "CMS", "Form Handling"] },
            { name: "Dynamic", price: "$8k+", features: ["Serverless Funcs", "Auth", "Personalization"] },
            { name: "Enterprise", price: "Custom", features: ["Global Edge", "DDoS Protection", "SLA"] }
        ]
    },

    // --- AI ---
    "gen-ai-llm": {
        title: "Generative AI & LLMs",
        tagline: "Custom Intelligence.",
        intro: "Fine-tuning models on your data. RAG pipelines to chat with company knowledge securely.",
        projectsShipped: "20+",
        detailedDescription: "Generative AI is changing the landscape of business automation. We help you go beyond generic ChatGPT prompts by building custom RAG (Retrieval-Augmented Generation) pipelines that allow AI to securely access and reason over your proprietary data. We handle the complexity of vector databases, embedding models, and prompt engineering to deliver accurate, hallucination-resistant AI agents that can automate customer support, analysis, and content generation tasks.",
        imageKeyword: "artificial intelligence brain",
        usps: [
            { title: "Private Deployment", desc: "Your data never leaves your VPC." },
            { title: "Hallucination Guard", desc: "Verification layers to ensure accuracy." },
            { title: "Context Window", desc: "Optimized handling of long documents." }
        ],
        pricing: [
            { name: "PoC", price: "$8k+", features: ["RAG Setup", "Prompt Eng", "Internal Tool"] },
            { name: "Production", price: "$25k+", features: ["Fine-tuning", "Vector DB", "API Integration"] },
            { name: "Enterprise", price: "Custom", features: ["On-premise", "Multi-modal", "Compliance"] }
        ]
    },
    // ... Add more if specifically requested, fallback covers edge cases
};

export const getServiceData = (id) => {
    return serviceDetails[id] || {
        title: id?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Service Detail",
        tagline: "Premium Technology Solution",
        intro: "Leveraging cutting-edge technology to deliver scalable, secure, and high-performance solutions tailored to your specific business needs.",
        projectsShipped: "50+",
        detailedDescription: "We leverage industry-leading practices and cutting-edge tools to deliver this service. Our team is dedicated to understanding your specific business requirements and tailoring our approach to meet your goals. From initial consultation to final deployment and ongoing support, we ensure a transparent and collaborative process. We prioritize code quality, security, and performance, ensuring that the solution we build for you stands the test of time and scales with your success.",
        imageKeyword: "technology abstract blue",
        usps: [
            { title: "Senior Engineering", desc: "Built by experts with deep domain knowledge." },
            { title: "Scalable Architecture", desc: "Designed to grow effortlessly with your user base." },
            { title: "Security First", desc: "Enterprise-grade protection baked in from day one." }
        ],
        pricing: [
            { name: "Essential", price: "Contact Us", features: ["Core Features", "Standard Support", "Basic UI"] },
            { name: "Professional", price: "Contact Us", features: ["Advanced Features", "Priority Support", "Custom UI"] },
            { name: "Enterprise", price: "Contact Us", features: ["Full Customization", "Dedicated Team", "SLA Assurance"] }
        ]
    };
};
