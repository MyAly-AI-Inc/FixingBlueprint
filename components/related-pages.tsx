import type { RelatedPage } from "@/types/subcategory-page"
import { getCategoryStyle } from "@/lib/style-guide"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedPagesProps {
  pages: RelatedPage[]
  className?: string
}

export function RelatedPages({ pages, className = "" }: RelatedPagesProps) {
  if (pages.length === 0) return null

  return (
    <div className={`mt-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Related Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page, index) => {
          const style = getCategoryStyle(page.category)

          return (
            <Link
              key={index}
              href={page.href}
              className={`block p-6 border rounded-lg hover:shadow-md transition-shadow ${style.tailwindClasses.lightBg} ${style.tailwindClasses.primaryBorder}`}
            >
              <h3 className={`text-lg font-semibold mb-2 ${style.tailwindClasses.primaryText}`}>{page.title}</h3>
              <p className="text-gray-600 mb-4">{page.description}</p>
              <div className={`flex items-center text-sm font-medium ${style.tailwindClasses.primaryText}`}>
                <span>Read more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
