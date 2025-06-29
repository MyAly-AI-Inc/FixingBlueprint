"use client"

import { useState, useEffect } from "react"
import type { ContentSection } from "@/types/subcategory-page"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  sections: ContentSection[]
  className?: string
}

export function TableOfContents({ sections, className = "" }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.anchor)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.anchor)
        if (element) observer.unobserve(element)
      })
    }
  }, [sections])

  return (
    <nav className={`hidden lg:block sticky top-24 ${className}`}>
      <h2 className="text-sm font-semibold text-gray-900 mb-4">On this page</h2>
      <ul className="space-y-3 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.anchor}`}
              className={cn(
                "block text-gray-500 hover:text-gray-900 transition-colors",
                activeSection === section.anchor && "text-blue-600 font-medium",
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
