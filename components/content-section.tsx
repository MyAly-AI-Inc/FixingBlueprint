import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  title: string
  children: ReactNode
  className?: string
  id?: string
}

export function ContentSection({ title, children, className, id }: ContentSectionProps) {
  return (
    <section id={id} className={cn("mb-12", className)}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  )
}
