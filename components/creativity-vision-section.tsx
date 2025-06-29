"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Lightbulb, Palette, RefreshCw, Scale } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"
import { Button } from "@/components/ui/button"

export function CreativityVisionSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Canvas animation for the background
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
    }[] = []

    // Create particles
    const createParticles = () => {
      if (particles.length > 100) return // Limit particles

      // Create a new particle
      const size = Math.random() * 3 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const vx = (Math.random() - 0.5) * 0.5
      const vy = (Math.random() - 0.5) * 0.5
      const life = 0
      const maxLife = 200 + Math.random() * 100

      // Choose color from brand palette
      const colors = [
        "rgba(59, 130, 246, 0.5)", // blue
        "rgba(139, 92, 246, 0.5)", // purple
        "rgba(236, 72, 153, 0.5)", // pink
      ]
      const color = colors[Math.floor(Math.random() * colors.length)]

      particles.push({
        x,
        y,
        size,
        color,
        vx,
        vy,
        life,
        maxLife,
      })
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create new particles
      if (Math.random() > 0.9) {
        createParticles()
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++

        if (p.life < p.maxLife) {
          // Update position
          p.x += p.vx
          p.y += p.vy

          // Fade out as life increases
          const opacity = 1 - p.life / p.maxLife

          // Draw particle
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${opacity})`)
          ctx.fill()
        } else {
          // Remove dead particles
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-0"></div>

      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>

      {/* Subtle orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-orb opacity-30 z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-purple-orb opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">
              <Sparkles className="mr-1 h-3 w-3" />
              Our Vision
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Redefining What It Means To Be Creative
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Imagine if anyone, anywhere could design real-world products, regardless of their technical skills or
              experience.
            </p>
          </div>
        </RevealSection>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <RevealSection delay={100}>
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20"></div>
                <div className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">What IS Creativity?</h3>
                  <p className="text-slate-700">
                    Creativity isn't just for the gifted few. It's a universal human trait waiting to be unlocked. We're
                    building a world where anyone can create real products, no matter their experience.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur opacity-20"></div>
                <div className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Bridging the Gap</h3>
                  <p className="text-slate-700">
                    By bridging the gap between creativity and production, there are no limits to what's possible.
                    Create, iterate, improve, scale or redesign with the power of AI at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white h-full">
                  <Lightbulb className="h-8 w-8 mb-4 text-white/80" />
                  <h3 className="text-xl font-bold mb-2">Harness the Power</h3>
                  <p className="text-blue-50">
                    Our Design Engine transforms ideas into reality, making the complex simple and the impossible
                    achievable.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
                <Palette className="h-6 w-6 mb-3 text-purple-500" />
                <h4 className="font-semibold mb-2 text-slate-900">Democratized Design</h4>
                <p className="text-sm text-slate-600">Design tools that adapt to you, not the other way around.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
                <RefreshCw className="h-6 w-6 mb-3 text-blue-500" />
                <h4 className="font-semibold mb-2 text-slate-900">Rapid Iteration</h4>
                <p className="text-sm text-slate-600">Test and refine ideas in minutes, not months.</p>
              </div>

              <div className="col-span-2">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
                  <Scale className="h-6 w-6 mb-3 text-pink-500" />
                  <h4 className="font-semibold mb-2 text-slate-900">Limitless Potential</h4>
                  <p className="text-slate-600">
                    When everyone can create, innovation accelerates exponentially. Join us in building a future where
                    design is accessible to all.
                  </p>
                  <Button className="mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 rounded-full">
                    Join the Movement
                  </Button>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
