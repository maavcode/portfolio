import { motion } from "framer-motion"

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

export function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center gap-5 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
        style={{
          background: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
          border: "1px solid color-mix(in srgb, var(--color-accent) 25%, transparent)",
          color: "var(--color-accent)",
        }}
        variants={itemVariants}
      >
        Full Stack Developer
      </motion.span>

      <motion.h1
        className="text-5xl sm:text-6xl lg:text-6xl font-extrabold text-center tracking-tight"
        style={{
          color: "var(--color-text-primary)",
          textShadow: "0 0 30px var(--color-accent-glow), 0 0 60px var(--color-accent-glow)",
        }}
        variants={itemVariants}
      >
        Mario Aguilar Avila
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg max-w-lg text-center leading-relaxed"
        style={{ color: "var(--color-text-muted)" }}
        variants={itemVariants}
      >
        I build{" "}
        <span
          className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-text-muted)] bg-clip-text text-transparent font-semibold"
        >
          full-stack web applications
        </span>{" "}
        with modern technologies.
      </motion.p>

      <motion.button
        onClick={scrollToContact}
        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-colors duration-300"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        variants={itemVariants}
      >
        Get in touch
      </motion.button>
    </motion.div>
  )
}
