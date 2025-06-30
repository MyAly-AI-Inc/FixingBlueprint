"use client"

import { motion } from "framer-motion"
import { VideoPlayer } from "@/components/ui/video-player"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Share2, Download, Heart, Eye, Clock, User, Calendar, Play } from "lucide-react"
import Link from "next/link"

export default function ShowcasePage() {
  const featuredVideo = {
    id: "social-transformation",
    title: "The Future of Social Transformation",
    description:
      "Explore how AI and technology are reshaping our social fabric and creating new possibilities for human connection and collaboration.",
    src: "/videos/social-transformation.mp4",
    duration: "12:34",
    views: 45600,
    likes: 2340,
    category: "Technology",
    author: "Dr. Sarah Chen",
    publishedAt: "2 days ago",
    tags: ["AI", "Social Impact", "Future Tech", "Innovation"],
  }

  const relatedVideos = [
    {
      id: "ai-ethics",
      title: "AI Ethics in Modern Society",
      author: "Prof. Michael Rodriguez",
      duration: "8:45",
      views: 23400,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation Strategies",
      author: "Emma Wilson",
      duration: "15:20",
      views: 18900,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: "future-work",
      title: "The Future of Work and AI",
      author: "David Kim",
      duration: "11:15",
      views: 31200,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: "tech-society",
      title: "Technology's Impact on Society",
      author: "Dr. Aisha Patel",
      duration: "9:30",
      views: 27800,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ]

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Video Showcase</Badge>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <VideoPlayer
                src={featuredVideo.src}
                title={featuredVideo.title}
                description={featuredVideo.description}
                aspectRatio="16:9"
                glassEffect={true}
                className="w-full"
              />
            </motion.div>

            {/* Video Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Title and Actions */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {featuredVideo.title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{featuredVideo.description}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Heart className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Video Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{formatNumber(featuredVideo.views)} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>{formatNumber(featuredVideo.likes)} likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredVideo.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredVideo.publishedAt}</span>
                </div>
              </div>

              {/* Author Info */}
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{featuredVideo.author}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Technology researcher and futurist specializing in AI ethics and social impact.
                      </p>
                      <Button size="sm" variant="outline">
                        Follow
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {featuredVideo.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Videos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Related Videos</h3>
                  <div className="space-y-4">
                    {relatedVideos.map((video, index) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group"
                      >
                        <div className="relative w-24 h-16 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden flex-shrink-0">
                          <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <Play className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-white" />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-gray-900 dark:text-white line-clamp-2 mb-1">
                            {video.title}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{video.author}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">{formatNumber(video.views)} views</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Video Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Video Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Total Views:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {formatNumber(featuredVideo.views)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Likes:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {formatNumber(featuredVideo.likes)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{featuredVideo.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Category:</span>
                      <Badge variant="secondary" className="text-xs">
                        {featuredVideo.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
