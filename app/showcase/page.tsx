"use client"

import { motion } from "framer-motion"
import { VideoPlayer } from "@/components/ui/video-player"
import { VideoShowcase } from "@/components/sections/video-showcase"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, Eye, Heart, Clock, User, Calendar, Tag } from "lucide-react"
import Link from "next/link"

export default function ShowcasePage() {
  const mainVideo = {
    src: "/videos/social-transformation.mp4",
    title: "Social Transformation",
    description:
      "An AI-generated video showcasing the evolution of digital consciousness and social interaction patterns.",
    duration: "2:34",
    views: 15420,
    likes: 892,
    category: "AI Art",
    creator: "Digital Collective",
    uploadDate: "2024-01-15",
  }

  const relatedVideos = [
    {
      id: "1",
      src: "/videos/social-transformation.mp4",
      poster: "/placeholder.svg?height=180&width=320",
      title: "Digital Evolution",
      description: "Exploring the transformation of digital landscapes",
      duration: "3:21",
      views: 8500,
      likes: 456,
      category: "Abstract",
    },
    {
      id: "2",
      src: "/videos/social-transformation.mp4",
      poster: "/placeholder.svg?height=180&width=320",
      title: "Neural Networks",
      description: "Visualizing artificial intelligence patterns",
      duration: "2:45",
      views: 12300,
      likes: 678,
      category: "Technology",
    },
    {
      id: "3",
      src: "/videos/social-transformation.mp4",
      poster: "/placeholder.svg?height=180&width=320",
      title: "Quantum Dreams",
      description: "A journey through quantum computing visualization",
      duration: "4:12",
      views: 9800,
      likes: 534,
      category: "Science",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
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
              <h1 className="text-white font-semibold text-lg">Video Showcase</h1>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Video */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <VideoPlayer
                src={mainVideo.src}
                title={mainVideo.title}
                glassEffect="dark"
                aspectRatio="16:9"
                className="mb-6"
              />

              {/* Video Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-2">{mainVideo.title}</h1>
                      <p className="text-white/70 text-lg leading-relaxed">{mainVideo.description}</p>
                    </div>
                    <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                      {mainVideo.category}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 text-white/60">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-5 w-5" />
                      <span>{mainVideo.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-5 w-5" />
                      <span>{mainVideo.likes.toLocaleString()} likes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>{mainVideo.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Creator Info */}
                <Card className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{mainVideo.creator}</h3>
                        <div className="flex items-center space-x-4 text-sm text-white/60 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Uploaded {new Date(mainVideo.uploadDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Tag className="h-4 w-4" />
                            <span>{mainVideo.category}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        Follow
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Like Video
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Video Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Video Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Duration:</span>
                      <p className="text-white font-medium">{mainVideo.duration}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Views:</span>
                      <p className="text-white font-medium">{mainVideo.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Likes:</span>
                      <p className="text-white font-medium">{mainVideo.likes.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Category:</span>
                      <p className="text-white font-medium">{mainVideo.category}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Creator:</span>
                    <p className="text-white font-medium">{mainVideo.creator}</p>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Upload Date:</span>
                    <p className="text-white font-medium">
                      {new Date(mainVideo.uploadDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                    Add to Playlist
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Report Video
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Embed Video
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Related Videos Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Up Next</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedVideos.slice(0, 2).map((video) => (
                    <div key={video.id} className="flex space-x-3 group cursor-pointer">
                      <div className="relative w-24 h-16 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={video.poster || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-6 h-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[3px] border-y-transparent ml-0.5" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm line-clamp-2 group-hover:text-purple-300 transition-colors">
                          {video.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-white/60 mt-1">
                          <span>{video.views.toLocaleString()} views</span>
                          <span>•</span>
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Related Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <VideoShowcase
            title="Related Videos"
            description="Discover more AI-generated content and digital art"
            videos={relatedVideos}
            layout="grid"
            glassEffect="dark"
          />
        </motion.div>
      </div>
    </div>
  )
}
