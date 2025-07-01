"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlowCard } from "@/components/ui/spotlight-card"
import { ArrowRight, Lightbulb, Target, Zap, Users, Brain, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PhilosophyPage() {
  const principles = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Through Iteration",
      description:
        "Every great design starts with a simple idea, then evolves through countless iterations until it reaches perfection.",
      color: "from-yellow-500 to-orange-500",
      glowColor: "orange" as const,
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Purpose-Driven Design",
      description: "Every creation must solve a real problem. Beauty without function is just decoration.",
      color: "from-blue-500 to-cyan-500",
      glowColor: "blue" as const,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Technology as Enabler",
      description:
        "AI and automation don't replace creativity—they amplify it, allowing us to focus on what truly matters.",
      color: "from-purple-500 to-pink-500",
      glowColor: "purple" as const,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community-Centered Growth",
      description:
        "The best innovations come from understanding real needs and building solutions together with the community.",
      color: "from-green-500 to-emerald-500",
      glowColor: "green" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
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

        {/* Floating Elements */}
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm py-2 px-4">
              <Brain className="mr-2 h-4 w-4" />
              Design Philosophy
            </Badge>

            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Building the Future
              </span>
              <br />
              <span className="text-white">One Print at a Time</span>
            </h1>

            <p className="text-xl lg:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              My approach to 3D printing combines cutting-edge technology with human-centered design principles,
              creating solutions that don't just work—they inspire.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/robot-demo">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  See Technology in Action
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/aly/challenge">
                <Button
                  size="xl"
                  variant="outline"
                  className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-white/10"
                >
                  Join the Challenge
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 backdrop-blur-sm py-2 px-4">
              <Target className="h-4 w-4 mr-2" />
              Core Principles
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
              Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                Philosophy
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              These four principles guide every decision, every design, and every innovation in my 3D printing journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard glowColor={principle.glowColor} customSize className="h-full">
                  <div className="p-8 h-full flex flex-col">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center text-white shadow-lg mb-6`}
                    >
                      {principle.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{principle.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-1">{principle.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 border-green-500/30 backdrop-blur-sm py-2 px-4">
                <Users className="h-4 w-4 mr-2" />
                About the Vision
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Where{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Innovation
                </span>{" "}
                Meets Purpose
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I believe that the future of manufacturing lies not just in automation, but in the perfect harmony
                  between human creativity and artificial intelligence. Every project I undertake is an exploration of
                  this symbiotic relationship.
                </p>
                <p>
                  Through the 30-day challenge, I'm documenting this journey—showing how AI can amplify human potential
                  rather than replace it. Each print, each design, each innovation is a step toward a more accessible,
                  sustainable, and creative future.
                </p>
                <p>
                  The goal isn't just to create better products, but to inspire a new generation of makers who see
                  technology as a tool for positive change in the world.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/aly/challenge">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Follow the Journey
                  </Button>
                </Link>
                <Link href="/robot-demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-black/30 backdrop-blur-md border-white/30 text-white hover:bg-white/10"
                  >
                    Experience the Tech
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/robot-hand-hero.jpeg"
                  alt="Futuristic robot hand representing AI and 3D printing innovation"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

                {/* Floating elements around the image */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-green-400/60 rounded-full"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
