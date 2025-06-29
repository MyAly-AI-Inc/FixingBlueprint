"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Compass, Clock, TrendingUp, Equal, X } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"

export function CorePhilosophy() {
  const [isAnimating, setIsAnimating] = useState(false)
  const equationRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle animation for the equation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Particles
    const particles: {
      x: number
      y: number
      size: number
      color: string
      vx: number
      vy: number
      life: number
      maxLife: number
      opacity: number
      hue: number
      saturation: number
      lightness: number
    }[] = []

    // Track if explosion has happened
    let explosionTriggered = false
    let explosionTime = 0

    // Create explosion
    const createExplosion = () => {
      if (explosionTriggered) return

      explosionTriggered = true
      explosionTime = Date.now()

      const equationElement = equationRef.current
      if (!equationElement) return

      const rect = equationElement.getBoundingClientRect()
      const canvasRect = canvas.getBoundingClientRect()

      // Calculate position relative to canvas
      const centerX = rect.left + rect.width / 2 - canvasRect.left
      const centerY = rect.top + rect.height / 2 - canvasRect.top

      // Create many particles in an explosion pattern
      const particleCount = 200

      for (let i = 0; i < particleCount; i++) {
        // Create particles with radial velocity from center
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * rect.width * 0.5

        // Randomize starting position slightly
        const startX = centerX + (Math.random() - 0.5) * rect.width * 0.3
        const startY = centerY + (Math.random() - 0.5) * rect.height * 0.3

        // Explosion velocity - faster near center, slower at edges
        const speed = 2 + Math.random() * 4

        // Smaller particles
        const size = Math.random() * 1.5 + 0.5

        // Get a random color
        const colorInfo = getRandomColorInfo()

        particles.push({
          x: startX,
          y: startY,
          size,
          color: colorInfo.color,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 80 + Math.random() * 60, // Shorter life for explosion effect
          opacity: Math.random() * 0.7 + 0.3,
          hue: colorInfo.hue,
          saturation: colorInfo.saturation,
          lightness: colorInfo.lightness,
        })
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(2, 6, 23, 0.1)" // Slightly more opaque for faster fade
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++

        if (p.life < p.maxLife) {
          // Update position with slight deceleration for explosion effect
          p.x += p.vx
          p.y += p.vy

          // Slow down gradually
          p.vx *= 0.98
          p.vy *= 0.98

          // Add slight gravity effect
          p.vy += 0.02

          // Fade out with easing
          const progress = p.life / p.maxLife
          p.opacity = 1 - Math.pow(progress, 1.5)

          // Draw particle
          const particleColor = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${p.opacity})`

          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = particleColor
          ctx.fill()
        } else {
          // Remove dead particles
          particles.splice(i, 1)
        }
      }

      // Check if we need to trigger explosion
      if (isAnimating && !explosionTriggered) {
        createExplosion()
      }

      // Continue animation even after explosion until all particles are gone
      if (particles.length > 0 || !explosionTriggered) {
        requestAnimationFrame(animate)
      }
    }

    const getRandomColorInfo = () => {
      // Vibrant color palette with emphasis on purples and blues
      const palettes = [
        { hue: 260, saturation: 80, lightness: 60 }, // Vibrant purple
        { hue: 270, saturation: 90, lightness: 65 }, // Bright purple
        { hue: 280, saturation: 85, lightness: 70 }, // Light purple
        { hue: 220, saturation: 80, lightness: 60 }, // Vibrant blue
        { hue: 200, saturation: 85, lightness: 65 }, // Bright blue
        { hue: 290, saturation: 70, lightness: 60 }, // Pink-purple
      ]

      const palette = palettes[Math.floor(Math.random() * palettes.length)]
      // Add some randomness to the selected palette
      const hue = palette.hue + (Math.random() - 0.5) * 20
      const saturation = palette.saturation + (Math.random() - 0.5) * 10
      const lightness = palette.lightness + (Math.random() - 0.5) * 10

      return {
        color: `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`,
        hue,
        saturation,
        lightness,
      }
    }

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isAnimating])

  // Intersection observer to trigger animation
  useEffect(() => {
    let hasTriggered = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsAnimating(true)
          hasTriggered = true
        }
      },
      { threshold: 0.2 },
    )

    if (equationRef.current) {
      observer.observe(equationRef.current)
    }

    return () => {
      if (equationRef.current) {
        observer.unobserve(equationRef.current)
      }
    }
  }, [])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/80 to-slate-950"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Particle animation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>

      <div className="container mx-auto px-4 relative z-10">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-900/80 text-blue-300 hover:bg-blue-800 border-blue-700/50 backdrop-blur-sm">
              <Compass className="mr-1 h-3 w-3" />
              Our Principles
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-text leading-tight pb-1 text-white">
              Core Philosophy
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              MyAly operates on a fundamental principle that guides everything we do.
            </p>
          </div>
        </RevealSection>

        {/* Value Equation - Modernized */}
        <RevealSection delay={100}>
          <div ref={equationRef} className="relative max-w-4xl mx-auto mb-20 py-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-blue-600/40 rounded-xl blur-xl opacity-40"></div>
            <div className="relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">The Value Equation</h3>

              <div className="flex flex-wrap justify-center items-center gap-4 text-xl md:text-2xl font-medium">
                <div className="flex items-center justify-center h-16 px-6 bg-gradient-to-br from-blue-600/30 to-blue-900/20 rounded-xl border border-blue-500/30 text-blue-200 shadow-lg shadow-blue-900/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20">
                  Value
                </div>

                <Equal className="h-6 w-6 text-purple-300 mx-1" />

                <div className="flex items-center justify-center h-16 px-6 bg-gradient-to-br from-blue-600/30 to-purple-900/20 rounded-xl border border-blue-500/30 text-blue-200 shadow-lg shadow-purple-900/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/20">
                  Time
                </div>

                <X className="h-6 w-6 text-purple-300 mx-1" />

                <div className="flex items-center justify-center h-16 px-6 bg-gradient-to-br from-purple-600/30 to-purple-900/20 rounded-xl border border-purple-500/30 text-purple-200 shadow-lg shadow-purple-900/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/20">
                  Rate of Innovation
                </div>
              </div>

              <p className="text-slate-300 mt-8 text-center max-w-2xl mx-auto">
                This equation reflects our understanding that even as technological advancements solve many existing
                problems in 3D printing, two universal constants will persist.
              </p>
            </div>
          </div>
        </RevealSection>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Time Constant - Modernized */}
          <RevealSection delay={200}>
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-blue-800/30 rounded-xl blur-xl opacity-30"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-900/40 via-blue-950/60 to-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-blue-600/40 to-blue-800/20 p-4 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-900/10">
                    <Clock className="h-10 w-10 text-blue-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-white">Time</h3>

                <div className="space-y-4">
                  <p className="text-slate-300 text-center">
                    The finite nature of time limits creators' ability to ideate, produce, and scale their 3D printing
                    businesses.
                  </p>

                  <div className="h-2 w-full bg-slate-800/60 rounded-full overflow-hidden backdrop-blur-sm mt-6">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700 w-3/4 animate-pulse"></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Limited Resource</span>
                    <span className="text-blue-300">24 hours per day</span>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-slate-800/30 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    How MyAly Helps
                  </h4>
                  <p className="text-slate-300">
                    Our AI tools automate time-consuming tasks, allowing creators to focus on high-value creative work
                    and strategic decisions.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Innovation Rate Constant - Modernized */}
          <RevealSection delay={300}>
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/30 to-purple-800/30 rounded-xl blur-xl opacity-30"></div>
              <div className="relative h-full bg-gradient-to-br from-pink-900/40 via-purple-950/60 to-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-pink-500/20 shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-pink-600/40 to-pink-800/20 p-4 rounded-2xl border border-pink-500/30 shadow-lg shadow-pink-900/10">
                    <TrendingUp className="h-10 w-10 text-pink-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-white">Global Rate of Innovation</h3>

                <div className="space-y-4">
                  <p className="text-slate-300 text-center">
                    The pace of industry-wide advancement outstrips individual capacity to adapt and implement new
                    technologies.
                  </p>

                  <div className="h-2 w-full bg-slate-800/60 rounded-full overflow-hidden backdrop-blur-sm mt-6">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-purple-700 w-full animate-pulse"></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Exponential Growth</span>
                    <span className="text-pink-300">Accelerating</span>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-slate-800/30 rounded-xl border border-pink-500/20 backdrop-blur-sm">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-2"></div>
                    How MyAly Helps
                  </h4>
                  <p className="text-slate-300">
                    Our global network continuously monitors and integrates industry advancements, ensuring users always
                    have access to cutting-edge capabilities.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={400}>
          <div className="mt-16 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-xl blur-xl opacity-30"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-100">
                  By addressing both <span className="text-blue-300">time constraints</span> and{" "}
                  <span className="text-pink-300">innovation rates</span>,
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
                    MyAly maximizes value creation in the 3D printing industry.
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
