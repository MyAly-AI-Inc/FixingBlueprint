"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle, type LucideIcon } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  icon: LucideIcon
  popular?: boolean
  ctaText: string
  ctaVariant?: "default" | "gradient" | "outline"
}

interface PricingSectionProps {
  title: string
  description: string
  tiers: PricingTier[]
  badge?: string
}

export function PricingSection({ title, description, tiers, badge }: PricingSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-gray-900">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            const isPopular = tier.popular

            return (
              <motion.div
                key={index}
                className={`relative ${
                  isPopular
                    ? "bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-400/60 transform scale-105"
                    : "bg-blue-900/20 border border-blue-800/50"
                } backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: isPopular ? -8 : -5, scale: isPopular ? 1.08 : 1.02 }}
              >
                {isPopular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-lg font-bold shadow-lg">
                      🔥 Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${
                      isPopular ? "bg-gradient-to-br from-purple-500/30 to-pink-500/30" : "bg-blue-500/20"
                    } flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${isPopular ? "text-purple-300" : "text-blue-400"}`} />
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-2 ${isPopular ? "text-3xl" : ""}`}>{tier.name}</h3>
                  <div
                    className={`text-4xl font-bold mb-2 ${
                      isPopular
                        ? "text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                        : "text-blue-400"
                    }`}
                  >
                    {tier.price}
                  </div>
                  <p className={`${isPopular ? "text-purple-200 text-lg" : "text-blue-200"}`}>{tier.description}</p>
                </div>

                <ul className={`space-y-3 mb-8 ${isPopular ? "space-y-4" : ""}`}>
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 ${
                          isPopular ? "w-6 h-6 text-purple-400" : "text-blue-400"
                        } flex-shrink-0 mt-0.5`}
                      />
                      <span className={`${isPopular ? "text-purple-200 text-lg" : "text-blue-200"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${isPopular ? "py-4 text-xl font-semibold shadow-lg" : "py-3"} ${
                    tier.ctaVariant === "gradient"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      : tier.ctaVariant === "outline"
                        ? "bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                        : "bg-blue-600 hover:bg-blue-700"
                  } text-white rounded-lg`}
                >
                  {tier.ctaText}
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
