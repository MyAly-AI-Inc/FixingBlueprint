import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"
import { cn } from "@/lib/utils"

interface RelatedPageProps {
  title: string
  description: string
  href: string
  category: CategoryType
}

interface RelatedContentProps {
  title?: string
  pages: RelatedPageProps[]
}

export function RelatedContent({ title = "Related Content", pages }: RelatedContentProps) {
  if (pages.length === 0) return null

  return (
    <div className="mt-16 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => {
          const style = getCategoryStyle(page.category)

          return (
            <Link
              key={index}
              href={page.href}
              className={cn(
                "block p-6 rounded-lg transition-all",
                "hover:shadow-md hover:-translate-y-1",
                style.tailwindClasses.cardBg,
              )}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">{page.title}</h3>
              <p className="text-white/80 text-sm mb-4">{page.description}</p>
              <div className="flex items-center text-white/90 text-sm font-medium">
                <span>Learn more</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
