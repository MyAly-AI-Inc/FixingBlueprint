"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipBack, SkipForward, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  src: string
  title?: string
  description?: string
  aspectRatio?: "16:9" | "4:3" | "1:1" | "9:16"
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  glassEffect?: boolean
  className?: string
}

export function VideoPlayer({
  src,
  title,
  description,
  aspectRatio = "16:9",
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  glassEffect = true,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showControls, setShowControls] = useState(true)

  const aspectRatioClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
      setDuration(video.duration || 0)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime || 0)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleError = () => {
      setError("Failed to load video")
      setIsLoading(false)
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("error", handleError)
    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("error", handleError)
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (isPlaying) {
        video.pause()
      } else {
        await video.play()
      }
    } catch (err) {
      console.error("Error playing video:", err)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (newVolume: number) => {
    const video = videoRef.current
    if (!video) return

    video.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const handleSeek = (newTime: number) => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = newTime
    setCurrentTime(newTime)
  }

  const toggleFullscreen = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (!isFullscreen) {
        await video.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (err) {
      console.error("Error toggling fullscreen:", err)
    }
  }

  const skip = (seconds: number) => {
    const video = videoRef.current
    if (!video) return

    const newTime = Math.max(0, Math.min(duration, currentTime + seconds))
    handleSeek(newTime)
  }

  const formatTime = (time: number): string => {
    if (!isFinite(time) || isNaN(time)) return "0:00"

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  if (error) {
    return (
      <Card className={cn("relative overflow-hidden", aspectRatioClasses[aspectRatio], className)}>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">Failed to load video</p>
            <p className="text-sm text-gray-400">{error}</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className={cn("relative overflow-hidden group", aspectRatioClasses[aspectRatio], className)}>
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        className="w-full h-full object-cover"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(true)}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
            <p className="text-white text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Controls Overlay */}
      {controls && showControls && !isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            glassEffect && "backdrop-blur-sm",
          )}
        >
          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={togglePlay}
              size="lg"
              className={cn(
                "w-16 h-16 rounded-full",
                glassEffect
                  ? "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30"
                  : "bg-black/50 hover:bg-black/70",
                "text-white transition-all duration-200",
              )}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </Button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <div
                className="w-full h-1 bg-white/30 rounded-full cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const percentage = (e.clientX - rect.left) / rect.width
                  handleSeek(percentage * duration)
                }}
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-150"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button onClick={togglePlay} size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>

                <Button onClick={() => skip(-10)} size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <SkipBack className="h-4 w-4" />
                </Button>

                <Button onClick={() => skip(10)} size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <SkipForward className="h-4 w-4" />
                </Button>

                <Button onClick={toggleMute} size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>

                {/* Volume Slider */}
                <div className="hidden md:flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => handleVolumeChange(Number.parseFloat(e.target.value))}
                    className="w-20 h-1 bg-white/30 rounded-full appearance-none cursor-pointer"
                  />
                </div>

                <span className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <Button onClick={toggleFullscreen} size="sm" variant="ghost" className="text-white hover:bg-white/20">
                {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Video Info */}
          {(title || description) && (
            <div className="absolute top-4 left-4 right-4">
              <div
                className={cn(
                  "p-4 rounded-lg",
                  glassEffect ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-black/50",
                )}
              >
                {title && <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>}
                {description && <p className="text-white/80 text-sm">{description}</p>}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  )
}
