"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlowCard } from "@/components/ui/spotlight-card"
import { Cover } from "@/components/ui/cover"
import { SplineScene } from "@/components/ui/spline-scene"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Play, Pause, RotateCcw, Maximize, Info, Zap, Bot, Cpu, Users } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function RobotDemoPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showInstructions, setShowInstructions] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const sectionContentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  useEffect(() => {
    // Hide instructions after 5 seconds
    const timer = setTimeout(() => {
      setShowInstructions(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetScene = () => {
    // The SplineScene component handles reset through its controls
    console.log("Reset triggered from Robot Demo page")
  }

  const toggleFullscreen = () => {
    const element = document.querySelector(".spline-container")
    if (element) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        element.requestFullscreen()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="relative z-50 p-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="bg-black/20 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <Badge className="bg-purple-900/30 text-purple-300 border-purple-700/50">3D ROBOT DEMO</Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowInstructions(!showInstructions)}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <Info className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Instructions Overlay */}
      {showInstructions && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-6 z-40 max-w-sm"
        >
          <GlowCard glowColor="blue" customSize className="p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Interactive Controls</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>• Click and drag to rotate</li>
              <li>• Scroll to zoom in/out</li>
              <li>• Click on parts to explore</li>
              <li>• Use controls below to interact</li>
            </ul>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowInstructions(false)}
              className="mt-4 w-full text-blue-300 hover:text-white hover:bg-blue-500/20"
            >
              Got it!
            </Button>
          </GlowCard>
        </motion.div>
      )}

      {/* Main 3D Scene Container */}
      <div ref={sectionRef} className="relative h-screen -mt-20">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 via-pink-500/10 to-transparent blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-sky-600/20 via-blue-500/10 to-transparent blur-3xl"
          />
        </div>

        <motion.div
          className="w-full h-full spline-container relative"
          style={{ opacity: sectionOpacity, y: sectionContentY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Scene Container with enhanced styling */}
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-blue-900/50">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                                    linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            {/* Actual Spline 3D Scene - FIXED WITH scene PROP */}
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" // Added the scene URL
              className="w-full h-full relative z-10"
              enableControls={true}
              autoRotate={isPlaying}
              showCustomControls={true}
              quality="high"
              enableShadows={true}
              enablePostProcessing={true}
              onLoad={() => {
                setIsLoading(false)
                console.log("3D Robot scene loaded successfully")
              }}
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Bot className="w-8 h-8 text-purple-300" />
                      </motion.div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Loading 3D Robot</h2>
                    <p className="text-blue-200">Preparing the future of AI-powered 3D printing...</p>
                  </div>
                </div>
              }
            />
          </div>

          {/* Enhanced Scene overlay info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-8 left-8 md:bottom-12 md:left-12 pointer-events-none"
          >
            <GlowCard
              glowColor="purple"
              customSize
              className="p-6 max-w-sm bg-gray-900/80 backdrop-blur-md border border-purple-500/30"
            >
              <div className="flex items-center mb-3">
                <Bot className="w-6 h-6 mr-2 text-purple-400" />
                <h4 className="text-lg font-semibold text-white">AI-Powered 3D Printing</h4>
              </div>
              <p className="text-sm text-purple-200 leading-relaxed">
                This intelligent robot represents the future of automated 3D printing, combining AI precision with
                creative design workflows.
              </p>
              <div className="flex items-center gap-4 mt-4 text-xs text-purple-300">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Human-AI Collaboration</span>
                </div>
                <div className="flex items-center gap-1">
                  <Cpu className="w-4 h-4" />
                  <span>Smart Automation</span>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Title overlay */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-8 left-8 md:top-12 md:left-12 pointer-events-none"
          >
            <Badge className="mb-3 bg-gradient-to-r from-blue-600/25 to-purple-600/25 text-blue-300 border-blue-500/40 backdrop-blur-sm py-1.5 px-3">
              <Bot className="mr-1.5 h-4 w-4 text-blue-400" />
              <Cpu className="mr-2 h-4 w-4 text-purple-400" />
              AI-Powered Creation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <Cover>The Future of 3D Printing</Cover>
            </h2>
          </motion.div>
        </motion.div>

        {/* Control Panel */}
        {!isLoading && (
          <motion.div
            className="absolute bottom-6 right-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={togglePlayPause}
              className="bg-black/20 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={resetScene}
              className="bg-black/20 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
              className="bg-black/20 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Maximize className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>

      {/* Bottom Info Section */}
      <section className="py-12 bg-gradient-to-t from-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <Cover>Interactive 3D Technology</Cover>
              </h2>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Experience the cutting-edge intersection of AI and 3D printing technology. This interactive demo
                showcases the kind of intelligent automation that's revolutionizing manufacturing and creative
                workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/aly/challenge">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Explore the Challenge
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
