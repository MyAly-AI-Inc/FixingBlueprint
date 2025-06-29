"use client"

import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart3, Lightbulb, ShoppingCart, BriefcaseBusiness, Zap, Quote } from "lucide-react"
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
  name: "3D Printing Business & Entrepreneurship",
  description:
    "Learn how to build a profitable 3D printing business with our comprehensive guides on market research, product development, and business models.",
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
  text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
  spokenByCharacter: {
    "@type": "Person",
    name: "Steve Jobs",
    sameAs: "https://en.wikipedia.org/wiki/Steve_Jobs",
  },
}

export default function BusinessEntrepreneurshipPage() {
  // Get style for the business category
  const style = getCategoryStyle("business-and-entrepreneurship")

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
    script.text = JSON.stringify(quoteStructuredData)
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
        category="business-and-entrepreneurship"
        title="3D Printing Business & Entrepreneurship"
        description="Transform your 3D printing skills into profitable ventures with our proven frameworks for product development, market research, and scalable business models."
        showIcon={true}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-purple-100/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`p-1 rounded-full ${goldGradient}`}>
            <BriefcaseBusiness className="h-3 w-3 text-white" />
          </div>
          <span className="text-purple-100 font-medium">Business Opportunities</span>
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
                    Building Your 3D Printing Business
                  </h2>
                  <p className={`text-xl ${style.tailwindClasses.secondaryText} leading-relaxed`}>
                    The 3D printing industry offers unprecedented opportunities for entrepreneurs who take a strategic
                    approach. Our business blueprint guides you through identifying profitable niches, developing
                    problem-solving products, and building scalable systems that maximize your profit margins and
                    customer satisfaction.
                  </p>
                </div>
              </div>

              <motion.div
                className={`bg-white/90 border ${style.tailwindClasses.primaryBorder} border-l-purple-600 border-l-4 rounded-2xl p-6 mt-16`}
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
                      Start with the Market Research Guide to identify profitable niches, then focus on developing your
                      "Product Trinity" - three complementary products that solve specific problems for your target
                      market.
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
                    {/* Placeholder for Steve Jobs's photo */}
                    <div className={`absolute inset-0 ${style.tailwindClasses.heroGradient}`}>
                      {/* This div will be replaced with the actual image */}
                      <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl">
                        <span aria-hidden="true">S</span>
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
                            "Your work is going to fill a large part of your life, and the only way to be truly
                            satisfied is to do what you believe is great work. And the only way to do great work is to
                            love what you do."
                          </p>
                          <footer className={`text-sm ${style.tailwindClasses.secondaryText}`}>
                            <cite>— Steve Jobs</cite>
                          </footer>
                        </blockquote>
                        <p className={`text-sm ${style.tailwindClasses.secondaryText}`}>
                          Building a 3D printing business requires passion and dedication. When you create products you
                          believe in, your enthusiasm will resonate with customers and drive your success.
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
            Core Business Topics
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Market Research",
                description: "Identify profitable niches and validate business ideas",
                image: "/placeholder.svg?height=400&width=600",
                href: "#",
                icon: BarChart3,
              },
              {
                title: "Product Development",
                description: "Create and refine marketable 3D printed products",
                image: "/placeholder.svg?height=400&width=600",
                href: "#",
                icon: Lightbulb,
              },
              {
                title: "Selling Platforms",
                description: "Find the best channels to market and sell your products",
                image: "/placeholder.svg?height=400&width=600",
                href: "#",
                icon: ShoppingCart,
              },
              {
                title: "Business Models",
                description: "Explore different approaches to 3D printing businesses",
                image: "/placeholder.svg?height=400&width=600",
                href: "#",
                icon: BriefcaseBusiness,
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

        {/* Call to Action */}
        <motion.section
          className="relative overflow-hidden rounded-3xl bg-amber-600 dark:bg-amber-700"
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
                Ready to Start Your 3D Printing Business?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-amber-100 dark:text-amber-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Explore our comprehensive guides and resources to build a successful and profitable 3D printing venture.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button
                  size="lg"
                  className="bg-white text-amber-700 hover:bg-amber-50 dark:text-amber-700 dark:hover:bg-neutral-200 font-semibold px-8 py-3"
                  aria-label="Explore Market Research Guide"
                >
                  Explore Market Research Guide
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
