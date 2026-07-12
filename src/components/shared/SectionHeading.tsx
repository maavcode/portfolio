import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  description?: string
  children?: ReactNode
  centered?: boolean
  className?: string
}

export function SectionHeading({
  title,
  description,
  children,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col items-center${centered ? " text-center" : ""} mb-12 ${className ?? ""}`}
    >
      <h2
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h2>
      <div
        className={`w-12 h-1 rounded-full mb-6${centered ? " mx-auto" : ""}`}
        style={{ background: "var(--color-accent)" }}
      />
      {description && (
        <p
          className={`text-base max-w-xl${centered ? " mx-auto" : ""}`}
          style={{ color: "var(--color-text-muted)" }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
