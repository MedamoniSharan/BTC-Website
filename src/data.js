import { company } from "./company";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Development", slug: "software-development" },
      { label: "IT Consulting", slug: "it-consulting" },
      { label: "Cloud & DevOps", slug: "cloud-devops" },
      { label: "ServiceNow", slug: "servicenow" },
      { label: "Salesforce & DevOps", slug: "salesforce-devops" },
      { label: "SAP & Enterprise", slug: "sap-enterprise" },
      { label: "Data Analytics & AI", slug: "data-analytics-ai" },
      { label: "Web & App Development", slug: "web-app-development" },
      { label: "Software Testing & QA", slug: "software-testing-qa" },
      { label: "UI/UX Design", slug: "ui-ux-design" },
      { label: "IT Recruitment", slug: "it-recruitment-staffing" },
      { label: "Technology Training", slug: "tech-training-development" },
    ],
  },
  { label: "Delivery", href: "/#delivery" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/contact" },
];

export const heroFeatures = [
  "Software Development & IT Consulting",
  "Cloud, DevOps & Enterprise Platforms",
  "Data, AI/ML & Quality Engineering",
  "Talent Pipeline, Training & Recruitment",
];

export const techIcons = [
  { name: "Node.js", src: "/images/icons/node-js.svg" },
  { name: "MongoDB", src: "/images/icons/mongodb.svg" },
  { name: "Flutter", src: "/images/icons/flutter.svg" },
  { name: "Automation", src: "/images/icons/automation.svg" },
  { name: "JavaScript", src: "/images/icons/javascript.svg" },
  { name: "AWS", src: "/images/icons/aws.svg" },
  { name: "HTML", src: "/images/icons/html.svg" },
  { name: "Java", src: "/images/icons/java.svg" },
  { name: "CSS", src: "/images/icons/css.svg" },
  { name: ".NET", src: "/images/icons/net.svg" },
  { name: "React", src: "/images/icons/react.svg" },
  { name: "Python", src: "/images/icons/python.svg" },
];

const icons = [
  "/assets/img/icon/serviceIcon1_1.svg",
  "/assets/img/icon/serviceIcon1_2.svg",
  "/assets/img/icon/serviceIcon1_3.svg",
  "/assets/img/icon/serviceIcon1_4.svg",
];

export const services = [
  {
    slug: "software-development",
    title: "Software Development",
    shortTitle: "Software Dev",
    category: "Engineering",
    tagline: "Custom enterprise software, robust backends, and scalable cloud architectures.",
    desc: "Custom software, web applications, backend systems, APIs, and enterprise application development tailored to your business goals.",
    icon: icons[0],
    heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80",
    overview:
      "BTC Consultancy provides full-lifecycle software development designed for high availability, security, and scalability. Whether building new SaaS products, modernizing legacy enterprise systems, or architecting microservices, our disciplined engineering practices guarantee resilient software delivery.",
    features: [
      {
        title: "Bespoke Enterprise Systems",
        desc: "Custom software architectures engineered around your proprietary workflows, operational bottlenecks, and long-term business goals.",
      },
      {
        title: "Microservices & Distributed APIs",
        desc: "High-throughput REST and GraphQL APIs with automated data validation, rate-limiting, and fault-tolerant service communication.",
      },
      {
        title: "Legacy Modernization",
        desc: "Safe refactoring and gradual migration of monolithic codebases into modular, cloud-native services with zero downtime.",
      },
      {
        title: "Enterprise Database Architecture",
        desc: "Optimized relational (PostgreSQL, MySQL, Oracle) and distributed NoSQL databases with caching layers (Redis) for microsecond latency.",
      },
    ],
    technologies: ["Java", "Python", ".NET Core", "Node.js", "Go", "PostgreSQL", "Docker", "Kubernetes", "Redis", "Kafka"],
    deliverables: [
      "Detailed Architecture Design Document (ADD)",
      "Production-Ready Clean Code Repository with CI/CD",
      "Interactive Swagger / OpenAPI Documentation",
      "Automated Unit & Integration Test Suites",
      "Production Deployment & Operational Runbook",
    ],
    benefits: [
      "Accelerated time-to-market with proven agile engineering cadences.",
      "99.9% reliability with automated error tracking and self-healing cloud design.",
      "Complete code ownership and intellectual property transfer.",
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortTitle: "IT Consulting",
    category: "Advisory",
    tagline: "Strategic digital transformation, technology roadmapping, and system integration.",
    desc: "Technology consulting, digital transformation, system integration, application modernization, and end-to-end IT solutions.",
    icon: icons[1],
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Our IT Consulting practice partners with executive leadership, CTOs, and product directors to solve complex digital roadblocks. We evaluate existing infrastructure, optimize software portfolios, reduce licensing waste, and design strategic technical roadmaps that align with business growth.",
    features: [
      {
        title: "Digital Transformation Roadmaps",
        desc: "Step-by-step technological roadmaps that modernize core business operations while managing organizational change.",
      },
      {
        title: "Architecture & Infrastructure Audits",
        desc: "Rigorous performance, security, and cost audits identifying technical debt and recommending actionable optimizations.",
      },
      {
        title: "Vendor & Tooling Evaluation",
        desc: "Objective technology selection and RFP leadership ensuring you invest in platforms that scale without vendor lock-in.",
      },
      {
        title: "Regulatory & Compliance Guidance",
        desc: "Guidance on information security standards, data privacy laws, access management, and SOC2/ISO compliance readiness.",
      },
    ],
    technologies: ["Cloud Strategy", "Enterprise Architecture", "DevOps Maturity", "Risk Assessment", "SLA Modeling", "ITIL"],
    deliverables: [
      "Current-State Technology Assessment Report",
      "Target Architecture Blueprint & 3-Year Roadmap",
      "Cloud & Licensing Cost Reduction Plan",
      "Security & Compliance Gap Analysis",
      "Executive Presentation & Change Management Plan",
    ],
    benefits: [
      "30-45% reduction in unnecessary infrastructure and software licensing costs.",
      "Clear, quantified milestone metrics and ROI for every technology investment.",
      "Minimized architectural risk before committing capital to major build phases.",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Services",
    shortTitle: "Cloud & DevOps",
    category: "Infrastructure",
    tagline: "High-performance AWS & Azure cloud infrastructure with automated CI/CD pipelines.",
    desc: "AWS and Microsoft Azure cloud services, CI/CD pipelines, deployment automation, cloud migration, and infrastructure monitoring.",
    icon: icons[2],
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    overview:
      "We design, build, and manage enterprise-grade cloud environments across AWS and Microsoft Azure. By implementing Infrastructure as Code (IaC), GitOps, automated testing pipelines, and 24/7 observability, BTC Consultancy helps teams deploy software multiple times a day with total confidence.",
    features: [
      {
        title: "Cloud Architecture & Migration",
        desc: "Seamless lift-and-shift or re-platforming to AWS and Azure with zero operational interruption and automated rollback safeguards.",
      },
      {
        title: "Automated CI/CD Pipelines",
        desc: "End-to-end continuous integration and deployment pipelines using GitHub Actions, GitLab CI, Jenkins, and ArgoCD.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        desc: "Reproducible, version-controlled infrastructure definitions using Terraform, AWS CloudFormation, and Ansible.",
      },
      {
        title: "Containerization & Kubernetes",
        desc: "Production container orchestration using Amazon EKS, Azure AKS, and Docker with auto-scaling and service mesh integration.",
      },
    ],
    technologies: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Ansible"],
    deliverables: [
      "Terraform Infrastructure as Code Repositories",
      "Hardened Multi-Environment CI/CD Automation",
      "Cloud Monitoring Dashboards & Alerting Rules",
      "Container Registry & Kubernetes Cluster Configurations",
      "Disaster Recovery & Backup Automation Plan",
    ],
    benefits: [
      "Deploy code to staging and production in minutes instead of days.",
      "Automatic scaling to handle traffic spikes effortlessly.",
      "Substantial cloud cost reduction through rightsizing and auto-shutdown policies.",
    ],
  },
  {
    slug: "servicenow",
    title: "ServiceNow Services",
    shortTitle: "ServiceNow",
    category: "Enterprise",
    tagline: "ITSM workflow automation, platform implementation, and digital workplace solutions.",
    desc: "IT Service Management (ITSM), workflow automation, platform implementation, configuration, and technical support.",
    icon: icons[3],
    heroImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    overview:
      "BTC Consultancy empowers organizations to maximize their ServiceNow platform ROI. From IT Service Management (ITSM) and IT Operations Management (ITOM) to Custom App Engine development and Service Portal UX, our certified engineers streamline business processes across departments.",
    features: [
      {
        title: "ITSM & ITOM Implementation",
        desc: "Standardized Incident, Problem, Change, and Asset Management workflows tailored to your enterprise operational models.",
      },
      {
        title: "Automated Service Catalog & Portal",
        desc: "Intuitive self-service portals and automated fulfillment workflows that eliminate manual ticket routing.",
      },
      {
        title: "Third-Party & API Integrations",
        desc: "Bidirectional integrations with Jira, Active Directory/Okta, SAP, Slack, Teams, and monitoring infrastructure.",
      },
      {
        title: "ServiceNow Upgrades & Support",
        desc: "Rigorous version upgrade management, automated test framework (ATF) verification, and 24/7 technical administration.",
      },
    ],
    technologies: ["ServiceNow ITSM", "ITOM", "Service Portal", "Flow Designer", "IntegrationHub", "ATF", "GlideScript", "REST/SOAP"],
    deliverables: [
      "Configured ServiceNow Instance with Role-Based Access",
      "Custom Workflow Automation & Flow Designer Modules",
      "Interactive Self-Service Catalog & User Portal",
      "Comprehensive ATF Regression Test Suites",
      "Platform Administration & Incident Management Guide",
    ],
    benefits: [
      "60% reduction in average ticket resolution time with intelligent routing.",
      "Real-time executive visibility into IT service delivery and SLAs.",
      "Standardized compliance with ITIL best practices.",
    ],
  },
  {
    slug: "salesforce-devops",
    title: "Salesforce & Salesforce DevOps",
    shortTitle: "Salesforce",
    category: "Enterprise",
    tagline: "CRM customization, Lightning platforms, and modern automated release management.",
    desc: "Salesforce platform services, CRM integration, sandbox management, automated deployments, release management, and CI/CD.",
    icon: icons[0],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Transform customer engagement while adopting modern release engineering with BTC Consultancy’s Salesforce services. We combine deep CRM implementation (Sales Cloud, Service Cloud, Experience Cloud) with advanced Salesforce DevOps practices to deliver bug-free metadata deployments.",
    features: [
      {
        title: "Sales & Service Cloud Customization",
        desc: "Custom Apex triggers, Lightning Web Components (LWC), and flows tailored to complex sales pipelines and support operations.",
      },
      {
        title: "Salesforce DevOps & CI/CD",
        desc: "Automated branch-to-sandbox deployment pipelines, static code analysis, and release automation with Copado and Gearset.",
      },
      {
        title: "CRM System Integration",
        desc: "Real-time bidirectional synchronization between Salesforce and ERP, billing systems, marketing automation, and internal databases.",
      },
      {
        title: "Sandbox & Data Management",
        desc: "Masked data seeding for staging sandboxes, automated metadata backup, and release conflict resolution.",
      },
    ],
    technologies: ["Salesforce CRM", "Apex", "Lightning Web Components", "Sales Cloud", "Service Cloud", "Copado", "Gearset", "SFDX"],
    deliverables: [
      "Customized Salesforce Org with Optimized Page Layouts & Workflows",
      "Modular Lightning Web Components (LWC)",
      "Automated Git-Driven CI/CD Deployment Pipeline",
      "Data Migration & Validation Scripts",
      "End-User and Admin Training Manuals",
    ],
    benefits: [
      "Eliminate manual change sets with automated, trackable Git releases.",
      "Higher sales conversion through unified 360-degree customer data.",
      "Zero downtime during scheduled platform release cycles.",
    ],
  },
  {
    slug: "sap-enterprise",
    title: "SAP & Enterprise Applications",
    shortTitle: "SAP & Enterprise",
    category: "Enterprise",
    tagline: "Core ERP integration, business process technology, and enterprise maintenance.",
    desc: "SAP-related technical services, enterprise system integration, application support, and business process technology solutions.",
    icon: icons[1],
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Enterprise systems require precision engineering and uninterrupted uptime. BTC Consultancy provides technical integration, ABAP development, data migration, and enterprise application maintenance across major corporate ERP platforms.",
    features: [
      {
        title: "Enterprise System Integration",
        desc: "Bridging ERP backbones with modern digital web interfaces, mobile apps, payment gateways, and logistics platforms.",
      },
      {
        title: "Technical ABAP & Interface Development",
        desc: "Custom reporting, data interfaces (BAPI, RFC, IDoc), and workflow customizations designed for peak performance.",
      },
      {
        title: "Enterprise Application Support",
        desc: "SLA-backed tier 1-3 technical support, defect resolution, system health monitoring, and performance tuning.",
      },
      {
        title: "Data Migration & Clean-up",
        desc: "Automated ETL extraction, validation, deduplication, and staging for enterprise-wide database upgrades.",
      },
    ],
    technologies: ["SAP ERP", "ABAP", "BAPI / IDoc", "Integration Suites", "Enterprise SQL", "Middleware", "ETL Pipelines"],
    deliverables: [
      "System Integration Specifications & Field Mapping Documents",
      "Custom Enterprise Modules & Data Connector Code",
      "Validated Migration Runbooks with Rehearsal Logs",
      "24/7 Support SLA & Escalation Matrix",
      "Enterprise Process Documentation",
    ],
    benefits: [
      "Unbroken data continuity between core financial systems and client apps.",
      "Reduced IT overhead through proactive system maintenance.",
      "Predictable operations backed by strict service level agreements.",
    ],
  },
  {
    slug: "data-analytics-ai",
    title: "Data Analytics & Artificial Intelligence",
    shortTitle: "Data & AI/ML",
    category: "Intelligence",
    tagline: "Machine learning models, predictive dashboards, and modern data warehouse engineering.",
    desc: "Data engineering, SQL, dashboards, business intelligence, machine learning, AI-enabled applications, and process automation.",
    icon: icons[2],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Unlock actionable insights and automated decision-making. BTC Consultancy helps organizations architect robust data warehouses, build interactive business intelligence dashboards, and deploy production machine learning and LLM applications.",
    features: [
      {
        title: "Data Engineering & Warehousing",
        desc: "Scalable ETL/ELT pipelines aggregating data from disparate business systems into Snowflake, BigQuery, or Amazon Redshift.",
      },
      {
        title: "BI Dashboards & Executive Analytics",
        desc: "Visual, real-time dashboards in Power BI and Tableau empowering stakeholders to track KPIs and revenue trends.",
      },
      {
        title: "Predictive Machine Learning Models",
        desc: "Custom forecasting, customer churn prediction, anomaly detection, and classification models trained on clean data.",
      },
      {
        title: "Generative AI & LLM Integration",
        desc: "Custom AI assistants, automated document processing, RAG pipelines, and intelligent semantic search implementations.",
      },
    ],
    technologies: ["Python", "SQL", "Snowflake", "BigQuery", "Power BI", "Tableau", "TensorFlow", "PyTorch", "LangChain", "OpenAI API"],
    deliverables: [
      "Automated Data Ingestion & Transformation Pipelines",
      "Interactive Real-Time Business Intelligence Dashboards",
      "Trained & Evaluated Machine Learning Models with APIs",
      "Vector Database & Retrieval-Augmented Generation (RAG) Architecture",
      "Data Governance & Data Dictionary Documentation",
    ],
    benefits: [
      "Empower management with real-time data instead of retrospective guesswork.",
      "Automate manual reporting processes, saving hundreds of engineering hours.",
      "Differentiate your digital products with intelligent AI capabilities.",
    ],
  },
  {
    slug: "web-app-development",
    title: "Web & Application Development",
    shortTitle: "Web & Apps",
    category: "Engineering",
    tagline: "High-performance React, Angular, and mobile applications built for exceptional user experiences.",
    desc: "Java, Python, .NET, React, Angular, Node.js, and PHP development for high-performance web and application products.",
    icon: icons[3],
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    overview:
      "We design and build fast, responsive, and secure web and mobile applications. By leveraging React, Angular, Node.js, and native/cross-platform mobile technologies, BTC Consultancy creates digital experiences that delight users and drive conversion.",
    features: [
      {
        title: "Single Page Applications (SPA & SSR)",
        desc: "Lightning-fast web applications built using React, Next.js, and modern CSS with server-side rendering and search engine optimization.",
      },
      {
        title: "Cross-Platform Mobile Apps",
        desc: "Native-quality mobile applications for iOS and Android built with React Native and Flutter with offline sync capabilities.",
      },
      {
        title: "Secure REST & GraphQL APIs",
        desc: "Backend services engineered for speed, secure authentication (OAuth2, JWT), and resilient third-party payment integrations.",
      },
      {
        title: "Progressive Web Applications (PWA)",
        desc: "Installable, fast-loading web apps offering native-like capabilities even in poor network environments.",
      },
    ],
    technologies: ["React", "Angular", "Next.js", "Node.js", "TypeScript", "Flutter", "React Native", "Tailwind CSS", "GraphQL"],
    deliverables: [
      "Fully Responsive Cross-Browser Web Application",
      "iOS and Android App Store Ready Builds",
      "SEO-Optimized Metadata and Fast Core Web Vitals",
      "API Documentation & Integration Specs",
      "Security Audit & Vulnerability Assessment Report",
    ],
    benefits: [
      "Sub-second load times resulting in higher engagement and lower bounce rates.",
      "Single codebase for web and mobile, slashing ongoing maintenance overhead.",
      "Scalable frontend architecture ready for millions of monthly active users.",
    ],
  },
  {
    slug: "software-testing-qa",
    title: "Software Testing & Quality Assurance",
    shortTitle: "Testing & QA",
    category: "Quality",
    tagline: "End-to-end manual and automated testing guaranteeing defect-free releases.",
    desc: "Manual testing, automation testing, API testing, regression testing, integration testing, and quality assurance.",
    icon: icons[0],
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Protect your brand reputation and software stability with our comprehensive QA engineering. BTC Consultancy implements automated regression suites, API validation, cross-browser matrices, and performance load testing so your code deploys cleanly every time.",
    features: [
      {
        title: "Test Automation Frameworks",
        desc: "Custom automated test suites using Selenium, Cypress, and Playwright integrated directly into your CI/CD delivery pipeline.",
      },
      {
        title: "API & Backend Validation",
        desc: "Automated regression, edge case validation, authentication testing, and load verification using Postman, RestAssured, and k6.",
      },
      {
        title: "Cross-Browser & Device Lab",
        desc: "Systematic device-level verification ensuring pixel-perfect layouts and responsive behavior across iOS, Android, and all modern browsers.",
      },
      {
        title: "Performance & Stress Testing",
        desc: "Simulating thousands of concurrent virtual users with JMeter to identify database bottlenecks before high-traffic events.",
      },
    ],
    technologies: ["Selenium", "Cypress", "Playwright", "Postman", "JMeter", "k6", "JUnit / TestNG", "Allure Reporting"],
    deliverables: [
      "Comprehensive Master Test Plan (MTP)",
      "Automated Test Script Repository Integrated into CI/CD",
      "Defect Tracking & Triage Reports (Jira / Azure DevOps)",
      "Load & Stress Test Benchmark Reports",
      "Formal Release Sign-Off and Quality Certificate",
    ],
    benefits: [
      "Catch 95%+ of critical bugs before they reach end users.",
      "Accelerate release cycles by replacing days of manual testing with minutes of automation.",
      "Confidence in releasing updates to production without regressions.",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    category: "Design",
    tagline: "Human-centered user interfaces, wireframes, and enterprise design systems.",
    desc: "User research, wireframes, responsive interface design, usability improvement, and user experience optimization.",
    icon: icons[1],
    heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Great software begins with intuitive user experiences. Our UI/UX design team conducts thorough user research, builds interactive prototypes in Figma, and develops design systems that bridge the gap between design vision and technical execution.",
    features: [
      {
        title: "User Research & Journey Mapping",
        desc: "In-depth user interviews, persona creation, and customer journey mapping identifying friction points in your current workflows.",
      },
      {
        title: "Wireframing & Interactive Prototypes",
        desc: "Low-to-high fidelity clickable prototypes in Figma allowing stakeholders to experience the interface before writing a line of code.",
      },
      {
        title: "Enterprise Design Systems",
        desc: "Scalable component libraries, typography scales, color tokens, and accessibility standards (WCAG 2.1 AA) for consistent interfaces.",
      },
      {
        title: "Usability Audits & Redesigns",
        desc: "Heuristic evaluations of existing legacy software with actionable UI improvements that directly increase conversion.",
      },
    ],
    technologies: ["Figma", "Adobe XD", "Design Systems", "User Research", "WCAG AA", "Prototyping", "Information Architecture"],
    deliverables: [
      "Complete Figma Design System with Reusable Component Tokens",
      "Clickable Interactive Prototype for User Testing",
      "Full User Journey Maps and Wireframes",
      "Developer Handoff Assets and Style Guide",
      "Usability Testing Synthesis & Recommendation Report",
    ],
    benefits: [
      "Significantly reduced development rework by validating UX before coding.",
      "Higher user adoption, retention, and employee productivity.",
      "Clean, modern, and accessible aesthetic that commands trust.",
    ],
  },
  {
    slug: "it-recruitment-staffing",
    title: "IT Recruitment & Staffing",
    shortTitle: "IT Staffing",
    category: "Talent",
    tagline: "Technical screening, team augmentation, and top-tier IT talent acquisition.",
    desc: "Technology recruitment support, technical screening, workforce augmentation, and IT talent acquisition.",
    icon: icons[2],
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Finding skilled, pre-screened technical talent shouldn't delay your product roadmap. BTC Consultancy provides workforce augmentation and IT recruitment, vetting candidates across engineering, cloud, data, and enterprise platforms so you onboard top talent fast.",
    features: [
      {
        title: "Technical Rigorous Screening",
        desc: "Every candidate undergoes practical coding challenges and technical architecture interviews led by senior engineers.",
      },
      {
        title: "Staff Augmentation",
        desc: "Quickly scale your internal team with dedicated developers, QA automation specialists, and DevOps engineers for 3-12 month contracts.",
      },
      {
        title: "Permanent & Direct-Hire Placement",
        desc: "Source and place high-caliber senior architects, engineering leads, and specialist roles tailored to your corporate culture.",
      },
      {
        title: "Fresh Graduate to Senior Talent",
        desc: "Pipelines spanning B.Tech, MCA, and diploma freshers up to veteran enterprise developers ready for immediate project deployment.",
      },
    ],
    technologies: ["Full-Stack Engineers", "DevOps Specialists", "ServiceNow Developers", "Data Engineers", "QA Engineers", "Cloud Architects"],
    deliverables: [
      "Pre-vetted Candidate Profiles with Technical Assessment Scorecards",
      "Rapid Shortlist within 48 to 72 Hours",
      "Coordinated Interview Schedules & Background Verification",
      "Flexible Engagement Contracts (T&M / Fixed Placement)",
      "Dedicated Account Manager and Replacement Guarantee",
    ],
    benefits: [
      "Cut hiring turnaround time by 60% with pre-screened candidates.",
      "Eliminate bad hires through real-world engineering evaluations.",
      "Flexible scaling to meet demanding project deadlines without overhead.",
    ],
  },
  {
    slug: "tech-training-development",
    title: "Technology Training & Skill Development",
    shortTitle: "Tech Training",
    category: "Talent",
    tagline: "Industry-aligned skill bootcamps, project immersion, and workforce upskilling.",
    desc: "Technical training, practical project exposure, upskilling, career-oriented learning, and professional development programs.",
    icon: icons[3],
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Bridge the gap between theoretical education and real-world software delivery. BTC Consultancy runs structured technical training and corporate upskilling programs covering modern cloud, full-stack development, QA automation, and enterprise platforms.",
    features: [
      {
        title: "Live Production Project Immersion",
        desc: "Trainees work on actual production codebases, mastering Git workflows, sprint planning, peer code reviews, and CI/CD pipelines.",
      },
      {
        title: "Corporate Upskilling & Reskilling",
        desc: "Custom training curriculum designed for enterprise teams modernizing to AWS, Kubernetes, ServiceNow, or AI/ML technologies.",
      },
      {
        title: "Career Pathways for Graduates",
        desc: "Mentorship and hands-on laboratory sessions for B.Tech, BCA, MCA, and diploma holders preparing for high-paying IT roles.",
      },
      {
        title: "Certification Readiness",
        desc: "Structured prep and mock testing for industry-recognized certifications including AWS Solutions Architect, Azure, and Salesforce.",
      },
    ],
    technologies: ["Hands-on Labs", "Git / GitHub", "Docker & AWS", "Full-Stack React/Node", "Python & SQL", "ServiceNow Training", "Mock Interviews"],
    deliverables: [
      "Curated Hands-On Courseware and Architecture Labs",
      "Capstone Project Portfolio with Verified Git Commits",
      "Weekly Technical Progress and Milestone Evaluations",
      "Industry-Recognized Certificate of Completion",
      "Mock Technical Interviews & Resume Polishing",
    ],
    benefits: [
      "Job-ready engineers with practical experience from day one.",
      "Keep internal enterprise teams up-to-date with bleeding-edge technology.",
      "Proven mentorship framework that accelerates learning retention.",
    ],
  },
];

export const serviceGrid = services.map(({ slug, title, desc }) => ({ slug, title, desc }));

export const companyStats = [
  {
    value: "10+",
    suffix: "Projects",
    label: "Projects Completed",
    desc: "Mission-critical applications, cloud transformations, and custom enterprise software successfully deployed.",
  },
  {
    value: "50+",
    suffix: "Clients",
    label: "Clients Completed",
    desc: "Trusted by high-growth startups, SMEs, educational institutions, and corporate enterprises across sectors.",
  },
  {
    value: "98%",
    suffix: "Rate",
    label: "Client Satisfaction",
    desc: "Consistently delivered through disciplined engineering, rigorous quality controls, and transparent milestones.",
  },
  {
    value: "12+",
    suffix: "Domains",
    label: "Core Technology Areas",
    desc: "From full-stack web and mobile to Cloud/DevOps, ServiceNow, Salesforce, and Data/AI engineering.",
  },
];

export const deliveryModels = [
  {
    title: "Project-based Delivery",
    desc: "Fixed-scope or milestone-oriented software and consulting engagements, priced according to scope, complexity and delivery terms.",
  },
  {
    title: "Time & Material / Capacity",
    desc: "Provision of qualified technology resources or specialist teams for defined periods, subject to contracts and client requirements.",
  },
  {
    title: "Managed Support",
    desc: "Recurring application maintenance, testing, cloud or technical support arrangements where a client requires ongoing service coverage.",
  },
  {
    title: "Talent & Training Services",
    desc: "Recruitment support, workforce augmentation and structured technology learning programs where commercially and legally applicable.",
  },
];

export const projectItems = [
  "Cloud & DevOps Transformation",
  "ServiceNow & Salesforce Delivery",
  "Enterprise Application Support",
  "Data Analytics & AI Solutions",
  "Talent & Training Programs",
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Requirements",
    desc: "We begin with discovery and documented requirements so delivery starts from a clear, approved understanding of business needs.",
  },
  {
    num: "02",
    title: "Solution Design & Planning",
    desc: "Solution design and sprint / build planning align architecture, workflows and delivery milestones before development begins.",
  },
  {
    num: "03",
    title: "Build, Test & Validate",
    desc: "Development is followed by testing, issue tracking and client validation with evidence for material releases.",
  },
  {
    num: "04",
    title: "Deploy, Support & Improve",
    desc: "Deployment, support and continuous improvement keep solutions reliable while capabilities grow across modern technology ecosystems.",
  },
];

export const qualityControls = [
  "Documented requirements and approvals before major development activities.",
  "Version control, code review and controlled release practices for software work.",
  "Confidentiality, access control and secure handling of client information according to contract and applicable law.",
  "Testing evidence, issue tracking and client acceptance records for material releases.",
];

export const targetSegments = [
  "Startups",
  "SMEs",
  "Enterprises",
  "Educational Institutions",
  "Product Companies",
  "Service Organizations",
];

export const faqs = [
  {
    q: `What services does ${company.name} provide?`,
    a: "We provide software development, IT consulting, cloud & DevOps, ServiceNow, Salesforce & Salesforce DevOps, SAP & enterprise applications, data analytics & AI, web & app development, software testing & QA, UI/UX design, IT recruitment, and technology training.",
  },
  {
    q: "How do you deliver projects?",
    a: "We use a lightweight controlled lifecycle: discovery → requirements → solution design → sprint/build planning → development → testing → client validation → deployment → support and continuous improvement. Engagements may be project-based, time-and-material, managed support, or talent/training services.",
  },
  {
    q: "How do you ensure quality and security?",
    a: "We emphasize documented requirements, version control, code review, controlled releases, confidentiality and access controls, testing evidence, issue tracking and client acceptance records.",
  },
  {
    q: "Where is BTC Consultancy located?",
    a: `We are headquartered in ${company.city}, 500081, India. Our team delivers services to clients globally.`,
  },
  {
    q: "How can I get an instant quote or speak with an expert?",
    a: "You can request an instant quote via our Get A Quote page with WhatsApp integration, or visit our Contact page to speak with our technology leadership directly.",
  },
];
