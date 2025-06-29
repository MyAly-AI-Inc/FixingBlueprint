import { type CategoryType, getAllCategoryStyles } from "@/lib/style-guide"
import { CategoryCard } from "@/components/category-card"
import { cn } from "@/lib/utils"

interface CategoryGridProps {
  /**
   * Categories to display in the grid. If not provided, all categories will be shown.
   */
  categories?: CategoryType[]
  /**
   * Custom class name for the grid container
   */
  className?: string
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
   * Gap between grid items
   */
  gap?: string
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
  /**
   * Custom title for the grid section
   */
  title?: string
  /**
   * Custom description for the grid section
   */
  description?: string
}

export function CategoryGrid({
  categories,
  className,
  columns = { default: 1, sm: 2, md: 3 },
  gap = "gap-6",
  cardVariant = "default",
  showIcons = true,
  showDescriptions = true,
  highlightCategory,
  title,
  description,
}: CategoryGridProps) {
  // If no categories are provided, use all available categories
  const allCategories = Object.keys(getAllCategoryStyles()) as CategoryType[]
  const categoriesToShow = categories || allCategories

  // Generate grid column classes
  const getGridCols = () => {
    const colClasses = []
    colClasses.push(`grid-cols-${columns.default}`)
    if (columns.sm) colClasses.push(`sm:grid-cols-${columns.sm}`)
    if (columns.md) colClasses.push(`md:grid-cols-${columns.md}`)
    if (columns.lg) colClasses.push(`lg:grid-cols-${columns.lg}`)
    if (columns.xl) colClasses.push(`xl:grid-cols-${columns.xl}`)
    return colClasses.join(" ")
  }

  return (
    <div className={className}>
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
          {description && <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>}
        </div>
      )}

      <div className={cn(`grid ${getGridCols()} ${gap}`)} role="grid" aria-label={title || "Category grid"}>
        {categoriesToShow.map((category) => (
          <div key={category} role="gridcell">
            <CategoryCard
              category={category}
              variant={category === highlightCategory ? "featured" : cardVariant}
              showIcon={showIcons}
              showDescription={showDescriptions}
              className={category === highlightCategory ? "transform scale-105 shadow-lg" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
