import type { IconName } from "./icon-map"

// ── Base ──

interface BasePage {
  title: string
  description: string
}

// ── Buttons & Stats ──

interface Button {
  label: string
  href: string
}

interface Stat {
  label: string
  value: string
}

// ── Secciones ──

interface HeroSection {
  badge?: string
  title: string
  description: string
  primaryButton: Button
}

interface AboutSection {
  title: string
  description: string
  paragraph: string
  images: string[]
  stats: Stat[]
}

interface ProjectsSection {
  title: string
  description: string
  projects: Project[]
}

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  links: {
    github: string | null
    live: string | null
  }
}

interface SkillsSection {
  title: string
  description: string
  categories: SkillCategory[]
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

interface Skill {
  name: string
  icon: string
}

interface ExperienceSection {
  title: string
  description: string
  experience: ExperienceEntry[]
}

interface ExperienceEntry {
  id: string
  company: string
  role: string
  period: string
  location: string
  website: string | null
  highlights: string[]
  techUsed: string[]
}

interface ContactSection {
  title: string
  description: string
  contactInfo: ContactInfo[]
  socials: SocialLink[]
}

interface ContactInfo {
  icon: IconName
  title: string
  description: string
}

interface SocialLink {
  name: string
  icon: IconName
  url: string
}

// ── Layout ──

interface NavbarSection {
  items: NavItem[]
}

interface NavItem {
  name: string
  url: string
  icon: IconName
}

interface FooterSection {
  copyright: string
  author: string
}

// ── Pages ──

interface HomePage extends BasePage {
  heroSection: HeroSection
  aboutSection: AboutSection
  projectsSection: ProjectsSection
  skillsSection: SkillsSection
  experienceSection: ExperienceSection
  contactSection: ContactSection
}
