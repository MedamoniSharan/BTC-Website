import { company } from "./company";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    children: [
      "Software Development",
      "IT Consulting",
      "Cloud & DevOps",
      "ServiceNow",
      "Salesforce & DevOps",
      "SAP & Enterprise",
      "Data Analytics & AI",
      "Web & App Development",
      "Software Testing & QA",
      "UI/UX Design",
      "IT Recruitment",
      "Technology Training",
    ],
  },
  { label: "Delivery", href: "#delivery" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
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
    title: "Software Development",
    desc: "Custom software, web applications, backend systems, APIs, and enterprise application development tailored to your business goals.",
    icon: icons[0],
  },
  {
    title: "IT Consulting",
    desc: "Technology consulting, digital transformation, system integration, application modernization, and end-to-end IT solutions.",
    icon: icons[1],
  },
  {
    title: "Cloud & DevOps Services",
    desc: "AWS and Microsoft Azure cloud services, CI/CD pipelines, deployment automation, cloud migration, and infrastructure monitoring.",
    icon: icons[2],
  },
  {
    title: "ServiceNow Services",
    desc: "IT Service Management (ITSM), workflow automation, platform implementation, configuration, and technical support.",
    icon: icons[3],
  },
  {
    title: "Salesforce & Salesforce DevOps",
    desc: "Salesforce platform services, CRM integration, sandbox management, automated deployments, release management, and CI/CD.",
    icon: icons[0],
  },
  {
    title: "SAP & Enterprise Applications",
    desc: "SAP-related technical services, enterprise system integration, application support, and business process technology solutions.",
    icon: icons[1],
  },
  {
    title: "Data Analytics & Artificial Intelligence",
    desc: "Data engineering, SQL, dashboards, business intelligence, machine learning, AI-enabled applications, and process automation.",
    icon: icons[2],
  },
  {
    title: "Web & Application Development",
    desc: "Java, Python, .NET, React, Angular, Node.js, and PHP development for high-performance web and application products.",
    icon: icons[3],
  },
  {
    title: "Software Testing & Quality Assurance",
    desc: "Manual testing, automation testing, API testing, regression testing, integration testing, and quality assurance.",
    icon: icons[0],
  },
  {
    title: "UI/UX Design",
    desc: "User research, wireframes, responsive interface design, usability improvement, and user experience optimization.",
    icon: icons[1],
  },
  {
    title: "IT Recruitment & Staffing",
    desc: "Technology recruitment support, technical screening, workforce augmentation, and IT talent acquisition.",
    icon: icons[2],
  },
  {
    title: "Technology Training & Skill Development",
    desc: "Technical training, practical project exposure, upskilling, career-oriented learning, and professional development programs.",
    icon: icons[3],
  },
];

export const serviceGrid = services.map(({ title, desc }) => ({ title, desc }));

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
    q: "Do you support talent development and recruitment?",
    a: "Yes. Our framework supports freshers, graduates, B.Tech candidates, diploma holders and experienced professionals through structured screening, training, project exposure and recruitment support.",
  },
];

export const testimonials = [
  {
    name: "Ananya Rao",
    role: "Operations Lead",
    text: `${company.shortName} helped us modernize delivery workflows with practical cloud and DevOps guidance. Clear communication and measurable outcomes made the partnership easy.`,
  },
  {
    name: "Karthik Menon",
    role: "Product Manager",
    text: "Their software development and QA support improved our release confidence. The team stayed focused on disciplined engineering and business outcomes.",
  },
  {
    name: "Sneha Iyer",
    role: "HR Business Partner",
    text: "The recruitment and training support from BTC Consultancy helped us build a stronger technical talent pipeline across engineering and support roles.",
  },
  {
    name: "Rahul Deshmukh",
    role: "IT Director",
    text: "From IT consulting to enterprise platforms, BTC Consultancy brought structure, transparent communication and a delivery-focused approach.",
  },
  {
    name: "Meera Shah",
    role: "Founder",
    text: "They understood our startup needs and delivered application support that was scalable, practical and aligned with our roadmap.",
  },
];
