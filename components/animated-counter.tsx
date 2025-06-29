"use client"

import { useEffect, useRef, useState } from "react"
import { useCounter } from "@/hooks/use-counter"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  decimalPlaces?: number
  className?: string
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimalPlaces = 0,
  className = "",
}: AnimatedCounterProps) {
  const [isInView, setIsInView] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  const { count, startCounter } = useCounter({
    end,
    duration,
    decimalPlaces,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
          startCounter()
        }
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = counterRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isInView, startCounter])

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {isInView ? count.toLocaleString() : "0"}
      {suffix}
    </span>
  )
}
