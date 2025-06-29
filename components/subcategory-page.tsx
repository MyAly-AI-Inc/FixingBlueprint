"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"
import { cn } from "@/lib/utils"

interface SubcategoryPageProps {
  category: CategoryType
  title: string
  description: string
  children: ReactNode
  heroImage?: string
}

export function SubcategoryPage({ category, title, description, children, heroImage }: SubcategoryPageProps) {
  const style = getCategoryStyle(category)
  const categoryPath = `/blueprint/${category}`
  const categoryName = style.name

  return (
    <div className="min-h-screen flex flex-col">
      {/* Unified Header */}
      <div className={cn("w-full", style.tailwindClasses.primaryBg)}>
        <div className="container mx-auto px-4 py-12">
          {/* Back to category link */}
          <Link
            href={categoryPath}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to {categoryName}</span>
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text content */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl">{description}</p>
            </div>

            {/* Optional hero image */}
            {heroImage && (
              <div className="w-full md:w-1/3 lg:w-2/5">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={heroImage || "/placeholder.svg"} alt={title} className="w-full h-auto object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  )
}
