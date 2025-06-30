"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CuboidIcon as Cube, Palette, Zap, Target, BrainCircuit, Wrench } from "lucide-react"
import Image from "next/image"
import type React from "react"
import { useState } from "react"

// Enhanced Animated Gradient Heading Component
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
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-x-8 top-full -bottom-24 blur-2xl opacity-40 bg-gradient-to-t ${fromColor} ${viaColor ? viaColor : ""} ${toColor}`}
      />

      {/* Main heading */}
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

      {/* Underline accent */}
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

export default function BlueprintPage() {
  const features = [
    {
      icon: Cube,
      title: "Fundamentals",
      description:
        "Master the basics with beginner-friendly courses covering printer selection and essential techniques.",
      highlights: ["Printer Selection Guide", "Your First Print", "Basic Maintenance"],
      color: "blue" as const,
    },
    {
      icon: Palette,
      title: "Design & Modeling",
      description: "Create stunning 3D models with professional software and optimization techniques.",
      highlights: ["CAD Software Mastery", "Design Optimization", "Advanced Techniques"],
      color: "purple" as const,
    },
    {
      icon: Zap,
      title: "Technical Skills",
      description: "Deep dive into advanced calibration, troubleshooting, and printer modifications.",
      highlights: ["Advanced Calibration", "Troubleshooting Guide", "Printer Upgrades"],
      color: "orange" as const,
    },
    {
      icon: Target,
      title: "Business & Entrepreneurship",
      description: "Transform your skills into income with proven business strategies.",
      highlights: ["Business Planning", "Marketing Strategies", "Financial Management"],
      color: "green" as const,
    },
    {
      icon: BrainCircuit,
      title: "Advanced Topics",
      description: "Explore cutting-edge technologies like AI-assisted design and automation.",
      highlights: ["AI Integration", "Multi-Material Printing", "Automation Systems"],
      color: "indigo" as const,
    },
    {
      icon: Wrench,
      title: "Resources",
      description: "Access our comprehensive library of models, tutorials, and community content.",
      highlights: ["Model Library", "Video Tutorials", "Community Projects"],
      color: "cyan" as const,
    },
  ]

  const faqs = [
    {
      category: "Getting Started",
      question: "How do I access Blueprint's learning resources?",
      answer:
        "Simply create a free account and you'll get immediate access to all our learning materials, tutorials, and community features. No credit card required.",
    },
    {
      category: "Pricing",
      question: "Is Blueprint really completely free?",
      answer:
        "Yes! Blueprint is 100% free. We believe in democratizing knowledge in the 3D printing industry, making it accessible to everyone regardless of their financial situation.",
    },
    {
      category: "Learning",
      question: "I'm a complete beginner. Where should I start?",
      answer:
        "Start with our Fundamentals section! It's designed specifically for beginners and covers everything from choosing your first printer to making your first successful print.",
    },
  ]
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isStoryExpanded, setIsStoryExpanded] = useState(false)

  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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

  // Comprehensive FAQ items
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
    {
      icon: "Printer",
      category: "Technical",
      question: "What if I'm having trouble with my 3D printer?",
      answer:
        "Our technical skills section includes comprehensive troubleshooting guides, calibration tutorials, and a community forum where experienced makers help solve problems. We cover everything from bed leveling to advanced firmware modifications.",
    },
    {
      icon: "Lightbulb",
      category: "Learning",
      question: "I'm a complete beginner. Where should I start?",
      answer:
        "Start with our Fundamentals section! It's designed specifically for beginners and covers everything from choosing your first printer to making your first successful print. The content is structured as a step-by-step journey.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <HeroSection
        variant="blueprint"
        title="The 3D Blueprint"
        subtitle="Unlock a world of structured learning and expert guidance"
        description="Transform yourself into a 3D printing master with our comprehensive educational platform - completely free, forever."
        badge={{
          text: "WELCOME TO",
        }}
        primaryCta={{
          text: "Start Learning Now",
          href: "#features",
        }}
        secondaryCta={{
          text: "Watch Live Challenge",
          href: "/",
          icon: <span className="mr-2">🔴</span>,
        }}
      />

      {/* Journey Sections */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {/* Find the Right Printer */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-6">STEP 1</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Find Your Perfect Printer
                </h2>
                <p className="text-xl text-blue-200 mb-8">
                  Get personalized recommendations based on your budget, goals, and experience level.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3">
                  Take the Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20Blueprint%20Opener%20%282%29.png-E8ylyrsSoITCEJey6o36bvWMsazRWZ.jpeg"
                  alt="3D printing expert with multiple printers"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>
            </div>

            {/* Learn to Design */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20Design%20and%20Modeling%20Tools-ByYm60gvu3UkLe9nZXEXksxTJnCo3K.png"
                  alt="3D Design and Modeling Tools"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <Badge className="bg-purple-900/30 text-purple-300 border-purple-700/50 mb-6">STEP 2</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Master Design Software
                </h2>
                <p className="text-xl text-purple-200 mb-8">
                  Learn Fusion 360, Blender, and other professional tools with step-by-step tutorials.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-3">
                  Start Designing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Build Your Business */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-green-900/30 text-green-300 border-green-700/50 mb-6">STEP 3</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                  Launch Your Business
                </h2>
                <p className="text-xl text-green-200 mb-8">
                  Turn your skills into profit with proven strategies for finding customers and scaling sales.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3">
                  Start Selling
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/3d-printed-desk-organizer.png"
                  alt="Entrepreneur selling 3D printed products"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Complete 3D Printing Education"
        description="From your first print to running a business, Blueprint covers every aspect with structured courses and hands-on projects."
        badge="WHAT YOU'LL LEARN"
        features={features}
      />

      <FaqSection
        title="Frequently Asked Questions"
        description="Get answers to common questions about Blueprint and 3D printing."
        badge="FAQ"
        faqs={faqs}
      />

      <CtaSection
        title="Ready to Master 3D Printing?"
        description="Join thousands of makers who have transformed their skills and built successful businesses with Blueprint."
        primaryCta={{
          text: "Start Learning Free",
          href: "#",
        }}
        secondaryCta={{
          text: "Watch Live Challenge",
          href: "/",
          icon: <span className="mr-2">🔴</span>,
        }}
      />
    </div>
  )
}
