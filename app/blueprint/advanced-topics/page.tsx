"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Brain, Rocket, FileCode, Play, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { CategoryHero } from "@/components/category-hero"
import { getCategoryStyle } from "@/lib/style-guide"

export default function AdvancedTopicsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Get style for the advanced category
  const style = getCategoryStyle("advanced-topics")

  // Gold gradient for icons (from style guide common accents)
  const goldGradient = "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600"
  const goldGradientHover = "hover:from-amber-400 hover:via-yellow-600 hover:to-amber-700"

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <CategoryHero
        category="advanced-topics"
        title="Advanced 3D Printing Topics"
        description="Explore cutting-edge techniques, emerging technologies, and future trends that are pushing the boundaries of what's possible with 3D printing."
        showIcon={true}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-cyan-100/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-1 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600">
            <Zap className="h-3 w-3 text-white" />
          </div>
          <span className="text-cyan-100 font-medium">Cutting-Edge Technology</span>
        </motion.div>
      </CategoryHero>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction with Quote Card */}
        <motion.section
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          aria-labelledby="intro-heading"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left column - Introduction text */}
            <div className="lg:w-7/12 flex flex-col h-full">
              <div className="flex-grow">
                <div className="prose prose-lg">
                  <h2 id="intro-heading" className="text-3xl font-bold mb-6 text-stone-800">
                    Pushing the Boundaries of 3D Printing
                  </h2>
                  <p className="text-xl text-stone-700 leading-relaxed">
                    Advanced 3D printing topics explore the cutting-edge technologies, techniques, and applications that
                    are shaping the future of additive manufacturing. From AI integration to specialized materials and
                    custom firmware, these advanced concepts will help you stay at the forefront of innovation.
                  </p>
                </div>
              </div>

              <motion.div
                className={`bg-white/90 border ${style.tailwindClasses.primaryBorder} border-l-cyan-600 border-l-4 rounded-2xl p-6 mt-16`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex gap-4">
                  <div className={`${goldGradient} p-2 rounded-full shadow-md`}>
                    <Zap className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Pro Tip</h3>
                    <p className="text-stone-700">
                      Start with the AI Integration guide to understand how artificial intelligence is revolutionizing
                      3D printing design, optimization, and production workflows.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right column - Quote Card */}
            <div className="lg:w-5/12">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card className={`overflow-hidden h-full border ${style.tailwindClasses.primaryBorder} shadow-md`}>
                  {/* Photo section - no overlay */}
                  <div className="relative aspect-square w-full">
                    <div className={`absolute inset-0 ${style.tailwindClasses.heroGradient}`}>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl">
                        <span aria-hidden="true">N</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote section - separate from photo */}
                  <CardContent className="p-6 bg-white/90">
                    <div className="flex items-start gap-4">
                      <div className={`${goldGradient} p-3 rounded-full shadow-md flex-shrink-0`}>
                        <Quote className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <blockquote className="mb-3">
                          <p className="text-lg font-medium italic text-stone-800 mb-2">
                            "The future of manufacturing is not just about making things faster or cheaper, but about
                            making things that couldn't be made before."
                          </p>
                          <footer className="text-sm text-stone-600">
                            <cite>— Dr. Neil Gershenfeld</cite>
                          </footer>
                        </blockquote>
                        <p className="text-sm text-stone-600">
                          Embrace the innovative potential of advanced 3D printing techniques to create designs and
                          products that were previously impossible.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Topics */}
        <motion.section className="mb-20" initial="initial" animate="animate" aria-labelledby="core-topics-heading">
          <motion.h2 id="core-topics-heading" className="text-3xl font-bold mb-10 text-stone-800" variants={fadeIn}>
            Core Topics
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Integration",
                description: "Learn how artificial intelligence is revolutionizing 3D printing design and production",
                image: "/placeholder.svg?height=400&width=600",
                href: "#",
                icon: Brain,
              },
              {
                title: "Emerging Technologies",
                description: "Discover the latest innovations in 3D printing hardware, materials, and methodologies",
                image: "/placeholder.svg?height=400&width=600",
                href: "#",
                icon: Rocket,
              },
              {
                title: "Custom Firmware",
                description: "Unlock the full potential of your 3D printer by customizing its firmware",
                image: "/placeholder.svg?height=400&width=600",
                href: "#",
                icon: FileCode,
              },
            ].map((topic, index) => (
              <motion.div key={topic.title} variants={fadeIn} whileHover={{ y: -5 }}>
                <Card
                  className={`h-full overflow-hidden border ${style.tailwindClasses.primaryBorder} hover:shadow-md transition-all duration-300`}
                >
                  <CardContent className="p-0">
                    <Link href={topic.href} className="block" aria-label={`Learn about ${topic.title}`}>
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={topic.image || "/placeholder.svg"}
                          alt={`${topic.title} - ${topic.description}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-stone-700`}
                          >
                            {topic.title}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 bg-white/90">
                        <div
                          className={`inline-flex p-2 rounded-lg ${goldGradient} mb-3 shadow-md transition-all duration-300 ${goldGradientHover}`}
                        >
                          <topic.icon className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                        <h3 className={`font-bold text-lg mb-2 text-stone-800`}>{topic.title}</h3>
                        <p className={`text-sm text-stone-700 mb-4`}>{topic.description}</p>
                        <div className={`flex items-center text-stone-700 font-medium`}>
                          <span className="text-sm">Learn More</span>
                          <ArrowRight
                            className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 text-amber-700"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Tutorials Section */}
        <section className="mb-20 relative overflow-hidden bg-rose-600 rounded-3xl" aria-labelledby="tutorials-heading">
          <div className="py-12 px-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                <div className="md:w-1/2">
                  <h2 id="tutorials-heading" className="text-3xl font-bold mb-4 text-white">
                    Featured Tutorials
                  </h2>
                  <p className="text-lg text-rose-50 mb-6">
                    Master advanced 3D printing techniques with our comprehensive video tutorials designed for
                    experienced users.
                  </p>
                  <ul className="space-y-4">
                    {["AI Integration", "Custom Firmware", "Multi-Material Printing", "Experimental Techniques"].map(
                      (name, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div
                            className={`h-8 w-8 rounded-full ${goldGradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                          >
                            <Play className="h-4 w-4 text-white" fill="white" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="font-medium text-white">{name} Tutorial</p>
                            <p className="text-sm text-rose-100">{15 + index * 10} min</p>
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                  <div className="mt-8">
                    <Button className="bg-rose-700 text-white hover:bg-rose-800 shadow-md transition-colors">
                      View All Tutorials
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Advanced 3D printing tutorial showing complex techniques"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className={`h-16 w-16 rounded-full ${goldGradient} flex items-center justify-center cursor-pointer shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="h-8 w-8 text-white" fill="white" aria-hidden="true" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          className="mb-20 relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          aria-labelledby="cta-heading"
        >
          <div className="absolute inset-0 bg-orange-50"></div>
          <div className="absolute inset-0 border-2 border-orange-200 rounded-3xl"></div>

          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-stone-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Ready to Dive Deeper?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-stone-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Explore our comprehensive guides and resources to master advanced 3D printing techniques and stay at the
                cutting edge of technology.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button
                  size="lg"
                  className="bg-white text-cyan-700 hover:bg-cyan-50 border border-amber-300"
                  aria-label="Start with AI Integration tutorial"
                >
                  Start with AI Integration
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
