"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface ExpertTip {
  tip: string
  author: string
  role: string
  avatarPath: string
}

interface SubcategoryExpertTipsProps {
  category: CategoryType
  title: string
  tips: ExpertTip[]
}

export function SubcategoryExpertTips({ category, title, tips }: SubcategoryExpertTipsProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <div className="my-12">
      <h2 className={cn("mb-8 text-center text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}>{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src={tip.avatarPath || "/placeholder.svg"} alt={tip.author} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{tip.author}</h3>
                <p className="text-sm text-gray-500">{tip.role}</p>
              </div>
            </div>
            <p className="italic text-gray-700">&ldquo;{tip.tip}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
