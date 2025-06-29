import type React from "react"
import { cn } from "@/lib/utils"

interface TextContentProps {
  children: React.ReactNode
  className?: string
}

export function TextContent({ children, className }: TextContentProps) {
  return (
    <div
      className={cn("prose prose-lg max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: children as string }}
    />
  )
}
