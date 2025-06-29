"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface GlassPanelProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  children?: ReactNode
}

export function GlassPanel({ src, alt, width, height, className, priority = false, children }: GlassPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return // Skip effect on mobile devices

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !panelRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate position relative to the center of the element
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const deltaX = (x - centerX) / 25
      const deltaY = (y - centerY) / 25

      // Apply the 3D transform with easing
      requestAnimationFrame(() => {
        if (panelRef.current) {
          panelRef.current.style.transform = `
            perspective(1000px) 
            rotateX(${-deltaY * 0.5}deg) 
            rotateY(${deltaX * 0.5}deg)
            scale3d(1.02, 1.02, 1.02)
          `

          // Update reflection
          panelRef.current.style.setProperty("--x-pos", `${(x / rect.width) * 100}%`)
          panelRef.current.style.setProperty("--y-pos", `${(y / rect.height) * 100}%`)
        }
      })
    }

    const handleMouseLeave = () => {
      if (panelRef.current) {
        requestAnimationFrame(() => {
          if (panelRef.current) {
            panelRef.current.style.transform = `
              perspective(1000px) 
              rotateX(0deg) 
              rotateY(0deg)
              scale3d(1, 1, 1)
            `
          }
        })
      }
    }

    const element = containerRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isMobile])

  return (
    <div ref={containerRef} className={cn("relative transition-all duration-300", className)}>
      <div
        ref={panelRef}
        className={cn(
          "glass-panel relative transition-transform duration-200 ease-out",
          isMobile ? "mobile-glass-panel" : "",
        )}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-60"></div>
        <div className="glass-inner relative border border-indigo-200 rounded-lg overflow-hidden shadow-xl bg-white/20 backdrop-filter backdrop-blur-md">
          <div className="glass-reflection absolute inset-0 pointer-events-none"></div>
          <div className="p-1 relative">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-full object-cover rounded-lg"
              priority={priority}
              quality={90}
              sizes={isMobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
          {children && (
            <div className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-white/50">{children}</div>
          )}
        </div>
      </div>
    </div>
  )
}
