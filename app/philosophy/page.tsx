"use client"

import type React from "react"

import { useState, Suspense, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Mail,
  Sparkles,
  Palette,
  Lightbulb,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  CuboidIcon as Cube,
  Database,
  Crown,
  Award,
  Printer,
  Brain,
  Rocket,
  BookOpen,
} from "lucide-react"

// Spline Viewer Component
const SplineViewer = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js'
    
    script.onload = () => {
      // Create spline-viewer element after script loads
      if (containerRef.current) {
        const viewer = document.createElement('spline-viewer')
        viewer.setAttribute('url', url)
        viewer.style.width = '100%'
        viewer.style.height = '100%'
        containerRef.current.appendChild(viewer)
      }
    }
    
    document.head.appendChild(script)
    
    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [url])
  
  return <div ref={containerRef} className="w-full h-full" />
}

export default function PhilosophyPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Philosophy of Making",
      description: "Deep dives into the art and philosophy of creation, manufacturing, and bringing ideas to life",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Creative Innovation",
      description: "Explore the intersection of philosophy, design thinking, and 3D printing innovation",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Business Philosophy",
      description: "Learn the mindset and principles behind building a sustainable creative business",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Maker Community",
      description: "Connect with philosophical makers who think deeply about their craft",
    },
  ]

  const testimonials = [
    {
      name: "David Kim",
      role: "3D Printing Entrepreneur",
      content:
        "Aly's philosophical approach to 3D printing transformed my business. It's not just about printing objects, it's about creating value.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Product Designer",
      content: "The philosophy newsletter helped me understand the 'why' behind design. My products now tell stories.",
      rating: 5,
    },
    {
      name: "Alex Chen",
      role: "Maker & Artist",
      content: "This isn't just another business newsletter. It's a journey into the soul of creation. Absolutely love it!",
      rating: 5,
    },
  ]

  const philosophyBenefits = [
    "Weekly philosophical insights on making and creation",
    "Exclusive essays on the Axiogenetic Theorem",
    "Monthly virtual philosophy circles",
    "Early access to new philosophical frameworks",
    "Direct Q&A with Aly on philosophy and business",
    "Access to private philosophy community",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Hero Section with Spline Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background - You can replace with your own 3D scene */}
        <div className="absolute inset-0 z-0">
          <Suspense
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-indigo-900 to-purple-900 flex items-center justify-center">
                <div className="text-white/50">Loading 3D Experience...</div>
              </div>
            }
          >
            <SplineViewer url="https://prod.spline.design/uPiQvyvbg55IT4FQ/scene.splinecode" />
          </Suspense>
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Philosophy</span>
            <br />
            <span className="text-white font-sans tracking-tight drop-shadow-2xl">OF CREATION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Explore the deeper meaning behind making. Join Aly Yu as she shares philosophical insights from building a 
            3D printing empire and her groundbreaking Axiogenetic Theorem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a href="#philosophy-membership">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 shadow-lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Join the Philosophy Circle - $39/year
                <ArrowRight className="ml-2 h-4 w-4" />
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
              <span>Welcome to the philosophical journey! Check your email for confirmation.</span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center gap-8 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Weekly Essays</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>2,000+ Thinkers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>5/5 Rating</span>
            </div>
          </motion.div>

          {/* CTA to Other Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/blueprint">
              <Button
                size="lg"
                variant="outline"
                className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-black/50 flex items-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                Explore 3D Blueprint
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
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Membership Section */}
      <section
        id="philosophy-membership"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">
              <Brain className="h-3 w-3 mr-1" />
              Philosophy Circle
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Philosophy Circle</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Go beyond the surface. Explore the philosophical foundations of creation, business, and the maker movement with Aly Yu.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Discover</h3>
              <div className="space-y-4">
                {philosophyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold text-white">Philosophy & Art History Degree</span>
                </div>
                <p className="text-sm text-gray-300">
                  Learn from Aly's unique perspective combining philosophy, art history, and entrepreneurship. 
                  Discover how ancient wisdom applies to modern making.
                </p>
              </div>
            </motion.div>

            {/* Right side - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-blue-500/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Badge className="mb-4 bg-purple-600 text-white">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Philosophy Circle
                    </Badge>
                    <div className="text-4xl font-bold text-white mb-2">
                      $39<span className="text-lg font-normal text-gray-400">/year</span>
                    </div>
                    <p className="text-blue-300 font-semibold">Weekly philosophical insights</p>
                  </div>

                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <Brain className="mr-2 h-5 w-5" />
                      Join the Philosophy Circle
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">Cancel anytime • No hidden fees</p>
                    <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                      <span>✓ Instant access</span>
                      <span>✓ Weekly essays</span>
                      <span>✓ Community</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">About the Philosophy</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                The Axiogenetic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Theorem</span>
              </h2>
              <p className="text-lg text-blue-200 mb-6 leading-relaxed">
                After months of building a 3D printing business and studying the patterns of value creation, I developed 
                the Axiogenetic Theorem - a philosophical framework for understanding how value emerges from creation.
              </p>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                This newsletter explores not just the 'how' of making, but the deeper 'why'. From Plato's theory of forms 
                to modern manufacturing, from digital creation to physical manifestation - we examine the philosophy that 
                transforms ideas into reality.
              </p>
              <Link href="/mini-blueprint">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Learn My Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mini-blueprint/woman-with-glowing-print.jpeg"
                  alt="Aly Yu - Philosophy of Creation"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Philosophy+of+Creation"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">What You'll Get</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Business Advice</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Each essay is a journey into the philosophical foundations of creation, entrepreneurship, and the maker movement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spline 3D Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-600/30">
              <Cube className="h-3 w-3 mr-1" />
              Interactive Experience
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">3D Philosophy</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Interact with a 3D representation of the creative process. Spin, zoom, and explore the dimensions of making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 border border-gray-800"
          >
            <div className="aspect-video relative">
              <Suspense
                fallback={
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40 flex items-center justify-center">
                    <div className="text-center">
                      <Cube className="h-16 w-16 text-blue-400 animate-pulse mx-auto mb-4" />
                      <p className="text-white/70 text-lg">Loading 3D Experience...</p>
                    </div>
                  </div>
                }
              >
                <SplineViewer url="https://prod.spline.design/uPiQvyvbg55IT4FQ/scene.splinecode" />
              </Suspense>
            </div>
            
            {/* Interaction hints */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
              <div className="bg-black/70 backdrop-blur-md rounded-lg px-4 py-2 text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <span className="text-blue-400">↻</span> Drag to rotate
                </span>
              </div>
              <div className="bg-black/70 backdrop-blur-md rounded-lg px-4 py-2 text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <span className="text-blue-400">⇅</span> Scroll to zoom
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 mb-4">
              This interactive 3D model represents the journey from idea to creation - a core concept in our philosophy.
            </p>
            <Link href="/generator">
              <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                <Cube className="mr-2 h-4 w-4" />
                Try Our 3D Generator
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">Community Voices</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Philosophers</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-semibold text-white">Philosophy of Creation</span>
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
            <p>&copy; 2025 Philosophy of Creation by Aly Yu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
