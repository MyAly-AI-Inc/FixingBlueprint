"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"
import type { LucideIcon } from "lucide-react"

interface VisualIntroCard {
  icon: LucideIcon
  title: string
  value: string
}

interface SubcategoryVisualIntroProps {
  category: CategoryType
  cards: VisualIntroCard[]
}

export function SubcategoryVisualIntro({ category, cards }: SubcategoryVisualIntroProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
          >
            <Icon className={cn("mx-auto mb-3 h-8 w-8", categoryStyle.tailwindClasses.primaryText)} />
            <h3 className="text-sm font-medium text-gray-600">{card.title}</h3>
            <p className={cn("mt-1 text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}>{card.value}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
