"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Users, Zap, Layers, ChevronRight } from "lucide-react"

export function CreatorSection() {
  return (
    <ScrollReveal>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">
                <Users className="mr-1 h-3 w-3" />
                CREATOR COMMUNITY
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Join Our Growing Community</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Connect with thousands of makers, designers, and entrepreneurs who are pushing the boundaries of what's
                possible with 3D printing.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Stats Card */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">15,000+</h3>
              <p className="text-gray-600 text-center mb-4">Active Community Members</p>
              <p className="text-gray-500 text-center text-sm">
                Join a vibrant community of makers sharing ideas, solutions, and inspiration.
              </p>
            </motion.div>

            {/* Projects Card */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Layers className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">50,000+</h3>
              <p className="text-gray-600 text-center mb-4">Shared Projects & Models</p>
              <p className="text-gray-500 text-center text-sm">
                Access a growing library of community-created designs, models, and projects.
              </p>
            </motion.div>

            {/* Success Stories Card */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">1,200+</h3>
              <p className="text-gray-600 text-center mb-4">Success Stories</p>
              <p className="text-gray-500 text-center text-sm">
                Read about members who've launched successful businesses and careers through 3D printing.
              </p>
            </motion.div>
          </div>

          {/* Featured Community Projects */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Community Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Project 1 */}
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 relative">
                  <Image
                    src="/images/3d-printing-lab-with-filaments.png"
                    alt="3D Printed Desk Organizer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">Modular Desk Organizer</h4>
                  <p className="text-sm text-gray-600 mb-2">By Sarah K.</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Functional</span>
                    <span className="ml-2">4,230 downloads</span>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 relative">
                  <Image
                    src="/images/3d-printing-electronics.png"
                    alt="3D Printed Drone Parts"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">Custom Drone Parts</h4>
                  <p className="text-sm text-gray-600 mb-2">By Michael T.</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">Electronics</span>
                    <span className="ml-2">3,145 downloads</span>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 relative">
                  <Image
                    src="/images/multi-material-printing.png"
                    alt="3D Printed Jewelry"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">Geometric Jewelry Set</h4>
                  <p className="text-sm text-gray-600 mb-2">By Priya S.</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Fashion</span>
                    <span className="ml-2">5,872 downloads</span>
                  </div>
                </div>
              </motion.div>

              {/* Project 4 */}
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 relative">
                  <Image
                    src="/images/specialized-filaments.png"
                    alt="3D Printed Architectural Model"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">Architectural Model Kit</h4>
                  <p className="text-sm text-gray-600 mb-2">By James L.</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-amber-100 text-amber-600 px-2 py-1 rounded-full">Architecture</span>
                    <span className="ml-2">2,983 downloads</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Join Community CTA */}
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Our Community
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-gray-600">Share your projects, get feedback, and connect with fellow makers</p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
