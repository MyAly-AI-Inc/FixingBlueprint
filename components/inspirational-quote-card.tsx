"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

interface InspirationalQuoteCardProps {
  quote: string
  author: string
  imageSrc?: string
  explanation?: string
  category: string
  goldGradient?: string
}

export function InspirationalQuoteCard({
  quote,
  author,
  imageSrc,
  explanation,
  category,
  goldGradient = "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
}: InspirationalQuoteCardProps) {
  // Generate background color based on category
  const getCategoryColor = (category: string) => {
    if (!category) return "from-gray-800 to-gray-900"

    switch (category.toLowerCase()) {
      case "design":
        return "from-green-800 to-green-900"
      case "technical":
        return "from-blue-800 to-blue-900"
      case "business":
        return "from-purple-800 to-purple-900"
      case "advanced":
        return "from-red-800 to-red-900"
      default:
        return "from-gray-800 to-gray-900"
    }
  }

  const bgGradient = getCategoryColor(category)

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <Card className="overflow-hidden h-full border border-gray-200 shadow-md">
        <div className="relative aspect-square w-full">
          {imageSrc ? (
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={`Portrait of ${author}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`}>
              <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl">
                <span aria-hidden="true">{author.charAt(0)}</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
            <div className="max-w-xs mx-auto text-center">
              <div
                className={`${goldGradient} w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}
              >
                <Quote className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <blockquote className="text-white">
                <p className="text-xl font-medium italic mb-4">"{quote}"</p>
                <footer className="text-sm text-white text-opacity-80">
                  <cite>— {author}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        {explanation && (
          <CardContent className="p-4 bg-white">
            <p className="text-sm text-gray-700">{explanation}</p>
          </CardContent>
        )}
      </Card>
    </motion.div>
  )
}
