"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlowCard } from "@/components/ui/spotlight-card"
import { Cover } from "@/components/ui/cover"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"
import { motion } from "framer-motion"
import { Play, Calendar, Bot, Trophy, ArrowRight, Sparkles, Users, Target, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

// Countdown Timer Component
interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function CountdownTimer({ targetDate, className = "" }: { targetDate: Date; className?: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className={`flex gap-4 ${className}`}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 min-w-[80px]">
            <div className="text-2xl md:text-3xl font-bold text-white">{value.toString().padStart(2, "0")}</div>
            <div className="text-sm text-gray-400 capitalize">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Scroll Reveal Component
function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AlyChallengePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex flex-col justify-center">
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

          <div className="container mx-auto px-4 py-20">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main headline with Cover effect */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="block text-white mb-4">Come build</span>
                <Cover>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    the most AI driven 3D business ever created
                  </span>
                </Cover>
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

              {/* Key points using GlowCard */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <GlowCard glowColor="blue" customSize className="w-full h-auto aspect-auto p-6">
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                    <h3 className="text-lg font-semibold text-white mb-2">Real-Time Building</h3>
                    <p className="text-blue-200 text-sm">Watch every decision, every tool, every sale happen live</p>
                  </div>
                </GlowCard>

                <GlowCard glowColor="purple" customSize className="w-full h-auto aspect-auto p-6">
                  <div className="text-center">
                    <Target className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                    <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                    <p className="text-purple-200 text-sm">30 cutting-edge AI tools integrated daily</p>
                  </div>
                </GlowCard>

                <GlowCard glowColor="orange" customSize className="w-full h-auto aspect-auto p-6">
                  <div className="text-center">
                    <Trophy className="w-8 h-8 text-orange-400 mb-3 mx-auto" />
                    <h3 className="text-lg font-semibold text-white mb-2">Winner Takes All</h3>
                    <p className="text-orange-200 text-sm">The entire business goes to one participant</p>
                  </div>
                </GlowCard>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link href="/aly/challenge">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Join the Challenge
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Watch Preview
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Challenge Stats */}
      <ScrollReveal>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-6 text-sm uppercase tracking-wider">
                  THE CHALLENGE
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <Cover>30 Days to Build the Future</Cover>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Watch me build a complete AI-powered 3D printing business from scratch, using a new AI tool every day
                  for 30 consecutive days.
                </p>
              </div>

              {/* Stats Grid using GlowCard */}
              <div className="grid md:grid-cols-4 gap-8 mb-16">
                <GlowCard glowColor="blue" customSize className="w-full h-auto aspect-auto p-8">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-blue-400 mb-2">30</h3>
                    <p className="text-blue-200 text-lg">Days</p>
                  </div>
                </GlowCard>

                <GlowCard glowColor="purple" customSize className="w-full h-auto aspect-auto p-8">
                  <div className="text-center">
                    <Bot className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-purple-400 mb-2">30</h3>
                    <p className="text-purple-200 text-lg">AI Tools</p>
                  </div>
                </GlowCard>

                <GlowCard glowColor="green" customSize className="w-full h-auto aspect-auto p-8">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-green-400 mb-2">1</h3>
                    <p className="text-green-200 text-lg">Business Blueprint</p>
                  </div>
                </GlowCard>

                <GlowCard glowColor="orange" customSize className="w-full h-auto aspect-auto p-8">
                  <div className="text-center">
                    <Trophy className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-orange-400 mb-2">1</h3>
                    <p className="text-orange-200 text-lg">Winner</p>
                  </div>
                </GlowCard>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3D Showcase Section */}
      <ScrollReveal>
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-pink-900/30 text-pink-300 border-pink-700/50 mb-6 text-sm uppercase tracking-wider">
                  <Sparkles className="mr-2 h-4 w-4" />
                  LIVE SHOWCASE
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  <span className="text-white">See the </span>
                  <Cover>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                      AI Magic
                    </span>
                  </Cover>
                  <span className="text-white"> in Action</span>
                </h2>
                <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
                  Every design, every optimization, every breakthrough - captured in real-time as I build the most
                  advanced 3D printing business ever created.
                </p>
              </div>

              {/* 3D Marquee */}
              <div className="mb-12">
                <ThreeDMarquee className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-700/30" />
              </div>

              <div className="text-center">
                <Link href="/aly/challenge">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    See Full Challenge Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Live Stream Preview */}
      <ScrollReveal>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8">
                  In real time, right before your eyes.
                </h2>
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

                {/* Countdown Section */}
                <div className="bg-slate-800/60 backdrop-blur-sm border-t border-slate-700/50 p-6">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge Starts In:</h4>
                    <p className="text-sm text-slate-300">July 4th, 2025 at 1:00 PM EST</p>
                  </div>
                  <div className="flex justify-center">
                    <CountdownTimer targetDate={new Date("2025-07-04T13:00:00-05:00")} className="justify-center" />
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
      </ScrollReveal>

      {/* Final CTA Section */}
      <ScrollReveal>
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
                  <Cover>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      Being Made?
                    </span>
                  </Cover>
                </h2>

                <p className="text-xl text-purple-200 mb-12 leading-relaxed">
                  Join thousands of entrepreneurs, makers, and dreamers as we build the most advanced 3D printing
                  business ever created. In real time. With complete transparency.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href="/aly/challenge">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-12 py-6 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Play className="mr-3 h-6 w-6" />
                      Join the Challenge
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-12 py-6 text-xl font-medium transition-all duration-300"
                  >
                    <Sparkles className="mr-3 h-6 w-6" />
                    Get Free Preview
                  </Button>
                </div>

                {/* Final countdown */}
                <motion.div
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Challenge Begins In:</h3>
                  <CountdownTimer targetDate={new Date("2025-07-04T13:00:00-05:00")} className="justify-center" />
                  <p className="text-gray-400 mt-4">July 4th, 2025 at 1:00 PM EST</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
