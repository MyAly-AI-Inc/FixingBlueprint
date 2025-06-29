"use client"

import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Shapes,
  Laptop,
  CuboidIcon as Cube,
  Sparkles,
  ChevronRight,
  Play,
  PencilRuler,
  Zap,
  Quote,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { CategoryHero } from "@/components/category-hero"
import { getCategoryStyle } from "@/lib/style-guide"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "3D Design & Modeling for 3D Printing",
  description:
    "Master the art of 3D design and modeling for successful 3D printing projects. Learn essential techniques, software tools, and best practices.",
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
  text: "Have no fear of perfection, you'll never reach it.",
  spokenByCharacter: {
    "@type": "Person",
    name: "Salvador Dalí",
    sameAs: "https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD",
  },
}

export default function DesignModelingPage() {
  // Get style for the design category
  const style = getCategoryStyle("design-modeling")

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
        category="design-modeling"
        title="3D Design & Modeling"
        description="Master the art of 3D design and modeling for successful 3D printing projects. Learn essential techniques, software tools, and best practices."
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-green-100/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`p-1 rounded-full ${goldGradient}`}>
            <PencilRuler className="h-3 w-3 text-white" />
          </div>
          <span className="text-green-100 font-medium">Design Skills</span>
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
                    Getting Started with 3D Design
                  </h2>
                  <p className={`text-xl ${style.tailwindClasses.secondaryText} leading-relaxed`}>
                    3D design and modeling are essential skills for successful 3D printing. Whether you're creating
                    functional parts, artistic sculptures, or commercial products, understanding design principles and
                    software tools will help you bring your ideas to life with precision and creativity.
                  </p>
                </div>
              </div>

              <motion.div
                className={`bg-white/90 border ${style.tailwindClasses.primaryBorder} border-l-green-600 border-l-4 rounded-2xl p-6 mt-16`}
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
                      Start with the Design Basics to learn fundamental principles that apply across all 3D modeling
                      software, then explore specific software tools that match your skill level and project needs.
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
                    {/* Placeholder for Dali's photo */}
                    <div className={`absolute inset-0 ${style.tailwindClasses.heroGradient}`}>
                      {/* This div will be replaced with the actual image */}
                      <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl">
                        <span aria-hidden="true">D</span>
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
                            "Have no fear of perfection, you'll never reach it."
                          </p>
                          <footer className={`text-sm ${style.tailwindClasses.secondaryText}`}>
                            <cite>— Salvador Dalí</cite>
                          </footer>
                        </blockquote>
                        <p className={`text-sm ${style.tailwindClasses.secondaryText}`}>
                          Embrace the creative journey of 3D design. Perfection isn't the goal—innovation, learning, and
                          bringing your ideas to life are what truly matter.
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
                title: "Design Basics",
                description: "Learn fundamental design principles for 3D printing",
                image: "/images/3d-design-hologram.png",
                href: "/blueprint/design-modeling/design-basics",
                icon: Shapes,
              },
              {
                title: "Software Tools",
                description: "Explore popular 3D modeling software for different skill levels",
                image: "/images/3d-printing-specialist.png",
                href: "/blueprint/design-modeling/software-tools",
                icon: Laptop,
              },
              {
                title: "Optimization Techniques",
                description: "Learn how to optimize your 3D models for successful printing",
                image: "/images/multi-material-printing.png",
                href: "/blueprint/design-modeling/optimization-techniques",
                icon: Cube,
              },
              {
                title: "Advanced Features",
                description: "Explore advanced modeling techniques for sophisticated projects",
                image: "/images/specialized-filaments.png",
                href: "/blueprint/design-modeling/advanced-features",
                icon: Sparkles,
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
                    Featured Tutorials
                  </h2>
                  <p className={`text-lg ${style.tailwindClasses.secondaryText} mb-6`}>
                    Master 3D design with our comprehensive video tutorials designed for all skill levels.
                  </p>
                  <ul className="space-y-4">
                    {[
                      { title: "Design Basics Tutorial", duration: "15 min" },
                      { title: "Software Tools Tutorial", duration: "25 min" },
                      { title: "Optimization Techniques Tutorial", duration: "22 min" },
                      { title: "Advanced Features Tutorial", duration: "28 min" },
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
                      src="/images/3d-printing-specialist.png"
                      alt="3D design tutorial showing a specialist creating a complex 3D model"
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
                title: "Design Principles for 3D Printing",
                description:
                  "Learn the fundamental design considerations that ensure your 3D models print successfully.",
                icon: Shapes,
                href: "/blueprint/design-modeling/design-basics",
              },
              {
                title: "Choosing the Right Software",
                description:
                  "Compare popular 3D modeling software options to find the best fit for your skill level and needs.",
                icon: Laptop,
                href: "/blueprint/design-modeling/software-tools",
              },
              {
                title: "Model Optimization Checklist",
                description: "Essential steps to prepare your 3D models for successful printing with minimal issues.",
                icon: Cube,
                href: "/blueprint/design-modeling/optimization-techniques",
              },
              {
                title: "Advanced Design Techniques",
                description: "Take your 3D designs to the next level with advanced modeling techniques and approaches.",
                icon: Sparkles,
                href: "/blueprint/design-modeling/advanced-features",
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

        {/* Software Comparison */}
        <section className="mb-20" aria-labelledby="software-heading">
          <h2 id="software-heading" className={`text-3xl font-bold mb-10 ${style.tailwindClasses.primaryText}`}>
            Popular 3D Design Software
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tinkercad",
                image: "/images/3d-design-hologram.png",
                description: "A simple, online 3D design and modeling tool perfect for beginners and educational use.",
                skillLevel: "Beginner",
                free: true,
                bestFor: "Simple projects, learning basics",
              },
              {
                name: "Fusion 360",
                image: "/images/3d-printing-specialist.png",
                description:
                  "Powerful CAD software with parametric modeling capabilities for engineering and product design.",
                skillLevel: "Intermediate",
                free: "Free for personal use",
                bestFor: "Mechanical parts, precision designs",
              },
              {
                name: "Blender",
                image: "/images/multi-material-printing.png",
                description: "Comprehensive open-source 3D creation suite supporting the entire 3D pipeline.",
                skillLevel: "Advanced",
                free: true,
                bestFor: "Organic models, artistic designs",
              },
            ].map((software, index) => (
              <Card
                key={index}
                className={`border ${style.tailwindClasses.primaryBorder} hover:shadow-lg transition-all duration-300 overflow-hidden`}
              >
                <div className="relative h-48">
                  <Image
                    src={software.image || "/placeholder.svg"}
                    alt={`${software.name} - ${software.description}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full bg-white/90 text-sm font-medium ${style.tailwindClasses.secondaryText} border border-amber-300`}
                    >
                      {software.name}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 bg-white/90">
                  <h3 className={`text-xl font-bold ${style.tailwindClasses.primaryText} mb-2`}>{software.name}</h3>
                  <p className={`${style.tailwindClasses.secondaryText} mb-4`}>{software.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${style.tailwindClasses.secondaryText}`}>Skill Level:</span>
                      <span className={`text-sm font-medium ${style.tailwindClasses.secondaryText}`}>
                        {software.skillLevel}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${style.tailwindClasses.secondaryText}`}>Price:</span>
                      <span className={`text-sm font-medium ${style.tailwindClasses.secondaryText}`}>
                        {software.free === true ? "Free" : software.free}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${style.tailwindClasses.secondaryText}`}>Best For:</span>
                      <span className={`text-sm font-medium ${style.tailwindClasses.secondaryText}`}>
                        {software.bestFor}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className={`w-full ${style.tailwindClasses.primaryButton} border border-amber-300`}>
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          className="relative overflow-hidden rounded-3xl bg-green-600 dark:bg-green-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          aria-labelledby="cta-heading"
        >
          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Ready to Start Designing?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-green-100 dark:text-green-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Explore our comprehensive guides and tutorials to master the art of 3D design for printing.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button
                  size="lg"
                  className="bg-white text-green-700 hover:bg-green-50 dark:text-green-700 dark:hover:bg-neutral-200 font-semibold px-8 py-3"
                  aria-label="Start with Design Basics tutorial"
                >
                  Start with Design Basics
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
