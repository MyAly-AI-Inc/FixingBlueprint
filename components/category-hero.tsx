import type React from "react"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"
import { cn } from "@/lib/utils"
import { BookOpen, CuboidIcon as Cube, Cog, Briefcase, Zap, Library, type LucideIcon } from "lucide-react"

// Map of category types to their respective icons
const categoryIcons: Record<CategoryType, LucideIcon> = {
  fundamentals: BookOpen,
  "design-modeling": Cube,
  "technical-skills": Cog,
  "business-and-entrepreneurship": Briefcase,
  "advanced-topics": Zap,
  resources: Library,
}

interface CategoryHeroProps {
  category: CategoryType
  title?: string
  description?: string
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
  imageUrl?: string
}

export function CategoryHero({
  category,
  title,
  description,
  className = "",
  children,
  showIcon = true,
  imageUrl,
}: CategoryHeroProps) {
  const style = getCategoryStyle(category)
  const IconComponent = categoryIcons[category]

  return (
    <section className={cn("relative overflow-hidden py-16 md:py-24 pt-20", className)}>
      {/* Background gradient */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", style.tailwindClasses.heroGradient)} />

      {/* Optional background image */}
      {imageUrl && (
        <div className="absolute inset-0 mix-blend-overlay opacity-20">
          <img src={imageUrl || "/placeholder.svg"} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
      )}

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <div className="flex items-center gap-4 mb-6">
            {showIcon && IconComponent && (
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title || style.name}</h1>
          </div>

          {description && (
            <p className="text-xl md:text-2xl text-white text-opacity-90 mt-4">{description || style.description}</p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
