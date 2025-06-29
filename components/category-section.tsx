import type { CategoryType } from "@/lib/style-guide"
import { CategoryGrid } from "@/components/category-grid"
import { cn } from "@/lib/utils"

interface CategorySectionProps {
  /**
   * Section title
   */
  title: string
  /**
   * Section description
   */
  description?: string
  /**
   * Categories to display in the grid
   */
  categories?: CategoryType[]
  /**
   * Custom class name for the section
   */
  className?: string
  /**
   * Background color for the section
   */
  background?: "white" | "light" | "dark" | "gradient"
  /**
   * Number of columns at different breakpoints
   */
  columns?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  /**
   * Card variant to use for all cards
   */
  cardVariant?: "default" | "compact" | "featured"
  /**
   * Whether to show icons in the cards
   */
  showIcons?: boolean
  /**
   * Whether to show descriptions in the cards
   */
  showDescriptions?: boolean
  /**
   * Category to highlight (will be styled differently)
   */
  highlightCategory?: CategoryType
}

export function CategorySection({
  title,
  description,
  categories,
  className,
  background = "white",
  columns = { default: 1, sm: 2, md: 3 },
  cardVariant = "default",
  showIcons = true,
  showDescriptions = true,
  highlightCategory,
}: CategorySectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    gradient: "bg-gradient-to-b from-blue-50 to-white",
  }

  return (
    <section className={cn("py-16", backgroundClasses[background], className)}>
      <div className="container mx-auto px-4">
        <CategoryGrid
          title={title}
          description={description}
          categories={categories}
          columns={columns}
          cardVariant={cardVariant}
          showIcons={showIcons}
          showDescriptions={showDescriptions}
          highlightCategory={highlightCategory}
        />
      </div>
    </section>
  )
}
