"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealSection({ children, className, delay = 0 }: RevealSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // Stop observing once visible
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out will-change-transform will-change-opacity",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
    >
      {children}
    </div>
  )
}
