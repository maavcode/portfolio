import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer
      className="py-8 px-6"
      style={{
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="flex flex-col sm:flex-row justify-between items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            &copy; 2026 All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            Made by Mario Aguilar Avila
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
