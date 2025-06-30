"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MobileGridProps {
  children: React.ReactNode
  columns?: {
    mobile: 1 | 2
    tablet: 2 | 3 | 4
    desktop: 3 | 4 | 5 | 6
  }
  gap?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const gapClasses = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
}

export function MobileGrid({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "md",
  className = "",
}: MobileGridProps) {
  const gridClasses = cn(
    "grid",
    `grid-cols-${columns.mobile}`,
    `md:grid-cols-${columns.tablet}`,
    `lg:grid-cols-${columns.desktop}`,
    gapClasses[gap],
    className,
  )

  return (
    <div className={gridClasses}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </div>
  )
}
