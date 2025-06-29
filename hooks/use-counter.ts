"use client"

import { useState, useEffect, useRef } from "react"

interface CounterOptions {
  start?: number
  end: number
  duration?: number
  delay?: number
  decimalPlaces?: number
  onComplete?: () => void
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  decimalPlaces = 0,
  onComplete,
}: CounterOptions) {
  const [count, setCount] = useState(start)
  const [isRunning, setIsRunning] = useState(false)
  const requestRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const endValueRef = useRef(end)

  // Update end value if it changes
  useEffect(() => {
    endValueRef.current = end
  }, [end])

  const startCounter = () => {
    setIsRunning(true)
  }

  useEffect(() => {
    if (!isRunning) return

    let delayTimeout: NodeJS.Timeout

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)

      const currentValue = start + (endValueRef.current - start) * easedProgress
      setCount(Number.parseFloat(currentValue.toFixed(decimalPlaces)))

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate)
      } else {
        setCount(endValueRef.current)
        setIsRunning(false)
        if (onComplete) onComplete()
      }
    }

    if (delay > 0) {
      delayTimeout = setTimeout(() => {
        requestRef.current = requestAnimationFrame(animate)
      }, delay)
    } else {
      requestRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      if (delayTimeout) {
        clearTimeout(delayTimeout)
      }
    }
  }, [isRunning, duration, start, delay, decimalPlaces, onComplete])

  return { count, startCounter, isRunning }
}

// Easing function for smoother animation
function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4)
}
