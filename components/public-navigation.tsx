"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HomeIcon, Shapes, Rocket, Menu, X, Library, Briefcase, Cog, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", url: "/blueprint", icon: HomeIcon, color: "blue" },
  { name: "Fundamentals", url: "/blueprint/fundamentals", icon: BookOpen, color: "blue" },
  { name: "3D Modeling", url: "/blueprint/design-modeling", icon: Shapes, color: "purple" },
  { name: "Productivity", url: "/blueprint/technical-skills", icon: Cog, color: "teal" },
  { name: "Business", url: "/blueprint/business-and-entrepreneurship", icon: Briefcase, color: "amber" },
  { name: "AI", url: "/blueprint/advanced-topics", icon: Rocket, color: "red" },
  { name: "Resources", url: "/blueprint/resources", icon: Library, color: "green" },
]

const hexColorMap: Record<string, string> = {
  blue: "#3b82f6",
  purple: "#a855f7",
  teal: "#14b8a6",
  amber: "#f59e0b",
  red: "#ef4444",
  green: "#22c55e",
}

export function PublicNavigation({ variant = "transparent" }: { variant?: "transparent" | "solid" }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // setIsOpen(false); // Original logic - commented out as per original file
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isActive = (itemUrl: string) => {
    if (itemUrl === "/blueprint") {
      return pathname === "/blueprint" || pathname === "/blueprint/"
    }
    if (itemUrl !== "/" && pathname.startsWith(itemUrl)) return true
    return false
  }

  const getBackgroundClass = () => {
    if (variant === "solid") return "bg-white dark:bg-gray-900 shadow-sm"
    return scrolled
      ? "bg-gradient-to-r from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-lg shadow-lg border-b border-white/10"
      : "bg-transparent"
  }

  const getTextColorClass = (isActiveFlag: boolean, itemColor: string) => {
    const validColor = ["blue", "purple", "teal", "amber", "red", "green"].includes(itemColor) ? itemColor : "blue"
    if (variant === "solid") {
      if (isActiveFlag) {
        const colorMapSolidActive: Record<string, string> = {
          blue: "text-blue-600 dark:text-blue-400",
          purple: "text-purple-600 dark:text-purple-400",
          teal: "text-teal-600 dark:text-teal-400",
          amber: "text-amber-600 dark:text-amber-400",
          red: "text-red-600 dark:text-red-400",
          green: "text-green-600 dark:text-green-400",
        }
        return colorMapSolidActive[validColor]
      }
      return "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    }
    if (isActiveFlag) {
      const colorMapTransparentActive: Record<string, string> = {
        blue: "text-blue-400",
        purple: "text-purple-400",
        teal: "text-teal-400",
        amber: "text-amber-400",
        red: "text-red-400",
        green: "text-green-400",
      }
      return colorMapTransparentActive[validColor]
    }
    const hoverColorMapTransparent: Record<string, string> = {
      blue: "text-white/80 hover:text-blue-400 hover:bg-blue-500/10",
      purple: "text-white/80 hover:text-purple-400 hover:bg-purple-500/10",
      teal: "text-white/80 hover:text-teal-400 hover:bg-teal-500/10",
      amber: "text-white/80 hover:text-amber-400 hover:bg-amber-500/10",
      red: "text-white/80 hover:text-red-400 hover:bg-red-500/10",
      green: "text-white/80 hover:text-green-400 hover:bg-green-500/10",
    }
    return hoverColorMapTransparent[validColor]
  }

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", getBackgroundClass())}>
        <div className="container mx-auto px-6 py-3 flex items-center justify-center relative">
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
            <Link href="/" className="flex items-center gap-2 z-10">
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full p-1.5 w-8 h-8 flex items-center justify-center shadow-md border border-blue-400/30"
                whileHover={{ scale: 1.1, rotate: 15, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-4 h-4 text-white" />
              </motion.div>
              <motion.div
                className="relative flex items-baseline"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span
                  className={cn(
                    "font-bold text-lg bg-clip-text text-transparent drop-shadow-sm",
                    variant === "solid"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "bg-gradient-to-r from-blue-400 to-cyan-400",
                  )}
                >
                  3D
                </span>
                <span
                  className={cn(
                    "font-bold text-lg bg-clip-text text-transparent drop-shadow-sm",
                    variant === "solid"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "bg-gradient-to-r from-blue-400 to-cyan-400",
                  )}
                >
                  Blueprint
                </span>
              </motion.div>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav className="flex items-center space-x-4">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.url)
                const itemColor = ["blue", "purple", "teal", "amber", "red", "green"].includes(item.color)
                  ? item.color
                  : "blue"
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className={cn(
                      "relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                      getTextColorClass(active, itemColor),
                    )}
                  >
                    <motion.span
                      className="flex items-center gap-1.5"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon size={16} />
                      {item.name}
                    </motion.span>
                    {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={cn(
                          "absolute bottom-0 left-0 right-0 h-0.5",
                          variant === "solid" ? `bg-${itemColor}-600` : `bg-${itemColor}-500`,
                        )}
                        style={{
                          background:
                            variant === "solid"
                              ? undefined
                              : `linear-gradient(to right, transparent, ${hexColorMap[itemColor] || hexColorMap.blue}, transparent)`,
                        }}
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 md:hidden">
            <button className="z-10" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <X size={24} className={variant === "solid" ? "text-gray-900 dark:text-gray-100" : "text-white"} />
              ) : (
                <Menu size={24} className={variant === "solid" ? "text-gray-900 dark:text-gray-100" : "text-white"} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="h-full w-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
            >
              <nav className="flex flex-col gap-2">
                {navigationItems.map((item, idx) => {
                  const Icon = item.icon
                  const active = isActive(item.url)
                  const itemColor = ["blue", "purple", "teal", "amber", "red", "green"].includes(item.color)
                    ? item.color
                    : "blue"
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Link
                        href={item.url}
                        className={cn(
                          "flex items-center gap-3 py-3 px-4 rounded-lg text-lg font-medium transition-colors",
                          active
                            ? `bg-${itemColor}-600/20 text-${itemColor}-400`
                            : "text-white/80 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        <Icon size={20} />
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
              <div className="mt-auto pt-6 border-t border-white/10"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
