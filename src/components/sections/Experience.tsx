import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { ExperienceSection } from "../../data/types"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const demo: ExperienceSection = {
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet",
  experience: [
    {
      id: "demo-1",
      company: "Lorem Corp",
      role: "Lorem Developer",
      period: "Ene 2025 - actualidad",
      location: "Remoto",
      website: null,
      highlights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      techUsed: ["Lorem", "Ipsum"],
    },
  ],
}

interface Props {
  data?: ExperienceSection
  className?: string
}

export function Experience({ data, className }: Props) {
  const content = data || demo
  const experience = content.experience

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className={`w-full max-w-4xl mx-auto px-6 ${className ?? ""}`}>
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
          {content.title}
        </h2>
        <div
          className="w-12 h-1 rounded-full mb-6"
          style={{ background: "var(--color-accent)" }}
        />
        <p
          className="text-base max-w-xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          {content.description}
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative space-y-8"
      >
        <div
          className="absolute left-[7px] top-2 bottom-2 w-[2px]"
          style={{
            background: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
          }}
        />

        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            variants={staggerItem}
            className="relative pl-10"
          >
            <div
              className="absolute left-0 top-3 h-4 w-4 rounded-full border-2"
              style={{
                borderColor: "var(--color-accent)",
                background: "var(--color-bg-primary)",
              }}
            />

            <div
              className="rounded-xl p-6 transition-all duration-300"
              style={{
                background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {exp.role}
                </h3>
                <span
                  className="text-sm font-mono"
                  style={{ color: "color-mix(in srgb, var(--color-text-muted) 60%, transparent)" }}
                >
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-accent)" }}
                >
                  {exp.company}
                </span>
                <span style={{ color: "color-mix(in srgb, var(--color-text-muted) 40%, transparent)" }}>
                  •
                </span>
                <span
                  className="text-sm"
                  style={{ color: "color-mix(in srgb, var(--color-text-muted) 60%, transparent)" }}
                >
                  {exp.location}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed flex gap-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span style={{ color: "color-mix(in srgb, var(--color-accent) 50%, transparent)" }}>
                      &bull;
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.techUsed.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-0.5 rounded-full font-mono"
                    style={{
                      background: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
