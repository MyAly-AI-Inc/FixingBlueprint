"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string
  loadingClassName?: string
  loadedClassName?: string
  errorClassName?: string
  blurEffect?: boolean
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  className,
  loadingClassName,
  loadedClassName,
  errorClassName,
  blurEffect = true,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  // Reset states when src changes
  useEffect(() => {
    setIsLoading(!priority)
    setError(false)
    setImageSrc(src)
  }, [src, priority])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setError(true)
    setIsLoading(false)
    if (fallbackSrc && src !== fallbackSrc) {
      setImageSrc(fallbackSrc)
    }
  }

  // Generate a simple blur data URL if blurEffect is enabled and no placeholder is provided
  const blurDataURL =
    blurEffect && !props.placeholder && !props.blurDataURL
      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHg/bQpwAAAABJRU5ErkJggg=="
      : undefined

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && !priority && <div className={cn("absolute inset-0 bg-gray-200 animate-pulse", loadingClassName)} />}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          error ? errorClassName : loadedClassName,
        )}
        onLoadingComplete={handleLoad}
        onError={handleError}
        placeholder={blurEffect ? "blur" : undefined}
        blurDataURL={blurDataURL}
        {...props}
      />
    </div>
  )
}
