"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MobileSectionProps {
  children: React.ReactNode
  className?: string
  padding?: "sm" | "md" | "lg" | "xl"
  background?: "transparent" | "dark" | "gradient"
}

const paddingClasses = {
  sm: "py-8 px-4",
  md: "py-12 px-4 md:py-16 md:px-6",
  lg: "py-16 px-4 md:py-20 md:px-6",
  xl: "py-20 px-4 md:py-24 md:px-8",
}

const backgroundClasses = {
  transparent: "",
  dark: "bg-gray-900/50",
  gradient: "bg-gradient-to-br from-gray-900/30 to-blue-900/30",
}

export function MobileSection({
  children,
  className = "",
  padding = "lg",
  background = "transparent",
}: MobileSectionProps) {
  return (
    <motion.section
      className={cn("relative overflow-hidden", paddingClasses[padding], backgroundClasses[background], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-7xl">{children}</div>
    </motion.section>
  )
}
