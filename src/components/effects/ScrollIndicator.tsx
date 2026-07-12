import "@/styles/scroll-indicator.css"

export function ScrollIndicator() {
  return (
    <>
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden md:flex flex-col items-center gap-3"
        style={{ bottom: "2.5rem" }}
      >
        <div className="mouse-body">
          <svg width="32" height="50" viewBox="0 0 32 50" fill="none">
            <rect x="3" y="3" width="26" height="44" rx="13" stroke="currentColor" strokeWidth="2.5" />
            <circle className="mouse-wheel" cx="16" cy="18" r="3.5" fill="currentColor" />
          </svg>
        </div>
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--color-text-muted)" }}>
          Scroll
        </span>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none md:hidden"
        style={{ bottom: "6rem" }}
      >
        <div className="ball-track">
          <div className="rising-ball" />
        </div>
      </div>
    </>
  )
}
