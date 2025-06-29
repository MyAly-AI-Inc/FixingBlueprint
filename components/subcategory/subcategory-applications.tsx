"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface Application {
  title: string
  description: string
  imagePath: string
  imageAlt: string
  materials: string[]
}

interface SubcategoryApplicationsProps {
  category: CategoryType
  title: string
  applications: Application[]
}

export function SubcategoryApplications({ category, title, applications }: SubcategoryApplicationsProps) {
  const categoryStyle = getCategoryStyle(category)

  return (
    <div className="my-12">
      <h2 className={cn("mb-8 text-center text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}>{title}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="relative h-48 w-full">
              <Image src={app.imagePath || "/placeholder.svg"} alt={app.imageAlt} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-900">{app.title}</h3>
              <p className="mb-4 text-gray-700">{app.description}</p>
              <div className="flex flex-wrap gap-2">
                {app.materials.map((material, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      categoryStyle.tailwindClasses.accentBg,
                      categoryStyle.tailwindClasses.accentText,
                    )}
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
