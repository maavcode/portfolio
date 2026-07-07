import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "15+" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto px-6">
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
          About Me
        </h2>
        <div
          className="w-12 h-1 rounded-full mb-6"
          style={{ background: "var(--color-accent)" }}
        />
        <p
          className="text-base max-w-xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          Get to know me better
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden"
          style={{
            background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
            border: "1px solid var(--color-border)",
          }}
          variants={itemVariants}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-6xl sm:text-7xl font-extrabold tracking-tight select-none"
              style={{ color: "color-mix(in srgb, var(--color-accent) 20%, transparent)" }}
            >
              MA
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              I'm a Full Stack Developer with a passion for building modern,
              performant web applications. I specialize in React, Node.js, and
              cloud technologies, and I'm always eager to learn and take on new
              challenges.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-3"
            variants={itemVariants}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{
                  background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs sm:text-sm leading-tight"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 w-fit"
            style={{ color: "var(--color-accent)" }}
            whileHover={{ gap: "0.625rem" }}
            variants={itemVariants}
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
