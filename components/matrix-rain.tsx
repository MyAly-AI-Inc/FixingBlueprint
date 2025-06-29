"use client"

import type React from "react"
import { useRef, useEffect, useCallback } from "react"

interface MatrixRainProps {
  className?: string
}

const MatrixRain: React.FC<MatrixRainProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 })

  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const nums = "0123456789"
  const characters = katakana + latin + nums + "MATRIX" // Added "MATRIX" for fun

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, drops: number[], fontSize: number) => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)" // Slightly less fade for denser look
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Check distance to mouse for interaction
        const distanceToMouse = Math.sqrt(Math.pow(x - mousePos.current.x, 2) + Math.pow(y - mousePos.current.y, 2))
        const interactionRadius = 150 // Increased interaction radius
        const maxDistortion = fontSize * 2 // Max character displacement

        let currentFillStyle = "#0F0" // Default green
        let currentFontSize = fontSize
        let dx = 0 // displacement x
        let dy = 0 // displacement y

        if (distanceToMouse < interactionRadius) {
          const effectStrength = 1 - distanceToMouse / interactionRadius // 1 at center, 0 at edge
          currentFillStyle = `rgba(128, 255, 128, ${0.5 + effectStrength * 0.5})` // Lighter green, more opaque near mouse
          currentFontSize = fontSize * (1 + effectStrength * 0.3) // Slightly larger near mouse

          // "Push away" effect
          const angle = Math.atan2(y - mousePos.current.y, x - mousePos.current.x)
          dx = Math.cos(angle) * maxDistortion * effectStrength * 0.5 // Reduced push for subtlety
          dy = Math.sin(angle) * maxDistortion * effectStrength * 0.5

          // Randomly make some characters "glitch" or highlight more strongly
          if (Math.random() < effectStrength * 0.1) {
            currentFillStyle = "#FFF" // White flash
          }
        }

        ctx.fillStyle = currentFillStyle
        ctx.font = `${currentFontSize}px monospace`
        ctx.fillText(text, x + dx, y + dy)

        if (y + dy > ctx.canvas.height && Math.random() > 0.985) {
          // Slightly higher chance to reset
          drops[i] = 0
        }
        drops[i] += 1 // Consistent speed for base rain
      }
    },
    [characters],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const fontSize = 14 // Slightly smaller for denser feel
    let columns: number
    let drops: number[]

    const setup = () => {
      // Match hero section height or full viewport if used elsewhere
      const heroSectionHeight = window.innerHeight // Default to full viewport height
      canvas.width = window.innerWidth
      canvas.height = heroSectionHeight

      columns = Math.floor(canvas.width / fontSize)
      drops = []
      for (let x = 0; x < columns; x++) {
        drops[x] = (Math.random() * canvas.height) / fontSize // Start drops at random positions
      }
    }

    setup()

    const render = () => {
      draw(ctx, drops, fontSize)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    const handleResize = () => {
      setup()
    }
    window.addEventListener("resize", handleResize)

    const handleMouseMove = (event: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        mousePos.current = { x: event.clientX - rect.left, y: event.clientY - rect.top }
      }
    }
    // Only track mouse if canvas is in viewport for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("mousemove", handleMouseMove)
        } else {
          window.removeEventListener("mousemove", handleMouseMove)
          mousePos.current = { x: -1000, y: -1000 } // Reset mouse when not visible
        }
      },
      { threshold: 0.1 }, // Trigger when 10% visible
    )
    if (canvas) observer.observe(canvas)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (canvas) observer.unobserve(canvas)
    }
  }, [draw])

  return <canvas ref={canvasRef} className={className} />
}

export default MatrixRain
