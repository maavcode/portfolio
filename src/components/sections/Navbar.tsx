import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code2, Mail, Palette } from "lucide-react"

interface NavItem {
  name: string
  url: string
  icon: typeof Home
}

const sections: NavItem[] = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Stack", url: "#stack", icon: Code2 },
  { name: "Contact", url: "#contact", icon: Mail },
]

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Home")

  useEffect(() => {
    const onScroll = () => {
      const offset = 120
      let current = sections[0].name
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].url.replace("#", ""))
        if (el && window.scrollY + offset >= el.offsetTop) {
          current = sections[i].name
          break
        }
      }
      setActiveTab(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-4 sm:pt-4 pointer-events-none">
      <div
        className="flex items-center gap-1 px-1 py-1 rounded-full pointer-events-auto"
        style={{
          background: "color-mix(in srgb, var(--color-bg-card) 85%, transparent)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--color-border)",
        }}
      >
        {sections.map(({ name, url, icon: Icon }) => {
          const isActive = activeTab === name
          const sectionId = url.replace("#", "")

          return (
            <button
              key={name}
              onClick={() => handleClick(sectionId)}
              className="relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              style={{
                color: isActive ? "var(--color-accent)" : "var(--color-text-muted)",
              }}
            >
              <span className="hidden sm:inline">{name}</span>
              <span className="sm:hidden">
                <Icon className="w-5 h-5" />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 rounded-full -z-10 pointer-events-none"
                  style={{ background: "color-mix(in srgb, var(--color-accent) 10%, transparent)" }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          )
        })}

        <a
          href="/fonts-palette"
          className="relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          style={{ color: "var(--color-text-muted)" }}
        >
          <span className="hidden sm:inline">Palette</span>
          <span className="sm:hidden">
            <Palette className="w-5 h-5" />
          </span>
        </a>
      </div>
    </div>
  )
}
