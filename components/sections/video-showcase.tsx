"use client"

import { motion } from "framer-motion"
import { VideoPlayer } from "@/components/ui/video-player"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, Heart } from "lucide-react"

interface Video {
  id: string
  src: string
  poster?: string
  title: string
  description?: string
  duration?: string
  views?: number
  likes?: number
  category?: string
}

interface VideoShowcaseProps {
  title?: string
  description?: string
  videos: Video[]
  layout?: "grid" | "carousel" | "featured"
  glassEffect?: "light" | "dark" | "none"
  className?: string
}

export function VideoShowcase({
  title,
  description,
  videos,
  layout = "grid",
  glassEffect = "light",
  className = "",
}: VideoShowcaseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const getLayoutClasses = () => {
    switch (layout) {
      case "carousel":
        return "flex overflow-x-auto space-x-6 pb-4"
      case "featured":
        return "grid grid-cols-1 lg:grid-cols-2 gap-8"
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    }
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        {(title || description) && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title && <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>}
            {description && <p className="text-xl text-white/70 max-w-3xl mx-auto">{description}</p>}
          </motion.div>
        )}

        {/* Videos Grid */}
        <motion.div className={getLayoutClasses()} variants={containerVariants} initial="hidden" animate="visible">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className={`${layout === "carousel" ? "flex-shrink-0 w-80" : ""} ${
                layout === "featured" && index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className="group">
                {/* Video Player */}
                <VideoPlayer
                  src={video.src}
                  poster={video.poster}
                  title={video.title}
                  glassEffect={glassEffect}
                  aspectRatio={layout === "featured" && index === 0 ? "16:9" : "16:9"}
                  className="mb-4"
                />

                {/* Video Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    {video.category && (
                      <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">{video.category}</Badge>
                    )}
                  </div>

                  {video.description && <p className="text-white/70 text-sm leading-relaxed">{video.description}</p>}

                  {/* Stats */}
                  <div className="flex items-center space-x-4 text-sm text-white/60">
                    {video.duration && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{video.duration}</span>
                      </div>
                    )}
                    {video.views && (
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{video.views.toLocaleString()}</span>
                      </div>
                    )}
                    {video.likes && (
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{video.likes.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
