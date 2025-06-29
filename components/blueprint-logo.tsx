import { Rocket } from "lucide-react"

interface BlueprintLogoProps {
  className?: string
}

export function BlueprintLogo({ className }: BlueprintLogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className || ""}`}>
      <div className="relative h-12 w-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-md border border-blue-400/30">
          <Rocket className="h-6 w-6 text-white" strokeWidth={2} />
        </div>
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 mr-1">
          3D
        </span>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
          Blueprint
        </span>
      </div>
    </div>
  )
}
