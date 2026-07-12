import { motion } from "framer-motion"
import type { HeroSection } from "../../data/types"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const demo: HeroSection = {
  badge: "Lorem ipsum",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  primaryButton: { label: "Lorem ipsum", href: "#" },
}

interface Props {
  data?: HeroSection
  className?: string
}

export function Hero({ data, className }: Props) {
  const content = data || demo

  const scrollToProjects = () => {
    const el = document.getElementById("projects")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      className={`relative z-10 flex flex-col items-center gap-5 px-4 ${className ?? ""}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {content.badge && (
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
          style={{
            background: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
            border: "1px solid color-mix(in srgb, var(--color-accent) 25%, transparent)",
            color: "var(--color-accent)",
          }}
          variants={itemVariants}
        >
          {content.badge}
        </motion.span>
      )}

      <motion.h1
        className="text-5xl sm:text-6xl lg:text-6xl font-extrabold text-center tracking-tight"
        style={{
          color: "var(--color-text-primary)",
          textShadow: "0 0 30px var(--color-accent-glow), 0 0 60px var(--color-accent-glow)",
        }}
        variants={itemVariants}
      >
        {content.title}
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg max-w-lg text-center leading-relaxed"
        style={{ color: "var(--color-text-muted)" }}
        variants={itemVariants}
      >
        {content.description}
      </motion.p>

      <motion.button
        onClick={scrollToProjects}
        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-colors duration-300"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        variants={itemVariants}
      >
        {content.primaryButton.label}
      </motion.button>
    </motion.div>
  )
}
