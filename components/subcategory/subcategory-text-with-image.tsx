"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface SubcategoryTextWithImageProps {
  category: CategoryType
  title: string
  content: string
  imagePath: string
  imageAlt: string
  imagePosition?: "left" | "right"
}

export function SubcategoryTextWithImage({
  category,
  title,
  content,
  imagePath,
  imageAlt,
  imagePosition = "right",
}: SubcategoryTextWithImageProps) {
  const categoryStyle = getCategoryStyle(category)
  const isImageRight = imagePosition === "right"

  return (
    <div className="my-12 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
      {!isImageRight && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative h-64 w-full overflow-hidden rounded-xl md:h-80 md:w-1/2"
        >
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, x: isImageRight ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <h2 className={cn("mb-4 text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}>{title}</h2>
        <p className="text-gray-700">{content}</p>
      </motion.div>

      {isImageRight && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative h-64 w-full overflow-hidden rounded-xl md:h-80 md:w-1/2"
        >
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      )}
    </div>
  )
}
