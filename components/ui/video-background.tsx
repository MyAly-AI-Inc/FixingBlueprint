"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoBackgroundProps {
  src: string
  poster?: string
  overlay?: boolean
  overlayOpacity?: number
  overlayColor?: string
  muted?: boolean
  autoPlay?: boolean
  loop?: boolean
  controls?: boolean
  className?: string
  children?: React.ReactNode
}

export function VideoBackground({
  src,
  poster,
  overlay = true,
  overlayOpacity = 0.5,
  overlayColor = "black",
  muted = true,
  autoPlay = true,
  loop = true,
  controls = false,
  className,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      if (autoPlay) {
        video.play().catch(() => {
          // Auto-play failed, which is expected in many browsers
          setIsPlaying(false)
        })
      }
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleError = () => setError(true)

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("error", handleError)
    }
  }, [autoPlay])

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
      console.error("Error toggling video playback:", err)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  if (error) {
    return (
      <div className={cn("relative w-full h-full bg-gray-900", className)}>
        {overlay && (
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center text-white z-20">
          <p>Failed to load video</p>
        </div>
        {children && <div className="relative z-30 h-full">{children}</div>}
      </div>
    )
  }

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Fallback/Loading */}
      {!isLoaded && poster && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      {/* Controls */}
      {controls && isLoaded && (
        <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
          <Button
            onClick={togglePlay}
            size="sm"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>

          <Button
            onClick={toggleMute}
            size="sm"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
      )}

      {/* Content */}
      {children && <div className="relative z-30 h-full">{children}</div>}
    </div>
  )
}
