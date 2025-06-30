"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

interface MobileOptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
}

export function MobileOptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: MobileOptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && <div className="absolute inset-0 bg-gray-800/20 animate-pulse rounded-lg" />}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.3 }}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="w-full h-auto object-cover rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </motion.div>
    </div>
  )
}
