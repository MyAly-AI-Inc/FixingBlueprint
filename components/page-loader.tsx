"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Start loading critical resources immediately
    if (typeof window !== "undefined") {
      // Import dynamically to avoid SSR issues
      import("@/lib/performance").then(({ prefetchResources }) => {
        prefetchResources()
      })
    }

    // Use requestIdleCallback to delay non-critical operations
    if ("requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 800) // Reduced from 1500ms for faster perceived loading
      })
      return () => window.cancelIdleCallback(handle)
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
            <path
              d="M12 4.5C10.2 4.5 9 5.1 9 7.5C9 8.3 9.2 8.8 9.5 9.2C9.8 9.6 10 9.7 10 10C10 10.3 9.8 10.5 9.5 10.5C8.1 10.5 7 11.7 7 13C7 14.1 7.9 15 9 15.2C9.5 15.2 9.7 15.4 9.7 15.8C9.7 16.2 9.5 16.5 9 16.5C8.2 16.5 7.5 17.2 7.5 18C7.5 18.8 8.2 19.5 9 19.5H15C15.8 19.5 16.5 18.8 16.5 18C16.5 17.2 15.8 16.5 15 16.5C14.5 16.5 14.3 16.2 14.3 15.8C14.3 15.4 14.5 15.2 15 15.2C16.1 15 17 14.1 17 13C17 11.6 15.9 10.5 14.5 10.5C14.2 10.5 14 10.3 14 10C14 9.7 14.2 9.6 14.5 9.2C14.8 8.8 15 8.3 15 7.5C15 5.1 13.8 4.5 12 4.5Z"
              fill="url(#brain-gradient-loader)"
            />
            <path
              d="M12 4.5C11.2 4.5 10.6 4.7 10.1 5C10.4 5.2 10.7 5.4 11 5.7C11.3 6 11.7 6.2 12 6.2C12.3 6.2 12.7 6 13 5.7C13.3 5.4 13.6 5.2 13.9 5C13.4 4.7 12.8 4.5 12 4.5Z"
              fill="url(#brain-gradient-loader)"
              fillOpacity="0.6"
            />
            <path
              d="M9.5 10.5C9.8 10.5 10 10.3 10 10C10 9.7 9.8 9.6 9.5 9.2C9.2 8.8 9 8.3 9 7.5C9 5.1 10.2 4.5 12 4.5C13.8 4.5 15 5.1 15 7.5C15 8.3 14.8 8.8 14.5 9.2C14.2 9.6 14 9.7 14 10C14 10.3 14.2 10.5 14.5 10.5"
              stroke="url(#brain-gradient-loader)"
              strokeWidth="0.5"
              strokeLinecap="round"
            />
            <path
              d="M9 15.2C9.5 15.2 9.7 15.4 9.7 15.8C9.7 16.2 9.5 16.5 9 16.5M15 16.5C14.5 16.5 14.3 16.2 14.3 15.8C14.3 15.4 14.5 15.2 15 15.2"
              stroke="url(#brain-gradient-loader)"
              strokeWidth="0.5"
              strokeLinecap="round"
            />
            <path
              d="M9.5 10.5C8.1 10.5 7 11.7 7 13C7 14.1 7.9 15 9 15.2M14.5 10.5C15.9 10.5 17 11.6 17 13C17 14.1 16.1 15 15 15.2"
              stroke="url(#brain-gradient-loader)"
              strokeWidth="0.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="brain-gradient-loader" x1="7" y1="12" x2="17" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="0.5" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-30 animate-pulse"></div>
        </div>
        <div className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 h-1 w-48 rounded-full overflow-hidden">
          <div className="h-full bg-white/30 animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  )
}

// Add this to globals.css
// @keyframes loading {
//   0% { transform: translateX(-100%); }
//   50% { transform: translateX(100%); }
//   100% { transform: translateX(-100%); }
