"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface SubcategoryCTAProps {
  category: CategoryType
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export function SubcategoryCTA({ category, title, description, buttonText, buttonLink }: SubcategoryCTAProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mt-16 rounded-lg p-8 text-center shadow-sm",
        `bg-${categoryStyle.tailwindClasses.accentBg.split("-")[1]}-50 dark:bg-${categoryStyle.tailwindClasses.accentBg.split("-")[1]}-900/20`,
      )}
    >
      <h2 className={cn("text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}>{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-700 dark:text-gray-300">{description}</p>
      <Link
        href={buttonLink}
        className={cn(
          "mt-6 inline-flex items-center rounded-lg px-6 py-3 font-medium text-white",
          categoryStyle.tailwindClasses.primaryButton,
        )}
      >
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  )
}
