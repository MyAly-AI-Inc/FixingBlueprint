"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className={`flex gap-4 ${className}`}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <div className="bg-slate-700/50 rounded-lg p-3 min-w-[60px] h-[60px] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">--</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">--</p>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  return (
    <div className={`flex gap-4 ${className}`}>
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-3 min-w-[60px] shadow-lg"
            key={unit.value} // This will trigger re-animation when value changes
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl font-bold text-white tabular-nums">{unit.value.toString().padStart(2, "0")}</span>
          </motion.div>
          <p className="text-xs text-slate-300 mt-1 font-medium">{unit.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
