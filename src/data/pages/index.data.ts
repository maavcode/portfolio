import type { HomePage } from "../types"

export const data: HomePage = {
  title: "Mario Avila",
    description:
      "Full Stack Developer passionate about building modern applications, APIs, and integrations.",
  heroSection: {
    badge: "Full Stack Developer",
    title: "Mario Aguilar Avila",
    description:
      "I build full-stack applications with modern technologies, from web interfaces to REST APIs and system integrations.",
    primaryButton: { label: "View my projects", href: "#projects" },
  },
  aboutSection: {
    title: "About Me",
    description: "Get to know me better",
    paragraphs: [
      "Full Stack Developer with experience in building web applications, REST APIs, and system integrations. Passionate about clean code, performance optimization, and best practices.",
      "Self-driven and always eager to learn new technologies. I'm looking for an opportunity where I can contribute, keep growing, and work as part of a team.",
    ],
    images: [
      "/images/mario-1.jpg",
      "/images/viaje-1.jpeg",
      "/images/viaje-2.jpeg",
      "/images/viaje-3.jpeg",
    ],
    stats: [
      { label: "Technologies", value: "15+" },
      { label: "Projects", value: "5+" },
      { label: "Conferences", value: "3+" },
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
          github: "https://github.com/maavcode/portfolio",
          live: null,
        },
      },
      {
        id: "store-desktop",
        title: "Store Manager (Desktop)",
        description:
          "Desktop application built with .NET, C# and Entity Framework for my final degree project. Manages inventory, sales and suppliers with a local database.",
        tags: [".NET", "C#", "Entity Framework", "WPF"],
        links: { github: "https://github.com/maavcode/project-VeMoGO", live: null },
      },
      {
        id: "store-mobile",
        title: "Store Manager (Mobile)",
        description:
          "Mobile application developed with Kotlin and Spring Boot for my final degree project. Features MVVM architecture, REST API integration and cloud-ready deployment.",
        tags: ["Kotlin", "Spring Boot", "MVVM", "REST API"],
        links: { github: "https://github.com/maavcode/project-VeMoGO", live: null },
      },
      {
        id: "coming-soon-1",
        title: "Coming Soon",
        description:
          "More exciting projects are on the way. Stay tuned for future updates.",
        tags: ["React", "Node.js", "TypeScript"],
        links: { github: null, live: null },
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
        period: "2025 - 2026",
        location: "Spain",
        website: null,
        highlights: [
          "Developed the company's official website and 5+ pages with Astro/React, optimized for SEO, accessibility and performance, increasing traffic",
          "Implemented a reusable component system that reduced page development time by ~30%",
          "Built internal applications with Laravel + Filament, integrated with an S3 file server via SeaweedFS, improving internal document management",
          "Centralized logs with Grafana/Loki/Logstash and integrated load testing with k6, reducing error diagnosis time by ~25%",
        ],
        techUsed: ["Astro", "React", "Laravel", "PHP", "TypeScript", "Grafana", "k6", "Docker"],
      },
    ],
  },
  contactSection: {
    title: "Contact Me",
    description:
      "Have a project in mind or want to discuss an opportunity? Let's talk.",
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
