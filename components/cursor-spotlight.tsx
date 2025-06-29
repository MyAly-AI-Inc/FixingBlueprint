"use client"

import { useEffect, useState, useRef } from "react"

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      life: number
      maxLife: number
      opacity: number
    }>
  >([])
  const animationRef = useRef<number | null>(null)
  const prevPositionRef = useRef({ x: 0, y: 0 })
  const spread = 15 // Define spread here

  // Initialize canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Animation function
    const animate = () => {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Clear canvas completely each frame instead of using semi-transparent fill
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update particles
      const particles = particlesRef.current
      const updatedParticles = []

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.life++

        if (p.life < p.maxLife) {
          // Particle is still alive
          const lifeRatio = p.life / p.maxLife
          const fadeOutStart = 0.7 // Start fading out at 70% of life

          // Calculate opacity - start fading out earlier
          p.opacity = lifeRatio > fadeOutStart ? (1 - (lifeRatio - fadeOutStart) / (1 - fadeOutStart)) * 0.5 : 0.5

          // Shrink size over time
          p.size *= 0.99

          // Add some random movement for smoke effect
          p.vx += (Math.random() - 0.5) * 0.05
          p.vy += (Math.random() - 0.5) * 0.05 - 0.01 // Slight upward drift

          // Apply velocity
          p.x += p.vx
          p.y += p.vy

          // Slow down over time
          p.vx *= 0.99
          p.vy *= 0.99

          // Draw particle
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${p.opacity})`)
          ctx.fill()

          updatedParticles.push(p)
        }
      }

      particlesRef.current = updatedParticles
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const currentPosition = { x: e.clientX, y: e.clientY }
      setPosition(currentPosition)

      // Calculate velocity based on movement
      const dx = currentPosition.x - prevPositionRef.current.x
      const dy = currentPosition.y - prevPositionRef.current.y
      const speed = Math.sqrt(dx * dx + dy * dy)

      // Update previous position
      prevPositionRef.current = currentPosition

      // Add new particles on mouse move
      if (isVisible) {
        const particles = particlesRef.current
        // More particles for vapor effect, but each is smaller and more varied
        const particleCount = Math.min(Math.floor(speed) + 5, 15) // Adjust based on speed, with a cap

        for (let i = 0; i < particleCount; i++) {
          // Create particle with initial velocity influenced by cursor movement
          // Add a random chance for gold particles and vary opacity more
          const colorRandom = Math.random()
          const particleColor =
            colorRandom > 0.8
              ? `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.2})` // Gold color
              : colorRandom > 0.6
                ? `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.2})` // Blue
                : colorRandom > 0.3
                  ? `rgba(139, 92, 246, ${Math.random() * 0.3 + 0.2})` // Purple
                  : `rgba(236, 72, 153, ${Math.random() * 0.3 + 0.2})` // Pink

          particles.push({
            x: e.clientX + (Math.random() - 0.5) * spread,
            y: e.clientY + (Math.random() - 0.5) * spread,
            vx: dx * 0.1 * (Math.random() * 0.5),
            vy: dy * 0.1 * (Math.random() * 0.5) - 0.3, // Slight upward drift
            size: Math.random() * 2 + 0.5, // Much smaller particles
            color: particleColor,
            life: 0,
            maxLife: Math.random() * 40 + 20,
            opacity: Math.random() * 0.4 + 0.3, // Higher starting opacity
          })
        }
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />
      <div
        className="cursor-spotlight"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
