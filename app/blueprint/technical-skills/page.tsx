"use client"

import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Wrench, Workflow, Brush, Hammer, Play, Zap, Quote, ArrowRight } from "lucide-react"
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
  name: "3D Printing Technical Skills",
  description:
    "Master the practical skills needed for successful 3D printing. Learn essential techniques, maintenance procedures, and troubleshooting methods.",
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
  text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
  spokenByCharacter: {
    "@type": "Person",
    name: "Antoine de Saint-Exupéry",
    sameAs: "https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry",
  },
}

export default function TechnicalSkillsPage() {
  // Get style for the technical-skills category (fixed from "technical")
  const style = getCategoryStyle("technical-skills")

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
        category="technical-skills"
        title="3D Printing Technical Skills"
        description="Master the practical skills needed for profitable 3D printing, from optimizing slicer settings for efficiency to streamlining production workflows and quality control."
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-orange-100/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`p-1 rounded-full ${goldGradient}`}>
            <Settings className="h-3 w-3 text-white" />
          </div>
          <span className="text-orange-100 font-medium">Practical Skills</span>
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
                    Mastering Technical Skills
                  </h2>
                  <p className={`text-xl ${style.tailwindClasses.secondaryText} leading-relaxed`}>
                    Technical skills are the foundation of a successful and profitable 3D printing business. From
                    configuring slicing software for optimal efficiency to maintaining your printer and implementing
                    quality control systems, these practical skills ensure consistent, high-quality results while
                    maximizing your profit margins.
                  </p>
                </div>
              </div>

              <motion.div
                className={`bg-white/90 border ${style.tailwindClasses.primaryBorder} border-l-orange-600 border-l-4 rounded-2xl p-6 mt-16`}
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
                      Start with the Slicer Mastery guide to understand how to properly configure your prints for both
                      quality and efficiency, then explore production workflow optimization to reduce costs and increase
                      output.
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
                    {/* Placeholder for Saint-Exupéry's photo */}
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
                            "Perfection is achieved not when there is nothing more to add, but when there is nothing
                            left to take away."
                          </p>
                          <footer className={`text-sm ${style.tailwindClasses.secondaryText}`}>
                            <cite>— Antoine de Saint-Exupéry</cite>
                          </footer>
                        </blockquote>
                        <p className={`text-sm ${style.tailwindClasses.secondaryText}`}>
                          In 3D printing, technical mastery means finding the optimal balance of settings and
                          processes—removing inefficiencies while preserving quality.
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
                title: "Slicer Mastery",
                description: "Configure slicing software for optimal print results",
                image: "/placeholder.svg?height=300&width=500",
                href: "/blueprint/technical-skills/slicer-mastery",
                icon: Workflow,
              },
              {
                title: "Printer Maintenance",
                description: "Keep your 3D printer in optimal working condition",
                image: "/placeholder.svg?height=300&width=500",
                href: "/blueprint/technical-skills/printer-maintenance",
                icon: Wrench,
              },
              {
                title: "Troubleshooting Guide",
                description: "Diagnose and resolve common 3D printing issues",
                image: "/placeholder.svg?height=300&width=500",
                href: "/blueprint/technical-skills/troubleshooting",
                icon: Hammer,
              },
              {
                title: "Post-Processing",
                description: "Finish and refine your 3D prints for professional results",
                image: "/placeholder.svg?height=300&width=500",
                href: "/blueprint/technical-skills/post-processing",
                icon: Brush,
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
                            className={`inline-block px-3 py-1 rounded-full bg-white text-sm font-medium ${style.tailwindClasses.secondaryText}`}
                          >
                            {topic.title}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 bg-white/90">
                        <div
                          className={`inline-flex p-2 rounded-lg ${goldGradient} mb-3 shadow-md transition-all duration-300 hover:shadow-lg`}
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
          className={`mb-20 relative overflow-hidden rounded-3xl ${style.tailwindClasses.accentBg}`}
          aria-labelledby="tutorials-heading"
        >
          <div className="py-12 px-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                <div className="md:w-1/2">
                  <h2 id="tutorials-heading" className={`text-3xl font-bold mb-4 text-white`}>
                    Featured Tutorials
                  </h2>
                  <p className={`text-lg text-orange-100 dark:text-orange-200 mb-6`}>
                    Master technical skills with our comprehensive video tutorials designed for all skill levels.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Slicer Mastery Tutorial",
                      "Printer Maintenance Tutorial",
                      "Troubleshooting Guide Tutorial",
                      "Post-Processing Tutorial",
                    ].map((title, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div
                          className={`h-8 w-8 rounded-full ${goldGradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                        >
                          <Play className="h-4 w-4 text-white" fill="white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className={`font-medium text-white`}>{title}</p>
                          <p className={`text-sm text-orange-200 dark:text-orange-300`}>{15 + index * 10} min</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="bg-white text-orange-600 hover:bg-orange-50 dark:bg-gray-100 dark:text-orange-700 dark:hover:bg-orange-100 font-semibold">
                      View All Tutorials
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=400&width=700"
                      alt="3D printing slicer tutorial showing optimal settings configuration"
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
          className={`relative overflow-hidden rounded-3xl ${style.tailwindClasses.accentBgDeep || "bg-orange-600"} text-white`} // Use a deeper accent or fallback
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          aria-labelledby="cta-heading"
        >
          <div className="relative z-10 p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Ready to Master Technical Skills?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-orange-100 dark:text-orange-200 mb-8" // Lighter orange for paragraph
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Explore our comprehensive guides and tutorials to develop the technical expertise needed for successful
                3D printing.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 dark:bg-gray-100 dark:text-orange-700 dark:hover:bg-orange-100 font-semibold border border-transparent shadow-md"
                  aria-label="Start with Slicer Mastery tutorial"
                >
                  Start with Slicer Mastery
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
