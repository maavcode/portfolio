import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { ProjectsSection } from "../../data/types"
import { SectionHeading } from "../shared/SectionHeading"
import { Button } from "../shared/Button"
import { Tag } from "../shared/Tag"

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

const demo: ProjectsSection = {
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet",
  projects: [
    {
      id: "demo-1",
      title: "Lorem Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["Lorem", "Ipsum"],
      links: { github: "#", live: null },
    },
  ],
}

interface Props {
  data?: ProjectsSection
  className?: string
}

export function Projects({ data, className }: Props) {
  const content = data || demo
  const projects = content.projects

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className={`w-full max-w-5xl mx-auto px-6 ${className ?? ""}`}>
      <SectionHeading title={content.title} description={content.description} />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
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
                  <Button variant="accent" size="md" icon="Code2" href={project.links.github}>
                    Github
                  </Button>
                )}
                {project.links.live && (
                  <Button variant="ghost" size="md" icon="ExternalLink" href={project.links.live}>
                    Live Demo
                  </Button>
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
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex md:hidden justify-between gap-3 pt-2">
                {project.links.github && (
                  <Button variant="accent" size="sm" icon="Code2" href={project.links.github} className="flex-1 justify-center">
                    Github
                  </Button>
                )}
                {project.links.live && (
                  <Button variant="ghost" size="sm" icon="ExternalLink" href={project.links.live} className="flex-1 justify-center">
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
