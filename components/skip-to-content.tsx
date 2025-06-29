"use client"

import { useEffect, useState } from "react"

export function SkipToContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <a
      href="#main-content"
      className="skip-link focus:not-sr-only bg-primary text-primary-foreground px-4 py-2 absolute top-0 left-0 -translate-y-full focus:translate-y-0 z-50 transition-transform"
    >
      Skip to content
    </a>
  )
}
