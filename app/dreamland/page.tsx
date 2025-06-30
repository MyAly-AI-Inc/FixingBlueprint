"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Eye,
  Heart,
  Share2,
  Grid3X3,
  List,
  Search,
} from "lucide-react"
import Link from "next/link"

interface Artwork {
  id: string
  title: string
  artist: string
  description: string
  category: string
  views: number
  likes: number
  createdAt: string
  thumbnail: string
  tags: string[]
}

export default function DreamlandPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isPlaying, setIsPlaying] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const artworks: Artwork[] = [
    {
      id: "neural-dreams",
      title: "Neural Dreams",
      artist: "AI Collective",
      description:
        "A mesmerizing exploration of artificial consciousness through abstract digital forms and flowing geometries.",
      category: "Abstract",
      views: 12500,
      likes: 890,
      createdAt: "2024-01-15",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Neural+Dreams",
      tags: ["AI", "Abstract", "Digital", "Consciousness"],
    },
    {
      id: "quantum-landscapes",
      title: "Quantum Landscapes",
      artist: "Digital Horizons",
      description: "Surreal landscapes that exist at the intersection of quantum physics and digital artistry.",
      category: "Landscape",
      views: 8900,
      likes: 654,
      createdAt: "2024-01-12",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Quantum+Landscapes",
      tags: ["Quantum", "Landscape", "Surreal", "Physics"],
    },
    {
      id: "synthetic-emotions",
      title: "Synthetic Emotions",
      artist: "EmotiBot Studio",
      description: "An AI's interpretation of human emotions translated into vibrant colors and dynamic patterns.",
      category: "Portrait",
      views: 15600,
      likes: 1200,
      createdAt: "2024-01-10",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Synthetic+Emotions",
      tags: ["Emotions", "AI", "Portrait", "Colors"],
    },
    {
      id: "digital-metamorphosis",
      title: "Digital Metamorphosis",
      artist: "Transform AI",
      description: "The evolution of digital consciousness captured in a series of transformative visual sequences.",
      category: "Animation",
      views: 22100,
      likes: 1800,
      createdAt: "2024-01-08",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Digital+Metamorphosis",
      tags: ["Metamorphosis", "Evolution", "Animation", "Digital"],
    },
    {
      id: "algorithmic-poetry",
      title: "Algorithmic Poetry",
      artist: "Code Verse",
      description: "Where mathematics meets art - algorithmic patterns that tell stories through visual poetry.",
      category: "Generative",
      views: 9800,
      likes: 720,
      createdAt: "2024-01-05",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Algorithmic+Poetry",
      tags: ["Algorithm", "Poetry", "Generative", "Mathematics"],
    },
    {
      id: "cyber-gardens",
      title: "Cyber Gardens",
      artist: "Nature.exe",
      description: "Organic forms reimagined through the lens of cybernetic enhancement and digital growth.",
      category: "Nature",
      views: 11200,
      likes: 890,
      createdAt: "2024-01-03",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Cyber+Gardens",
      tags: ["Cyber", "Nature", "Organic", "Growth"],
    },
  ]

  const categories = ["all", ...Array.from(new Set(artworks.map((art) => art.category)))]

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  useEffect(() => {
    // Auto-select first artwork if none selected
    if (!selectedArtwork && filteredArtworks.length > 0) {
      setSelectedArtwork(filteredArtworks[0])
    }
  }, [filteredArtworks, selectedArtwork])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-white/20" />
              <h1 className="text-white font-semibold text-lg">Dreamland Gallery</h1>
            </div>

            <div className="flex items-center space-x-3">
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">AI Art Gallery</Badge>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share Gallery
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8 h-[calc(100vh-12rem)]">
          {/* Main 3D Scene Area */}
          <div className="lg:col-span-2 relative">
            <Card className="h-full bg-black/20 backdrop-blur-md border-white/10 overflow-hidden">
              <div className="relative h-full">
                {/* 3D Scene Placeholder with Beautiful Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-indigo-600/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
                  <div
                    className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(147,51,234,0.1),rgba(59,130,246,0.1),rgba(147,51,234,0.1))] animate-spin"
                    style={{ animationDuration: "20s" }}
                  />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        initial={{
                          x: Math.random() * window.innerWidth,
                          y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                          x: Math.random() * window.innerWidth,
                          y: Math.random() * window.innerHeight,
                        }}
                        transition={{
                          duration: Math.random() * 10 + 10,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Selected Artwork Display */}
                {selectedArtwork && (
                  <motion.div
                    key={selectedArtwork.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <div className="text-center space-y-6 max-w-2xl">
                      <div className="relative">
                        <img
                          src={selectedArtwork.thumbnail || "/placeholder.svg"}
                          alt={selectedArtwork.title}
                          className="w-64 h-64 mx-auto rounded-2xl shadow-2xl object-cover border-4 border-white/20"
                        />
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">{selectedArtwork.title}</h2>
                        <p className="text-purple-200 text-lg">by {selectedArtwork.artist}</p>
                        <p className="text-white/80 leading-relaxed">{selectedArtwork.description}</p>

                        <div className="flex items-center justify-center space-x-6 text-white/60">
                          <div className="flex items-center space-x-2">
                            <Eye className="h-4 w-4" />
                            <span>{formatNumber(selectedArtwork.views)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Heart className="h-4 w-4" />
                            <span>{formatNumber(selectedArtwork.likes)}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                          {selectedArtwork.tags.map((tag) => (
                            <Badge key={tag} className="bg-white/10 text-white border-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3D Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 h-full overflow-hidden flex flex-col">
            {/* Gallery Stats */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">Gallery Statistics</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-purple-300">{artworks.length}</div>
                    <div className="text-xs text-white/60">Artworks</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-blue-300">
                      {formatNumber(artworks.reduce((sum, art) => sum + art.views, 0))}
                    </div>
                    <div className="text-xs text-white/60">Total Views</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search and Filters */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-4 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search artworks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>

                  <div className="flex space-x-1">
                    <Button
                      onClick={() => setViewMode("grid")}
                      size="sm"
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      className="text-white"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => setViewMode("list")}
                      size="sm"
                      variant={viewMode === "list" ? "default" : "ghost"}
                      className="text-white"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Artwork Collection */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 flex-1 overflow-hidden">
              <CardContent className="p-4 h-full">
                <h3 className="text-white font-semibold mb-4">Collection ({filteredArtworks.length})</h3>

                <div className="h-full overflow-y-auto space-y-3 pr-2">
                  <AnimatePresence>
                    {filteredArtworks.map((artwork, index) => (
                      <motion.div
                        key={artwork.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => setSelectedArtwork(artwork)}
                        className={`cursor-pointer p-3 rounded-lg transition-all hover:bg-white/10 ${
                          selectedArtwork?.id === artwork.id ? "bg-white/10 ring-2 ring-purple-500" : ""
                        }`}
                      >
                        {viewMode === "grid" ? (
                          <div className="space-y-3">
                            <img
                              src={artwork.thumbnail || "/placeholder.svg"}
                              alt={artwork.title}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <div className="space-y-1">
                              <h4 className="text-white font-medium text-sm line-clamp-1">{artwork.title}</h4>
                              <p className="text-white/60 text-xs">{artwork.artist}</p>
                              <div className="flex items-center justify-between text-xs text-white/40">
                                <Badge className="bg-purple-600/20 text-purple-300 text-xs">{artwork.category}</Badge>
                                <div className="flex items-center space-x-2">
                                  <span>{formatNumber(artwork.views)}</span>
                                  <Heart className="h-3 w-3" />
                                  <span>{formatNumber(artwork.likes)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex space-x-3">
                            <img
                              src={artwork.thumbnail || "/placeholder.svg"}
                              alt={artwork.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0 space-y-1">
                              <h4 className="text-white font-medium text-sm line-clamp-1">{artwork.title}</h4>
                              <p className="text-white/60 text-xs">{artwork.artist}</p>
                              <div className="flex items-center space-x-3 text-xs text-white/40">
                                <Badge className="bg-purple-600/20 text-purple-300 text-xs">{artwork.category}</Badge>
                                <span>{formatNumber(artwork.views)} views</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
