import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SubcategorySectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export function SubcategorySection({ id, className, children }: SubcategorySectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
