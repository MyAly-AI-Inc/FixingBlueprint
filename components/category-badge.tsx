import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"
import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
  category: CategoryType
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "filled" | "outlined" | "subtle"
}

export function CategoryBadge({ category, className = "", size = "md", variant = "filled" }: CategoryBadgeProps) {
  const style = getCategoryStyle(category)

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  }

  const variantClasses = {
    filled: `${style.tailwindClasses.accentBg} ${style.tailwindClasses.primaryText}`,
    outlined: `bg-transparent border ${style.tailwindClasses.primaryBorder} ${style.tailwindClasses.primaryText}`,
    subtle: `bg-opacity-10 ${style.tailwindClasses.lightBg} ${style.tailwindClasses.primaryText}`,
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      aria-label={`Category: ${style.name}`}
    >
      {style.name}
    </span>
  )
}
