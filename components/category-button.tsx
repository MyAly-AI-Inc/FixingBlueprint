"use client"

import type React from "react"
import Link from "next/link"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"
import { cn } from "@/lib/utils"

interface CategoryButtonProps {
  category: CategoryType
  className?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  disabled?: boolean
}

export function CategoryButton({
  category,
  className = "",
  children,
  icon,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
}: CategoryButtonProps) {
  const style = getCategoryStyle(category)

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantClasses = {
    primary: `${style.tailwindClasses.primaryButton} hover:opacity-90 active:opacity-100`,
    secondary: `${style.tailwindClasses.secondaryButton} hover:opacity-90 active:opacity-100`,
    outline: `bg-transparent border-2 ${style.tailwindClasses.primaryBorder} ${style.tailwindClasses.primaryText} hover:bg-opacity-10 hover:${style.tailwindClasses.lightBg}`,
    ghost: `bg-transparent ${style.tailwindClasses.primaryText} hover:bg-opacity-10 hover:${style.tailwindClasses.lightBg}`,
  }

  const buttonClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
    style.tailwindClasses.focusRing,
    sizeClasses[size],
    variantClasses[variant],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className,
  )

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children || style.name}</span>
    </>
  )

  if (href && !disabled) {
    return (
      <Link href={href || style.path} className={buttonClasses} aria-label={`Go to ${style.name}`}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses} aria-label={`${style.name} action`}>
      {content}
    </button>
  )
}
