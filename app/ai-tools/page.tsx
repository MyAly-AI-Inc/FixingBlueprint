"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import {
  ArrowRight,
  Mail,
  Sparkles,
  Palette,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Crown,
  Printer,
  Brain,
  Rocket,
  BookOpen,
} from "lucide-react"

export default function AIToolsPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const tools = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Design Generator",
      description: "Transform your ideas into 3D printable designs using advanced AI algorithms",
      features: ["Text-to-3D conversion", "Style transfer", "Parametric generation"],
      status: "Available",
      image: "/images/ai-device.png",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Smart Material Optimizer",
      description: "AI-powered material selection and print settings optimization",
      features: ["Material analysis", "Cost optimization", "Quality prediction"],
      status: "Beta",
      image: "/images/specialized-filaments.png",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Intelligence",
      description: "AI-driven market analysis for 3D printing opportunities",
      features: ["Trend analysis", "Demand forecasting", "Competitor insights"],
      status: "Coming Soon",
      image: "/images/sell-product.jpeg",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Business Automation Suite",
      description: "Complete AI workflow for 3D printing businesses",
      features: ["Order management", "Quality control", "Customer insights"],
      status: "Premium",
      image: "/images/3dprinting-business-woman.jpeg",
    },
  ]

  const testimonials = [
    {
      quote:
        "The AI design generator saved me 15 hours per week. I went from struggling with CAD to creating professional designs in minutes.",
      name: "Sarah Chen",
      title: "3D Printing Entrepreneur - $15K/month revenue",
    },
    {
      quote:
        "Smart Material Optimizer reduced my material waste by 40% and increased print success rate to 98%. ROI was immediate.",
      name: "Marcus Rodriguez",
      title: "Manufacturing Consultant - 400% client growth",
    },
    {
      quote:
        "Market Intelligence helped me identify a niche that generated $50K in the first quarter. The trend predictions are incredibly accurate.",
      name: "Emily Watson",
      title: "Product Designer - Featured in Forbes",
    },
    {
      quote:
        "Business Automation Suite transformed my workflow. I now manage 3x more orders with half the time investment.",
      name: "David Kim",
      title: "3D Printing Studio Owner - 300% revenue increase",
    },
    {
      quote: "These AI tools gave me the competitive edge I needed. My designs now sell 5x faster than before.",
      name: "Lisa Thompson",
      title: "Creative Entrepreneur - $25K monthly passive income",
    },
    {
      quote:
        "The quality predictions are game-changing. I haven't had a failed print in 6 months since using these tools.",
      name: "Ahmed Hassan",
      title: "Technical Director - 99.2% success rate",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-blue-900/40" />

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
              AI-Powered
            </span>
            <br />
            <span className="text-white font-sans tracking-tight drop-shadow-2xl">3D PRINTING TOOLS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Transform your 3D printing business with cutting-edge AI tools. From design generation to market analysis,
            automate your workflow and scale faster than ever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a href="#tools-preview">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 shadow-lg"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore AI Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#early-access">
              <Button
                size="lg"
                variant="outline"
                className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-black/50"
              >
                <Crown className="mr-2 h-5 w-5" />
                Get Early Access
              </Button>
            </a>
          </motion.div>

          {isSubscribed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 flex items-center justify-center gap-2 text-green-400"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Welcome to the future of 3D printing! Check your email for early access.</span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center gap-8 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>500+ Beta Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Tools Preview Section */}
      <section id="tools-preview" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">
              <Rocket className="h-3 w-3 mr-1" />
              AI Tools Suite
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              The Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                3D Printing
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Revolutionary AI tools designed specifically for 3D printing entrepreneurs, makers, and businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={tool.image || "/placeholder.svg"}
                      alt={tool.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(tool.title)}`
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          tool.status === "Available"
                            ? "bg-green-600"
                            : tool.status === "Beta"
                              ? "bg-yellow-600"
                              : tool.status === "Premium"
                                ? "bg-purple-600"
                                : "bg-gray-600"
                        } text-white`}
                      >
                        {tool.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
                        {tool.icon}
                      </div>
                      <CardTitle className="text-white">{tool.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 mb-4 leading-relaxed">{tool.description}</p>
                    <div className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Marquee Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">
              <Users className="h-3 w-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Real Results from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                Real Entrepreneurs
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              See how AI-powered 3D printing tools are transforming businesses and creating new opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
          </motion.div>
        </div>
      </section>

      {/* Early Access CTA Section */}
      <section id="early-access" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-600/30">
              <Crown className="h-3 w-3 mr-1" />
              Limited Early Access
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Be Among the First to Access{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                AI Tools
              </span>
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Join the exclusive beta program and get early access to revolutionary AI tools that will transform your 3D
              printing business.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email for early access"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6"
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Get Access
                </Button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/blueprint">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-black/50 flex items-center gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Learn 3D Blueprint Method
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/mini-blueprint">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-black/50 flex items-center gap-2"
                >
                  <Printer className="h-5 w-5" />
                  Get Free Business Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              <p>✓ No spam, ever • ✓ Unsubscribe anytime • ✓ Early access guaranteed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-semibold text-white">AI 3D Printing Tools</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/blueprint" className="hover:text-white transition-colors">
                3D Blueprint
              </Link>
              <Link href="/mini-blueprint" className="hover:text-white transition-colors">
                Business Guide
              </Link>
              <Link href="/community" className="hover:text-white transition-colors">
                Community
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2025 AI 3D Printing Tools by Aly Yu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
