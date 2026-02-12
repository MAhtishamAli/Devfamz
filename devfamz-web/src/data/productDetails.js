
export const productDetails = {
    "ai-automation-suite": {
        title: "AI Automation Suite",
        tagline: "Intelligent Automation at Scale.",
        intro: "A comprehensive AI-powered automation platform that streamlines business workflows, reduces manual tasks by 80%, and integrates seamlessly with existing tools.",
        projectsShipped: "120+",
        detailedDescription: "Our AI Automation Suite combines machine learning, natural language processing, and robotic process automation to transform how businesses operate. Built on a microservices architecture, it scales effortlessly from small teams to enterprise deployments. The platform learns from user behavior, optimizes workflows automatically, and provides actionable insights through real-time analytics dashboards.",
        imageKeyword: "artificial intelligence automation",
        features: [
            "Workflow Designer with drag-and-drop interface",
            "Pre-built connectors for 200+ SaaS platforms",
            "Natural Language Processing for document analysis",
            "Custom ML model training and deployment",
            "Real-time analytics and performance monitoring",
            "Enterprise-grade security and compliance (SOC2, HIPAA)"
        ],
        useCases: [
            { title: "Customer Support", desc: "Automate ticket routing, sentiment analysis, and response suggestions using AI." },
            { title: "Data Processing", desc: "Extract, transform, and analyze data from multiple sources automatically." },
            { title: "Marketing Automation", desc: "Personalize campaigns based on behavior patterns and predictive analytics." },
            { title: "HR Operations", desc: "Streamline recruitment, onboarding, and performance review workflows." }
        ],
        techStack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis", "Kubernetes"],
        pricing: [
            { name: "Starter", price: "$499/mo", features: ["Up to 10 workflows", "50k operations/month", "Basic integrations", "Email support"] },
            { name: "Professional", price: "$1,499/mo", features: ["Unlimited workflows", "500k operations/month", "Advanced ML features", "Priority support"] },
            { name: "Enterprise", price: "Custom", features: ["On-premise deployment", "Custom ML models", "Dedicated support", "SLA guarantee"] }
        ]
    },
    "cloud-dashboard-pro": {
        title: "Cloud Dashboard Pro",
        tagline: "Unified Cloud Visibility.",
        intro: "A centralized monitoring and management platform for multi-cloud environments. Monitor AWS, Azure, and GCP from a single pane of glass.",
        projectsShipped: "95+",
        detailedDescription: "Cloud Dashboard Pro provides real-time visibility into your entire cloud infrastructure. With AI-powered cost optimization, security threat detection, and performance analytics, teams can reduce cloud spending by 40% while improving reliability. The platform aggregates metrics from all major cloud providers and presents them in customizable, role-based dashboards.",
        imageKeyword: "cloud dashboard monitoring",
        features: [
            "Multi-cloud resource inventory and tagging",
            "AI-driven cost anomaly detection and recommendations",
            "Security posture management and compliance reporting",
            "Performance monitoring with predictive alerting",
            "Automated resource rightsizing and cleanup",
            "Custom reporting and data export capabilities"
        ],
        useCases: [
            { title: "Cost Optimization", desc: "Identify idle resources, optimize instance types, and forecast spending." },
            { title: "Security Compliance", desc: "Continuous monitoring for misconfigurations and compliance violations." },
            { title: "Performance Management", desc: "Track application performance metrics across cloud providers." },
            { title: "Resource Governance", desc: "Enforce tagging policies and budget controls across teams." }
        ],
        techStack: ["React", "Node.js", "GraphQL", "TimescaleDB", "Elasticsearch", "Docker"],
        pricing: [
            { name: "Team", price: "$299/mo", features: ["Up to 500 resources", "3 cloud accounts", "7-day data retention", "Standard dashboards"] },
            { name: "Business", price: "$899/mo", features: ["Unlimited resources", "Unlimited accounts", "90-day retention", "Custom dashboards"] },
            { name: "Enterprise", price: "Custom", features: ["365-day retention", "API access", "White-label", "On-premise option"] }
        ]
    },
    "blockchain-identity-system": {
        title: "Blockchain Identity System",
        tagline: "Decentralized Trust.",
        intro: "A self-sovereign identity platform built on blockchain technology. Users control their own data while organizations verify credentials instantly and securely.",
        projectsShipped: "45+",
        detailedDescription: "Our Blockchain Identity System leverages distributed ledger technology to create tamper-proof digital identities. Unlike traditional systems, users maintain complete control over their personal data, sharing only what's necessary through cryptographic proofs. Organizations benefit from instant verification, reduced fraud, and compliance with privacy regulations like GDPR.",
        imageKeyword: "blockchain security identity",
        features: [
            "Self-sovereign identity wallets for users",
            "Zero-knowledge proof verification",
            "Credential issuance and revocation management",
            "Multi-chain support (Ethereum, Hyperledger)",
            "Biometric authentication integration",
            "Developer-friendly API and SDKs"
        ],
        useCases: [
            { title: "Educational Credentials", desc: "Universities issue verifiable diplomas that employers can instantly validate." },
            { title: "Healthcare Records", desc: "Patients control medical records while enabling secure provider access." },
            { title: "Financial KYC", desc: "Streamline customer onboarding with reusable identity verification." },
            { title: "Supply Chain", desc: "Verify product authenticity and track provenance across partners." }
        ],
        techStack: ["Solidity", "Ethereum", "IPFS", "Web3.js", "Node.js", "MongoDB"],
        pricing: [
            { name: "Developer", price: "Free", features: ["Testnet access", "Up to 1000 identities", "Community support", "Basic SDK"] },
            { name: "Growth", price: "$1,299/mo", features: ["Mainnet deployment", "50k identities", "Priority support", "Advanced features"] },
            { name: "Enterprise", price: "Custom", features: ["Private blockchain", "Unlimited identities", "Custom integration", "SLA support"] }
        ]
    },
    "iot-device-manager": {
        title: "IoT Device Manager",
        tagline: "Connect. Monitor. Control.",
        intro: "An enterprise IoT platform for managing thousands of connected devices. Real-time monitoring, over-the-air updates, and predictive maintenance capabilities.",
        projectsShipped: "78+",
        detailedDescription: "IoT Device Manager provides end-to-end lifecycle management for connected devices at scale. From secure provisioning to decommissioning, the platform handles device registration, firmware updates, telemetry collection, and remote troubleshooting. Advanced analytics powered by machine learning detect anomalies and predict failures before they occur, reducing downtime by 60%.",
        imageKeyword: "internet of things devices",
        features: [
            "Secure device provisioning with X.509 certificates",
            "Over-the-air (OTA) firmware updates",
            "Real-time telemetry and event streaming",
            "Rule engine for automated actions",
            "Predictive maintenance with ML models",
            "Geographic device mapping and fleet insights"
        ],
        useCases: [
            { title: "Smart Manufacturing", desc: "Monitor production equipment and predict maintenance needs." },
            { title: "Fleet Management", desc: "Track vehicle location, performance, and driver behavior." },
            { title: "Smart Buildings", desc: "Control HVAC, lighting, and security systems remotely." },
            { title: "Agriculture", desc: "Monitor soil conditions and automate irrigation systems." }
        ],
        techStack: ["Go", "MQTT", "InfluxDB", "Grafana", "Kubernetes", "AWS IoT Core"],
        pricing: [
            { name: "Starter", price: "$199/mo", features: ["Up to 100 devices", "Basic monitoring", "Manual updates", "Email support"] },
            { name: "Professional", price: "$799/mo", features: ["Up to 5000 devices", "Advanced analytics", "Automated OTA", "Phone support"] },
            { name: "Enterprise", price: "Custom", features: ["Unlimited devices", "Custom ML models", "On-premise deployment", "24/7 support"] }
        ]
    },
    "cms-headless-platform": {
        title: "CMS Headless Platform",
        tagline: "Content Without Boundaries.",
        intro: "A modern headless CMS built for omnichannel content delivery. Manage content once, publish everywhere - web, mobile, IoT, and beyond.",
        projectsShipped: "150+",
        detailedDescription: "Our Headless CMS separates content management from presentation, giving teams ultimate flexibility. Marketing teams enjoy an intuitive editing experience with live previews, while developers consume content via GraphQL or REST APIs. Built-in localization, workflow management, and AI-powered content recommendations make it the perfect choice for global brands managing complex content operations.",
        imageKeyword: "content management system interface",
        features: [
            "Flexible content modeling with custom types",
            "Real-time collaborative editing",
            "Multi-language and localization support",
            "Workflow and approval management",
            "AI-powered content suggestions and SEO optimization",
            "GraphQL and REST APIs with automatic documentation"
        ],
        useCases: [
            { title: "E-commerce", desc: "Manage product catalogs across web, mobile apps, and marketplaces." },
            { title: "Media Publishing", desc: "Publish articles simultaneously to website, app, and social media." },
            { title: "Corporate Communications", desc: "Centralize content for intranets, external sites, and employee apps." },
            { title: "Education", desc: "Deliver course content across LMS, mobile apps, and kiosks." }
        ],
        techStack: ["Node.js", "GraphQL", "PostgreSQL", "Elasticsearch", "React", "Redis"],
        pricing: [
            { name: "Basic", price: "$99/mo", features: ["Up to 3 users", "10k entries", "5 content types", "Email support"] },
            { name: "Professional", price: "$499/mo", features: ["Unlimited users", "100k entries", "Unlimited types", "Priority support"] },
            { name: "Enterprise", price: "Custom", features: ["On-premise option", "Custom workflows", "Dedicated support", "SLA guarantee"] }
        ]
    },
    "cybersecurity-shield": {
        title: "Cybersecurity Shield",
        tagline: "Proactive Threat Defense.",
        intro: "An AI-powered cybersecurity platform that detects, analyzes, and responds to threats in real-time. Protecting modern enterprises from evolving cyber attacks.",
        projectsShipped: "62+",
        detailedDescription: "Cybersecurity Shield uses advanced machine learning to identify anomalies and potential threats before they cause damage. The platform continuously monitors network traffic, user behavior, and system logs, correlating data from multiple sources to detect sophisticated attack patterns. Automated response capabilities neutralize threats within seconds, while detailed forensic tools help teams investigate and prevent future incidents.",
        imageKeyword: "cybersecurity network protection",
        features: [
            "Real-time threat detection with ML models",
            "Behavioral analysis for insider threat detection",
            "Automated incident response and containment",
            "Vulnerability assessment and patch management",
            "Compliance reporting (PCI-DSS, HIPAA, SOC2)",
            "Security orchestration and automation (SOAR)"
        ],
        useCases: [
            { title: "Financial Services", desc: "Detect fraud, protect customer data, and ensure regulatory compliance." },
            { title: "Healthcare", desc: "Safeguard patient records and meet HIPAA requirements." },
            { title: "E-commerce", desc: "Prevent payment fraud and protect customer information." },
            { title: "SaaS Platforms", desc: "Monitor multi-tenant environments and respond to threats instantly." }
        ],
        techStack: ["Python", "TensorFlow", "Apache Kafka", "Elasticsearch", "Splunk", "Docker"],
        pricing: [
            { name: "SMB", price: "$599/mo", features: ["Up to 100 endpoints", "Basic threat detection", "Email alerts", "Standard support"] },
            { name: "Corporate", price: "$2,499/mo", features: ["Up to 1000 endpoints", "Advanced ML detection", "SOAR integration", "24/7 support"] },
            { name: "Enterprise", price: "Custom", features: ["Unlimited endpoints", "Custom ML models", "Dedicated SOC", "On-premise option"] }
        ]
    }
};

export const getProductData = (id) => {
    return productDetails[id] || {
        title: id?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Product Detail",
        tagline: "Innovation Delivered.",
        intro: "A cutting-edge product designed to solve complex business challenges with elegant technology solutions.",
        projectsShipped: "50+",
        detailedDescription: "This product represents the culmination of extensive research, development, and real-world testing. Built with scalability, security, and user experience at its core, it addresses specific pain points while remaining flexible enough to adapt to unique business requirements. Our team continuously enhances the product based on customer feedback and emerging industry trends.",
        imageKeyword: "technology product innovation",
        features: [
            "Intuitive user interface designed for efficiency",
            "Enterprise-grade security and compliance",
            "Seamless integrations with popular tools",
            "Scalable architecture for growing businesses",
            "Real-time analytics and reporting",
            "24/7 customer support and training"
        ],
        useCases: [
            { title: "Business Operations", desc: "Streamline daily workflows and improve team productivity." },
            { title: "Data Management", desc: "Organize, analyze, and act on business-critical information." },
            { title: "Customer Engagement", desc: "Enhance customer experiences and build loyalty." },
            { title: "Strategic Planning", desc: "Make informed decisions with data-driven insights." }
        ],
        techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL"],
        pricing: [
            { name: "Starter", price: "$299/mo", features: ["Core features", "Standard support", "Cloud hosting", "Basic analytics"] },
            { name: "Professional", price: "$999/mo", features: ["Advanced features", "Priority support", "Custom integrations", "Advanced analytics"] },
            { name: "Enterprise", price: "Custom", features: ["White-label option", "Dedicated support", "On-premise deployment", "SLA guarantee"] }
        ]
    };
};
