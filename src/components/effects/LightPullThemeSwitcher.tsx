import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function LightPullThemeSwitcher() {
  const toggleTheme = () => {
    const root = document.documentElement
    const current = root.getAttribute("data-theme") || "night"
    const next = current === "night" ? "day" : "night"
    root.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex flex-col items-center gap-2 text-xs sm:text-sm font-medium select-none">
        <div className="p-6">
          <motion.div
            drag="y"
            dragDirectionLock
            onDragEnd={(_, info) => {
              if (info.offset.y > 0) {
                toggleTheme()
              }
            }}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
            dragElastic={0.075}
            whileDrag={{ cursor: "grabbing" }}
            className="relative bottom-0 w-8 h-8 rounded-full cursor-grab
              bg-[radial-gradient(circle_at_center,var(--color-accent),var(--color-text-muted),var(--color-border))]
              shadow-[0_0_20px_8px_var(--color-accent-glow)]"
          >
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-[9999px] bg-[var(--color-text-muted)]" />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <div className="relative bottom-5 flex flex-col items-center text-center leading-tight tracking-tight">
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
