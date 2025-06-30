"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

interface VideoBackgroundProps {
  src: string
  poster?: string
  overlay?: "dark" | "gradient" | "blur" | "none"
  className?: string
  children?: React.ReactNode
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
}

export function VideoBackground({
  src,
  poster,
  overlay = "dark",
  className = "",
  children,
  autoPlay = true,
  muted = true,
  loop = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(muted)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    const handleError = () => {
      setIsLoaded(true) // Still show content even if video fails
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const overlayClasses = {
    dark: "bg-black/50",
    gradient: "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
    blur: "backdrop-blur-sm bg-black/20",
    none: "",
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-white text-sm">Loading background...</p>
          </div>
        </div>
      )}

      {/* Overlay */}
      {overlay !== "none" && <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">{children}</div>

      {/* Audio Control */}
      <Button
        onClick={toggleMute}
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 z-20 text-white hover:bg-white/10 min-w-[44px] min-h-[44px]"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  )
}
