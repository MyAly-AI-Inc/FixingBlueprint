"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SplineScene } from "@/components/ui/splite"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle,
  Users,
  CuboidIcon as Cube,
  ArrowRight,
  Bot,
  Calendar,
  Eye,
  Heart,
  Trophy,
  Shield,
  FileText,
  Play,
  ChevronDown,
  Zap,
  Target,
} from "lucide-react"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { useState, useEffect } from "react"

export default function AlyChallengePage() {
  const [mounted, setMounted] = useState(false)
  const [splineLoaded, setSplineLoaded] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showFullStory, setShowFullStory] = useState(false)

  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  // Only render the Spline component after the component has mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  // FAQ items
  const faqItems = [
    {
      category: "Challenge",
      question: "What exactly happens during the 30 days?",
      answer:
        "I'll be building a brand new business from the ground up and trying out a new AI tool every day for 30 days. I'll be breaking down every step daily and using my 3D blueprint system, a business roadmap I designed. You'll get to see the behind the scenes and build alongside me using everything I am.",
    },
    {
      category: "Access",
      question: "What's the difference between the tiers?",
      answer:
        "$19 gets you weekly updates and newsletter access. $49 includes daily step-by-steps and live community access. $199 is the all-access pass with STL files, source code, templates, discounts, and private Discord.",
    },
    {
      category: "Timeline",
      question: "When does this start and end?",
      answer:
        "The challenge runs from July 4th to August 3rd, 2025. That's 30 consecutive days of building, sharing, and documenting everything in real-time.",
    },
    {
      category: "Results",
      question: "What if you don't succeed?",
      answer:
        "If I fail to build a successful business during these 30 days, I'll close everything down and go back to university. But if I succeed, this becomes the world's greatest resource hub for 3D printing entrepreneurs.",
    },
    {
      category: "Community",
      question: "How does the live community work?",
      answer:
        "The $49 and $199 tiers get access to daily live sessions where I break down each tool I'm building, answer questions, and show the step-by-step process. Plus ongoing community support.",
    },
    {
      category: "Value",
      question: "Why is this different from other courses?",
      answer:
        "This isn't a course - it's watching a real business being built in real-time with cutting-edge AI tools. You're getting the actual systems, code, and strategies as they're being created and tested.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <SplashCursor
        DENSITY_DISSIPATION={4}
        COLOR_UPDATE_SPEED={6}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={8000}
        SHADING={true}
        CURL={20}
      />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex flex-col justify-between">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
`,
              backgroundSize: "50px 50px",
            }}
          ></div>

          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-400/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 pt-32 md:pt-40 lg:pt-48">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-white mb-4">Come build</span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                the most AI driven 3D business ever created
              </motion.span>
              <span className="block text-white mt-4">In 30 days, LIVE.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl md:text-3xl text-blue-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              LIVE. In real time. Right before your eyes.
            </motion.p>

            {/* Key points */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-xl p-6">
                <Zap className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Real-Time Building</h3>
                <p className="text-blue-200 text-sm">Watch every decision, every tool, every sale happen live</p>
              </div>
              <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 rounded-xl p-6">
                <Target className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-purple-200 text-sm">30 cutting-edge AI tools integrated daily</p>
              </div>
              <div className="bg-pink-900/20 backdrop-blur-sm border border-pink-800/50 rounded-xl p-6">
                <Trophy className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Winner Takes All</h3>
                <p className="text-pink-200 text-sm">The entire business goes to one participant</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch the Challenge
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                onClick={() => setShowFullStory(!showFullStory)}
              >
                <Eye className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Spline scene */}
        <div className="w-full flex-grow relative">
          <AnimatePresence mode="wait">
            {!splineLoaded && mounted && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin"></div>
                  <p className="text-blue-300 text-lg font-medium">Loading 3D Experience...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {mounted && (
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: splineLoaded ? 1 : 0, scale: splineLoaded ? 1 : 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                fallback={
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
                    <Cube className="h-16 w-16 text-blue-400 mb-4 animate-pulse" />
                    <h3 className="text-xl font-bold text-blue-300 mb-2">Interactive Learning Experience</h3>
                    <p className="text-gray-400 text-center max-w-md">
                      Explore 3D models, simulations, and interactive content designed to accelerate your learning.
                    </p>
                  </div>
                }
                enableControls={true}
                autoRotate={true}
                quality="high"
                enableShadows={true}
                enablePostProcessing={true}
                showCustomControls={false}
                onLoad={() => setSplineLoaded(true)}
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Challenge Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <motion.div
                className="text-center bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-blue-400 mb-2">30</h3>
                <p className="text-blue-200 text-lg">Days</p>
              </motion.div>

              <motion.div
                className="text-center bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Bot className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-purple-400 mb-2">30</h3>
                <p className="text-purple-200 text-lg">AI Tools</p>
              </motion.div>

              <motion.div
                className="text-center bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FileText className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-green-400 mb-2">1</h3>
                <p className="text-green-200 text-lg">Business Blueprint</p>
              </motion.div>

              <motion.div
                className="text-center bg-pink-900/20 backdrop-blur-sm border border-pink-800/50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-pink-400 mb-2">1</h3>
                <p className="text-pink-200 text-lg">Winner</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story - Progressive Disclosure */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-orange-900/30 text-orange-300 border-orange-700/50 mb-6">THE STORY</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Why I'm Doing This
                </motion.span>
              </h2>

              {/* Initial story snippet */}
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed mb-8">
                <p className="text-xl font-semibold text-white">I didn't study philosophy to sell courses.</p>
                <p>I didn't study business to make money. And I didn't master AI to play games.</p>
                <p className="text-xl font-semibold text-blue-300">
                  I did it to design for the future, to help people, and to change the world.
                </p>
              </div>

              {/* Expandable content */}
              <AnimatePresence>
                {showFullStory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6 text-lg text-blue-100 leading-relaxed mb-8">
                      <p className="text-xl font-semibold text-white">Don't believe me? Come watch.</p>
                      <p>
                        I'm building in real time, breaking down every step, every tool - and sharing every sale. If I
                        want to create a legendary system for other entrepreneurs, I need to become one first.
                      </p>
                      <p>
                        You can go pay twenty bucks a month to learn about spreadsheets and how to put your printer on
                        an angle, watch YouTubes about Etsy, or you can join the 3D Blueprint and learn how to create
                        game changing workflows to make money with AI, devastate your competition, and design products
                        and websites with your mind.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                variant="ghost"
                onClick={() => setShowFullStory(!showFullStory)}
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
              >
                {showFullStory ? "Show Less" : "Read Full Story"}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFullStory ? "rotate-180" : ""}`} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solo Builder Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/60 to-gray-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Bot className="w-10 h-10 text-blue-300" />
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl text-white font-medium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-red-400 font-semibold">No investors.</span>{" "}
                <span className="text-orange-400 font-semibold">No developers.</span>{" "}
                <span className="text-yellow-400 font-semibold">No coding experience.</span>{" "}
                <span className="text-green-400 font-semibold">No business degree.</span>
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-blue-200 mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I'm building every line, every tool, every system and template with my mind, my creativity and{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  the true power of AI.
                </motion.span>
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I vibe coded this website with three shots espresso, youtube and my good friend Grok. I'm no expert.
                But that's the whole point.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Content Gallery */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-indigo-900/30 text-indigo-300 border-indigo-700/50 mb-4">BEHIND THE SCENES</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Journey So Far</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="relative overflow-hidden rounded-2xl lg:col-span-2 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/aly-challenge/aly-holographic-tech.jpeg"
                  alt="Aly with futuristic holographic 3D technology"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">The Future is Now</h3>
                    <p className="text-purple-200">Building with cutting-edge holographic tech</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/aly-challenge/future-of-3d-printing.jpeg"
                  alt="The Future of 3D Printing presentation"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Q3 2025 Vision</h3>
                    <p className="text-blue-200">Transforming data into reality</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/aly-challenge/aly-architecture-lab.jpeg"
                  alt="Aly in professional 3D printing laboratory"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Professional lab environment</p>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/aly-challenge/art-of-the-print-book.png"
                  alt="The Art of the Print book cover by Aly Yu"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Mastering the craft</p>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/aly-challenge/3d-printing-process-board.png"
                  alt="3D printing process workflow diagram"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Strategic planning process</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Building in Real Time Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-6 text-sm uppercase tracking-wider">
                  LIVE TRANSPARENCY
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Building in Real Time</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  I'm breaking down every step, every tool, and sharing every sale. If I want to create a legendary
                  system for other entrepreneurs, I need to become one first.
                </p>
              </motion.div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="/images/aly-challenge/aly-architecture-lab.jpeg"
                    alt="Step-by-step process documentation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[1px] flex items-center justify-center">
                    <FileText className="w-12 h-12 text-blue-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Every Step</h3>
                <p className="text-blue-200 leading-relaxed">
                  From ideation to execution, watch every decision and process unfold in real-time.
                </p>
              </motion.div>

              <motion.div
                className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="/images/aly-challenge/aly-holographic-tech.jpeg"
                    alt="AI tools and technology workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-purple-900/60 backdrop-blur-[1px] flex items-center justify-center">
                    <Bot className="w-12 h-12 text-purple-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Every Tool</h3>
                <p className="text-purple-200 leading-relaxed">
                  See exactly which AI tools, software, and strategies I use to build this business.
                </p>
              </motion.div>

              <motion.div
                className="bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="/images/aly-challenge/future-of-3d-printing.jpeg"
                    alt="Financial transparency and sales tracking"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-green-900/60 backdrop-blur-[1px] flex items-center justify-center">
                    <Trophy className="w-12 h-12 text-green-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Every Sale</h3>
                <p className="text-green-200 leading-relaxed">
                  Complete financial transparency - every dollar earned and spent, shared openly.
                </p>
              </motion.div>
            </div>

            {/* Live Business Dashboard Preview */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Live Business Dashboard Preview</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-400 text-sm font-medium">Coming July 4th</span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <motion.div
                  className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-blue-300 text-sm font-medium mb-2">Day</p>
                  <motion.p
                    className="text-4xl font-bold text-white mb-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    --
                  </motion.p>
                  <p className="text-blue-200 text-sm">of 30</p>
                </motion.div>

                <motion.div
                  className="bg-green-900/30 backdrop-blur-sm border border-green-800/50 rounded-xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-green-300 text-sm font-medium mb-2">Revenue</p>
                  <motion.p
                    className="text-4xl font-bold text-white mb-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    $--,---
                  </motion.p>
                  <p className="text-green-400 text-sm">live tracking</p>
                </motion.div>

                <motion.div
                  className="bg-purple-900/30 backdrop-blur-sm border border-purple-800/50 rounded-xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-purple-300 text-sm font-medium mb-2">Products</p>
                  <motion.p
                    className="text-4xl font-bold text-white mb-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    --
                  </motion.p>
                  <p className="text-purple-200 text-sm">designs created</p>
                </motion.div>

                <motion.div
                  className="bg-orange-900/30 backdrop-blur-sm border border-orange-800/50 rounded-xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-orange-300 text-sm font-medium mb-2">Viewers</p>
                  <motion.p
                    className="text-4xl font-bold text-white mb-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
                  >
                    -.--K
                  </motion.p>
                  <p className="text-orange-200 text-sm">will be watching</p>
                </motion.div>
              </div>

              {/* Preview Message */}
              <div className="mt-6 text-center">
                <p className="text-slate-400 text-sm">Real-time metrics will appear here once the challenge begins</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-blue-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                In real time, right before your eyes.
              </motion.h2>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Get the Blueprint
                </Button>
              </motion.div>
            </div>

            {/* Live Stream Player */}
            <motion.div
              className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Stream Header */}
              <div className="flex items-center justify-between p-4 bg-slate-800/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Badge className="bg-orange-500 text-white px-3 py-1 text-sm font-semibold animate-pulse">
                    COMING SOON
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">1,147 waiting</span>
                </div>
              </div>

              {/* Stream Content */}
              <div className="relative aspect-video bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "30px 30px",
                    }}
                  ></div>
                </div>

                {/* Play Button */}
                <motion.div
                  className="relative z-10 w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 40px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>

                {/* Stream Info */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Live Stream Preview</h3>
                  <p className="text-blue-200 text-lg">Building the future of 3D printing, one day at a time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700/50 mb-4 text-sm uppercase tracking-wider">
                  Behind the Scenes
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Making of a Legend</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Get exclusive access to my workspace, thought process, and the tools that make it all possible.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* My Command Center */}
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm border border-blue-800/50 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="/images/aly-challenge/aly-holographic-tech.jpeg"
                    alt="Live Workspace - Command Center with multiple AI workstations"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500 text-white px-3 py-1 text-sm font-semibold">Live Workspace</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">My Command Center</h3>
                  <p className="text-blue-200 leading-relaxed">
                    Tour the workspace where the magic happens - from AI workstations to 3D printing labs.
                  </p>
                </div>
              </motion.div>

              {/* AI Design Process */}
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-800/50 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="/images/aly-challenge/future-of-3d-printing.jpeg"
                    alt="AI Creation Process with colorful holographic interface"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500 text-white px-3 py-1 text-sm font-semibold">AI Creation</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">AI Design Process</h3>
                  <p className="text-purple-200 leading-relaxed">
                    Watch as I use cutting-edge AI to generate products that have never existed before.
                  </p>
                </div>
              </motion.div>

              {/* Blueprint Mini */}
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-800/50 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="/images/mini-blueprint/3d-blueprint-graphic.png"
                    alt="3D Blueprint Mini interface with app icons and tools"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white px-3 py-1 text-sm font-semibold">Free Resource</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Blueprint Mini</h3>
                  <p className="text-green-200 leading-relaxed">
                    Get started with my condensed guide while you watch the full business unfold.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-yellow-900/30 text-yellow-300 border-yellow-700/50 mb-4">THE STAKES</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">All or Nothing</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-red-900/20 backdrop-blur-sm border border-red-800/50 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-300 mb-4">If I Fail</h3>
                <p className="text-red-100 text-lg leading-relaxed">
                  I go back to university, close my Skools, my store, and get a job just like everybody else.
                </p>
              </motion.div>

              <motion.div
                className="bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">If I Succeed</h3>
                <p className="text-green-100 text-lg leading-relaxed">
                  I open the world's greatest resource hub for 3D printing entrepreneurs and pursue a life in AI
                  creating the next generation of design tools.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-700/50 rounded-3xl p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-purple-300" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">The Ultimate Prize</h3>
              <p className="text-xl text-purple-200 mb-4 leading-relaxed">
                At the end of 30 days, I'm giving away the entire business - complete with all systems, AI tools,
                customer base, and revenue streams - to one entrepreneur, but it isn't winner take all - every
                participant gets all my systems, videos and step by step guides.
              </p>
              <p className="text-lg text-purple-300">
                This isn't just about watching me build. It's about potentially inheriting the most advanced 3D
                printing business ever created.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Ultimate Prize Giveaway Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="bg-pink-900/30 text-pink-300 border-pink-700/50 mb-6 text-sm uppercase tracking-wider">
                  THE ULTIMATE PRIZE
                </Badge>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-white">You Get Everything.</span>
                  <br />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    Including the Business.
                  </motion.span>
                </h2>

                <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                  Each week there's a challenge to build something with an AI tool. Whoever has the most points after
                  4 challenges wins. But it's not winner take all:
                </p>

                <div className="space-y-4 mb-8">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-purple-100 text-lg">
                      <strong className="text-yellow-300">The winner gets the business I build</strong> - complete
                      with all revenue streams and systems
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-purple-100 text-lg">
                      <strong className="text-green-300">Everybody else gets the full blueprint</strong> - all
                      systems, templates, and workflows
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-purple-100 text-lg">
                      <strong className="text-blue-300">Lifetime access to the resource hub</strong> - ongoing updates
                      and community support
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-purple-100 text-lg">
                      <strong className="text-purple-300">Personal mentorship</strong> to help you implement
                      everything successfully
                    </span>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Trophy className="mr-2 h-5 w-5" />
                    Enter the Giveaway
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    See Contest Rules
                  </Button>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  {/* Value Badge */}
                  <div className="absolute -top-4 -left-4 z-10">
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg">
                      $50K+ Total Value
                    </div>
                  </div>

                  {/* Days Left Badge */}
                  <div className="absolute -top-4 -right-4 z-10">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold">18</div>
                        <div className="text-xs">Days Left</div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="text-center mb-8">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      The Future
                      <br />
                      of 3D Printing
                    </h3>
                  </div>

                  {/* 3D Visual Element */}
                  <div className="relative h-64 flex items-center justify-center">
                    <motion.div
                      className="relative w-48 h-48"
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      {/* 3D Helix/Swirl */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
                      <motion.div
                        className="absolute inset-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-full"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                        style={{
                          background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                        }}
                      />

                      {/* Inner glow */}
                      <div className="absolute inset-8 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                    </motion.div>

                    {/* Floating particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Bottom Info */}
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mt-6">
                    <p className="text-purple-800 text-sm font-medium text-center">
                      Transforming raw data into intelligent, automated information to drive innovation
                    </p>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-green-900/30 text-green-300 border-green-700/50 mb-4">PRICING</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Access Level</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Three tiers of access to watch the most ambitious 3D printing business challenge ever attempted.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Tier */}
              <motion.div
                className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Observer</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-4">
                    $19
                    <span className="text-lg text-gray-400 font-normal">/month</span>
                  </div>
                  <p className="text-gray-300">Watch the journey unfold</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Weekly progress updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Newsletter access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Basic community access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Challenge participation</span>
                  </li>
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
              </motion.div>

              {/* Pro Tier */}
              <motion.div
                className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-500 text-white px-4 py-2 text-sm font-semibold">MOST POPULAR</Badge>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Builder</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-4">
                    $49
                    <span className="text-lg text-gray-400 font-normal">/month</span>
                  </div>
                  <p className="text-purple-200">Build alongside me</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Everything in Observer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Daily step-by-step breakdowns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Live community access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Q&A sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Tool recommendations</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Join Now
                </Button>
              </motion.div>

              {/* VIP Tier */}
              <motion.div
                className="relative bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm border border-yellow-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">All-Access</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-4">
                    $199
                    <span className="text-lg text-gray-400 font-normal">/month</span>
                  </div>
                  <p className="text-yellow-200">Get everything</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Everything in Builder</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">All STL files & source code</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Templates & workflows</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Private Discord access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">50% discount on all tools</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                  Go All-In
                </Button>
              </motion.div>
            </div>

            {/* Money Back Guarantee */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-900/20 backdrop-blur-sm border border-green-700/50 rounded-full px-6 py-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-medium">30-day money-back guarantee</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Everything you need to know about the challenge</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center gap-4">
                      <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 text-xs">
                        {item.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6">
                          <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Ready to Watch History
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Being Made?
                </motion.span>
              </h2>

              <p className="text-xl text-purple-200 mb-12 leading-relaxed">
                Join thousands of entrepreneurs, makers, and dreamers as we build the most advanced 3D printing
                business ever created. In real time. With complete transparency.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-12 py-6 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Join the Challenge
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-12 py-6 text-xl font-medium transition-all duration-300"
                >
                  <FileText className="mr-3 h-6 w-6" />
                  Get Free Blueprint
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
