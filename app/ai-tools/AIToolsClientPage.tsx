"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { GlowCard } from "@/components/ui/spotlight-card"
import {
  ArrowRight,
  Mail,
  Sparkles,
  Users,
  CheckCircle,
  Star,
  Crown,
  Brain,
  Rocket,
  BookOpen,
  Download,
  TrendingUp,
  Play,
  Zap,
  Bot,
  Target,
  BarChart3,
} from "lucide-react"

export default function AIToolsClientPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      // Add haptic feedback for mobile
      if ("vibrate" in navigator) {
        navigator.vibrate(100)
      }
    }
  }

  const handleDownloadPDF = () => {
    // Track download event
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "download", {
        event_category: "Lead Magnet",
        event_label: "AI Toolkit PDF",
      })
    }
    // Simulate PDF download
    alert("PDF download would start here. In production, this would trigger the actual download.")
  }

  // Enhanced tools array with more sophisticated styling
  const tools = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Design Generator",
      description: "Transform ideas into 3D printable designs using advanced AI algorithms",
      features: ["Text-to-3D conversion", "Style transfer", "Parametric generation"],
      status: "Available",
      roi: "15 hours saved/week",
      color: "from-blue-500 to-cyan-500",
      glowColor: "blue" as const,
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Smart Business Optimizer",
      description: "AI-powered market analysis and business automation suite",
      features: ["Market intelligence", "Order automation", "ROI optimization"],
      status: "Beta",
      roi: "300% revenue increase",
      color: "from-purple-500 to-pink-500",
      glowColor: "purple" as const,
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Complete AI Workflow",
      description: "End-to-end automation from design to delivery",
      features: ["Full automation", "Quality control", "Customer insights"],
      status: "Premium",
      roi: "40% cost reduction",
      color: "from-green-500 to-emerald-500",
      glowColor: "green" as const,
    },
  ]

  // Enhanced testimonials with more details
  const testimonials = [
    {
      quote:
        "The AI design generator saved me 15 hours per week. I went from struggling with CAD to creating professional designs in minutes.",
      name: "Sarah Chen",
      title: "3D Printing Entrepreneur",
      revenue: "$15K/month revenue",
      initials: "SC",
      company: "PrintCraft Studios",
      rating: 5,
    },
    {
      quote:
        "Smart Business Optimizer reduced my material waste by 40% and increased print success rate to 98%. ROI was immediate.",
      name: "Marcus Rodriguez",
      title: "Manufacturing Consultant",
      revenue: "400% client growth",
      initials: "MR",
      company: "TechForge Solutions",
      rating: 5,
    },
    {
      quote: "Complete AI Workflow transformed my business. I now manage 3x more orders with half the time investment.",
      name: "Emily Watson",
      title: "3D Printing Studio Owner",
      revenue: "300% revenue increase",
      initials: "EW",
      company: "Precision Prints Co.",
      rating: 5,
    },
  ]

  // New stats section
  const stats = [
    { icon: <Users className="h-6 w-6" />, label: "Active Users", value: "500+" },
    { icon: <Star className="h-6 w-6" />, label: "Average Rating", value: "4.9/5" },
    { icon: <TrendingUp className="h-6 w-6" />, label: "Average ROI", value: "300%" },
    { icon: <Target className="h-6 w-6" />, label: "Success Rate", value: "98%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          {/* Enhanced heading with better typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm py-2 px-4">
              <Zap className="mr-2 h-4 w-4" />
              Revolutionary AI Technology
            </Badge>
            <h1 className={`font-bold mb-6 ${isMobile ? "text-4xl" : "text-6xl lg:text-7xl"} leading-tight`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                AI-Powered
              </span>
              <br />
              <span className="text-white font-sans tracking-tight">3D PRINTING TOOLS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed ${isMobile ? "text-lg" : "text-xl lg:text-2xl"}`}
          >
            Transform your 3D printing business with cutting-edge AI tools. From design generation to market analysis,
            automate your workflow and scale faster than ever before.
          </motion.p>

          {/* Enhanced video preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <GlowCard glowColor="purple" customSize className="max-w-3xl mx-auto">
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">See AI Tools in Action</h3>
                    <p className="text-purple-200 text-sm">Watch how 500+ businesses transformed their operations</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600 text-white animate-pulse">● LIVE DEMO</Badge>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={`flex gap-6 justify-center items-center mb-12 ${isMobile ? "flex-col" : "flex-col sm:flex-row"}`}
          >
            <Button
              onClick={handleDownloadPDF}
              size="xl"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px]"
            >
              <Download className="mr-2 h-5 w-5" />
              Get Free AI Toolkit PDF
            </Button>
            <a href="#tools-preview">
              <Button
                size="xl"
                variant="outline"
                className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-white/10 min-h-[56px]"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore AI Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>

          {/* Enhanced stats section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Tools Preview Section */}
      <section id="tools-preview" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 backdrop-blur-sm py-2 px-4">
              <Bot className="h-4 w-4 mr-2" />
              AI Tools Suite
            </Badge>
            <h2 className={`font-bold mb-8 text-white ${isMobile ? "text-3xl" : "text-5xl lg:text-6xl"}`}>
              The Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                3D Printing
              </span>
            </h2>
            <p className={`text-purple-200 max-w-4xl mx-auto leading-relaxed ${isMobile ? "text-lg" : "text-xl"}`}>
              Revolutionary AI tools designed specifically for 3D printing entrepreneurs and businesses. Experience the
              next generation of automated design and production.
            </p>
          </motion.div>

          <div className={`grid gap-8 max-w-6xl mx-auto ${isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard glowColor={tool.glowColor} customSize className="h-full">
                  <div className="p-6 h-full flex flex-col">
                    {/* Header with icon and status */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        {tool.icon}
                      </div>
                      <Badge
                        className={`${
                          tool.status === "Available"
                            ? "bg-green-600/20 border-green-500/50 text-green-300"
                            : tool.status === "Beta"
                              ? "bg-yellow-600/20 border-yellow-500/50 text-yellow-300"
                              : "bg-purple-600/20 border-purple-500/50 text-purple-300"
                        }`}
                      >
                        {tool.status}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{tool.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{tool.description}</p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {tool.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer with ROI */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-blue-600/20 border-blue-500/50 text-blue-300">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          {tool.roi}
                        </Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-purple-300 hover:text-white hover:bg-purple-500/20"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 border-green-500/30 backdrop-blur-sm py-2 px-4">
              <Users className="h-4 w-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className={`font-bold mb-8 text-white ${isMobile ? "text-3xl" : "text-5xl lg:text-6xl"}`}>
              Real Results from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Real Entrepreneurs
              </span>
            </h2>
            <p className={`text-purple-200 max-w-4xl mx-auto leading-relaxed ${isMobile ? "text-lg" : "text-xl"}`}>
              See how our AI tools have transformed businesses across the globe
            </p>
          </motion.div>

          <div className={`grid gap-8 ${isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard glowColor="green" customSize className="h-full">
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.initials}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-green-300">{testimonial.title}</p>
                        <p className="text-xs text-gray-400">{testimonial.company}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-300 italic mb-6 flex-1 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Footer */}
                    <div className="pt-4 border-t border-white/10">
                      <Badge className="bg-green-600/20 text-green-300 border-green-600/30">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {testimonial.revenue}
                      </Badge>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lead Magnet CTA Section */}
      <section id="lead-magnet" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlowCard glowColor="purple" customSize className="p-12">
              <Badge className="mb-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30 py-2 px-4">
                <Crown className="h-4 w-4 mr-2" />
                Free Business Toolkit
              </Badge>

              <h2 className={`font-bold mb-8 text-white ${isMobile ? "text-3xl" : "text-5xl lg:text-6xl"}`}>
                Get Your Free{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  AI Toolkit
                </span>
              </h2>

              <p
                className={`text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed ${isMobile ? "text-lg" : "text-xl"}`}
              >
                Download the complete AI 3D Printing Business Toolkit including templates, calculators, and step-by-step
                guides to transform your business today.
              </p>

              {/* Enhanced email capture form */}
              <form onSubmit={handleSubscribe} className="max-w-lg mx-auto mb-12">
                <div className={`flex gap-4 ${isMobile ? "flex-col" : ""}`}>
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email for instant access"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[56px] rounded-xl backdrop-blur-sm"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="xl"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white min-h-[56px] px-8"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Get Free Toolkit
                  </Button>
                </div>
              </form>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 flex items-center justify-center gap-3 text-green-400 bg-green-500/10 rounded-xl p-4 border border-green-500/20"
                >
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg font-medium">
                    Success! Check your email for the AI Toolkit download link.
                  </span>
                </motion.div>
              )}

              {/* Additional CTAs */}
              <div
                className={`flex gap-6 justify-center items-center ${isMobile ? "flex-col" : "flex-col sm:flex-row"}`}
              >
                <Link href="/blueprint">
                  <Button
                    size="xl"
                    variant="outline"
                    className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-white/10 min-h-[56px]"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    Learn 3D Blueprint Method
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="mt-8 text-center text-sm text-gray-400">
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Instant download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Sticky Mobile CTA */}
      {isMobile && (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-4 left-4 right-4 z-50">
          <Button
            onClick={handleDownloadPDF}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl min-h-[56px] rounded-xl backdrop-blur-sm"
          >
            <Download className="mr-2 h-5 w-5" />
            Get Free AI Toolkit PDF
          </Button>
        </motion.div>
      )}
    </div>
  )
}
