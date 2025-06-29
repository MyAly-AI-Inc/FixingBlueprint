"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface SubcategoryIntroProps {
  category: CategoryType
  title?: string
  content: string
  callout?: {
    text: string
    type?: "info" | "warning" | "tip"
  }
}

export function SubcategoryIntro({ category, title, content, callout }: SubcategoryIntroProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl"
    >
      {title && <h2 className={cn("mb-6 text-3xl font-bold", categoryStyle.tailwindClasses.primaryText)}>{title}</h2>}

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>{content}</p>
      </div>

      {callout && (
        <div
          className={cn(
            "mt-8 rounded-lg p-6",
            callout.type === "warning"
              ? "bg-amber-50 dark:bg-amber-900/20"
              : callout.type === "tip"
                ? "bg-emerald-50 dark:bg-emerald-900/20"
                : `bg-${categoryStyle.tailwindClasses.accentBg.split("-")[1]}-50 dark:bg-${categoryStyle.tailwindClasses.accentBg.split("-")[1]}-900/20`,
          )}
        >
          <p
            className={cn(
              "text-lg font-medium",
              callout.type === "warning"
                ? "text-amber-800 dark:text-amber-200"
                : callout.type === "tip"
                  ? "text-emerald-800 dark:text-emerald-200"
                  : categoryStyle.tailwindClasses.secondaryText,
            )}
          >
            {callout.text}
          </p>
        </div>
      )}
    </motion.div>
  )
}
