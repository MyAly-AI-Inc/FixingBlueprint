import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { type CategoryType, getCategoryStyle } from "@/lib/style-guide"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  category: CategoryType
  className?: string
}

export function Breadcrumb({ items, category, className = "" }: BreadcrumbProps) {
  const style = getCategoryStyle(category)

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/blueprint" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4 mr-2" />
            Dashboard
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {item.isCurrent ? (
                <span className={`ml-1 text-sm font-medium ${style.tailwindClasses.primaryText}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="ml-1 text-sm text-gray-500 hover:text-gray-700">
                  {item.label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
