import type { ReactNode } from "react"

interface TagProps {
  children: ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={`text-xs px-2.5 py-1 rounded-full ${className ?? ""}`}
      style={{
        background: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
        color: "var(--color-accent)",
      }}
    >
      {children}
    </span>
  )
}
