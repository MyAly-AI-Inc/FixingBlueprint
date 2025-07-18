"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { VideoPlayer } from "@/components/ui/video-player"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Eye, Heart, Share2, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

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

interface VideoShowcaseProps {
  videos: Video[]
  layout?: "grid" | "carousel" | "featured"
  title?: string
  description?: string
  className?: string
  onVideoClick?: (video: Video) => void
}

export function VideoShowcase({
  videos,
  layout = "grid",
  title,
  description,
  className,
  onVideoClick,
}: VideoShowcaseProps) {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)

  const nextVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }, [videos.length])

  const prevVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }, [videos.length])

  // Handle empty videos array
  if (!videos || videos.length === 0) {
    return (
      <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
        <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground">No videos available</p>
      </div>
    )
  }

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
    if (onVideoClick) {
      onVideoClick(video)
    } else {
      setPlayingVideoId(video.id)
    }
  }

  // Video Thumbnail Component
  const VideoThumbnail = ({ video }: { video: Video }) => (
    <div
      className="relative aspect-video bg-muted cursor-pointer group"
      onClick={() => handleVideoClick(video)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleVideoClick(video)
        }
      }}
      aria-label={`Play ${video.title}`}
    >
      {video.thumbnail ? (
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800" />
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center">
        <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200">
          <div className="bg-black/60 rounded-full p-3">
            <Play className="h-6 w-6 text-white fill-white" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
    </div>
  )

  if (layout === "featured") {
    const featured = videos[currentVideo]

    return (
      <div className={cn("space-y-8", className)}>
        {title && (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Video - Only one VideoPlayer instance */}
          <div className="lg:col-span-2">
            {playingVideoId === featured.id ? (
              <VideoPlayer
                src={featured.src}
                title={featured.title}
                description={featured.description}
                aspectRatio="16:9"
                glassEffect={true}
                autoPlay={true}
              />
            ) : (
              <VideoThumbnail video={featured} />
            )}

            <div className="mt-4 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{featured.title}</h3>
                  <p className="text-muted-foreground">{featured.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>by {featured.author}</span>
                    <span>{featured.publishedAt}</span>
                    <Badge variant="secondary">{featured.category}</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{formatNumber(featured.views)} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{formatNumber(featured.likes)} likes</span>
                </div>
                <span className="text-sm text-muted-foreground">{featured.duration}</span>
              </div>
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-4">
            <h4 className="font-semibold">More Videos</h4>
            <div className="space-y-3">
              {videos.map((video, index) => (
                <Card
                  key={video.id}
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-md",
                    currentVideo === index && "ring-2 ring-primary",
                  )}
                  onClick={() => {
                    setCurrentVideo(index)
                    setPlayingVideoId(null) // Reset playing video when switching
                  }}
                >
                  <CardContent className="p-3">
                    <div className="flex space-x-3">
                      <div className="relative w-24 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                        {video.thumbnail ? (
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800" />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-4 w-4 text-white opacity-80" />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h5>
                        <p className="text-xs text-muted-foreground mb-1">{video.author}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{formatNumber(video.views)} views</span>
                          <span>•</span>
                          <span>{video.publishedAt}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (layout === "carousel") {
    return (
      <div className={cn("space-y-6", className)}>
        {title && (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
          </div>
        )}

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {playingVideoId === videos[currentVideo].id ? (
                <VideoPlayer
                  src={videos[currentVideo].src}
                  title={videos[currentVideo].title}
                  description={videos[currentVideo].description}
                  aspectRatio="16:9"
                  glassEffect={true}
                  autoPlay={true}
                />
              ) : (
                <VideoThumbnail video={videos[currentVideo]} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation with keyboard support */}
          <Button
            onClick={prevVideo}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            onClick={nextVideo}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            aria-label="Next video"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentVideo(index)
                  setPlayingVideoId(null)
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentVideo === index ? "bg-white w-8" : "bg-white/50",
                )}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold">{videos[currentVideo].title}</h3>
          <p className="text-muted-foreground">{videos[currentVideo].description}</p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <span>by {videos[currentVideo].author}</span>
            <span>•</span>
            <span>{formatNumber(videos[currentVideo].views)} views</span>
            <span>•</span>
            <span>{videos[currentVideo].duration}</span>
          </div>
        </div>
      </div>
    )
  }

  // Grid layout - Most improved
  return (
    <div className={cn("space-y-8", className)}>
      {title && (
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.1, 0.3) }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <VideoThumbnail video={video} />

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold line-clamp-2 mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{video.author}</span>
                    <Badge variant="secondary" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{formatNumber(video.views)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{formatNumber(video.likes)}</span>
                    </div>
                    <span>{video.publishedAt}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
