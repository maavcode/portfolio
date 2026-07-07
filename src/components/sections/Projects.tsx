import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Code2 } from "lucide-react"

const projects = [
  {
    title: "Portfolio Web",
    description:
      "A personal portfolio built with Astro, React, Tailwind CSS, and Framer Motion. Features a day/night theme system, CSS star field, and draggable theme switcher.",
    tags: ["Astro", "React", "Tailwind CSS", "Framer Motion"],
    links: { github: "https://github.com", live: "https://example.com" },
  },
  {
    title: "Coming Soon",
    description:
      "A placeholder for future projects. More exciting work will appear here shortly.",
    tags: ["React", "Node.js", "TypeScript"],
    links: { github: "https://github.com", live: null },
  },
  {
    title: "Coming Soon",
    description:
      "A placeholder for future projects. More exciting work will appear here shortly.",
    tags: ["React", "Node.js", "TypeScript"],
    links: { github: "https://github.com", live: null },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const initialLetters = (title: string) =>
  title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div
      ref={ref}
      className="w-full max-w-5xl mx-auto px-6"
    >
      <motion.div
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Projects
        </h2>
        <div
          className="w-12 h-1 rounded-full mb-6"
          style={{ background: "var(--color-accent)" }}
        />
        <p
          className="text-base max-w-xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          A selection of projects I've built and contributed to.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="group rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
              border: "1px solid var(--color-border)",
            }}
            variants={cardVariants}
          >
            <div
              className="relative aspect-video flex items-center justify-center overflow-hidden"
              style={{
                background: "color-mix(in srgb, var(--color-accent) 15%, transparent)",
              }}
            >
              <span
                className="text-3xl sm:text-4xl font-extrabold tracking-tight select-none"
                style={{
                  color: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                }}
              >
                {initialLetters(project.title)}
              </span>

              <div
                className="absolute inset-0 hidden md:flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "color-mix(in srgb, var(--color-bg-primary) 70%, transparent)",
                }}
              >
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105"
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
                    }}
                  >
                    <Code2 className="w-4 h-4" />
                    Github
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105"
                    style={{
                      background: "color-mix(in srgb, var(--color-text-primary) 15%, transparent)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5 flex-1">
              <h3
                className="text-lg font-semibold leading-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background:
                        "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex md:hidden justify-between gap-3 pt-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-transform duration-300 active:scale-95"
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
                    }}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    Github
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-transform duration-300 active:scale-95"
                    style={{
                      background: "color-mix(in srgb, var(--color-text-primary) 15%, transparent)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
