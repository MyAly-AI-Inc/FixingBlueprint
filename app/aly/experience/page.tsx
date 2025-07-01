"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlowCard } from "@/components/ui/spotlight-card"
import { Cover } from "@/components/ui/cover"
import { ArrowLeft, Play, Pause, RotateCcw, Zap, MousePointer, Hand, Eye, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export default function AlyExperiencePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const steps = [
    {
      title: "AI-Powered Design Generation",
      description: "Watch as AI creates complex 3D models from simple text prompts",
      icon: Sparkles,
    },
    {
      title: "Real-time Optimization",
      description: "See how AI optimizes designs for 3D printing in real-time",
      icon: Zap,
    },
    {
      title: "Interactive Customization",
      description: "Experience how users can modify designs with natural language",
      icon: Hand,
    },
    {
      title: "Quality Prediction",
      description: "AI predicts print success and suggests improvements",
      icon: Eye,
    },
  ]

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading 3D Experience...</div>
      </div>
    )
  }

  // Get the current icon component
  const CurrentIcon = steps[currentStep].icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Navigation */}
      <div className="relative z-50 p-6">
        <Link href="/aly/challenge">
          <Button
            variant="outline"
            className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-black/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Challenge
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-600/30">
                <Zap className="h-3 w-3 mr-1" />
                AI-POWERED 3D EXPERIENCE
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Experience the Future of{" "}
                <Cover>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                    3D Design
                  </span>
                </Cover>
              </h1>

              <p className="text-xl text-purple-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                Interact with the revolutionary AI system that will power the next generation of 3D printing businesses.
                This is what I'm building during the 30-day challenge.
              </p>
            </motion.div>
          </div>

          {/* Interactive Demo Area */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlowCard glowColor="purple" customSize className="w-full h-96 p-8">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                    <CurrentIcon className="w-12 h-12 text-purple-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {steps[currentStep].title}
                  </h3>
                  
                  <p className="text-purple-200 mb-6 leading-relaxed">
                    {steps[currentStep].description}
                  </p>

                  <div className="flex gap-4">
                    <Button
                      onClick={handlePlay}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                      {isPlaying ? "Pause" : "Play Demo"}
                    </Button>
                    
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white mb-6">Interactive Controls</h2>
                <p className="text-purple-200 mb-8">
                  Use the controls below to explore different aspects of the AI system:
                </p>
              </div>

              <div className="grid gap-4">
                {steps.map((step, index) => {
                  const StepIcon = step.icon
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                        currentStep === index
                          ? "bg-purple-600/20 border-purple-500/50 text-white"
                          : "bg-white/5 border-gray-700/50 text-gray-300 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            currentStep === index
                              ? "bg-purple-500/30"
                              : "bg-gray-600/30"
                          }`}
                        >
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{step.title}</h4>
                          <p className="text-sm opacity-70">{step.description}</p>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">How to Interact</h2>
            <p className="text-xl text-purple-200">
              This is a preview of the AI system being built during the challenge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlowCard glowColor="blue" customSize className="w-full h-auto aspect-auto p-6">
              <div className="text-center">
                <MousePointer className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Click & Explore</h3>
                <p className="text-blue-200">
                  Click on different steps to see how AI transforms 3D design workflows
                </p>
              </div>
            </GlowCard>

            <GlowCard glowColor="purple" customSize className="w-full h-auto aspect-auto p-6">
              <div className="text-center">
                <Play className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Watch Demo</h3>
                <p className="text-purple-200">
                  Use the play button to see an automated demonstration of the AI capabilities
                </p>
              </div>
            </GlowCard>

            <GlowCard glowColor="green" customSize className="w-full h-auto aspect-auto p-6">
              <div className="text-center">
                <Eye className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Real-time Preview</h3>
                <p className="text-green-200">
                  See live previews of how AI generates and optimizes 3D models
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build This Together?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              This AI system will be built live during the 30-day challenge. Join to see every step of the process.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/aly/challenge">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Join the Challenge
                </Button>
              </Link>
              <Link href="/aly">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
