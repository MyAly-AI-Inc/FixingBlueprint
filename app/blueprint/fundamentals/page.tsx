"use client"

import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  Layers,
  Printer,
  Settings,
  Rocket,
  ChevronRight,
  Play,
  BookMarked,
  PenToolIcon as Tool,
  Zap,
  Quote,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { CategoryHero } from "@/components/category-hero"
import { getCategoryStyle } from "@/lib/style-guide"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "3D Printing Fundamentals",
  description:
    "Master the essential concepts and skills to begin your journey in 3D printing technology. From selecting your first printer to completing your first successful print.",
  provider: {
    "@type": "Organization",
    name: "3D Blueprint",
    sameAs: "https://3dblueprint.io",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
}

// Quote structured data
const quoteStructuredData = {
  "@context": "https://schema.org",
  "@type": "Quotation",
  text: "The best way to predict the future is to create it.",
  spokenByCharacter: {
    "@type": "Person",
    name: "Alan Kay",
    sameAs: "https://en.wikipedia.org/wiki/Alan_Kay",
  },
}

export default function FundamentalsPage() {
  // Get style for the fundamentals category
  const style = getCategoryStyle("fundamentals")

  // Gold gradient for icons (from style guide common accents)
  const goldGradient = "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600"
  const goldGradientHover = "hover:from-amber-400 hover:via-yellow-600 hover:to-amber-700"

  // Add structured data to the page
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    const quoteScript = document.createElement("script")
    quoteScript.type = "application/ld+json"
    quoteScript.text = JSON.stringify(quoteStructuredData)
    document.head.appendChild(quoteScript)

    return () => {
      document.head.removeChild(script)
      document.head.removeChild(quoteScript)
    }
  }, [])

  return (
    <div className={`min-h-screen ${style.tailwindClasses.lightBg}`}>
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <CategoryHero
        category="fundamentals"
        title="3D Printing Fundamentals"
        description="Master the essential concepts and skills to begin your journey in 3D printing technology. From selecting your first printer to completing your first successful print."
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-blue-100/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`p-1 rounded-full ${goldGradient}`}>
            <BookOpen className="h-3 w-3 text-white" />
          </div>
          <span className="text-blue-100 font-medium">Getting Started Guide</span>
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
                  <h2 id="intro-heading" className={`text-3xl font-bold mb-6 ${style.tailwindClasses.primaryText}`}>
                    Begin Your 3D Printing Journey
                  </h2>
                  <p className={`text-xl ${style.tailwindClasses.secondaryText} leading-relaxed`}>
                    3D printing fundamentals cover everything you need to know to begin your journey into additive
                    manufacturing. From choosing your first printer to understanding materials and completing your first
                    successful print, these resources will guide you through each step of the process.
                  </p>
                </div>
              </div>

              <motion.div
                className={`bg-white/90 border ${style.tailwindClasses.primaryBorder} border-l-blue-600 border-l-4 rounded-2xl p-6 mt-16`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex gap-4">
                  <div className={`${goldGradient} p-2 rounded-full shadow-md`}>
                    <Zap className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>Pro Tip</h3>
                    <p className={style.tailwindClasses.secondaryText}>
                      Start with the Printer Selection Guide to find the right 3D printer for your needs and budget,
                      then explore materials and setup guides to ensure a smooth start to your 3D printing journey.
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
                    {/* Placeholder for Alan Kay's photo */}
                    <div className={`absolute inset-0 ${style.tailwindClasses.heroGradient}`}>
                      {/* This div will be replaced with the actual image */}
                      <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl">
                        <span aria-hidden="true">A</span>
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
                          <p className={`text-lg font-medium italic ${style.tailwindClasses.primaryText} mb-2`}>
                            "The best way to predict the future is to create it."
                          </p>
                          <footer className={`text-sm ${style.tailwindClasses.secondaryText}`}>
                            <cite>— Alan Kay</cite>
                          </footer>
                        </blockquote>
                        <p className={`text-sm ${style.tailwindClasses.secondaryText}`}>
                          With 3D printing, you're not just learning a technology—you're gaining the power to transform
                          ideas into physical reality, creating the future with your own hands.
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
          <motion.h2
            id="core-topics-heading"
            className={`text-3xl font-bold mb-10 ${style.tailwindClasses.primaryText}`}
            {...fadeInUp}
          >
            Core Topics
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Printer Selection Guide",
                description: "Find the perfect 3D printer for your needs and budget",
                image: "/placeholder.svg?key=printer-selection",
                href: "/blueprint/fundamentals/printer-selection",
                icon: Printer,
              },
              {
                title: "Materials Guide",
                description: "Explore common 3D printing materials and their properties",
                image: "/placeholder.svg?key=materials-guide",
                href: "/blueprint/fundamentals/materials-guide",
                icon: Layers,
              },
              {
                title: "Printer Setup & Calibration",
                description: "Step-by-step guide to setting up and calibrating your printer",
                image: "/placeholder.svg?key=printer-setup",
                href: "#",
                icon: Settings,
              },
              {
                title: "Your First Print",
                description: "Complete your first successful 3D print from start to finish",
                image: "/placeholder.svg?key=first-print",
                href: "/blueprint/fundamentals/first-print",
                icon: Rocket,
              },
            ].map((topic, index) => (
              <motion.div key={topic.title} variants={fadeInUp} whileHover={{ y: -5 }}>
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full bg-white/90 text-sm font-medium ${style.tailwindClasses.secondaryText}`}
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
                        <h3 className={`font-bold text-lg mb-2 ${style.tailwindClasses.primaryText}`}>{topic.title}</h3>
                        <p className={`text-sm ${style.tailwindClasses.secondaryText} mb-4`}>{topic.description}</p>
                        <div className={`flex items-center ${style.tailwindClasses.secondaryText} font-medium`}>
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
        <section
          className={`mb-20 relative overflow-hidden ${style.tailwindClasses.accentBg} rounded-3xl`}
          aria-labelledby="tutorials-heading"
        >
          <div className="py-12 px-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                <div className="md:w-1/2">
                  <h2 id="tutorials-heading" className={`text-3xl font-bold mb-4 ${style.tailwindClasses.primaryText}`}>
                    Video Tutorials
                  </h2>
                  <p className={`text-lg ${style.tailwindClasses.secondaryText} mb-6`}>
                    Learn through our step-by-step video tutorials designed to help you master 3D printing fundamentals
                    quickly and effectively.
                  </p>
                  <ul className="space-y-4">
                    {[
                      { title: "Setting Up Your First 3D Printer", duration: "15 min" },
                      { title: "Understanding Filament Types", duration: "12 min" },
                      { title: "Calibration Essentials", duration: "18 min" },
                      { title: "Troubleshooting Common Issues", duration: "20 min" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div
                          className={`h-8 w-8 rounded-full ${goldGradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                        >
                          <Play className="h-4 w-4 text-white" fill="white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className={`font-medium ${style.tailwindClasses.primaryText}`}>{item.title}</p>
                          <p className={`text-sm ${style.tailwindClasses.secondaryText}`}>{item.duration}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className={style.tailwindClasses.primaryButton}>View All Tutorials</Button>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?key=video-tutorial-preview"
                      alt="Video Tutorial Preview"
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

        {/* Quick Start Guides */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          aria-labelledby="quick-start-heading"
        >
          <h2 id="quick-start-heading" className={`text-3xl font-bold mb-10 ${style.tailwindClasses.primaryText}`}>
            Quick Start Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Choosing Your First Printer",
                description:
                  "A beginner's guide to selecting the right 3D printer based on your needs, budget, and technical comfort level.",
                icon: Printer,
                href: "/blueprint/fundamentals/printer-selection",
              },
              {
                title: "Material Selection",
                description:
                  "Learn which materials work best for different types of projects and how to get the best results.",
                icon: Layers,
                href: "/blueprint/fundamentals/materials-guide",
              },
              {
                title: "Printer Setup Checklist",
                description: "Step-by-step instructions for assembling, calibrating, and testing your new 3D printer.",
                icon: Settings,
                href: "#",
              },
              {
                title: "First Print Success",
                description: "Everything you need to know to ensure your first 3D print is a success.",
                icon: Rocket,
                href: "/blueprint/fundamentals/first-print",
              },
            ].map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={`border ${style.tailwindClasses.primaryBorder} bg-white/90 hover:shadow-md transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`${goldGradient} p-3 rounded-xl shadow-md transition-all duration-300 ${goldGradientHover}`}
                      >
                        <guide.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-2 ${style.tailwindClasses.primaryText}`}>{guide.title}</h3>
                        <p className={`text-sm ${style.tailwindClasses.secondaryText} mb-4`}>{guide.description}</p>
                        <Link
                          href={guide.href}
                          className={`inline-flex items-center ${style.tailwindClasses.secondaryText} text-sm font-medium hover:underline`}
                          aria-label={`Read guide about ${guide.title}`}
                        >
                          Read guide <ChevronRight className="h-4 w-4 ml-1 text-amber-700" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Learning Path */}
        <section className="mb-20" aria-labelledby="learning-path-heading">
          <h2 id="learning-path-heading" className={`text-3xl font-bold mb-10 ${style.tailwindClasses.primaryText}`}>
            Your Learning Path
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-blue-600`}
            ></div>

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Explore 3D Printer Options",
                  description: "Learn about different types of 3D printers and find the right one for your needs.",
                  icon: Printer,
                  link: "/blueprint/fundamentals/printer-selection",
                },
                {
                  step: 2,
                  title: "Understand Materials",
                  description: "Discover the various filament types and their applications in 3D printing.",
                  icon: Layers,
                  link: "#",
                },
                {
                  step: 3,
                  title: "Set Up Your Equipment",
                  description: "Follow our comprehensive guide to assemble and calibrate your 3D printer.",
                  icon: Tool,
                  link: "#",
                },
                {
                  step: 4,
                  title: "Complete Your First Print",
                  description: "Walk through the entire process of creating your first successful 3D print.",
                  icon: Rocket,
                  link: "/blueprint/fundamentals/first-print",
                },
                {
                  step: 5,
                  title: "Advance Your Skills",
                  description: "Take your knowledge to the next level with intermediate and advanced techniques.",
                  icon: BookMarked,
                  link: "/blueprint/design-modeling",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center z-10 shadow-md">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 1 ? "md:text-right" : ""}`}>
                      <Card
                        className={`border ${style.tailwindClasses.primaryBorder} hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white/90`}
                      >
                        <CardContent className="p-6">
                          <div className={`flex items-start gap-4 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                            <div className={`${goldGradient} p-3 rounded-xl shadow-md`}>
                              <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                              <h3 className={`font-bold text-lg mb-2 ${style.tailwindClasses.primaryText}`}>
                                {step.title}
                              </h3>
                              <p className={`text-sm ${style.tailwindClasses.secondaryText} mb-4`}>
                                {step.description}
                              </p>
                              <Link
                                href={step.link}
                                className={`inline-flex items-center ${style.tailwindClasses.secondaryText} text-sm font-medium hover:underline ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                              >
                                {index % 2 === 1 && (
                                  <ChevronRight className="h-4 w-4 ml-1 md:rotate-180 md:mr-1 md:ml-0" />
                                )}
                                Begin this step
                                {index % 2 !== 1 && <ChevronRight className="h-4 w-4 ml-1" />}
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          aria-labelledby="cta-heading"
        >
          <div className={`absolute inset-0 ${style.tailwindClasses.heroGradient}`}></div>
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
          <div className="absolute inset-0 border-2 border-amber-400 rounded-3xl opacity-50"></div>

          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Ready to Start Your 3D Printing Journey?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Join thousands of makers who have mastered 3D printing with our comprehensive guides and tutorials.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 border border-amber-300"
                  aria-label="Explore Printer Selection Guide"
                >
                  Explore Printer Selection Guide
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
