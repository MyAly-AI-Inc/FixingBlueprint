"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Sparkles, Target, FileText, Zap, ArrowRight, Bot } from "lucide-react"

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="bg-orange-900/30 text-orange-300 border-orange-700/50 mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                AI TOOLS COMING SOON
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">AI-Powered </span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  3D Tools
                </motion.span>
              </h1>

              <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto">
                Revolutionary AI tools for 3D printing are being built during the live challenge. Watch them come to
                life and get early access.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-10 py-6 text-xl font-medium"
                >
                  <Bot className="mr-2 h-6 w-6" />
                  Watch Tools Being Built
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400/10 rounded-full px-10 py-6 text-xl bg-transparent"
                >
                  Get Notified
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-bold text-white mb-2">Product AI</h3>
              <p className="text-purple-200 text-sm">Generate profitable 3D products from any problem description</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Target className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-bold text-white mb-2">Market AI</h3>
              <p className="text-blue-200 text-sm">Real-time market analysis and competition research</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FileText className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-2">Copy AI</h3>
              <p className="text-green-200 text-sm">High-converting product descriptions and sales copy</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-bold text-white mb-2">Price AI</h3>
              <p className="text-yellow-200 text-sm">Optimal pricing based on materials and market data</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
