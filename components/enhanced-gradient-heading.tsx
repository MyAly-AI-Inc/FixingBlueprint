"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface EnhancedGradientHeadingProps {
  children: React.ReactNode
  fromColor?: string
  toColor?: string
  viaColor?: string
  className?: string
  variant?: "glow" | "panel" | "outline"
}

export const EnhancedGradientHeading = ({
  children,
  fromColor = "from-blue-400",
  toColor = "to-blue-600",
  viaColor,
  className = "",
  variant = "glow",
}: EnhancedGradientHeadingProps) => {
  const [isHovered, setIsHovered] = useState(false)

  if (variant === "panel") {
    return (
      <motion.div
        className="relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background panel */}
        <motion.div
          className="absolute inset-0 -inset-x-4 -inset-y-2 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/30"
          animate={{
            scale: isHovered ? 1.02 : 1,
            borderColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.h2
          className={`relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor} ${className}`}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
            backgroundSize: isHovered ? "200% 100%" : "100% 100%",
          }}
          transition={{
            duration: isHovered ? 3 : 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundSize: "200% 100%",
            backgroundPosition: "0% 50%",
          }}
          whileInView={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {children}
        </motion.h2>
      </motion.div>
    )
  }

  if (variant === "outline") {
    return (
      <motion.div
        className="relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated border */}
        <motion.div
          className={`absolute inset-0 -inset-x-4 -inset-y-2 rounded-2xl bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor} p-[2px]`}
          animate={{
            opacity: isHovered ? 1 : 0.5,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full w-full rounded-2xl bg-gray-900" />
        </motion.div>

        <motion.h2
          className={`relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor} ${className}`}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
            backgroundSize: isHovered ? "200% 100%" : "100% 100%",
          }}
          transition={{
            duration: isHovered ? 3 : 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundSize: "200% 100%",
            backgroundPosition: "0% 50%",
          }}
          whileInView={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {children}
        </motion.h2>
      </motion.div>
    )
  }

  // Default "glow" variant
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow effect behind text */}
      <motion.div
        className={`absolute -inset-x-8 -inset-y-12 blur-3xl opacity-50 bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor}`}
        animate={{
          opacity: isHovered ? 0.7 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main heading with enhanced styling */}
      <motion.h2
        className={`relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor} ${className}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
          backgroundSize: isHovered ? "200% 100%" : "100% 100%",
        }}
        transition={{
          duration: isHovered ? 3 : 0.8,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: "0% 50%",
          filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))",
        }}
        whileInView={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        viewport={{ once: false, margin: "-100px" }}
      >
        {children}
      </motion.h2>

      {/* Subtle underline accent */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor} rounded-full mt-4`}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  )
}
