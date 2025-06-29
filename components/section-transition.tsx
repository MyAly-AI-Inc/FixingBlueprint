import { cn } from "@/lib/utils"

interface SectionTransitionProps {
  from: string
  to: string
  className?: string
  height?: number
  invert?: boolean
}

export function SectionTransition({ from, to, className, height = 100, invert = false }: SectionTransitionProps) {
  return (
    <div
      className={cn("w-full overflow-hidden", invert ? "-scale-y-100" : "", className)}
      style={{ height: `${height}px` }}
    >
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id={`gradient-${from}-${to}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>

          {/* Add subtle noise texture for more organic look */}
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        </defs>

        {/* Main curve with smoother path */}
        <path d="M0,0 C300,100 900,0 1200,100 L1200,100 L0,100 Z" fill={`url(#gradient-${from}-${to})`} />

        {/* Subtle highlight curve */}
        <path
          d="M0,20 C350,110 850,10 1200,110"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
