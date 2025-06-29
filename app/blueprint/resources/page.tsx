"use client"

import { useState } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Star } from "lucide-react"
import { InspirationalQuoteCard } from "@/components/inspirational-quote-card"
import { CategoryHero } from "@/components/category-hero"
import { getCategoryStyle } from "@/lib/style-guide"

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("documentation")

  // Get style for the resources category
  const style = getCategoryStyle("resources")

  // Gold gradient for icons (from style guide common accents)
  const goldGradient = "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600"
  const goldGradientHover = "hover:from-amber-400 hover:via-yellow-600 hover:to-amber-700"

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className={`min-h-screen ${style.tailwindClasses.lightBg}`}>
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <CategoryHero
        category="resources"
        title="3D Printing Resources"
        description="Access our comprehensive collection of documentation, model libraries, video tutorials, and community projects to support your 3D printing journey."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className={`${goldGradient} text-white hover:${goldGradientHover}`}>
              Explore Resources
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="text-white border-white/70 bg-white/10 hover:bg-white/20">
              Download Library
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
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
                    Comprehensive Learning Resources
                  </h2>
                  <p className={`text-xl ${style.tailwindClasses.secondaryText} leading-relaxed`}>
                    Our resource library provides everything you need to succeed in your 3D printing journey. From
                    detailed guides and templates to model libraries and community projects, these resources will help
                    you overcome challenges and expand your skills.
                  </p>
                  <p className={`text-xl ${style.tailwindClasses.secondaryText} leading-relaxed`}>
                    Whether you're just starting out or looking to master advanced techniques, our curated collection of
                    resources will guide you through every step of the process, from selecting the right printer to
                    optimizing your designs for production.
                  </p>
                </div>
              </div>

              <motion.div
                className={`bg-white/90 border ${style.tailwindClasses.primaryBorder} border-l-4 border-l-green-600 rounded-2xl p-6 mt-16`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex gap-4">
                  <div
                    className={`bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-2 rounded-full shadow-md`}
                  >
                    <Star className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>Pro Tip</h3>
                    <p className={`${style.tailwindClasses.secondaryText}`}>
                      Bookmark your most frequently used resources for quick access. Our documentation is regularly
                      updated, so check back often for the latest information and techniques.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right column - Quote Card */}
            <div className="lg:w-5/12">
              <InspirationalQuoteCard
                quote="The difference between a good print and a great print is often found in the resources you use to guide your process."
                author="Dr. Sarah Chen"
                imageSrc="/placeholder.svg?height=400&width=400&query=professional 3D printing expert portrait"
                explanation="3D Printing Specialist with over 15 years of experience in additive manufacturing and materials science."
                category="resources"
              />
            </div>
          </div>
        </motion.section>

        {/* Core Topics */}
        <div className="mb-20">
          <motion.h2
            className={`text-3xl font-bold mb-10 ${style.tailwindClasses.primaryText}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resource Categories
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <Card
                className={`hover:shadow-md transition-shadow h-full bg-white/90 ${style.tailwindClasses.primaryBorder}`}
              >
                <CardContent className="p-0">
                  <Link href="#documentation" className="block h-full" onClick={() => setActiveTab("documentation")}>
                    <div className="relative aspect-[3/2]">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=3D printing documentation and manuals"
                        alt="Documentation Library"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent"></div>
                      <div
                        className={`absolute bottom-3 left-3 ${style.tailwindClasses.primaryBg} text-white text-xs px-2 py-1 rounded`}
                      >
                        Documentation
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`font-bold mb-1 ${style.tailwindClasses.primaryText}`}>Documentation Library</h3>
                      <p className={`text-sm ${style.tailwindClasses.secondaryText} mb-4`}>
                        Comprehensive guides, manuals, and reference materials for all aspects of 3D printing.
                      </p>
                      <div className="flex items-center text-amber-500">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                className={`hover:shadow-md transition-shadow h-full bg-white/90 ${style.tailwindClasses.primaryBorder}`}
              >
                <CardContent className="p-0">
                  <Link href="#models" className="block h-full" onClick={() => setActiveTab("models")}>
                    <div className="relative aspect-[3/2]">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=3D printing model library with various objects"
                        alt="Model Library"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent"></div>
                      <div
                        className={`absolute bottom-3 left-3 ${style.tailwindClasses.primaryBg} text-white text-xs px-2 py-1 rounded`}
                      >
                        Models
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`font-bold mb-1 ${style.tailwindClasses.primaryText}`}>Model Library</h3>
                      <p className={`text-sm ${style.tailwindClasses.secondaryText} mb-4`}>
                        Curated collection of 3D models ready for printing, from calibration tools to practical objects.
                      </p>
                      <div className="flex items-center text-amber-500">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                className={`hover:shadow-md transition-shadow h-full bg-white/90 ${style.tailwindClasses.primaryBorder}`}
              >
                <CardContent className="p-0">
                  <Link href="#videos" className="block h-full" onClick={() => setActiveTab("videos")}>
                    <div className="relative aspect-[3/2]">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=3D printing video tutorials on screen"
                        alt="Video Tutorials"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent"></div>
                      <div
                        className={`absolute bottom-3 left-3 ${style.tailwindClasses.primaryBg} text-white text-xs px-2 py-1 rounded`}
                      >
                        Videos
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`font-bold mb-1 ${style.tailwindClasses.primaryText}`}>Video Tutorials</h3>
                      <p className={`text-sm ${style.tailwindClasses.secondaryText} mb-4`}>
                        Step-by-step video guides covering everything from basic setup to advanced techniques.
                      </p>
                      <div className="flex items-center text-amber-500">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                className={`hover:shadow-md transition-shadow h-full bg-white/90 ${style.tailwindClasses.primaryBorder}`}
              >
                <CardContent className="p-0">
                  <Link href="#community" className="block h-full" onClick={() => setActiveTab("community")}>
                    <div className="relative aspect-[3/2]">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=3D printing community showcase with diverse creators"
                        alt="Community Projects"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent"></div>
                      <div
                        className={`absolute bottom-3 left-3 ${style.tailwindClasses.primaryBg} text-white text-xs px-2 py-1 rounded`}
                      >
                        Community
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`font-bold mb-1 ${style.tailwindClasses.primaryText}`}>Community Projects</h3>
                      <p className={`text-sm ${style.tailwindClasses.secondaryText} mb-4`}>
                        Collaborative projects, community showcases, and user-submitted designs to inspire your work.
                      </p>
                      <div className="flex items-center text-amber-500">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.section
          className="relative overflow-hidden rounded-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          aria-labelledby="cta-heading"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${style.tailwindClasses.heroGradient}`}></div>
          <div className="absolute inset-0 border-2 border-amber-400 rounded-3xl opacity-50"></div>
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Ready to Enhance Your 3D Printing Skills?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Explore our comprehensive resource library to find the tools, guides, and models you need to take your
                3D printing to the next level.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50 border border-amber-300"
                  aria-label="Browse resources"
                >
                  Browse Documentation Library
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
