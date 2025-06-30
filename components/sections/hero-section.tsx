"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  variant?: "live-challenge" | "blueprint" | "default"
  title: string
  subtitle: string
  description: string
  primaryCta: {
    text: string
    href?: string
    onClick?: () => void
    icon?: React.ReactNode
  }
  secondaryCta?: {
    text: string
    href?: string
    onClick?: () => void
    icon?: React.ReactNode
  }
  badge?: {
    text: string
    variant?: "live" | "default"
  }
}

export function HeroSection({
  variant = "default",
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  badge,
}: HeroSectionProps) {
  const isLive = variant === "live-challenge"

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex flex-col justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        {badge && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge.variant === "live" ? (
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-300 font-semibold text-lg">{badge.text}</span>
              </div>
            ) : (
              <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-6">{badge.text}</Badge>
            )}
          </motion.div>
        )}

        {/* Main Content */}
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              {title}
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-semibold">{subtitle}</p>

          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">{description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {primaryCta.href ? (
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  className={`${
                    isLive
                      ? "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                      : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                  } text-white rounded-full px-10 py-6 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {primaryCta.icon}
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            ) : (
              <Button
                size="lg"
                onClick={primaryCta.onClick}
                className={`${
                  isLive
                    ? "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                } text-white rounded-full px-10 py-6 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {primaryCta.icon}
                {primaryCta.text}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            )}

            {secondaryCta && (
              <Link href={secondaryCta.href || "#"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-300 hover:bg-blue-500/10 rounded-full px-10 py-6 text-xl bg-transparent"
                >
                  {secondaryCta.icon}
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
