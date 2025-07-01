"use client"

import { ThreeDMarquee } from "@/components/ui/3d-marquee"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Sparkles, Upload, Download, Heart, Eye, ArrowRight, Palette, Layers, Box } from "lucide-react"

export default function GalleryPage() {
  // Stats for the gallery
  const stats = [
    { label: "Community Creations", value: "10K+", icon: Sparkles },
    { label: "Downloads", value: "50K+", icon: Download },
    { label: "Active Creators", value: "2.5K", icon: Palette },
    { label: "Categories", value: "25+", icon: Layers },
  ]

  // Featured categories
  const categories = [
    {
      name: "Functional Tools",
      count: "2,341 models",
      description: "Practical prints for everyday use",
      color: "blue",
    },
    {
      name: "Art & Decor",
      count: "1,892 models",
      description: "Beautiful decorative pieces",
      color: "purple",
    },
    {
      name: "Tech Accessories",
      count: "3,124 models",
      description: "Phone stands, cable organizers & more",
      color: "green",
    },
    {
      name: "Toys & Games",
      count: "1,567 models",
      description: "Fun prints for all ages",
      color: "orange",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                COMMUNITY SHOWCASE
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">Explore Amazing </span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  3D Creations
                </motion.span>
              </h1>

              <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
                Discover thousands of innovative 3D models created by our community. 
                From functional tools to artistic masterpieces, find inspiration for your next print.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-full px-10 py-6 text-xl font-medium"
                >
                  <Upload className="mr-2 h-6 w-6" />
                  Upload Your Creation
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-full px-10 py-6 text-xl bg-transparent"
                >
                  Browse All Models
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </div>
      </section>

      {/* 3D Marquee Section */}
      <section className="py-20 -mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto px-4"
        >
          <div className="text-center mb-12">
            <Badge className="bg-purple-900/30 text-purple-300 border-purple-700/50 mb-4">
              FEATURED COLLECTION
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Community Prints
                            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              These trending models showcase the creativity and innovation of our maker community
            </p>
          </div>
          
          <div className="rounded-3xl bg-black/20 backdrop-blur-sm p-2 ring-1 ring-blue-700/30 max-w-[90vw] mx-auto">
            <ThreeDMarquee />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-900/30 text-green-300 border-green-700/50 mb-4">
              EXPLORE BY CATEGORY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Next Project
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className={`bg-${category.color}-900/20 backdrop-blur-sm border border-${category.color}-800/50 rounded-2xl p-6 hover:bg-${category.color}-900/30 transition-colors cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Box className={`w-12 h-12 mb-4 text-${category.color}-400`} />
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className={`text-${category.color}-200 mb-2`}>{category.description}</p>
                <p className="text-sm text-gray-400">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-12 text-center border border-blue-700/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Share Your Creations with the World
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Join our community of makers and inspire others with your innovative 3D prints. 
              Every creation tells a story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-full px-8 py-3 text-lg">
                <Upload className="mr-2 h-5 w-5" />
                Upload Model
              </Button>
              <Button variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3 text-lg bg-transparent">
                <Heart className="mr-2 h-5 w-5" />
                View Favorites
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
