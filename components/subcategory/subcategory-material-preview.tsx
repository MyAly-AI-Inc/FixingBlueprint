"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface MaterialPreview {
  name: string
  imagePath: string
  color: string
}

interface SubcategoryMaterialPreviewProps {
  category: CategoryType
  materials: MaterialPreview[]
}

export function SubcategoryMaterialPreview({ category, materials }: SubcategoryMaterialPreviewProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 pb-4">
        {materials.map((material, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex-shrink-0"
          >
            <div className="group cursor-pointer">
              <div className="relative h-20 w-20 overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md">
                <Image
                  src={material.imagePath || "/placeholder.svg"}
                  alt={material.name}
                  fill
                  className="object-cover"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100",
                  )}
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-gray-700">{material.name}</p>
              <div className="mx-auto mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: material.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
