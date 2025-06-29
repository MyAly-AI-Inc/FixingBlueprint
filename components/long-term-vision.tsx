"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Zap, Globe, Clock } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"

export function LongTermVision() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Canvas animation for the network visualization
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

    // Network nodes
    const nodes: {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      connections: number[]
    }[] = []

    // Create nodes
    const createNodes = () => {
      const nodeCount = Math.min(Math.floor(canvas.width / 100), 15)
      nodes.length = 0

      for (let i = 0; i < nodeCount; i++) {
        const radius = Math.random() * 4 + 2
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color: getRandomColor(),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }

      // Create connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        const connectionCount = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < connectionCount; j++) {
          const target = Math.floor(Math.random() * nodes.length)
          if (target !== i && !nodes[i].connections.includes(target)) {
            nodes[i].connections.push(target)
          }
        }
      }
    }

    const getRandomColor = () => {
      const colors = ["rgba(59, 130, 246, 0.8)", "rgba(139, 92, 246, 0.8)", "rgba(236, 72, 153, 0.8)"]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    createNodes()

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections with improved visual style
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        for (const connectionIndex of node.connections) {
          const target = nodes[connectionIndex]
          const dx = target.x - node.x
          const dy = target.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw connections within a certain distance
          if (distance < canvas.width / 3) {
            const opacity = 1 - distance / (canvas.width / 3)

            // Create gradient for connections
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y)
            gradient.addColorStop(0, node.color.replace("0.8)", `${opacity * 0.3})`))
            gradient.addColorStop(1, target.color.replace("0.8)", `${opacity * 0.3})`))

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()

            // Add pulse effect on connections
            if (Math.random() > 0.99) {
              const pulsePosition = Math.random()
              const pulseX = node.x + dx * pulsePosition
              const pulseY = node.y + dy * pulsePosition

              ctx.beginPath()
              ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
              ctx.fill()
            }
          }
        }
      }

      // Draw and update nodes with improved effects
      for (const node of nodes) {
        // Update position with slight randomness for more organic movement
        node.x += node.vx + (Math.random() - 0.5) * 0.1
        node.y += node.vy + (Math.random() - 0.5) * 0.1

        // Bounce off edges with damping
        if (node.x < node.radius || node.x > canvas.width - node.radius) {
          node.vx *= -0.9
          node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x))
        }
        if (node.y < node.radius || node.y > canvas.height - node.radius) {
          node.vy *= -0.9
          node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y))
        }

        // Draw node with improved glow effect
        const pulseScale = 1 + Math.sin(Date.now() * 0.003 + node.x * 0.01) * 0.1
        const currentRadius = node.radius * pulseScale

        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          currentRadius * 0.5,
          node.x,
          node.y,
          currentRadius * 3,
        )
        gradient.addColorStop(0, node.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Inner highlight
        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fill()
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Network visualization canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30"></canvas>

      <div className="container mx-auto px-4 relative z-10">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-900 text-blue-300 hover:bg-blue-800 border-blue-700">
              <Lightbulb className="mr-1 h-3 w-3" />
              Our Vision
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-text leading-tight pb-1 text-white">
              Long-Term Vision
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Empowering creators and businesses to thrive during technological upheaval through AI-powered innovation.
            </p>
          </div>
        </RevealSection>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <RevealSection delay={100}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-slate-300 mb-6">
                  MyAly is an innovative technology company on a mission to empower the 3D printing industry with a
                  global network of innovative technologies backed by Agentic AI.
                </p>
                <p className="text-slate-300">
                  Founded by CEO Aly Yu, the company is developing an interconnected ecosystem of AI-powered tools
                  designed to solve the persistent challenges in the 3D printing industry.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-900/50 p-3 rounded-full border border-blue-700">
                      <Globe className="h-5 w-5 text-blue-300" />
                    </div>
                    <span className="text-white font-medium">Global Network</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-900/50 p-3 rounded-full border border-purple-700">
                      <Zap className="h-5 w-5 text-purple-300" />
                    </div>
                    <span className="text-white font-medium">Agentic AI</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
              <div className="relative h-full w-full">
                <Image
                  src="/3d-printing-neon-lab.jpeg"
                  alt="Modern 3D printing lab with neon lighting"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
              <div className="mt-6 p-6 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold mb-2 text-white">Redefining the Future</h3>
                <p className="text-slate-300">
                  MyAly aims to position creators and businesses to thrive during periods of technological upheaval,
                  leveraging the rapid advancement of AI to redefine the future of the 3D printing industry.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={300}>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-blue-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-blue-700">
                <Clock className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Time Optimization</h3>
              <p className="text-slate-300">
                Addressing the finite nature of time that limits creators' ability to ideate, produce, and scale their
                3D printing businesses.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-purple-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-purple-700">
                <Zap className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation Acceleration</h3>
              <p className="text-slate-300">
                Helping individuals and businesses keep pace with the global rate of innovation that often outstrips
                individual capacity to adapt.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-pink-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-pink-700">
                <Globe className="h-6 w-6 text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Global Ecosystem</h3>
              <p className="text-slate-300">
                Building an interconnected network of tools and services that maximize value creation in the emerging 3D
                printing sector.
              </p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
