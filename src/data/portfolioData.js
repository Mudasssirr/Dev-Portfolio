// =========================================================================
// SINGLE SOURCE OF TRUTH
// Every component in this portfolio reads from this file. To update your
// name, role, links, skills, experience, projects, or education — edit
// only this file. No JSX changes required.
// =========================================================================

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPhp,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiLaravel,
  SiExpress,
  SiRedux,
  SiVite,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiSocketdotio,
  SiMariadb,
  SiAxios,
} from "react-icons/si";

export const personalInfo = {
  name: "Muhammad Mudassir Awan",
  firstName: "Mudassir",
  role: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Laravel Backend Architect",
    "React Engineer",
    "AI Integration Specialist",
    "RESTful API Designer",
  ],
  summary:
    "Full-Stack Developer with over 3 years of hands-on experience architecting scalable web and mobile applications using Laravel, React & React Native. Proven track record in designing secure RESTful APIs, implementing RBAC authentication systems, integrating AI functionality, and building CMS platforms.",
  location: "Karachi, Pakistan",
  resumeUrl: "/Mudassir_Awan_Resume.pdf",
  avatarInitials: "MA",
};

export const contactInfo = {
  email: "muhammadmudassir.090@gmail.com",
  phone: "+92 3157336588",
  github: "https://github.com/Mudasssirr",
  githubLabel: "github.com/Mudasssirr",
  linkedin:
    "https://linkedin.com/in/muhammad-mudassir-awan-b98147284",
  linkedinLabel: "linkedin.com/in/muhammad-mudassir-awan-b98147284",
};

export const socialLinks = [
  { name: "GitHub", url: contactInfo.github, icon: FaGithub },
  { name: "LinkedIn", url: contactInfo.linkedin, icon: FaLinkedin },
  { name: "Email", url: `mailto:${contactInfo.email}`, icon: FaEnvelope },
  { name: "Phone", url: `tel:${contactInfo.phone}`, icon: FaPhoneAlt },
];

// -------------------------------------------------------------------------
// SKILLS — grouped by category, each with an icon + accent color
// -------------------------------------------------------------------------
export const skillCategories = [
  {
    category: "Languages",
    accent: "cyan",
    skills: [
      { name: "PHP", icon: FaPhp },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Frameworks & Libraries",
    accent: "purple",
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Vite", icon: SiVite },
      { name: "React Native", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Axios", icon: SiAxios },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
  },
  {
    category: "Databases",
    accent: "green",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MariaDB", icon: SiMariadb },
      { name: "Firebase", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Tools & Practices",
    accent: "cyan",
    skills: [
      { name: "Git / GitHub", icon: FaGitAlt },
      { name: "REST APIs", icon: FaDatabase },
      { name: "RBAC / JWT", icon: FaDatabase },
      { name: "System Design", icon: FaDatabase },
    ],
  },
];

// -------------------------------------------------------------------------
// EXPERIENCE — feeds the vertical timeline
// -------------------------------------------------------------------------
export const experience = [
  {
    id: "olive-digital",
    title: "PHP Laravel Developer",
    company: "Olive Digital Pvt Ltd",
    date: "June 2025 – Present",
    icon: "code",
    accent: "cyan",
    points: [
      "Architected scalable Laravel backends and RESTful APIs, using Yajra DataTables for server-side processing to optimize query response times by 40% on high-traffic applications.",
      "Integrated AI chatbots for customer support automation and engineered granular Role-Based Access Control (RBAC) secured via JWT/OAuth2, password hashing, and encryption.",
      "Configured Laravel Cron Jobs, queues, and observers for automated email campaigns using Mailtrap/Mailpit, alongside activity logging across 100% of sensitive transactions.",
      "Built responsive interfaces with jQuery, AJAX, Select2, and Bootstrap, and integrated DOMPDF for dynamic invoice and report generation.",
      "Conducted full-stack debugging, database indexing, and query refactoring, resolving critical production bugs and reducing system downtime by 25%.",
    ],
    tech: ["Laravel", "MySQL", "JWT/OAuth2", "AI Integration", "DOMPDF"],
  },
  {
    id: "waaps",
    title: "ReactJS Developer",
    company: "WAAPS.com",
    date: "October 2023 – April 2025",
    icon: "terminal",
    accent: "purple",
    points: [
      "Engineered scalable, responsive UIs using React, Redux, and modern JavaScript (ES6+), refactoring legacy monolithic code into reusable component libraries that reduced overall development time by 25%.",
      "Integrated complex RESTful APIs for seamless asynchronous data exchange, optimizing state management and rendering cycles to reduce page load speeds by 30%.",
      "Partnered directly with backend teams to architect, contract, and align API payloads, streamlining frontend-backend data flows and reducing API integration errors by 20%.",
      "Implemented robust global state management and custom React hooks, enhancing code maintainability and delivering cross-browser compatibility across all web applications.",
    ],
    tech: ["React", "Redux", "REST APIs", "JavaScript ES6+"],
  },
];

// -------------------------------------------------------------------------
// PROJECTS — feeds the carousel
// -------------------------------------------------------------------------
export const projects = [
  {
    id: "afc-manager",
    title: "Adult Foster Care Manager",
    tagline: "Role-based healthcare management platform",
    stack: ["Laravel", "MySQL", "Socket.io"],
    points: [
      "Engineered dynamic CRUDs and granular access controls for Nurses, Caregivers, and Admins, streamlining multi-tier patient care workflows by 40%.",
      "Implemented a Socket.io messaging system for instant, role-restricted communication between staff and caregivers, reducing operational response times by 30%.",
      "Integrated DOMPDF to automatically generate medical invoices, dynamic care reports, and patient receipts with zero manual billing errors.",
      "Utilized Yajra DataTables for server-side processing to reduce patient record loading times by 45%, with Laravel Observers logging 100% of sensitive activity for HIPAA/compliance audits.",
    ],
    link: "https://afccompass.com/",
    // repo: "#",
  },
  {
    id: "modular-cms",
    title: "Modular CMS & SaaS Architecture",
    tagline: "Package-based CMS with AI-powered modules",
    stack: ["Laravel", "MySQL", "Socket.io", "AI Integration"],
    points: [
      "Built a package-based CMS with decoupled modules (E-commerce, AI Chatbot, Email Marketing), cutting new deployment setup time by 60%.",
      "Created an in-dashboard settings system to configure dynamic .env credentials (Stripe, PayPal, Mailtrap, Mailgun) without code changes.",
      "Integrated AI APIs for smart product recommendations (\"Frequently Bought Together\"), automated inventory re-fill alerts, and customer chatbots.",
      "Implemented Socket.io for multi-role live chat and automated email campaigns, boosting user engagement by 35%.",
    ],
    // link: "#",
    repo: "https://github.com/Mudasssirr/CMS-Builder",
  },
  {
    id: "wellnest",
    title: "Wellnest — Doctor Consultation Platform",
    tagline: "Real-time telehealth booking platform",
    stack: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    points: [
      "Built dynamic doctor registration workflows with custom multi-step forms and specialization filters, cutting user search-to-booking time by 35%.",
      "Integrated Firebase Realtime Database for instant appointment scheduling and secure OAuth/JWT authentication for patients and physicians.",
      "Engineered modular, reusable React components with optimized rendering cycles, accelerating frontend feature development by 30%.",
      "Developed dynamic Medical Q&A and Health Blog modules while optimizing code-splitting and asset loading for 40% faster initial page loads.",
    ],
    link: "https://wellnestt.netlify.app/",
    repo: "https://github.com/Mudasssirr/Wellnest",
  },
];

// -------------------------------------------------------------------------
// EDUCATION
// -------------------------------------------------------------------------
export const education = [
  {
    id: "vu",
    degree: "Bachelors in Computer Science",
    institution: "Virtual University",
    date: "2026 – Present",
  },
  {
    id: "isc",
    degree: "Intermediate in Pre-Engineering",
    institution: "Islamia Science College, Karachi",
    date: "2020 – 2022",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
