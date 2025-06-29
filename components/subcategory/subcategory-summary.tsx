"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface SubcategorySummaryProps {
  category: CategoryType
  title: string
  items: string[]
}

export function SubcategorySummary({ category, title, items }: SubcategorySummaryProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <div className="mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("mb-6 text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}
      >
        {title}
      </motion.h2>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="flex items-start"
          >
            <span
              className={cn(
                "mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full text-white",
                categoryStyle.tailwindClasses.accentBg,
              )}
            >
              {index + 1}
            </span>
            <span className="text-lg text-gray-800 dark:text-gray-200">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
