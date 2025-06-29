"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Home, Book, Cpu, Briefcase, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  submenu?: {
    title: string
    href: string
  }[]
}

export function MobileNavigation() {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const navItems: NavItem[] = [
    {
      title: "Home",
      href: "/blueprint",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Fundamentals",
      href: "/blueprint/fundamentals",
      icon: <Book className="h-5 w-5" />,
      submenu: [
        { title: "Printer Selection", href: "/blueprint/fundamentals/printer-selection" },
        { title: "First Print", href: "/blueprint/fundamentals/first-print" },
        { title: "Materials Guide", href: "/blueprint/fundamentals/materials-guide" },
      ],
    },
    {
      title: "Design & Modeling",
      href: "/blueprint/design-modeling",
      icon: <Cpu className="h-5 w-5" />,
      submenu: [
        { title: "Software Tools", href: "/blueprint/design-modeling/software-tools" },
        { title: "Design Basics", href: "/blueprint/design-modeling/design-basics" },
        { title: "Optimization Techniques", href: "/blueprint/design-modeling/optimization-techniques" },
      ],
    },
    {
      title: "Business",
      href: "/blueprint/business-and-entrepreneurship",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Resources",
      href: "/blueprint/resources",
      icon: <FileText className="h-5 w-5" />,
    },
  ]

  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(title)
    }
  }

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0 bg-gray-900 text-white">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <Link href="/blueprint" className="flex items-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  3DBlueprint.io
                </span>
              </Link>
            </div>
          </div>
          <nav className="flex-1 overflow-auto py-2">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.title}>
                  {item.submenu ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${
                          isActive(item.href) ? "bg-blue-900/50 text-blue-300" : "hover:bg-gray-800"
                        }`}
                      >
                        <div className="flex items-center">
                          {item.icon}
                          <span className="ml-3">{item.title}</span>
                        </div>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${openSubmenu === item.title ? "rotate-90" : ""}`}
                        />
                      </button>
                      {openSubmenu === item.title && (
                        <ul className="pl-10 space-y-1">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.title}>
                              <Link
                                href={subitem.href}
                                className={`block px-3 py-2 rounded-md ${
                                  isActive(subitem.href) ? "bg-blue-900/50 text-blue-300" : "hover:bg-gray-800"
                                }`}
                              >
                                {subitem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-md ${
                        isActive(item.href) ? "bg-blue-900/50 text-blue-300" : "hover:bg-gray-800"
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500">
              Get Started
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
