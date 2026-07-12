import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const demo = {
  copyright: "© 2026 Lorem ipsum",
  author: "Lorem ipsum",
}

interface FooterSection {
  copyright: string
  author: string
}

interface Props {
  data?: FooterSection
  className?: string
}

export function Footer({ data, className }: Props) {
  const content = data || demo
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer
      className={`py-8 px-6 ${className ?? ""}`}
      style={{
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="flex flex-col sm:flex-row justify-between items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            {content.copyright}
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            Made by {content.author}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
