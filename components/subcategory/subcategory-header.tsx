"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"
import { cn } from "@/lib/utils"

interface SubcategoryHeaderProps {
  category: CategoryType
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

export function SubcategoryHeader({ category, title, description, imagePath, imageAlt }: SubcategoryHeaderProps) {
  const [isMounted, setIsMounted] = useState(false)
  const categoryStyle = getCategoryStyle(category)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="relative h-[500px] w-full sm:h-[600px]">
        <Image src={imagePath || "/placeholder.svg"} alt={imageAlt} fill priority className="object-cover" />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b opacity-90",
            `from-${categoryStyle.tailwindClasses.accentBg.split("-")[1]}-600/90 to-${categoryStyle.tailwindClasses.accentBg.split("-")[1]}-900/95`,
          )}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href={categoryStyle.path}
              className={cn(
                "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
                "bg-white/10 text-white hover:bg-white/20",
              )}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to {categoryStyle.name}
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-3xl text-lg text-white/80 sm:text-xl"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
