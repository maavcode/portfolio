import { motion } from "framer-motion"
import type { SkillsSection } from "../../data/types"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
}

const demo: SkillsSection = {
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet",
  categories: [
    {
      category: "Lorem",
      skills: [
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      ],
    },
  ],
}

interface Props {
  data?: SkillsSection
  className?: string
}

export function Skills({ data, className }: Props) {
  const content = data || demo
  const categories = content.categories

  return (
    <div className={`w-full max-w-4xl mx-auto px-6 ${className ?? ""}`}>
      <div className="mb-16 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          {content.title}
        </h2>
        <div
          className="w-12 h-1 rounded-full mb-6 mx-auto"
          style={{ background: "var(--color-accent)" }}
        />
        <p
          className="text-base max-w-xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          {content.description}
        </p>
      </div>

      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category.category}>
            <h3
              className="mb-4 text-lg font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {category.category}
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill) => (
                <motion.div key={skill.name} variants={staggerItem}>
                  <div
                    className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors"
                    style={{
                      background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="shrink-0"
                      loading="lazy"
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
