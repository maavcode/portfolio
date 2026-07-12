import { type ReactNode } from "react"
import { iconMap, type IconName } from "../../data/icon-map"

type ButtonVariant = "accent" | "ghost"
type ButtonSize = "sm" | "md" | "lg" | "xl"

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: IconName
  href?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  className?: string
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  accent: {
    background: "var(--color-accent)",
    color: "#fff",
  },
  ghost: {
    background: "color-mix(in srgb, var(--color-text-primary) 15%, transparent)",
    color: "var(--color-text-primary)",
  },
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-sm",
  xl: "px-8 py-3 text-sm",
}

export function Button({
  children,
  variant = "accent",
  size = "md",
  icon,
  href,
  type,
  onClick,
  className,
}: ButtonProps) {
  const Icon = icon ? iconMap[icon] : null
  const baseClasses =
    `inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-transform duration-300 active:scale-95 hover:scale-105 ${sizeStyles[size]} ${className ?? ""}`

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        style={variantStyles[variant]}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={`cursor-pointer ${baseClasses}`}
      style={variantStyles[variant]}
    >
      {content}
    </button>
  )
}
