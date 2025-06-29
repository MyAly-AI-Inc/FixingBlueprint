"use client"

import { useState, useEffect } from "react"
import { breakpoints, type Breakpoint } from "@/lib/breakpoints"

// Convenience hooks for common breakpoints
export function useMobile() {
  return !useBreakpoint("md")
}

export function useTablet() {
  return useBreakpoint("md") && !useBreakpoint("lg")
}

export function useDesktop() {
  return useBreakpoint("lg")
}

// This is to maintain compatibility with existing code
export const useIsMobile = useMobile

export function useBreakpoint(breakpoint: Breakpoint) {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkBreakpoint = () => {
      setIsAboveBreakpoint(window.innerWidth >= breakpoints[breakpoint])
    }

    // Initial check
    checkBreakpoint()

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkBreakpoint, 100)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", handleResize)
    }
  }, [breakpoint])

  return isAboveBreakpoint
}
