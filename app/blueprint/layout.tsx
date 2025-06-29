import type React from "react"
import type { Metadata } from "next"
import { PublicNavigation } from "@/components/public-navigation"

export const metadata: Metadata = {
  title: "Blueprint | 3DBlueprint.io",
  description: "Learn 3D printing from beginner to advanced with our comprehensive blueprint",
}

export default function BlueprintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavigation variant="solid" />
      <main className="flex-1">
        {/* The cream background is applied here to the content area */}
        {/* Adjusted padding-top to match the calculated navbar height of 60px */}
        <div className="bg-brand-cream min-h-full pt-[60px]">{children}</div>
      </main>
    </div>
  )
}
