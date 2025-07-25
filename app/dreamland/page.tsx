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
  X,
  Copy,
  Mail,
  MessageCircle,
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
  const [mounted, setMounted] = useState(false)
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [likedArtworks, setLikedArtworks] = useState<Set<string>>(new Set())
  const [showShareModal, setShowShareModal] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  // Animation effect for auto-rotation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Handle zoom
  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5))
  }

  // Handle reset
  const handleReset = () => {
    setScale(1)
    setRotation(0)
    setIsPlaying(true)
  }

  // Handle share gallery
  const handleShareGallery = async () => {
    setShowShareModal(true)
  }

  // Handle copy link
  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
    } catch (error) {
      console.error('Failed to copy link:', error)
    }
  }

  // Get share URL
  const getShareUrl = (artworkId?: string) => {
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.origin + window.location.pathname
      return artworkId ? `${baseUrl}#${artworkId}` : baseUrl
    }
    return ''
  }

  // Handle like artwork
  const handleLikeArtwork = (artworkId: string) => {
    setLikedArtworks(prev => {
      const newLikes = new Set(prev)
      if (newLikes.has(artworkId)) {
        newLikes.delete(artworkId)
      } else {
        newLikes.add(artworkId)
      }
      return newLikes
    })
  }

  // Fix SSR issue by only mounting on client
  useEffect(() => {
    setMounted(true)
  }, [])

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

  // Don't render until mounted to avoid SSR issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Share {selectedArtwork ? 'Artwork' : 'Gallery'}</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowShareModal(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => handleCopyLink(getShareUrl(selectedArtwork?.id))}
                  className="w-full bg-white/10 hover:bg-white/20 text-white justify-start"
                >
                  <Copy className="h-4 w-4 mr-3" />
                  {copiedLink ? 'Link Copied!' : 'Copy Link'}
                </Button>

                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    selectedArtwork 
                      ? `Check out "${selectedArtwork.title}" in the Dreamland Gallery!` 
                      : 'Check out this amazing AI art gallery!'
                  )}&url=${encodeURIComponent(getShareUrl(selectedArtwork?.id))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white justify-start">
                    <MessageCircle className="h-4 w-4 mr-3" />
                    Share on Twitter
                  </Button>
                </a>

                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    selectedArtwork 
                      ? `Check out this artwork: ${selectedArtwork.title}` 
                      : 'Check out Dreamland Gallery'
                  )}&body=${encodeURIComponent(
                    `I thought you might enjoy this: ${getShareUrl(selectedArtwork?.id)}`
                  )}`}
                  className="block"
                >
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start">
                    <Mail className="h-4 w-4 mr-3" />
                    Share via Email
                  </Button>
                </a>
              </div>

              <div className="mt-4 p-3 bg-white/5 rounded-lg">
                <p className="text-xs text-white/60 break-all">{getShareUrl(selectedArtwork?.id)}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <Button 
                onClick={handleShareGallery}
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
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
                    className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(147,51,234,0.1),rgba(59,130,246,0.1),rgba(147,51,234,0.1))]"
                  />

                  {/* Floating Particles - Fixed for SSR */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                          left: `${(i * 47) % 100}%`,
                          top: `${(i * 23) % 100}%`,
                        }}
                        animate={{
                          x: [0, 50, 0],
                          y: [0, -30, 0],
                          opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                          duration: 8 + (i % 4),
                          repeat: Infinity,
                          delay: i * 0.2,
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
                        <motion.img
                          src={selectedArtwork.thumbnail || "/placeholder.svg"}
                          alt={selectedArtwork.title}
                          className="w-64 h-64 mx-auto rounded-2xl shadow-2xl object-cover border-4 border-white/20"
                          animate={{
                            scale: scale,
                            rotate: rotation,
                          }}
                          transition={{
                            scale: { type: "spring", stiffness: 300 },
                            rotate: { type: "tween", duration: 0.1 },
                          }}
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
                          <button
                            onClick={() => handleLikeArtwork(selectedArtwork.id)}
                            className="flex items-center space-x-2 hover:text-white transition-colors"
                          >
                            <Heart 
                              className={`h-4 w-4 transition-all ${
                                likedArtworks.has(selectedArtwork.id) 
                                  ? 'fill-red-500 text-red-500 scale-110' 
                                  : ''
                              }`} 
                            />
                            <span>{formatNumber(selectedArtwork.likes + (likedArtworks.has(selectedArtwork.id) ? 1 : 0))}</span>
                          </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                          {selectedArtwork.tags.map((tag) => (
                            <Badge key={tag} className="bg-white/10 text-white border-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-center gap-4 mt-6">
                          <Button
                            onClick={() => handleLikeArtwork(selectedArtwork.id)}
                            className={`${
                              likedArtworks.has(selectedArtwork.id)
                                ? 'bg-red-500 hover:bg-red-600'
                                : 'bg-white/10 hover:bg-white/20'
                            } text-white`}
                          >
                            <Heart 
                              className={`h-4 w-4 mr-2 ${
                                likedArtworks.has(selectedArtwork.id) ? 'fill-white' : ''
                              }`} 
                            />
                            {likedArtworks.has(selectedArtwork.id) ? 'Liked' : 'Like'}
                          </Button>
                          <Button
                            onClick={() => setShowShareModal(true)}
                            className="bg-white/10 hover:bg-white/20 text-white"
                          >
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
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
                    title={isPlaying ? "Pause rotation" : "Play rotation"}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button
                    onClick={handleReset}
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                    title="Reset view"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleZoomIn}
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                    title="Zoom in"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleZoomOut}
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                    title="Zoom out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={toggleFullscreen}
                    size="sm"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                    title="Toggle fullscreen"
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
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleLikeArtwork(artwork.id)
                                    }}
                                    className="hover:scale-110 transition-transform"
                                  >
                                    <Heart 
                                      className={`h-3 w-3 ${
                                        likedArtworks.has(artwork.id) 
                                          ? 'fill-red-500 text-red-500' 
                                          : ''
                                      }`} 
                                    />
                                  </button>
                                  <span>{formatNumber(artwork.likes + (likedArtworks.has(artwork.id) ? 1 : 0))}</span>
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
