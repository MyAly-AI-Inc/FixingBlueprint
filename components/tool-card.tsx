"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Star, CheckCircle2, XCircle, ExternalLink, Gift, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"
import { cn } from "@/lib/utils"

export interface Tool {
  id: string
  name: string
  icon: string
  badgeText: string
  badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "success" | "premium" | "warning"
  freeModels: string
  speed: string
  quality: number
  description: string
  pros: string[]
  cons: string[]
  bestFor: string
  website?: string
  primaryScreenshot: string // Changed from optional
  thumbnails: string[] // Array of thumbnail URLs
}

interface ToolCardProps {
  tool: Tool
}

const StarRating: React.FC<{ rating: number; maxRating?: number }> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          className={cn("h-5 w-5", i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600")} // Increased size
        />
      ))}
    </div>
  )
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(tool.primaryScreenshot)

  const getBadgeVariant = (text: string) => {
    if (text.includes("FREE") || text.includes("BEGINNERS")) return "success"
    if (text.includes("PREMIUM") || text.includes("DETAILED") || text.includes("DESIGNER")) return "premium"
    if (text.includes("FASTEST")) return "default"
    if (text.includes("EDITOR")) return "secondary"
    return "default"
  }

  return (
    <motion.div
      className="bg-gray-800/60 border border-green-500/40 rounded-xl shadow-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-green-500/40" // Increased rounding and shadow
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="p-5 md:p-6 cursor-pointer flex justify-between items-center" // Increased padding
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`tool-details-${tool.id}`}
        whileTap={{ backgroundColor: "rgba(50, 205, 50, 0.1)" }}
      >
        <div className="flex items-center space-x-4">
          {" "}
          {/* Increased spacing */}
          <span className="text-3xl">{tool.icon}</span> {/* Increased size */}
          <h3 className="text-2xl font-semibold text-green-300">{tool.name}</h3> {/* Increased size */}
          <Badge variant={getBadgeVariant(tool.badgeText)} className="text-sm px-2.5 py-1">
            {" "}
            {/* Increased size */}
            {tool.badgeText}
          </Badge>
        </div>
        <ChevronDown
          className={cn("h-7 w-7 text-gray-400 transition-transform duration-300", isOpen && "transform rotate-180")} // Increased size
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`tool-details-${tool.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }} // Slightly slower for smoother feel
            className="border-t border-green-500/40"
          >
            <div className="p-5 md:p-6 space-y-6">
              {" "}
              {/* Increased padding and spacing */}
              {/* Image Gallery Section */}
              <div className="mb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900/80 p-2 rounded-lg border border-green-700/60 aspect-video flex items-center justify-center text-gray-500 mb-3"
                  >
                    <OptimizedImage
                      src={activeImage}
                      alt={`${tool.name} - ${activeImage === tool.primaryScreenshot ? "UI" : "Example Output"}`}
                      width={600}
                      height={338}
                      className="object-contain rounded-md max-h-[300px]" // Ensure it fits
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="flex space-x-2 justify-center">
                  {[tool.primaryScreenshot, ...tool.thumbnails].map((imgSrc, index) => (
                    <motion.button
                      key={imgSrc + index}
                      onClick={() => setActiveImage(imgSrc)}
                      className={cn(
                        "w-20 h-12 rounded-md overflow-hidden border-2 transition-all",
                        activeImage === imgSrc ? "border-green-400 scale-105" : "border-gray-700 hover:border-gray-500",
                      )}
                      whileHover={{ scale: activeImage === imgSrc ? 1.05 : 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <OptimizedImage
                        src={imgSrc}
                        alt={`Thumbnail ${index + 1}`}
                        width={80}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">{tool.description}</p> {/* Increased size */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-base mb-4">
                {" "}
                {/* Increased size and gap */}
                <span className="flex items-center">
                  <Gift className="h-5 w-5 mr-2 text-sky-400" /> Free Models: {tool.freeModels}
                </span>
                <span className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-orange-400" /> Speed: {tool.speed}
                </span>
                <span className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-400" /> Quality: <StarRating rating={tool.quality} />
                </span>
              </div>
              <p className="text-base text-gray-400 mb-2 font-semibold">
                {" "}
                {/* Increased size */}
                Best for: <span className="font-normal text-gray-300">{tool.bestFor}</span>
              </p>
              {tool.website && (
                <Button
                  variant="link"
                  size="lg"
                  asChild
                  className="p-0 h-auto text-sky-400 hover:text-sky-300 text-base"
                >
                  {" "}
                  {/* Increased size */}
                  <a href={tool.website} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="h-4 w-4 ml-1.5" />
                  </a>
                </Button>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-green-500/30">
                {" "}
                {/* Increased gap and added padding-top */}
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Pros:</h4> {/* Increased size */}
                  <ul className="list-none space-y-1.5 text-base">
                    {" "}
                    {/* Increased size and spacing */}
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />{" "}
                        {/* Increased size */}
                        <span className="text-gray-300">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Cons:</h4> {/* Increased size */}
                  <ul className="list-none space-y-1.5 text-base">
                    {" "}
                    {/* Increased size and spacing */}
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" /> {/* Increased size */}
                        <span className="text-gray-300">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ToolCard
