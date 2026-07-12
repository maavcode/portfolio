import { useState, useEffect } from "react"

const colorDefs = [
  { label: "Background", cssVar: "--color-bg-primary" },
  { label: "Card", cssVar: "--color-bg-card" },
  { label: "Text", cssVar: "--color-text-primary" },
  { label: "Muted", cssVar: "--color-text-muted" },
  { label: "Accent", cssVar: "--color-accent" },
  { label: "Accent Glow", cssVar: "--color-accent-glow" },
  { label: "Border", cssVar: "--color-border" },
]

const fonts = [
  { role: "Heading 1", text: "Mario Avila", className: "text-4xl sm:text-5xl font-extrabold tracking-tight" },
  { role: "Heading 2", text: "Section Title", className: "text-3xl font-bold" },
  { role: "Heading 3", text: "Card Title", className: "text-xl font-semibold" },
  { role: "Body", text: "The quick brown fox jumps over the lazy dog. Full stack developer crafting digital experiences.", className: "text-base font-normal leading-relaxed" },
  { role: "Body Small", text: "Secondary information and metadata.", className: "text-sm text-[var(--color-text-muted)]" },
  { role: "Accent", text: "Highlighted Text", className: "text-base font-medium text-[var(--color-accent)]" },
  { role: "Caption", text: "Optional caption or timestamp", className: "text-xs text-[var(--color-text-muted)] font-mono" },
]

function readAllCssVars(): Record<string, string> {
  const style = getComputedStyle(document.documentElement)
  const vals: Record<string, string> = {}
  for (const { cssVar } of colorDefs) {
    vals[cssVar] = style.getPropertyValue(cssVar).trim()
  }
  return vals
}

export function PaletteShowcase() {
  const [theme, setTheme] = useState("night")
  const [values, setValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const current = root.getAttribute("data-theme") || "night"
    setTheme(current)
    setValues(readAllCssVars())

    const observer = new MutationObserver(() => {
      const t = root.getAttribute("data-theme") || "night"
      setTheme(t)
      setValues(readAllCssVars())
    })
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] })
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="palette"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Palette
      </h2>
      <p className="text-[var(--color-text-muted)] text-base sm:text-lg mb-8 text-center max-w-md">
        Colors adapt to the current theme &mdash; toggle it above.
      </p>
      <span className="inline-block text-sm font-mono px-3 py-1 rounded-full border border-[var(--color-border)] mb-12 text-[var(--color-text-muted)] transition-colors duration-800">
        {theme === "night" ? "Night" : "Day"}
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
        {colorDefs.map((c) => (
          <div
            key={c.cssVar}
            className="rounded-xl p-4 flex flex-col gap-3 transition-colors duration-800"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              className="w-full h-20 rounded-lg transition-colors duration-800"
              style={{
                background: `var(${c.cssVar})`,
                border: c.label === "Border" ? "1px solid var(--color-border)" : "none",
              }}
            />
            <div className="text-sm font-medium">{c.label}</div>
            <code className="text-xs text-[var(--color-text-muted)] font-mono">
              {values[c.cssVar] ?? "—"}
            </code>
          </div>
        ))}
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-24 text-center">
        Font
      </h2>
      <p className="text-[var(--color-text-muted)] text-base sm:text-lg mb-12 text-center">
        Inter
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {fonts.map((f) => (
          <div
            key={f.role}
            className="rounded-xl p-5 transition-colors duration-800"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              backdropFilter: "blur(20px)",
            }}
          >
            <p className={f.className + " transition-colors duration-800 mb-1"}>
              {f.text}
            </p>
            <p className="text-xs text-[var(--color-text-muted)] font-mono">
              {f.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
