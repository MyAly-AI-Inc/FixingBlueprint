"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlowCard } from "@/components/ui/spotlight-card"
import { Cover } from "@/components/ui/cover"
import { PricingSection } from "@/components/sections/pricing-section"
import { Trophy, Users, Zap, ChevronDown, Shield, Play, ArrowRight, Sparkles, Bot } from "lucide-react"
import { useState } from "react"

// FAQ Component
function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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
                    <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 text-xs">{item.category}</Badge>
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
  )
}

export default function ChallengeDetailsPage() {
  // Pricing tiers with images
  const pricingTiers = [
    {
      name: "Observer",
      price: "$19",
      description: "Watch the journey unfold",
      features: ["Weekly progress updates", "Newsletter access", "Basic community access", "Challenge participation"],
      icon: Users,
      image: "/images/3d-printing-beginner.png",
      ctaText: "Get Started",
      ctaVariant: "outline" as const,
    },
    {
      name: "Builder",
      price: "$49",
      description: "Build alongside me",
      features: [
        "Everything in Observer",
        "Daily step-by-step breakdowns",
        "Live community access",
        "Q&A sessions",
        "Tool recommendations",
      ],
      icon: Bot,
      image: "/images/3dprinting-business-woman.jpeg",
      popular: true,
      ctaText: "Join Now",
      ctaVariant: "default" as const,
    },
    {
      name: "All-Access",
      price: "$199",
      description: "Get everything",
      features: [
        "Everything in Builder",
        "All STL files & source code",
        "Templates & workflows",
        "Private Discord access",
        "50% discount on all tools",
      ],
      icon: Trophy,
      image: "/images/3dprinting-entrepreneur-thinking.jpeg",
      ctaText: "Go All-In",
      ctaVariant: "default" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="bg-purple-900/30 text-purple-300 border-purple-700/50 mb-6 text-sm uppercase tracking-wider">
                THE COMPLETE CHALLENGE
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <Cover>30 Days to Build the Future</Cover>
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Join me as I build the most advanced AI-powered 3D printing business ever created. Every day, every
                tool, every decision - documented and shared in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/aly">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                  >
                    ← Back to Overview
                  </Button>
                </Link>
                <Link href="/aly/experience">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    See 3D Experience
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        title="Choose Your Access Level"
        description="Three tiers of access to watch the most ambitious 3D printing business challenge ever attempted."
        badge="PRICING"
        tiers={pricingTiers}
      />

      {/* All or Nothing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-yellow-900/30 text-yellow-300 border-yellow-700/50 mb-4">THE STAKES</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <Cover>All or Nothing</Cover>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlowCard glowColor="red" customSize className="w-full h-auto aspect-auto p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-300 mb-4">If I Fail</h3>
                    <p className="text-red-100 text-lg leading-relaxed">
                      I go back to university, close my Skools, my store, and get a job just like everybody else.
                    </p>
                  </div>
                </GlowCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlowCard glowColor="green" customSize className="w-full h-auto aspect-auto p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-300 mb-4">If I Succeed</h3>
                    <p className="text-green-100 text-lg leading-relaxed">
                      I open the world's greatest resource hub for 3D printing entrepreneurs and pursue a life in AI
                      creating the next generation of design tools.
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Prize Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard glowColor="purple" customSize className="w-full h-auto aspect-auto p-12">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-purple-300" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    <Cover>The Ultimate Prize</Cover>
                  </h3>
                  <p className="text-xl text-purple-200 mb-4 leading-relaxed">
                    At the end of 30 days, I'm giving away the entire business - complete with all systems, AI tools,
                    customer base, and revenue streams - to one entrepreneur, but it isn't winner take all - every
                    participant gets all my systems, videos and step by step guides.
                  </p>
                  <p className="text-lg text-purple-300">
                    This isn't just about watching me build. It's about potentially inheriting the most advanced 3D
                    printing business ever created.
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

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
                Ready to Join the
                <br />
                <Cover>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Challenge?
                  </span>
                </Cover>
              </h2>

              <p className="text-xl text-purple-200 mb-12 leading-relaxed">
                Choose your access level and become part of the most ambitious 3D printing business challenge ever
                attempted.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-12 py-6 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Join Builder Tier
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Link href="/aly">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-12 py-6 text-xl font-medium transition-all duration-300"
                  >
                    <Sparkles className="mr-3 h-6 w-6" />
                    Back to Overview
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
