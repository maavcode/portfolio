import type { HomePage } from "../types"

export const data: HomePage = {
  title: "Mario Avila",
  description:
    "Full Stack Developer specializing in modern web technologies.",
  heroSection: {
    badge: "Full Stack Developer",
    title: "Mario Aguilar Avila",
    description:
      "I build full-stack web applications with modern technologies.",
    primaryButton: { label: "View my projects", href: "#projects" },
  },
  aboutSection: {
    title: "About Me",
    description: "Get to know me better",
    paragraph:
      "I'm a Full Stack Developer with a passion for building modern, performant web applications. I specialize in React, Node.js, and cloud technologies, and I'm always eager to learn and take on new challenges.",
    images: [
      "/images/mario-1.jpg",
      "/images/viaje-1.jpeg",
      "/images/viaje-2.jpeg",
      "/images/viaje-3.jpeg",
    ],
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Projects", value: "10+" },
      { label: "Technologies", value: "15+" },
    ],
  },
  projectsSection: {
    title: "Projects",
    description: "A selection of projects I've built and contributed to.",
    projects: [
      {
        id: "portfolio",
        title: "Portfolio Web",
        description:
          "A personal portfolio built with Astro, React, Tailwind CSS, and Framer Motion. Features a day/night theme system, CSS star field, and draggable theme switcher.",
        tags: ["Astro", "React", "Tailwind CSS", "Framer Motion"],
        links: {
          github: "https://github.com",
          live: "https://example.com",
        },
      },
      {
        id: "coming-soon-1",
        title: "Coming Soon",
        description:
          "A placeholder for future projects. More exciting work will appear here shortly.",
        tags: ["React", "Node.js", "TypeScript"],
        links: { github: "https://github.com", live: null },
      },
    ],
  },
  skillsSection: {
    title: "Skills & Expertise",
    description:
      "A collection of technologies I'm proficient with, from languages to frameworks and tools",
    categories: [
      {
        category: "Languages",
        skills: [
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
          { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
          { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
          { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
          { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
          { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
          { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
          { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        ],
      },
      {
        category: "Frameworks & Libraries",
        skills: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
          { name: "Astro", icon: "https://cdn.simpleicons.org/astro/FF5D01" },
          { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
          { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
          { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
          { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
          { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
          { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
          { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
          { name: "Apache Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
        ],
      },
      {
        category: "Databases",
        skills: [
          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
          { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
          { name: "MariaDB", icon: "https://cdn.simpleicons.org/mariadb/003545" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
          { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
        ],
      },
      {
        category: "Tools & Platforms",
        skills: [
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
          { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
          { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
          { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
          { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800" },
          { name: "k6", icon: "https://cdn.simpleicons.org/k6/7D64FF" },
          { name: "SEO", icon: "https://cdn.simpleicons.org/google/4285F4" },
        ],
      },
    ],
  },
  experienceSection: {
    title: "Experience",
    description: "My professional journey",
    experience: [
      {
        id: "exp-1",
        company: "MIP Informatica",
        role: "Full Stack Developer",
        period: "Jun 2025 - Sep 2025",
        location: "Spain",
        website: null,
        highlights: [
          "Desarrollé y mantuve aplicaciones web full stack utilizando tecnologías modernas",
          "Colaboré en la implementación de nuevas funcionalidades y optimización de rendimiento",
          "Trabajé en equipo siguiendo metodologías ágiles para la entrega de proyectos",
        ],
        techUsed: ["React", "Node.js", "TypeScript", "PHP", "SQL"],
      },
      {
        id: "exp-2",
        company: "TechCorp Solutions",
        role: "Junior Developer",
        period: "Ene 2025 - May 2025",
        location: "Spain",
        website: null,
        highlights: [
          "Participé en el desarrollo de componentes frontend con React y TypeScript",
          "Realicé mantenimiento y corrección de bugs en aplicaciones existentes",
          "Colaboré en la migración de proyectos a arquitecturas modernas",
        ],
        techUsed: ["React", "JavaScript", "CSS3", "Git"],
      },
      {
        id: "exp-3",
        company: "StartupXYZ",
        role: "Freelance Web Developer",
        period: "Sep 2024 - Dic 2024",
        location: "Remoto",
        website: null,
        highlights: [
          "Desarrollé landing pages y sitios web para pequeños negocios",
          "Implementé diseños responsivos y optimización SEO básica",
          "Gestioné la comunicación directa con clientes para entender requisitos",
        ],
        techUsed: ["Astro", "Tailwind CSS", "JavaScript", "SEO"],
      },
    ],
  },
  contactSection: {
    title: "Contact Me",
    description:
      "Have a question or want to work together? Feel free to reach out.",
    contactInfo: [
      {
        icon: "Mail",
        title: "Email",
        description: "mario.aguilar.dev@hotmail.com",
      },
      { icon: "MapPin", title: "Location", description: "Spain" },
    ],
    socials: [
      {
        name: "GitHub",
        icon: "FaGithub",
        url: "https://github.com/maavcode",
      },
      {
        name: "LinkedIn",
        icon: "FaLinkedin",
        url: "https://www.linkedin.com/in/mario-aguilar-avila",
      },
      {
        name: "Instagram",
        icon: "FaInstagram",
        url: "https://www.instagram.com/maavcode/",
      },
      {
        name: "Twitch",
        icon: "FaTwitch",
        url: "https://www.twitch.tv/maavcode",
      },
    ],
  },
}
