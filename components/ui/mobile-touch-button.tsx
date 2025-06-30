"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface MobileTouchButtonProps extends ButtonProps {
  children: React.ReactNode
  hapticFeedback?: boolean
}

export function MobileTouchButton({
  children,
  className = "",
  hapticFeedback = true,
  ...props
}: MobileTouchButtonProps) {
  const handleTouchStart = () => {
    if (hapticFeedback && "vibrate" in navigator) {
      navigator.vibrate(10) // Light haptic feedback
    }
  }

  return (
    <motion.div whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <Button
        {...props}
        className={`min-h-[44px] min-w-[44px] touch-manipulation ${className}`}
        onTouchStart={handleTouchStart}
      >
        {children}
      </Button>
    </motion.div>
  )
}
