"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Home, BookOpen, Users, Play, ArrowRight, Sparkles } from "lucide-react"

interface NavLink {
  href: string
  label: string
  icon?: React.ReactNode
  badge?: string
  description?: string
}

const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="w-4 h-4" />,
    description: "Live 30-day challenge",
  },
  {
    href: "/blueprint",
    label: "Blueprint",
    icon: <BookOpen className="w-4 h-4" />,
    description: "Free 3D printing education",
  },
  {
    href: "/ai-tools",
    label: "AI Tools",
    icon: <Sparkles className="w-4 h-4" />,
    badge: "NEW",
    description: "AI-powered 3D tools",
  },
  {
    href: "/community",
    label: "Community",
    icon: <Users className="w-4 h-4" />,
    description: "Connect with makers",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled 
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-lg" 
            : "bg-gray-900/20 backdrop-blur-md border-b border-gray-800/30"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">3D</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  3D Blueprint
                </h1>
                <p className="text-xs text-gray-400 -mt-1">By Aly Yu</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    className={`relative px-4 py-2 rounded-lg transition-all duration-200 group ${
                      isActive(link.href)
                        ? "bg-blue-600/20 text-blue-300"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-2">
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                      {link.badge && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-0.5 shadow-sm">
                          {link.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Active indicator */}
                    {isActive(link.href) && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ x: "-50%" }}
                      />
                    )}

                    {/* Hover tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
                      {link.description}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA */}
              <div className="hidden md:block">
                <Link href="/">
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-red-400/20"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-sm" />
                        <span>Watch Live</span>
                      </div>
                    </Button>
                  </motion.div>
                </Link>
              </div>

              {/* Mobile menu button - optimized for touch */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                style={{ minHeight: "44px", minWidth: "44px", touchAction: "manipulation" }}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            {/* Menu Panel - optimized for mobile */}
            <motion.div
              className="absolute top-16 left-4 right-4 bg-gray-900/98 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={link.href}>
                        <motion.div
                          className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                            isActive(link.href)
                              ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                              : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                          }`}
                          style={{ minHeight: "60px", touchAction: "manipulation" }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex-shrink-0">{link.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-lg">{link.label}</span>
                              {link.badge && (
                                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                                  {link.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{link.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-500" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/">
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-xl py-4 font-medium shadow-lg border border-red-400/20"
                        style={{ minHeight: "56px", touchAction: "manipulation" }}
                      >
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-sm" />
                          <span className="text-lg">Watch Live Challenge</span>
                          <Play className="w-5 h-5" />
                        </div>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Mobile Footer */}
                <motion.div
                  className="mt-6 pt-4 border-t border-gray-800 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-gray-400">
                    Built with ❤️ by <span className="text-blue-400 font-medium">Aly Yu</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}
