"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface CardItem {
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

interface SubcategoryCardGridProps {
  category: CategoryType
  title: string
  cards: CardItem[]
}

export function SubcategoryCardGrid({ category, title, cards }: SubcategoryCardGridProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <div className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("mb-8 text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className={cn(
              "overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-800",
              categoryStyle.tailwindClasses.primaryBorder,
            )}
          >
            <div className="relative h-48 w-full">
              <Image src={card.imagePath || "/placeholder.svg"} alt={card.imageAlt} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
