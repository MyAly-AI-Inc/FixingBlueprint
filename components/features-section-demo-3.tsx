"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Track 3D Print Progress",
      description:
        "Monitor your 3D printing projects in real-time with AI-powered quality control and predictive analytics.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "AI-Generated 3D Models",
      description:
        "Create stunning 3D models effortlessly using our advanced AI technology and machine learning algorithms.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch 3D Printing Process",
      description:
        "Experience the magic of 3D printing through our comprehensive video tutorials and live demonstrations.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Global 3D Printing Network",
      description:
        "Connect with our worldwide network of 3D printing professionals and access distributed manufacturing capabilities.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 backdrop-blur-sm py-2 px-4">
            <Zap className="h-4 w-4 mr-2" />
            Advanced Features
          </Badge>
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
            Packed with thousands of features
          </h4>
          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-300 text-center font-normal">
            From AI-powered design generation to automated quality control, our platform has everything you need to
            revolutionize your 3D printing workflow.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-300 text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl group h-full rounded-xl">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="/images/3d-printing-process-board.png"
            alt="3D printing progress tracking"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-gray-900 via-transparent to-transparent w-full pointer-events-none" />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image cursor-pointer">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <div className="absolute z-10 inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-8 w-8 text-white ml-1" />
            </motion.div>
          </div>
          <Image
            src="/images/3d-printing-neon-lab.jpeg"
            alt="3D printing process video"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-sm transition-all duration-200"
          />
        </div>
      </div>
    </div>
  )
}

export const SkeletonTwo = () => {
  const images = [
    "/images/desk-organizer.png",
    "/images/phone-dock.png",
    "/images/smart-container.png",
    "/images/3d-printed-desk-organizer.png",
    "/images/multi-material-printing.png",
  ]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  }

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white/10 backdrop-blur-sm border border-white/20 shrink-0 overflow-hidden"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="3D printed models"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white/10 backdrop-blur-sm border border-white/20 shrink-0 overflow-hidden"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="3D printed models"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-gray-900 to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-gray-900 to-transparent h-full pointer-events-none" />
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <AnimatedGlobe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  )
}

const AnimatedGlobe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0
    if (!canvasRef.current) return

    // Simple animated globe using CSS instead of external library
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw globe background
      const gradient = ctx.createRadialGradient(300, 300, 0, 300, 300, 300)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)")
      gradient.addColorStop(0.7, "rgba(147, 51, 234, 0.2)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(300, 300, 300, 0, Math.PI * 2)
      ctx.fill()

      // Draw rotating lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.5)"
      ctx.lineWidth = 1

      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI * 2) / 12 + phi
        ctx.beginPath()
        ctx.moveTo(300 + Math.cos(angle) * 100, 300 + Math.sin(angle) * 100)
        ctx.lineTo(300 + Math.cos(angle) * 280, 300 + Math.sin(angle) * 280)
        ctx.stroke()
      }

      // Draw markers
      const markers = [
        { x: 300 + Math.cos(phi) * 200, y: 300 + Math.sin(phi) * 200 },
        { x: 300 + Math.cos(phi + 1) * 150, y: 300 + Math.sin(phi + 1) * 150 },
        { x: 300 + Math.cos(phi + 2) * 180, y: 300 + Math.sin(phi + 2) * 180 },
      ]

      markers.forEach((marker) => {
        ctx.fillStyle = "rgba(34, 197, 94, 0.8)"
        ctx.beginPath()
        ctx.arc(marker.x, marker.y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      phi += 0.01
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={600}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  )
}
