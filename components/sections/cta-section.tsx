"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CtaSectionProps {
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
    icon?: React.ReactNode
  }
  secondaryCta?: {
    text: string
    href: string
    icon?: React.ReactNode
  }
  background?: "gradient" | "dark"
}

export function CtaSection({ title, description, primaryCta, secondaryCta, background = "gradient" }: CtaSectionProps) {
  const bgClass =
    background === "gradient"
      ? "bg-gradient-to-br from-gray-900 to-black"
      : "bg-gradient-to-br from-slate-900 to-gray-900"

  return (
    <section className={`py-24 ${bgClass} relative overflow-hidden`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{title}</h2>
          <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">{description}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={primaryCta.href}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full px-12 py-6 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {primaryCta.icon}
                {primaryCta.text}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>

            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-300 hover:bg-blue-500/10 rounded-full px-12 py-6 text-xl bg-transparent"
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
