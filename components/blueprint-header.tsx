"use client"
import Link from "next/link"
import { BlueprintLogo } from "@/components/blueprint-logo" // Assuming this exists
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
// import { ThemeToggle } from '@/components/theme-toggle'; // Optional: if you want theme toggle here

type BlueprintHeaderProps = {}

export function BlueprintHeader() {
  const pathname = usePathname()

  // A simple way to get a title from the pathname, can be made more sophisticated
  const getTitle = () => {
    if (pathname === "/blueprint") return "Blueprint Dashboard"
    const segments = pathname.split("/").filter(Boolean)
    if (segments.length > 1) {
      return segments
        .slice(1)
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " "))
        .join(" - ")
    }
    return "Blueprint"
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/blueprint" className="flex items-center space-x-2">
            <BlueprintLogo className="h-8 w-auto" />
            <span className="font-semibold hidden sm:inline-block">Blueprint</span>
          </Link>
          {/* <h1 className="text-lg font-medium hidden md:block">{getTitle()}</h1> */}
        </div>

        <div className="flex items-center space-x-3">
          {/* <ThemeToggle /> */}
          <Button asChild variant="ghost" size="sm">
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default BlueprintHeader
