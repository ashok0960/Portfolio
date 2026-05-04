import { Facebook, Linkedin, Github, Mail } from "lucide-react";


// Design System
export const DESIGN_SYSTEM = {
    colors: {
        primary: { from: '#3b82f6', to: '#1e3a8a', light: '#60a5fa' },
        secondary: { from: '#a855f7', to: '#6d28d9', light: '#d8b4fe' },
        accent: { from: '#06b6d4', to: '#0891b2', light: '#22d3ee' },
        dark: '#0f172a',
        darkLight: '#1e293b',
        text: '#f1f5f9',
        textMuted: '#cbd5e1',
        border: 'rgba(51, 65, 85, 0.5)',
    },
    spacing: {
        section: 'py-24 md:py-32',
        container: 'max-w-330 mx-auto px-5',
    },
    transitions: {
        smooth: 'transition-all duration-300 ease-out',
        smoothSlow: 'transition-all duration-500 ease-out',
    }
};

export const PERSONAL_INFO = {
    name: "Ashok Kumar Karki",
    title: "Full Stack Developer | React & Django",
    shortTitle: "Full Stack Developer",
    email: "Ashokkumarkarki5@gmail.com",
    phone: "+977 9810549380",
    location: "Lalitpur, Nepal",
    tagline: "Building elegant digital solutions that solve real-world problems with React, Django, and modern web technologies.",
    shortBio: "Full Stack Developer passionate about creating beautiful, performant web applications.",
    resume: "/images/resume/resume.pdf",
    bio: [
        "I'm a passionate Full Stack Developer based in Lalitpur, Nepal with 3+ years of hands-on experience architecting and building modern web applications that scale.",
        "I specialize in crafting beautiful, responsive frontends with React.js & Tailwind CSS, paired with robust, maintainable backends using Django & Django REST Framework.",
        "I love transforming complex problems into elegant, user-friendly solutions. My focus is on clean code, performance optimization, and creating experiences that users love."
    ],
    highlights: [
        "Expert in React.js ecosystem and modern JavaScript",
        "Full-stack development with Django and REST APIs",
        "Database design and optimization with PostgreSQL",
        "UI/UX focused development with Tailwind CSS",
        "Agile development and version control"
    ]
};

export const SOCIAL_LINKS = [
    { icon: Github, label: "GitHub", url: "https://github.com/ashok0960/", color: "hover:text-gray-400" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/feed//", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", url: "mailto:Ashokkumarkarki5@gmail.com", color: "hover:text-red-400" },
];

export const STATS = [
    { label: "Years Experience", value: "3+", icon: "⚡" },
    { label: "Projects Delivered", value: "25+", icon: "🚀" },
    { label: "Happy Clients", value: "18+", icon: "😊" },
    { label: "Tech Stack", value: "15+", icon: "🛠️" },
];

export const ABOUT_STATS = [
    { label: "Years Experience", value: "3+", icon: "📅" },
    { label: "Projects Completed", value: "25+", icon: "✅" },
    { label: "Happy Clients", value: "18+", icon: "👥" },
    { label: "Technologies Used", value: "15+", icon: "🔧" }
]

export const NAV_LINKS = [

    { id: "home", label: "Home", icon: "Home" },
    { id: "about", label: "About", icon: "User" },
    { id: "skills", label: "Skills", icon: "Code" },
    { id: "projects", label: "Projects", icon: "Briefcase" },
    { id: "services", label: "Services", icon: "Zap" },
    { id: "testimonials", label: "Testimonials", icon: "MessageCircle" },
    { id: "contact", label: "Contact", icon: "Mail" },
]