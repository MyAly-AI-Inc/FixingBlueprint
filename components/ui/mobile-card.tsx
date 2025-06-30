"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MobileCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: "sm" | "md" | "lg"
  variant?: "default" | "glass" | "gradient"
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
}

const variantClasses = {
  default: "bg-gray-800/50 border-gray-700/50",
  glass: "bg-white/10 backdrop-blur-sm border-white/20",
  gradient: "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-700/50",
}

export function MobileCard({
  children,
  className = "",
  hover = true,
  padding = "md",
  variant = "default",
}: MobileCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        variantClasses[variant],
        paddingClasses[padding],
        hover && "hover:shadow-xl hover:scale-[1.02]",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : undefined}
    >
      {children}
    </motion.div>
  )
}

// Export individual card components with mobile optimization
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
