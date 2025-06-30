"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, type LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  highlights: string[]
  color: "blue" | "purple" | "green" | "orange" | "indigo" | "cyan"
}

interface FeatureGridProps {
  title: string
  description: string
  features: Feature[]
  badge?: string
}

const colorClasses = {
  blue: {
    bg: "bg-blue-900/20",
    border: "border-blue-800/50",
    icon: "bg-blue-900/30",
    iconColor: "text-blue-400",
    highlight: "text-blue-400",
  },
  purple: {
    bg: "bg-purple-900/20",
    border: "border-purple-800/50",
    icon: "bg-purple-900/30",
    iconColor: "text-purple-400",
    highlight: "text-purple-400",
  },
  green: {
    bg: "bg-green-900/20",
    border: "border-green-800/50",
    icon: "bg-green-900/30",
    iconColor: "text-green-400",
    highlight: "text-green-400",
  },
  orange: {
    bg: "bg-orange-900/20",
    border: "border-orange-800/50",
    icon: "bg-orange-900/30",
    iconColor: "text-orange-400",
    highlight: "text-orange-400",
  },
  indigo: {
    bg: "bg-indigo-900/20",
    border: "border-indigo-800/50",
    icon: "bg-indigo-900/30",
    iconColor: "text-indigo-400",
    highlight: "text-indigo-400",
  },
  cyan: {
    bg: "bg-cyan-900/20",
    border: "border-cyan-800/50",
    icon: "bg-cyan-900/30",
    iconColor: "text-cyan-400",
    highlight: "text-cyan-400",
  },
}

export function FeatureGrid({ title, description, features, badge }: FeatureGridProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {badge && <Badge className="bg-purple-900/30 text-purple-300 border-purple-700/50 mb-4">{badge}</Badge>}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">{description}</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color]
            const Icon = feature.icon

            return (
              <motion.div
                key={index}
                className={`${colors.bg} backdrop-blur-sm ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-blue-200 mb-4">{feature.description}</p>
                <ul className="space-y-2 text-blue-300">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 ${colors.highlight} flex-shrink-0 mt-0.5`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
