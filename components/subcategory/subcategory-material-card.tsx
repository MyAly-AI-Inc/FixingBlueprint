"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Zap, Thermometer, Shield, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface MaterialProperty {
  icon: "strength" | "temperature" | "durability" | "cost"
  rating: 1 | 2 | 3 | 4 | 5
}

interface MaterialCard {
  title: string
  subtitle: string
  imagePath: string
  imageAlt: string
  properties: MaterialProperty[]
  colors: string[]
}

interface SubcategoryMaterialCardProps {
  category: CategoryType
  card: MaterialCard
  index: number
}

const propertyIcons = {
  strength: Zap,
  temperature: Thermometer,
  durability: Shield,
  cost: DollarSign,
}

export function SubcategoryMaterialCard({ category, card, index }: SubcategoryMaterialCardProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={card.imagePath || "/placeholder.svg"}
          alt={card.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{card.subtitle}</p>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {card.properties.map((property, idx) => {
            const Icon = propertyIcons[property.icon]
            return (
              <div key={idx} className="text-center">
                <Icon className="mx-auto h-5 w-5 text-gray-400" />
                <div className="mt-1 flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={cn(
                        "mx-0.5 h-1.5 w-1.5 rounded-full",
                        star <= property.rating ? categoryStyle.tailwindClasses.accentBg : "bg-gray-200",
                      )}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex gap-1">
          {card.colors.map((color, idx) => (
            <div key={idx} className="h-6 w-6 rounded-full border border-gray-200" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
