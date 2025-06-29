"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number[]
  onValueChange?: (value: number[]) => void
  max?: number
  min?: number
  step?: number
  disabled?: boolean
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ className, value = [0], onValueChange, max = 100, min = 0, step = 1, disabled = false, ...props }, ref) => {
    const [localValue, setLocalValue] = React.useState(value[0])
    const sliderRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      setLocalValue(value[0])
    }, [value])

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return

      const handleMouseMove = (e: MouseEvent) => {
        if (!sliderRef.current) return

        const rect = sliderRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
        const percentage = x / rect.width
        const newValue = min + (max - min) * percentage
        const steppedValue = Math.round(newValue / step) * step
        const clampedValue = Math.max(min, Math.min(max, steppedValue))

        setLocalValue(clampedValue)
        onValueChange?.([clampedValue])
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)

      handleMouseMove(e.nativeEvent)
    }

    const percentage = ((localValue - min) / (max - min)) * 100

    return (
      <div ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
        <div
          ref={sliderRef}
          className="relative h-2 w-full grow overflow-hidden rounded-full bg-white/20 cursor-pointer"
          onMouseDown={handleMouseDown}
        >
          <div
            className="absolute h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div
          className="absolute block h-5 w-5 rounded-full border-2 border-cyan-400 bg-white shadow-lg transition-all hover:scale-110 cursor-grab active:cursor-grabbing"
          style={{ left: `calc(${percentage}% - 10px)` }}
          onMouseDown={handleMouseDown}
        />
      </div>
    )
  },
)

Slider.displayName = "Slider"

export { Slider }
