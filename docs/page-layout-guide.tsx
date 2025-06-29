/**
 * 3DBlueprint.io Page Layout Style Guide
 *
 * This document outlines the standard layout structure for category pages
 * on the 3DBlueprint.io website. Follow this guide to ensure consistency
 * across all pages.
 */

import type { CategoryType } from "@/lib/style-guide"

/**
 * Standard Page Structure
 *
 * Each category page follows this structure:
 * 1. Hero Section with full-width image and gradient overlay
 * 2. Introduction Section with quote card
 * 3. Core Topics Section with cards
 * 4. Featured Content Section with gradient background
 * 5. Quick Start Guides Section
 * 6. Optional: Additional Content Section (varies by category)
 * 7. Call to Action Section
 */

/**
 * Hero Section
 *
 * Full-width image with gradient overlay and content positioned at the bottom.
 */
export const HeroSectionTemplate = `
<section className="relative" aria-labelledby="hero-heading">
  {/* Full-width hero image */}
  <div className="relative h-[500px] md:h-[600px] w-full">
    <Image
      src="/path/to/hero-image.jpg"
      alt="Descriptive alt text"
      fill
      className="object-cover"
      priority
      sizes="100vw"
    />
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-{color}-900/95 via-{color}-900/70 to-transparent"></div>
  </div>

  {/* Content overlay */}
  <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-{color}-100/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-1 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600">
            <Icon className="h-3 w-3 text-white" />
          </div>
          <span className="text-{color}-100 font-medium">Category Label</span>
        </motion.div>

        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Category Title
        </h1>

        <p className="text-xl text-{color}-100 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
          Category description text goes here. This should be 1-2 sentences that summarize the category.
        </p>
      </motion.div>
    </div>
  </div>
</section>
`

/**
 * Introduction Section with Quote Card
 *
 * Two-column layout with introduction text on the left and quote card on the right.
 */
export const IntroSectionTemplate = `
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
          <h2 id="intro-heading" className="text-3xl font-bold mb-6 text-{color}-800">
            Introduction Heading
          </h2>
          <p className="text-xl text-{color}-700 leading-relaxed">
            Introduction text goes here. This should be 2-3 paragraphs that introduce the category
            and explain its importance.
          </p>
        </div>
      </div>

      <motion.div
        className="bg-white/90 border border-{color}-200 border-l-{color}-600 border-l-4 rounded-2xl p-6 mt-16"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex gap-4">
          <div className="bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-2 rounded-full shadow-md">
            <Zap className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-semibold text-{color}-800 mb-2">Pro Tip</h3>
            <p className="text-{color}-700">
              Pro tip text goes here. This should be a helpful tip related to the category.
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
        <Card className="overflow-hidden h-full border border-{color}-200 shadow-md">
          {/* Photo section - no overlay */}
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-{color}-800 to-{color}-900">
              <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl">
                <span aria-hidden="true">A</span>
              </div>
            </div>
          </div>

          {/* Quote section - separate from photo */}
          <CardContent className="p-6 bg-white/90">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-3 rounded-full shadow-md flex-shrink-0">
                <Quote className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <blockquote className="mb-3">
                  <p className="text-lg font-medium italic text-{color}-800 mb-2">
                    "Quote text goes here."
                  </p>
                  <footer className="text-sm text-{color}-600">
                    <cite>— Author Name</cite>
                  </footer>
                </blockquote>
                <p className="text-sm text-{color}-700">
                  Additional context about the quote goes here.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</motion.section>
`

/**
 * Core Topics Section
 *
 * Grid of cards showcasing the main topics in the category.
 */
export const CoreTopicsSectionTemplate = `
<motion.section className="mb-20" initial="initial" animate="animate" aria-labelledby="core-topics-heading">
  <motion.h2
    id="core-topics-heading"
    className="text-3xl font-bold mb-10 text-{color}-800"
    variants={fadeInUp}
  >
    Core Topics
  </motion.h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {topics.map((topic, index) => (
      <motion.div key={topic.title} variants={fadeInUp} whileHover={{ y: -5 }}>
        <Card className="h-full overflow-hidden border border-{color}-200 hover:border-{color}-300 hover:shadow-md transition-all duration-300">
          <CardContent className="p-0">
            <Link href={topic.href} className="block" aria-label={\`Learn about \${topic.title}\`}>
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={topic.image || "/placeholder.svg"}
                  alt={\`\${topic.title} - \${topic.description}\`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-{color}-600">
                    {topic.title}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white/90">
                <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 mb-3 shadow-md">
                  <topic.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-{color}-800">{topic.title}</h3>
                <p className="text-sm text-{color}-700 mb-4">{topic.description}</p>
                <div className="flex items-center text-{color}-600 font-medium">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</motion.section>
`

/**
 * Featured Content Section
 *
 * Section with light background color and two-column layout.
 */
export const FeaturedContentSectionTemplate = `
<section className="mb-20 relative overflow-hidden rounded-3xl bg-{color}-50/50" aria-labelledby="featured-heading">
  <div className="py-12 px-6 md:p-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:items-center">
        <div className="md:w-1/2">
          <h2 id="featured-heading" className="text-3xl font-bold mb-4 text-{color}-800">
            Featured Content Heading
          </h2>
          <p className="text-lg text-{color}-700 mb-6">
            Description text goes here. This should explain what the featured content is about.
          </p>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Icon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-{color}-800">{item.title}</p>
                  <p className="text-sm text-{color}-600">{item.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button className="bg-{color}-600 hover:bg-{color}-700 text-white">
              Call to Action
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/path/to/featured-image.jpg"
              alt="Featured content image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 flex items-center justify-center cursor-pointer shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`

/**
 * Quick Start Guides Section
 *
 * Grid of cards with quick start guides.
 */
export const QuickStartGuidesTemplate = `
<motion.section
  className="mb-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  aria-labelledby="quick-start-heading"
>
  <h2 id="quick-start-heading" className="text-3xl font-bold mb-10 text-{color}-800">
    Quick Start Guides
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {guides.map((guide, index) => (
      <motion.div
        key={guide.title}
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * index }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="border border-{color}-200 hover:border-{color}-300 bg-white/90 hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-3 rounded-xl shadow-md">
                <guide.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-{color}-800">{guide.title}</h3>
                <p className="text-sm text-{color}-700 mb-4">{guide.description}</p>
                <Link
                  href={guide.href}
                  className="inline-flex items-center text-{color}-600 text-sm font-medium hover:underline"
                  aria-label={\`Read guide about \${guide.title}\`}
                >
                  Read guide <ChevronRight className="h-4 w-4 ml-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</motion.section>
`

/**
 * Call to Action Section
 *
 * Full-width section with gradient background and border.
 */
export const CallToActionTemplate = `
<motion.section
  className="relative overflow-hidden rounded-3xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  aria-labelledby="cta-heading"
>
  <div className="absolute inset-0 bg-gradient-to-r from-{color}-600 to-{color}-700"></div>
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
        Call to Action Heading
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-{color}-100 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Call to action description text goes here. This should encourage the user to take action.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <Button
          size="lg"
          className="bg-white text-{color}-700 hover:bg-{color}-50 border border-amber-300"
          aria-label="Call to action button"
        >
          Call to Action Button
        </Button>
      </motion.div>
    </div>
  </div>
</motion.section>
`

/**
 * Complete Page Template
 *
 * This is a complete template for a category page.
 */
export const CompletePageTemplate = (category: CategoryType) => `
"use client"

import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Play, Zap, Quote } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect } from "react"
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
  name: "Category Title",
  description: "Category description",
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
  text: "Quote text",
  spokenByCharacter: {
    "@type": "Person",
    name: "Author Name",
    sameAs: "https://en.wikipedia.org/wiki/Author_Name",
  },
}

export default function CategoryPage() {
  const style = getCategoryStyle("${category}")

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
    <div className="min-h-screen bg-[#FAF7F2]">
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative" aria-labelledby="hero-heading">
        {/* Full-width hero image */}
        <div className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1600&query=category specific image"
            alt="Category specific alt text"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Enhanced gradient overlay for better text readability */}
          <div className={\`absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-\${style.colors.dark}/95 via-\${style.colors.dark}/70 to-transparent\`}></div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={\`inline-flex items-center gap-2 bg-\${style.colors.accent}/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6\`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={\`p-1 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600\`}>
                  <Icon className="h-3 w-3 text-white" />
                </div>
                <span className={\`text-\${style.colors.accent} font-medium\`}>Category Label</span>
              </motion.div>

              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg"
              >
                Category Title
              </h1>

              <p className={\`text-xl text-\${style.colors.accent} mb-8 max-w-2xl leading-relaxed drop-shadow-md\`}>
                Category description text goes here. This should be 1-2 sentences that summarize the category.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
                  <h2 id="intro-heading" className={\`text-3xl font-bold mb-6 \${style.tailwindClasses.primaryText}\`}>
                    Introduction Heading
                  </h2>
                  <p className={\`text-xl \${style.tailwindClasses.secondaryText} leading-relaxed\`}>
                    Introduction text goes here. This should be 2-3 paragraphs that introduce the category
                    and explain its importance.
                  </p>
                </div>
              </div>

              <motion.div
                className={\`bg-white/90 border \${style.tailwindClasses.primaryBorder} border-l-\${style.colors.secondary} border-l-4 rounded-2xl p-6 mt-16\`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex gap-4">
                  <div className={\`bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-2 rounded-full shadow-md\`}>
                    <Zap className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={\`font-semibold \${style.tailwindClasses.primaryText} mb-2\`}>Pro Tip</h3>
                    <p className={\`\${style.tailwindClasses.secondaryText}\`}>
                      Pro tip text goes here. This should be a helpful tip related to the category.
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
                <Card className={\`overflow-hidden h-full border \${style.tailwindClasses.primaryBorder} shadow-md\`}>
                  {/* Photo section - no overlay */}
                  <div className="relative aspect-square w-full">
                    <div className={\`absolute inset-0 \${style.tailwindClasses.heroGradient}\`}>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl">
                        <span aria-hidden="true">A</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote section - separate from photo */}
                  <CardContent className="p-6 bg-white/90">
                    <div className="flex items-start gap-4">
                      <div className={\`bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-3 rounded-full shadow-md flex-shrink-0\`}>
                        <Quote className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <blockquote className="mb-3">
                          <p className={\`text-lg font-medium italic \${style.tailwindClasses.primaryText} mb-2\`}>
                            "Quote text goes here."
                          </p>
                          <footer className={\`text-sm \${style.tailwindClasses.secondaryText}\`}>
                            <cite>— Author Name</cite>
                          </footer>
                        </blockquote>
                        <p className={\`text-sm \${style.tailwindClasses.secondaryText}\`}>
                          Additional context about the quote goes here.
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
            className={\`text-3xl font-bold mb-10 \${style.tailwindClasses.primaryText}\`}
            {...fadeInUp}
          >
            Core Topics
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <motion.div key={topic.title} variants={fadeInUp} whileHover={{ y: -5 }}>
                <Card
                  className={\`h-full overflow-hidden border \${style.tailwindClasses.primaryBorder} hover:shadow-md transition-all duration-300\`}
                >
                  <CardContent className="p-0">
                    <Link href={topic.href} className="block" aria-label={\`Learn about \${topic.title}\`}>
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={topic.image || "/placeholder.svg"}
                          alt={\`\${topic.title} - \${topic.description}\`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span
                            className={\`inline-block px-3 py-1 rounded-full bg-white text-sm font-medium \${style.tailwindClasses.secondaryText}\`}
                          >
                            {topic.title}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 bg-white/90">
                        <div
                          className={\`inline-flex p-2 rounded-lg bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 mb-3 shadow-md transition-all duration-300 hover:shadow-lg\`}
                        >
                          <topic.icon className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                        <h3 className={\`font-bold text-lg mb-2 \${style.tailwindClasses.primaryText}\`}>{topic.title}</h3>
                        <p className={\`text-sm \${style.tailwindClasses.secondaryText} mb-4\`}>{topic.description}</p>
                        <div className={\`flex items-center \${style.tailwindClasses.secondaryText} font-medium\`}>
                          <span className="text-sm">Learn More</span>
                          <ArrowRight
                            className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
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

        {/* Featured Content Section */}
        <section
          className={\`mb-20 relative overflow-hidden rounded-3xl \${style.tailwindClasses.accentBg}\`}
          aria-labelledby="featured-heading"
        >
          <div className="py-12 px-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                <div className="md:w-1/2">
                  <h2 id="featured-heading" className={\`text-3xl font-bold mb-4 \${style.tailwindClasses.primaryText}\`}>
                    Featured Content Heading
                  </h2>
                  <p className={\`text-lg \${style.tailwindClasses.secondaryText} mb-6\`}>
                    Description text goes here. This should explain what the featured content is about.
                  </p>
                  <ul className="space-y-4">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div
                          className={\`h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md\`}
                        >
                          <Play className="h-4 w-4 text-white" fill="white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className={\`font-medium \${style.tailwindClasses.primaryText}\`}>{item.title}</p>
                          <p className={\`text-sm \${style.tailwindClasses.secondaryText}\`}>{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className={\`\${style.tailwindClasses.primaryButton}\`}>View All</Button>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=400&width=700&query=featured content image"
                      alt="Featured content image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className={\`h-16 w-16 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 flex items-center justify-center cursor-pointer shadow-lg\`}
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
          <h2 id="quick-start-heading" className={\`text-3xl font-bold mb-10 \${style.tailwindClasses.primaryText}\`}>
            Quick Start Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={\`border \${style.tailwindClasses.primaryBorder} bg-white/90 hover:shadow-md transition-all duration-300\`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={\`bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg\`}
                      >
                        <guide.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className={\`font-bold text-lg mb-2 \${style.tailwindClasses.primaryText}\`}>{guide.title}</h3>
                        <p className={\`text-sm \${style.tailwindClasses.secondaryText} mb-4\`}>{guide.description}</p>
                        <Link
                          href={guide.href}
                          className={\`inline-flex items-center \${style.tailwindClasses.secondaryText} text-sm font-medium hover:underline\`}
                          aria-label={\`Read guide about \${guide.title}\`}
                        >
                          Read guide <ChevronRight className="h-4 w-4 ml-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          aria-labelledby="cta-heading"
        >
          <div className={\`absolute inset-0 \${style.tailwindClasses.heroGradient}\`}></div>
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
                Call to Action Heading
              </motion.h2>
              <motion.p
                className={\`text-lg md:text-xl text-\${style.colors.accent} mb-8\`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Call to action description text goes here. This should encourage the user to take action.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button
                  size="lg"
                  className={\`bg-white text-\${style.colors.primary} hover:bg-\${style.colors.accent}/50 border border-amber-300\`}
                  aria-label="Call to action button"
                >
                  Call to Action Button
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
`

/**
 * Spacing Guidelines
 */
export const spacingGuidelines = {
  sectionMargin: "mb-20",
  subsectionMargin: "mb-10",
  paragraphMargin: "mb-6",
  itemMargin: "mb-4",
  containerPadding: "px-4 py-16",
  cardPadding: "p-6",
  buttonPadding: "px-4 py-2",
}

/**
 * Typography Guidelines
 */
export const typographyGuidelines = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-xl font-bold",
  body: "text-base",
  bodyLarge: "text-lg",
  bodySmall: "text-sm",
  quote: "text-lg font-medium italic",
}

/**
 * Animation Guidelines
 */
export const animationGuidelines = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  staggered: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
  },
}
