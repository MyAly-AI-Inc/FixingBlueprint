"use client"

import { Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

// Option 1: Simple Rocket Icon with gradient background
function RocketLogo1({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
        <Rocket className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold text-white hidden sm:block">
        3D Blueprint
      </span>
    </div>
  )
}

// Option 2: Animated Rocket with glow effect
function RocketLogo2({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
        
        {/* Rocket container */}
        <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <Rocket className="h-5 w-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>
      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        3D Blueprint
      </span>
    </div>
  )
}

// Option 3: Rocket with launch effect
function RocketLogo3({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative group">
        {/* Launch trail effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rocket */}
        <div className="relative w-12 h-12 bg-gray-900 border-2 border-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <Rocket className="h-6 w-6 text-white z-10 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
      <div>
        <span className="text-xl font-bold text-white block">3D Blueprint</span>
        <span className="text-xs text-blue-400">by Aly Yu</span>
      </div>
    </div>
  )
}

// Option 4: Minimalist rocket badge
function RocketLogo4({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all">
        <Rocket className="h-5 w-5 text-white" />
        <span className="text-sm font-bold text-white">3D Blueprint</span>
      </div>
    </div>
  )
}

// Option 5: Custom SVG Rocket Logo
function CustomRocketLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:scale-105 transition-transform"
      >
        {/* Background circle */}
        <circle cx="20" cy="20" r="20" fill="url(#gradient)" />
        
        {/* Rocket shape */}
        <path
          d="M20 8C20 8 16 12 16 20C16 24 18 26 20 26C22 26 24 24 24 20C24 12 20 8 20 8Z"
          fill="white"
        />
        <path
          d="M16 22L14 26L16 24V22Z"
          fill="white"
        />
        <path
          d="M24 22V24L26 26L24 22Z"
          fill="white"
        />
        <circle cx="20" cy="18" r="2" fill="url(#gradient)" />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold text-white hidden sm:block">
        3D Blueprint
      </span>
    </div>
  )
}

// Demo page showing all options
export default function RocketLogoDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Rocket Logo Options for 3D Blueprint
        </h1>
        
        <div className="space-y-8">
          {/* Option 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Option 1: Simple Gradient</h2>
            <div className="flex items-center justify-between">
              <a href="#" className="group">
                <RocketLogo1 />
              </a>
              <p className="text-gray-400 text-sm max-w-md">
                Clean and professional with gradient background. Subtle hover scale effect.
              </p>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Option 2: Animated with Glow ✨ (Recommended)</h2>
            <div className="flex items-center justify-between">
              <a href="#" className="group">
                <RocketLogo2 />
              </a>
              <p className="text-gray-400 text-sm max-w-md">
                Glowing effect with rotating rocket animation. Gradient text for modern look.
              </p>
            </div>
          </div>

          {/* Option 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Option 3: Launch Effect</h2>
            <div className="flex items-center justify-between">
              <a href="#" className="group">
                <RocketLogo3 />
              </a>
              <p className="text-gray-400 text-sm max-w-md">
                Shows launch trail on hover. Includes "by Aly Yu" tagline. More detailed design.
              </p>
            </div>
          </div>

          {/* Option 4 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Option 4: Minimalist Badge</h2>
            <div className="flex items-center justify-between">
              <a href="#" className="group">
                <RocketLogo4 />
              </a>
              <p className="text-gray-400 text-sm max-w-md">
                Compact pill shape design. Great for smaller navigation bars.
              </p>
            </div>
          </div>

          {/* Option 5 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Option 5: Custom SVG Design</h2>
            <div className="flex items-center justify-between">
              <a href="#" className="group">
                <CustomRocketLogo />
              </a>
              <p className="text-gray-400 text-sm max-w-md">
                Fully custom SVG rocket. Can be modified with more details and animations.
              </p>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Use</h2>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-gray-300 text-sm">{`// In your navigation component:
import { Rocket } from "lucide-react"

// Then use any of the logo options:
<a href="/" className="group">
  <RocketLogo2 /> {/* Or RocketLogo1, 3, 4, CustomRocketLogo */}
</a>`}</code>
          </pre>
        </div>

        {/* Color Variations */}
        <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-6">Color Variations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Blue to Purple (Original) */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <p className="text-xs text-gray-400">Blue → Purple</p>
            </div>
            
            {/* Cyan to Blue */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <p className="text-xs text-gray-400">Cyan → Blue</p>
            </div>
            
            {/* Pink to Orange */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <p className="text-xs text-gray-400">Pink → Orange</p>
            </div>
            
            {/* Green to Teal */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <p className="text-xs text-gray-400">Green → Teal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
