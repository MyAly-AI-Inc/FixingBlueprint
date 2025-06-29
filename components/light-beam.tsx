"use client"

import { useEffect, useRef } from "react"

export function LightBeam() {
  const beamRef = useRef<HTMLDivElement>(null)
  const beamContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (beamRef.current && beamContainerRef.current) {
        const rect = beamContainerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const centerX = rect.width / 2
        const offsetX = (x - centerX) / 10

        beamRef.current.style.transform = `translateX(${offsetX}px)`
      }
    }

    const handleScroll = () => {
      if (beamContainerRef.current && beamRef.current) {
        const rect = beamContainerRef.current.getBoundingClientRect()
        const scrollProgress = 1 - Math.min(1, Math.max(0, rect.bottom / window.innerHeight))

        if (beamRef.current) {
          // Ensure opacity is between 0 and 1
          const opacity = Math.max(0, Math.min(1, 1 - scrollProgress))
          beamRef.current.style.opacity = opacity.toString()

          // Increase blur as user scrolls
          const blurAmount = Math.min(30, scrollProgress * 30)
          beamRef.current.style.filter = `blur(${blurAmount}px)`
        }
      }
    }

    // Add event listeners
    window.addEventListener("scroll", handleScroll)

    const containerElement = beamContainerRef.current
    if (containerElement) {
      containerElement.addEventListener("mousemove", handleMouseMove)
    }

    // Initial call to set correct state
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (containerElement) {
        containerElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div ref={beamContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {/* Main beam */}
        <div
          ref={beamRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full light-beam"
          style={{ opacity: 1 }}
        ></div>

        {/* Dispersed light elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[150px] h-[400px] bg-blue-500/5 blur-3xl"></div>
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-500/5 blur-3xl"></div>
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/5 blur-3xl"></div>
      </div>
    </div>
  )
}
