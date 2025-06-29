"use client"

import { usePathname } from "next/navigation"
import { PublicNavigation } from "@/components/public-navigation"
import { FloatingActionButton } from "@/components/floating-action-button" // Assuming this is the correct path

export function ConditionalNavigation() {
  const pathname = usePathname()

  // Do not render navigation or FAB on authentication pages
  if (pathname.startsWith("/auth")) {
    return null
  }

  return (
    <>
      <PublicNavigation />
      {/* The FloatingActionButton was in app/(marketing)/layout.tsx. 
          We'll render it here for non-auth pages. 
          Adjust this logic if it has a more specific placement. */}
      <FloatingActionButton />
    </>
  )
}
