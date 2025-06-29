"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

interface SEOHeadProps {
  title?: string
  description?: string
}

export function SEOHead({ title, description }: SEOHeadProps) {
  const pathname = usePathname()

  // Track page views for analytics
  useEffect(() => {
    // This would connect to your analytics service
    // Example: trackPageView(pathname)
    console.log(`Page view: ${pathname}`)
  }, [pathname])

  return null // This component doesn't render anything, just handles side effects
}
