"use client"
import Image from "next/image"
import type React from "react"

import { Button } from "@/components/ui/button"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle,
  Users,
  CuboidIcon as Cube,
  ArrowRight,
  Settings,
  DollarSign,
  BookOpen,
  ExternalLink,
  Star,
  DollarSignIcon,
  UserCheck,
  ListChecks,
  Palette,
  Printer,
  TrendingUp,
  Zap,
  Wrench,
  WorkflowIcon,
  Target,
  BarChart3,
  Store,
  BrainCircuit,
  Bot,
  AreaChart,
  Eye,
  Rocket,
  Lightbulb,
  Code,
} from "lucide-react"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { useState, useEffect } from "react"
import { PublicNavigation } from "@/components/public-navigation"

// Enhanced Animated Gradient Heading Component with better visibility
const AnimatedGradientHeading = ({
  children,
  fromColor = "from-blue-400",
  toColor = "to-blue-600",
  viaColor,
  className = "",
}: {
  children: React.ReactNode
  fromColor?: string
  toColor?: string
  viaColor?: string
  className?: string
}) => {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow effect below text, starting from the gradient line */}
      <motion.div
        className={`absolute -inset-x-8 top-full -bottom-24 blur-2xl opacity-40 bg-gradient-to-t ${fromColor} ${viaColor ? viaColor : ""} ${toColor}`}
      />

      {/* Main heading with enhanced styling */}
      <motion.h2
        className={`relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor} ${className}`}
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: "0% 50%",
          filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))",
        }}
        whileInView={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        viewport={{ once: false, margin: "-100px" }}
      >
        {children}
      </motion.h2>

      {/* Subtle underline accent */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor} rounded-full mt-4`}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  )
}

export default function HomePage() {
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)
  const [splineLoaded, setSplineLoaded] = useState(false)
  const [tilt1, setTilt1] = useState({ x: 0, y: 0 })
  const [isTilting1, setIsTilting1] = useState(false)
  const [tilt2, setTilt2] = useState({ x: 0, y: 0 })
  const [isTilting2, setIsTilting2] = useState(false)
  const [tilt3, setTilt3] = useState({ x: 0, y: 0 })
  const [isTilting3, setIsTilting3] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isStoryExpanded, setIsStoryExpanded] = useState(false)

  const handleMouseMove1 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTilting1) return

    const element = e.currentTarget
    const rect = element.getBoundingClientRect()

    // Calculate mouse position relative to card center (in percentage)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2 // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2 // -1 to 1

    setTilt1({ x: -y * 10, y: x * 10 }) // Invert Y for natural tilt
  }

  const handleMouseEnter1 = () => {
    setIsTilting1(true)
  }

  const handleMouseLeave1 = () => {
    setIsTilting1(false)
    setTilt1({ x: 0, y: 0 })
  }

  const handlers1 = {
    onMouseMove: handleMouseMove1,
    onMouseEnter: handleMouseEnter1,
    onMouseLeave: handleMouseLeave1,
  }

  const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTilting2) return

    const element = e.currentTarget
    const rect = element.getBoundingClientRect()

    // Calculate mouse position relative to card center (in percentage)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2 // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2 // -1 to 1

    setTilt2({ x: -y * 10, y: x * 10 }) // Invert Y for natural tilt
  }

  const handleMouseEnter2 = () => {
    setIsTilting2(true)
  }

  const handleMouseLeave2 = () => {
    setIsTilting2(false)
    setTilt2({ x: 0, y: 0 })
  }

  const handlers2 = {
    onMouseMove: handleMouseMove2,
    onMouseEnter: handleMouseEnter2,
    onMouseLeave: handleMouseLeave2,
  }

  const handleMouseMove3 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTilting3) return

    const element = e.currentTarget
    const rect = element.getBoundingClientRect()

    // Calculate mouse position relative to card center (in percentage)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2 // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2 // -1 to 1

    setTilt3({ x: -y * 10, y: x * 10 }) // Invert Y for natural tilt
  }

  const handleMouseEnter3 = () => {
    setIsTilting3(true)
  }

  const handleMouseLeave3 = () => {
    setIsTilting3(false)
    setTilt3({ x: 0, y: 0 })
  }

  const handlers3 = {
    onMouseMove: handleMouseMove3,
    onMouseEnter: handleMouseEnter3,
    onMouseLeave: handleMouseLeave3,
  }

  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  // Only render the Spline component after the component has mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  // Success stories
  const successStories = [
    {
      name: "Aly Yu",
      business: "3D Blueprint Creator",
      image: "/3d-printing-entrepreneur-studio.png",
      story:
        "A few months ago I posted on instagram offering tips for people needing help with their 3D printing business. I wanted to share some of the knowledge I had picked up from months of growing my own business from $500 to 6 figures. But I underestimated just how much help people needed, and in the weeks that followed I received thousands of messages, often hundreds per day. I knew that there was no way I could help everyone with the personalized advice they deserve. So I set out to build a suite of tools and AI agents to help others build their dreams. As a philosopher I believe that knowledge is power, and as Plato once said 'the measure of a man is what he does with power'. That is why the 3D Blueprint will always be free. Because democratizing knowledge to help others, is the most meaningful contribution I could make. I built every line of code on this site myself using AI assisted tools, so if you find a bug please let me know. I hope this suite of resources helps you on your journey, and if it does please pay it forward to someone by sharing your knowledge later too. Thank you for visiting, I can't wait to see what you create ❤️",
      achievement: "From $500 to 6 Figures",
      specialty: "Democratizing 3D Printing Knowledge",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      icon: "HelpCircle",
      category: "Getting Started",
      question: "How do I access Blueprint's learning resources?",
      answer:
        "Simply create a free account and you'll get immediate access to all our learning materials, tutorials, and community features. No credit card or payment information is required.",
    },
    {
      icon: "DollarSign",
      category: "Pricing",
      question: "Is Blueprint really completely free?",
      answer:
        "Yes! Blueprint is 100% free. We believe in democratizing knowledge in the 3D printing industry, making it accessible to everyone regardless of their financial situation. There are no premium tiers, hidden fees, or paywalls.",
    },
    {
      icon: "Download",
      category: "Resources",
      question: "What 3D Printer should I buy?",
      answer:
        "Finding the right 3D printer depends on your unique situation. Our fundamentals guide has a quiz you can take to help our AI agent recommend the best one for your budget and goals.",
    },
    {
      icon: "Users",
      category: "Community",
      question: "How can I contribute to the Blueprint community?",
      answer:
        "There are many ways to contribute! You can share your projects, help answer questions in our forums, create tutorials, or even contribute 3D models to our library. We're built by makers for makers, and community contributions are what make Blueprint special.",
    },
    {
      icon: "Building",
      category: "Business",
      question: "How can Blueprint help me start a 3D printing business?",
      answer:
        "We provide comprehensive business guides, market research tools, pricing strategies, and business model templates to help you turn your 3D printing skills into a profitable venture. Our community also includes many successful entrepreneurs who share their experiences and advice.",
    },
    {
      icon: "Heart",
      category: "Support",
      question: "How is Blueprint funded if it's completely free?",
      answer:
        "Blueprint is 100% funded by Aly Yu on behalf of MyAly AI, Inc. with the proceeds of her books and newsletters.",
    },
  ]

  // Fallback component for when Spline fails to load
  const SplineFallback = () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-8">
      <Cube className="h-16 w-16 text-blue-500 mb-4 animate-pulse" />
      <h3 className="text-xl font-bold text-blue-600 mb-2">Interactive 3D</h3>
      <p className="text-gray-600 text-center">
        Experience our interactive 3D models to visualize your printing projects before you start.
      </p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <PublicNavigation />
      <SplashCursor
        DENSITY_DISSIPATION={4}
        COLOR_UPDATE_SPEED={6}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={8000}
        SHADING={true}
        CURLL={20}
      />
      <ScrollProgress />
      <ScrollToTop />
      {/* Hero Section - Live Challenge Announcement */}
      <ScrollReveal>
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex flex-col justify-center">
          {/* Background elements */}
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
            />

            {/* Animated particles */}
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

          <div className="container mx-auto px-4 relative z-10">
            {/* Live Badge */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-300 font-semibold text-lg">LIVE CHALLENGE</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white">Building a</span>
              <span className="block mt-2">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-600"
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
                  Futuristic 3D Business
                </motion.span>
              </span>
              <span className="block mt-2 text-white">in 30 Days</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From zero to the most futuristic 3D printing business ever created - and then I'm giving it away to one of
              you.
              <span className="block mt-4 text-cyan-300 font-semibold">In real time, right before your eyes.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-full px-10 py-6 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🔴 Watch Live Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-300 hover:bg-blue-500/10 rounded-full px-10 py-6 text-xl"
              >
                📚 Get the Blueprint
              </Button>
            </motion.div>
          </div>

          {/* Video Preview Section */}
          <motion.div
            className="w-full max-w-6xl mx-auto px-4 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20">
              <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center backdrop-blur-sm border border-red-500/30">
                    <div className="w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Live Stream Preview</h3>
                  <p className="text-blue-200">Building the future of 3D printing, one day at a time</p>
                </div>
              </div>

              {/* Live indicators */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600/90 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-sm">LIVE</span>
              </div>

              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-semibold text-sm">👥 2,847 watching</span>
              </div>
            </div>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* What You'll See Section - Robot Building */}
      <ScrollReveal>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-indigo-900/30 text-indigo-300 border-indigo-700/50 mb-4">
                  WHAT YOU'LL WITNESS
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">30 Days of Pure Innovation</h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Watch every tool being built, every strategy being tested, and every sale being made in real-time.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* AI Tool Development */}
              <motion.div
                className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <BrainCircuit className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Tool Integration</h3>
                <p className="text-blue-200 mb-4">
                  Watch me integrate a new AI tool every day to create content, drive traffic, and make money for the 3D
                  printing business.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Content creation workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Traffic generation systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Revenue optimization tools</span>
                  </li>
                </ul>
              </motion.div>

              {/* Real Sales Data */}
              <motion.div
                className="bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Live Sales Tracking</h3>
                <p className="text-blue-200 mb-4">
                  See every sale, every customer interaction, and every revenue stream as it happens.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Daily revenue reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Customer feedback analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Profit margin breakdowns</span>
                  </li>
                </ul>
              </motion.div>

              {/* Code & Systems */}
              <motion.div
                className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Behind the Code</h3>
                <p className="text-blue-200 mb-4">
                  Get access to the actual code, systems, and workflows that power the business.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Complete source code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>System architecture docs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Deployment strategies</span>
                  </li>
                </ul>
              </motion.div>

              {/* 3D Design Process */}
              <motion.div
                className="bg-orange-900/20 backdrop-blur-sm border border-orange-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Cube className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">3D Design Innovation</h3>
                <p className="text-blue-200 mb-4">
                  Watch cutting-edge 3D designs being created with AI assistance and advanced workflows.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>AI-generated designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Rapid prototyping methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Market-tested products</span>
                  </li>
                </ul>
              </motion.div>

              {/* Marketing & Growth */}
              <motion.div
                className="bg-pink-900/20 backdrop-blur-sm border border-pink-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-pink-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Growth Strategies</h3>
                <p className="text-blue-200 mb-4">
                  See how AI-powered marketing and growth hacking techniques scale a business rapidly.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span>Viral marketing campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span>Community building tactics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span>Conversion optimization</span>
                  </li>
                </ul>
              </motion.div>

              {/* Failure & Learning */}
              <motion.div
                className="bg-red-900/20 backdrop-blur-sm border border-red-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-red-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Real Failures & Pivots</h3>
                <p className="text-blue-200 mb-4">
                  Learn from every mistake, failed experiment, and necessary pivot in real-time.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Failed tool analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Pivot strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Learning frameworks</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Philosophy & Mission Section */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/aly-challenge/aly-holographic-tech.jpeg"
                    alt="Aly working with holographic technology interfaces"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>

                {/* Floating quote */}
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 max-w-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-white font-medium italic">
                    "I didn't study philosophy to sell courses. I did it to design for the future."
                  </p>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-6 bg-purple-900/30 text-purple-300 border-purple-700/50">THE MISSION</Badge>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">Why I'm Doing This</h2>

                <div className="space-y-6 text-lg text-blue-200">
                  <p>
                    I didn't study philosophy to sell courses. I didn't study business to make money. And I didn't
                    master AI to play games.
                  </p>

                  <p className="text-xl font-semibold text-cyan-300">
                    I did it to design for the future, to help people, and to change the world.
                  </p>

                  <p>Don't believe me? Come watch.</p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-4">
                    Watch My Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-full px-8 py-4"
                  >
                    Learn My Philosophy
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Real-Time Building Section */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-blue-900/30 text-blue-300 border-blue-700/50">LIVE TRANSPARENCY</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Building in Real Time</h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  I'm breaking down every step, every tool, and sharing every sale. If I want to create a legendary
                  system for other entrepreneurs, I need to become one first.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Every Step */}
              <motion.div
                className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ListChecks className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Every Step</h3>
                <p className="text-blue-200">
                  From ideation to execution, watch every decision and process unfold in real-time.
                </p>
              </motion.div>

              {/* Every Tool */}
              <motion.div
                className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Every Tool</h3>
                <p className="text-blue-200">
                  See exactly which AI tools, software, and strategies I use to build this business.
                </p>
              </motion.div>

              {/* Every Sale */}
              <motion.div
                className="bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-green-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Every Sale</h3>
                <p className="text-blue-200">
                  Complete financial transparency - every dollar earned and spent, shared openly.
                </p>
              </motion.div>
            </div>

            {/* Live Dashboard Preview */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Live Business Dashboard</h3>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Updates</span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-blue-900/30 rounded-xl p-4">
                  <div className="text-blue-400 text-sm font-medium mb-1">Day</div>
                  <div className="text-3xl font-bold text-white">12</div>
                  <div className="text-blue-300 text-sm">of 30</div>
                </div>

                <div className="bg-green-900/30 rounded-xl p-4">
                  <div className="text-green-400 text-sm font-medium mb-1">Revenue</div>
                  <div className="text-3xl font-bold text-white">$8,247</div>
                  <div className="text-green-300 text-sm">+$1,203 today</div>
                </div>

                <div className="bg-purple-900/30 rounded-xl p-4">
                  <div className="text-purple-400 text-sm font-medium mb-1">Products</div>
                  <div className="text-3xl font-bold text-white">23</div>
                  <div className="text-purple-300 text-sm">designs created</div>
                </div>

                <div className="bg-orange-900/30 rounded-xl p-4">
                  <div className="text-orange-400 text-sm font-medium mb-1">Viewers</div>
                  <div className="text-3xl font-bold text-white">2.8K</div>
                  <div className="text-orange-300 text-sm">watching live</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* The Giveaway Section */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-purple-900/20"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-6 bg-pink-900/30 text-pink-300 border-pink-700/50">THE ULTIMATE PRIZE</Badge>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                  And Maybe You
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                    Will Win It All
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-blue-200 mb-10">
                  <p>At the end of 30 days, I'm giving away the entire business - complete with:</p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>The complete business model and all revenue streams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>Every AI tool, workflow, and automation system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>All product designs, marketing materials, and customer lists</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>Personal mentorship to ensure your success</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg">
                    Enter the Giveaway
                    <Star className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-pink-500 text-pink-300 hover:bg-pink-500/10 rounded-full px-8 py-4"
                  >
                    See Contest Rules
                  </Button>
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <Image
                    src="/images/aly-challenge/future-of-3d-printing.jpeg"
                    alt="Futuristic 3D printing business visualization"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  />

                  {/* Prize value overlay */}
                  <motion.div
                    className="absolute top-6 left-6 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="text-white font-bold text-2xl">$50K+</div>
                    <div className="text-yellow-100 text-sm">Total Value</div>
                  </motion.div>

                  {/* Countdown timer */}
                  <motion.div
                    className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold text-red-400">18</div>
                      <div className="text-gray-300 text-sm">Days Left</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Behind the Scenes Section */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-gray-900 to-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-cyan-900/30 text-cyan-300 border-cyan-700/50">BEHIND THE SCENES</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Making of a Legend</h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Get exclusive access to my workspace, thought process, and the tools that make it all possible.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Workspace Tour */}
              <motion.div
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-800/50 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src="/images/aly-challenge/tech-workspace.jpeg"
                    alt="Aly's high-tech workspace setup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-blue-600/80 text-white">Live Workspace</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">My Command Center</h3>
                  <p className="text-blue-200 text-sm">
                    Tour the workspace where the magic happens - from AI workstations to 3D printing labs.
                  </p>
                </div>
              </motion.div>

              {/* AI Art Process */}
              <motion.div
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-800/50 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative h-48">
                  <Image
                    src="/images/aly-challenge/prism-ai-art.png"
                    alt="AI-generated prismatic art visualization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-600/80 text-white">AI Creation</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">AI Design Process</h3>
                  <p className="text-blue-200 text-sm">
                    Watch as I use cutting-edge AI to generate products that have never existed before.
                  </p>
                </div>
              </motion.div>

              {/* Blueprint Mini */}
              <motion.div
                className="bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-800/50 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative h-48">
                  <Image
                    src="/images/aly-challenge/aly-blueprint-mini.png"
                    alt="3D Blueprint mini version preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-green-600/80 text-white">Free Resource</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Blueprint Mini</h3>
                  <p className="text-blue-200 text-sm">
                    Get started with my condensed guide while you watch the full business unfold.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Step Inside Section - Dramatic Entrance */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* Animated particles */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.3 + Math.random() * 0.4,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Step Inside the{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600"
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
                    3D Blueprint
                  </motion.span>
                </h2>

                <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto">
                  Unlock a world of structured learning, expert guidance, and community support designed to transform
                  you into a 3D printing master.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full px-10 py-7 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => (window.location.href = "/blueprint")}
                  >
                    Enter the Blueprint
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </motion.div>

                <div className="mt-16 flex flex-wrap justify-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-blue-200 text-lg">Structured Learning Paths</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <p className="text-blue-200 text-lg">Expert Community Support</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-blue-200 text-lg">Business Opportunities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Journey Through 3D Printing - Positive, Inspiring Sections */}
      <ScrollReveal>
        {/* Section 1: Find the Right 3D Printer */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedGradientHeading fromColor="from-blue-400" toColor="to-blue-600">
                  Find the Right 3D Printer for You
                </AnimatedGradientHeading>
                <div className="space-y-8 mt-10">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-700/40 flex items-center justify-center">
                      <DollarSignIcon className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-200">Budget-Friendly Options</h3>
                      <p className="text-gray-300 mt-1">
                        Find the perfect printer for every price point, from beginner to professional
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-700/40 flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-200">Expert Recommendations</h3>
                      <p className="text-gray-300 mt-1">
                        Get personalized suggestions based on your specific needs and goals
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-700/40 flex items-center justify-center">
                      <ListChecks className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-200">Feature Comparison</h3>
                      <p className="text-gray-300 mt-1">
                        Compare print quality, build volume, and reliability across top models
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20Blueprint%20Opener%20%282%29.png-E8ylyrsSoITCEJey6o36bvWMsazRWZ.jpeg"
                  alt="3D printing expert with multiple printers in modern makerspace"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Learn to Design */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20Design%20and%20Modeling%20Tools-ByYm60gvu3UkLe9nZXEXksxTJnCo3K.png"
                  alt="3D Design and Modeling Tools - colorful digital design visualization"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl"></div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <AnimatedGradientHeading fromColor="from-purple-400" toColor="to-purple-600">
                  Learn to Design Like a Pro
                </AnimatedGradientHeading>
                <div className="space-y-8 mt-10">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-700/40 flex items-center justify-center">
                      <Palette className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-200">Master Popular Software</h3>
                      <p className="text-gray-300 mt-1">
                        Step-by-step tutorials for Fusion 360, Blender, TinkerCAD, and more
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-700/40 flex items-center justify-center">
                      <Printer className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-200">Design for Printability</h3>
                      <p className="text-gray-300 mt-1">
                        Learn techniques that ensure your designs print perfectly every time
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-700/40 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-200">Progress at Your Pace</h3>
                      <p className="text-gray-300 mt-1">
                        From beginner basics to advanced techniques, follow your own learning path
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="mt-10">
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-3"
                    onClick={() => (window.location.href = "/blueprint/design-modeling")}
                  >
                    Start Designing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Master Your Productivity */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedGradientHeading fromColor="from-cyan-400" toColor="to-cyan-600">
                  Master Your Productivity
                </AnimatedGradientHeading>
                <div className="space-y-8 mt-10">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-cyan-700/40 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-200">Print Faster, Print Better</h3>
                      <p className="text-gray-300 mt-1">
                        Reduce print times by 60% while maintaining or improving quality
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-cyan-700/40 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-200">Expert Troubleshooting</h3>
                      <p className="text-gray-300 mt-1">Identify and fix common issues in minutes instead of hours</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-cyan-700/40 flex items-center justify-center">
                      <WorkflowIcon className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-200">Workflow Optimization</h3>
                      <p className="text-gray-300 mt-1">Set up efficient systems for continuous, reliable production</p>
                    </div>
                  </motion.div>
                </div>
                <div className="mt-10">
                  <Button
                    className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6 py-3"
                    onClick={() => (window.location.href = "/blueprint/technical-skills")}
                  >
                    Boost Your Productivity
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20Printer%20Filament%20Guide%20%284%29-KvSjb55MWYnWFjkEdCdiJHW5MBiNNz.png"
                  alt="3D Printer Filament Guide - spiral filament extrusion visualization"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Sell Profitable Products */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/3d-printed-desk-organizer.png"
                  alt="Entrepreneur selling 3D printed products online"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl"></div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <AnimatedGradientHeading fromColor="from-green-400" toColor="to-green-600">
                  Sell Profitable Products
                </AnimatedGradientHeading>
                <div className="space-y-8 mt-10">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/30 to-green-700/40 flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-200">Find Profitable Niches</h3>
                      <p className="text-gray-300 mt-1">
                        Discover underserved markets with high demand and low competition
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/30 to-green-700/40 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-200">Optimize Pricing Strategy</h3>
                      <p className="text-gray-300 mt-1">Set prices that maximize profits while remaining competitive</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/30 to-green-700/40 flex items-center justify-center">
                      <Store className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-200">Multi-Channel Sales</h3>
                      <p className="text-gray-300 mt-1">
                        Sell across Etsy, eBay, Amazon, and your own website with ease
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="mt-10">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3"
                    onClick={() => (window.location.href = "/blueprint/business-and-entrepreneurship")}
                  >
                    Start Your Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Empower Your Business with AI */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedGradientHeading fromColor="from-indigo-400" toColor="to-indigo-600">
                  Empower Your Business with AI
                </AnimatedGradientHeading>
                <div className="space-y-8 mt-10">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/30 to-indigo-700/40 flex items-center justify-center">
                      <BrainCircuit className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-200">AI-Powered Design</h3>
                      <p className="text-gray-300 mt-1">Generate complex 3D models from simple text descriptions</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/30 to-indigo-700/40 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-200">Automated Optimization</h3>
                      <p className="text-gray-300 mt-1">Let AI analyze and improve your designs for perfect prints</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/30 to-indigo-700/40 flex items-center justify-center">
                      <AreaChart className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-200">Market Intelligence</h3>
                      <p className="text-gray-300 mt-1">Identify trending products and predict market opportunities</p>
                    </div>
                  </motion.div>
                </div>
                <div className="mt-10">
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-3"
                    onClick={() => (window.location.href = "/blueprint/advanced-topics")}
                  >
                    Explore AI Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20Blueprint%20Opener%20%283%29.png-ylQNked8VExZ9IUdknvARaZoVQBA2d.jpeg"
                  alt="Person using AI technology with holographic data displays"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Success Stories */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-rose-900/30 text-rose-300 border-rose-700/50 mb-4">Behind the 3D Blueprint</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">From Hobbyist to Entrepreneur</h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">100% Free, Forever</p>
              </motion.div>
            </div>

            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-rose-900/20 to-purple-900/20 backdrop-blur-sm border border-rose-800/30 rounded-2xl overflow-hidden mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-full min-h-[300px] md:min-h-0">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={`${story.name}, founder of ${story.business}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{story.name}</h3>
                      <p className="text-lg text-rose-200 font-medium">{story.business}</p>
                    </div>

                    <div className="text-blue-100 mb-6 text-sm md:text-base whitespace-pre-line">
                      {isStoryExpanded ? story.story : `${story.story.substring(0, 250)}...`}
                      <button
                        onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                        className="text-rose-400 hover:text-rose-300 font-semibold ml-2 focus:outline-none"
                        aria-expanded={isStoryExpanded}
                      >
                        {isStoryExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-rose-900/30 backdrop-blur-sm border border-rose-800/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-5 h-5 text-rose-400" />
                          <h4 className="text-rose-200 font-semibold">By Makers for Makers</h4>
                        </div>
                        <p className="text-white">{story.achievement}</p>
                      </div>

                      <div className="bg-rose-900/30 backdrop-blur-sm border border-rose-800/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-5 h-5 text-rose-400" />
                          <h4 className="text-rose-200 font-semibold">Vibe</h4>
                        </div>
                        <p className="text-white">Coded with love by Aly Yu</p>
                      </div>
                    </div>

                    <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6 py-3 self-start">
                      Read Full Story
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="text-center mt-12">
              <Button className="bg-rose-600/80 hover:bg-rose-700 text-white rounded-full px-8 py-4 text-lg">
                Explore More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Blueprint Categories Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-purple-900/30 text-purple-300 border-purple-700/50 mb-4">WHAT YOU'LL LEARN</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Complete 3D Printing Education</h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  From your first print to running a business, Blueprint covers every aspect of 3D printing with
                  structured courses and hands-on projects.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Fundamentals */}
              <motion.div
                className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Fundamentals</h3>
                <p className="text-blue-200 mb-4">
                  Master the basics with our beginner-friendly courses covering printer selection, first prints, and
                  essential techniques.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Printer Selection Guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Your First Print</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Basic Maintenance</span>
                  </li>
                </ul>
              </motion.div>

              {/* Design & Modeling */}
              <motion.div
                className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Cube className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Design & Modeling</h3>
                <p className="text-blue-200 mb-4">
                  Create stunning 3D models with professional software and optimization techniques for perfect prints.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>CAD Software Mastery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Design Optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Advanced Techniques</span>
                  </li>
                </ul>
              </motion.div>

              {/* Technical Skills */}
              <motion.div
                className="bg-orange-900/20 backdrop-blur-sm border border-orange-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Technical Skills</h3>
                <p className="text-blue-200 mb-4">
                  Deep dive into advanced calibration, troubleshooting, and printer modifications for expert-level
                  results.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Advanced Calibration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Troubleshooting Guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Printer Upgrades</span>
                  </li>
                </ul>
              </motion.div>

              {/* Business & Entrepreneurship */}
              <motion.div
                className="bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Business & Entrepreneurship</h3>
                <p className="text-blue-200 mb-4">
                  Transform your skills into income with proven business strategies and marketing techniques.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Business Planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Marketing Strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Financial Management</span>
                  </li>
                </ul>
              </motion.div>

              {/* Advanced Topics */}
              <motion.div
                className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <BrainCircuit className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Advanced Topics</h3>
                <p className="text-blue-200 mb-4">
                  Explore cutting-edge technologies like AI-assisted design, multi-material printing, and automation.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>AI Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Multi-Material Printing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Automation Systems</span>
                  </li>
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                className="bg-teal-900/20 backdrop-blur-sm border border-teal-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-teal-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Resources</h3>
                <p className="text-blue-200 mb-4">
                  Access our comprehensive library of models, tutorials, and community-generated content.
                </p>
                <ul className="space-y-2 text-blue-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Model Library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Video Tutorials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Community Projects</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-full px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "/blueprint")}
              >
                Explore All Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section - Live Challenge Focus */}
      <ScrollReveal>
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-purple-900/30 text-purple-300 border-purple-700/50 mb-4">JOIN THE CHALLENGE</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Access Level</h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Watch me build the most advanced 3D printing business in real-time. Get the tools, strategies, and
                  systems as they're created.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Observer - $19 */}
              <motion.div
                className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Observer</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$19</div>
                  <p className="text-blue-200">Follow Along</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-200">Weekly progress updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-200">Access to Aly's newsletter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-200">Full prompt hub access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-200">Challenge summary report</span>
                  </li>
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3">
                  Start Observing
                </Button>
              </motion.div>

              {/* Join the Club - $49 */}
              <motion.div
                className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border-2 border-purple-400/60 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative transform scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.08 }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-lg font-bold shadow-lg">
                    🔥 Most Popular
                  </Badge>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-60"></div>

                <div className="relative text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                    <Users className="w-10 h-10 text-purple-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Join the Club</h3>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    $49
                  </div>
                  <p className="text-purple-200 text-lg">Be Part of the Journey</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-200 text-lg">Everything in Observer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-200 text-lg">Daily step-by-step breakdowns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-200 text-lg">Exclusive club community access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-200 text-lg">Live Q&A sessions with Aly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-200 text-lg">Behind-the-scenes content</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg py-4 text-xl font-semibold shadow-lg">
                  Join the Club
                </Button>
              </motion.div>

              {/* All Access - $199 */}
              <motion.div
                className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-600/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">All Access</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">$199</div>
                  <p className="text-yellow-200">Get Everything</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-200">Everything in Participant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-200">All 3D STL files created</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-200">Complete source code access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-200">AI tool templates & systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-200">Discount subscriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-200">Private Discord access</span>
                  </li>
                </ul>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg py-3">
                  Get All Access
                </Button>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-blue-200">30-Day Challenge Period</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-blue-200">Real-Time Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-blue-200">Transparent Results</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-4">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Get answers to common questions about Blueprint and 3D printing.
                </p>
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center gap-4">
                      <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50">{faq.category}</Badge>
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    </div>
                    <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="w-5 h-5 text-blue-400" />
                    </motion.div>
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
                        <div className="px-6 pb-4">
                          <p className="text-blue-200 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
