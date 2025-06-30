"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { VideoShowcase } from "@/components/sections/video-showcase"
import { VideoPlayer } from "@/components/ui/video-player"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Share2, Download, Heart, Eye, Clock, User, Calendar, Bookmark, ThumbsUp } from "lucide-react"
import Link from "next/link"

interface Video {
  id: string
  title: string
  description: string
  src: string
  thumbnail?: string
  duration: string
  views: number
  likes: number
  category: string
  author: string
  publishedAt: string
}

export default function ShowcasePage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const featuredVideo: Video = {
    id: "social-transformation",
    title: "The Future of Social Transformation",
    description:
      "Explore how AI and technology are reshaping our social fabric and creating new possibilities for human connection and collaboration in the digital age.",
    src: "/videos/social-transformation.mp4",
    thumbnail: "/placeholder.svg?height=400&width=700&text=Social+Transformation",
    duration: "12:34",
    views: 45600,
    likes: 2340,
    category: "Technology",
    author: "Dr. Sarah Chen",
    publishedAt: "2 days ago",
  }

  const relatedVideos: Video[] = [
    {
      id: "ai-ethics",
      title: "AI Ethics in Modern Society",
      description:
        "A deep dive into the ethical implications of artificial intelligence and how we can build responsible AI systems.",
      src: "/videos/social-transformation.mp4",
      thumbnail: "/placeholder.svg?height=180&width=320&text=AI+Ethics",
      duration: "8:45",
      views: 23400,
      likes: 1200,
      category: "Ethics",
      author: "Prof. Michael Rodriguez",
      publishedAt: "1 week ago",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation Strategies",
      description: "Learn how organizations are successfully navigating digital transformation in the modern era.",
      src: "/videos/social-transformation.mp4",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Digital+Strategy",
      duration: "15:20",
      views: 18900,
      likes: 890,
      category: "Business",
      author: "Emma Wilson",
      publishedAt: "3 days ago",
    },
    {
      id: "future-work",
      title: "The Future of Work and AI",
      description:
        "How artificial intelligence is changing the workplace and what it means for the future of employment.",
      src: "/videos/social-transformation.mp4",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Future+Work",
      duration: "11:15",
      views: 31200,
      likes: 1560,
      category: "Future",
      author: "David Kim",
      publishedAt: "5 days ago",
    },
    {
      id: "tech-society",
      title: "Technology's Impact on Society",
      description: "An analysis of how emerging technologies are transforming social structures and human behavior.",
      src: "/videos/social-transformation.mp4",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Tech+Society",
      duration: "9:30",
      views: 27800,
      likes: 1340,
      category: "Society",
      author: "Dr. Aisha Patel",
      publishedAt: "1 week ago",
    },
    {
      id: "innovation-trends",
      title: "Innovation Trends 2024",
      description: "Discover the latest innovation trends that are shaping industries and creating new opportunities.",
      src: "/videos/social-transformation.mp4",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Innovation+2024",
      duration: "13:45",
      views: 19500,
      likes: 980,
      category: "Innovation",
      author: "James Thompson",
      publishedAt: "4 days ago",
    },
    {
      id: "sustainable-tech",
      title: "Sustainable Technology Solutions",
      description: "How technology is being used to address climate change and create a more sustainable future.",
      src: "/videos/social-transformation.mp4",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Sustainable+Tech",
      duration: "10:22",
      views: 22100,
      likes: 1150,
      category: "Sustainability",
      author: "Dr. Maria Santos",
      publishedAt: "6 days ago",
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

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video)
  }

  const currentVideo = selectedVideo || featuredVideo

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Video Showcase</h1>
            </div>

            <div className="flex items-center space-x-3">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Featured Content</Badge>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <VideoPlayer
                src={currentVideo.src}
                title={currentVideo.title}
                description={currentVideo.description}
                aspectRatio="16:9"
                glassEffect={true}
                autoPlay={false}
                className="w-full rounded-xl overflow-hidden shadow-2xl"
              />
            </motion.div>

            {/* Video Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Title and Category */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    {currentVideo.title}
                  </h1>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 flex-shrink-0">
                    {currentVideo.category}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{currentVideo.description}</p>
              </div>

              {/* Video Stats and Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span className="font-medium">{formatNumber(currentVideo.views)} views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4" />
                    <span className="font-medium">{formatNumber(currentVideo.likes)} likes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{currentVideo.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{currentVideo.publishedAt}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Button
                    onClick={() => setIsLiked(!isLiked)}
                    variant={isLiked ? "default" : "outline"}
                    size="sm"
                    className={isLiked ? "bg-red-600 hover:bg-red-700 text-white" : ""}
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    {isLiked ? "Liked" : "Like"}
                  </Button>
                  <Button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    variant={isBookmarked ? "default" : "outline"}
                    size="sm"
                  >
                    <Bookmark className="h-4 w-4 mr-2" />
                    {isBookmarked ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
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
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{currentVideo.author}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Technology researcher and futurist specializing in AI ethics and social impact. Published
                        researcher with over 50 papers in leading journals.
                      </p>
                      <div className="flex items-center space-x-4">
                        <Button size="sm" variant="outline">
                          Follow
                        </Button>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <span>1.2M subscribers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Video Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {formatNumber(currentVideo.views)}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Views</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {formatNumber(currentVideo.likes)}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Likes</div>
                    </div>
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{currentVideo.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Published:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{currentVideo.publishedAt}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Category:</span>
                      <Badge variant="secondary" className="text-xs">
                        {currentVideo.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white">
                    Add to Playlist
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Share Video
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Report Content
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Related Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <VideoShowcase
            title="Related Videos"
            description="Discover more content about technology, AI, and social transformation"
            videos={relatedVideos}
            layout="grid"
            onVideoClick={handleVideoClick}
            className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50"
          />
        </motion.div>
      </div>
    </div>
  )
}
