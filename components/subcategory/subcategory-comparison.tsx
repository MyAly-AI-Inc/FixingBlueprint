"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface ComparisonItem {
  name: string
  properties: Record<
    string,
    {
      value: string | number
      rating?: 1 | 2 | 3 | 4 | 5
    }
  >
}

interface SubcategoryComparisonProps {
  category: CategoryType
  title: string
  description: string
  propertyLabels: Record<string, string>
  items: ComparisonItem[]
  defaultVisibleItems?: string[]
}

export function SubcategoryComparison({
  category,
  title,
  description,
  propertyLabels,
  items,
  defaultVisibleItems = [],
}: SubcategoryComparisonProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>(
    defaultVisibleItems.length > 0 ? defaultVisibleItems : items.slice(0, 3).map((item) => item.name),
  )

  const categoryStyle = getCategoryStyle(category)
  const propertyKeys = Object.keys(propertyLabels)

  const toggleItem = (itemName: string) => {
    if (visibleItems.includes(itemName)) {
      setVisibleItems(visibleItems.filter((name) => name !== itemName))
    } else {
      setVisibleItems([...visibleItems, itemName])
    }
  }

  const renderRatingStars = (rating = 0) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={cn(
              "mr-1 h-4 w-4 rounded-full",
              star <= rating ? categoryStyle.tailwindClasses.accentBg : "bg-gray-200 dark:bg-gray-700",
            )}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="mt-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className={cn("mb-4 text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}>{title}</h2>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">{description}</p>
      </motion.div>

      <div className="mb-6 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleItem(item.name)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              visibleItems.includes(item.name)
                ? cn(categoryStyle.tailwindClasses.accentBg, "text-white")
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
            )}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-4 pl-4 pr-8 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                Property
              </th>
              {items
                .filter((item) => visibleItems.includes(item.name))
                .map((item, index) => (
                  <th key={index} className="px-4 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.name}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {propertyKeys.map((key, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""}>
                <td className="py-4 pl-4 pr-8 text-left text-sm font-medium text-gray-900 dark:text-white">
                  {propertyLabels[key]}
                </td>
                {items
                  .filter((item) => visibleItems.includes(item.name))
                  .map((item, colIndex) => {
                    const property = item.properties[key]
                    return (
                      <td key={colIndex} className="px-4 py-4 text-sm text-gray-800 dark:text-gray-200">
                        {property?.rating ? renderRatingStars(property.rating) : property?.value}
                      </td>
                    )
                  })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
