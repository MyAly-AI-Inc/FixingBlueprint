"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Sparkles, Eye, Heart, Share2, Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Simple fallback component instead of Spline
function SplineFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <Sparkles className="h-16 w-16 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">AI Art Gallery</h3>
        <p className="text-white/70">Interactive 3D experience coming soon</p>
      </div>
    </div>
  )
}

export default function DreamlandPage() {
  const [currentArtwork, setCurrentArtwork] = useState(0)

  const artworks = [
    {
      id: 1,
      title: "Ethereal Transformation",
      artist: "AI Collective",
      description: "A mesmerizing journey through digital consciousness",
      likes: 2847,
      views: 12500,
      category: "Abstract",
    },
    {
      id: 2,
      title: "Quantum Dreams",
      artist: "Neural Networks",
      description: "Where reality meets imagination in perfect harmony",
      likes: 1923,
      views: 8900,
      category: "Surreal",
    },
    {
      id: 3,
      title: "Digital Renaissance",
      artist: "AI Masters",
      description: "Classical beauty reimagined through artificial intelligence",
      likes: 3456,
      views: 15600,
      category: "Classical",
    },
  ]

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-white font-bold text-xl">Dreamland</h1>
                  <p className="text-white/60 text-sm">AI Art Gallery</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 px-4 py-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
                Live Gallery
              </Badge>

              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hidden md:flex bg-transparent"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-20">
        {/* 3D Scene */}
        <div className="flex-1 relative">
          <div className="w-full h-[60vh] lg:h-full">
            <SplineFallback />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-purple-900/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 via-transparent to-blue-900/10 pointer-events-none" />

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-96 bg-black/40 backdrop-blur-xl border-l border-white/10 p-6 overflow-y-auto">
          {/* Current Artwork Info */}
          <motion.div
            key={currentArtwork}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-white mb-1">{artworks[currentArtwork].title}</h2>
                    <p className="text-purple-300 font-medium text-sm">by {artworks[currentArtwork].artist}</p>
                  </div>
                </div>

                <p className="text-white/70 mb-4 leading-relaxed text-sm">{artworks[currentArtwork].description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-pink-400" />
                      <span className="text-white/80 text-sm">{artworks[currentArtwork].likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-blue-400" />
                      <span className="text-white/80 text-sm">{artworks[currentArtwork].views.toLocaleString()}</span>
                    </div>
                  </div>
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs">
                    {artworks[currentArtwork].category}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium">
                    <Download className="h-4 w-4 mr-2" />
                    Collect Artwork
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Similar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Artwork Navigation */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Gallery Collection</h3>
            <div className="space-y-2">
              {artworks.map((artwork, index) => (
                <button
                  key={artwork.id}
                  onClick={() => setCurrentArtwork(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentArtwork === index
                      ? "bg-purple-600/20 border border-purple-500/30"
                      : "bg-white/5 hover:bg-white/10 border border-transparent"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{artwork.title}</p>
                      <p className="text-white/60 text-xs">{artwork.artist}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Stats */}
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-4">Gallery Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Total Artworks:</span>
                  <span className="text-white">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Active Artists:</span>
                  <span className="text-white">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Monthly Views:</span>
                  <span className="text-white">1.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Collections:</span>
                  <span className="text-white">15.6K</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
