"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Users, MessageCircle, Share2, ArrowRight, Trophy, Lightbulb } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-6">
                <Users className="mr-2 h-4 w-4" />
                JOIN THE COMMUNITY
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">Connect with </span>
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
                  Makers
                </motion.span>
              </h1>

              <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
                Join thousands of 3D printing enthusiasts, entrepreneurs, and creators sharing knowledge, projects, and
                building the future together.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-full px-10 py-6 text-xl font-medium"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Join Discord
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-full px-10 py-6 text-xl bg-transparent"
                >
                  Browse Projects
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Share2 className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white mb-4">Share Projects</h3>
              <p className="text-blue-200">
                Showcase your 3D prints, get feedback, and inspire others with your creations.
              </p>
            </motion.div>

            <motion.div
              className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Lightbulb className="w-16 h-16 mx-auto mb-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white mb-4">Get Help</h3>
              <p className="text-purple-200">Ask questions, troubleshoot issues, and learn from experienced makers.</p>
            </motion.div>

            <motion.div
              className="bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Trophy className="w-16 h-16 mx-auto mb-6 text-green-400" />
              <h3 className="text-2xl font-bold text-white mb-4">Challenges</h3>
              <p className="text-green-200">
                Participate in monthly challenges and competitions to level up your skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
