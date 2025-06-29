"use client"

import type React from "react"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  once?: boolean
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-50px 0px -50px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
