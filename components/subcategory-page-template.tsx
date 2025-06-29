"use client"

import type { SubcategoryPageProps } from "@/types/subcategory-page"
import { getCategoryStyle } from "@/lib/style-guide"
import { CategoryHero } from "./category-hero"
import { TableOfContents } from "./table-of-contents"
import { ContentBlockRenderer } from "./content-blocks/content-block-renderer"
import { RelatedPages } from "./related-pages"
import { Breadcrumb } from "./breadcrumb"
import { usePathname } from "next/navigation"

export function SubcategoryPageTemplate({
  category,
  title,
  description,
  heroImage,
  sections,
  relatedPages,
  showTableOfContents = true,
}: SubcategoryPageProps) {
  const style = getCategoryStyle(category)
  const pathname = usePathname()

  // Generate breadcrumb items
  const categoryPath = pathname.split("/").slice(0, 3).join("/")
  const categoryName = style.name

  const breadcrumbItems = [
    {
      label: categoryName,
      href: categoryPath,
    },
    {
      label: title,
      href: pathname,
      isCurrent: true,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <CategoryHero category={category} title={title} description={description} imageUrl={heroImage} />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} category={category} className="mb-8" />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {sections.map((section) => (
              <section key={section.id} id={section.anchor} className="mb-12 scroll-mt-24">
                <h2 className={`text-2xl font-bold mb-6 text-brand-text-heading dark:text-gray-200`}>
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.blocks.map((block) => (
                    <ContentBlockRenderer key={block.id} block={block} />
                  ))}
                </div>
              </section>
            ))}

            {/* Related Pages */}
            <RelatedPages pages={relatedPages} />
          </div>

          {/* Table of Contents Sidebar */}
          {showTableOfContents && sections.length > 1 && (
            <div className="w-64 flex-shrink-0">
              <TableOfContents sections={sections} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
