"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlowCard } from "@/components/ui/spotlight-card"
import { motion } from "framer-motion"
import { CheckCircle, type LucideIcon } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  icon: LucideIcon
  image?: string
  popular?: boolean
  ctaText: string
  ctaVariant?: "default" | "secondary" | "outline"
}

interface PricingSectionProps {
  title: string
  description: string
  tiers: PricingTier[]
  badge?: string
}

export function PricingSection({ title, description, tiers, badge }: PricingSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <Badge variant="purple" size="lg" className="mb-4">
                {badge}
              </Badge>
            )}
            <h2 className="text-heading-2 text-white mb-6">{title}</h2>
            <p className="text-body-large text-blue-200 max-w-3xl mx-auto">{description}</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            const isPopular = tier.popular

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: isPopular ? -8 : -5, scale: isPopular ? 1.05 : 1.02 }}
                className="relative"
              >
                <GlowCard
                  glowColor={isPopular ? "purple" : "blue"}
                  customSize={true}
                  className={`w-full h-full min-h-[650px] ${isPopular ? "transform scale-105" : ""}`}
                >
                  {isPopular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge variant="featured" size="xl">
                        🔥 Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="flex flex-col h-full overflow-hidden">
                    {/* Hero Image */}
                    {tier.image && (
                      <div className="relative h-48 mb-6 overflow-hidden">
                        <img
                          src={tier.image || "/placeholder.svg"}
                          alt={`${tier.name} tier`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div
                            className={`w-12 h-12 rounded-full ${
                              isPopular
                                ? "bg-gradient-to-br from-purple-500/40 to-pink-500/40 border border-purple-400/30"
                                : "bg-blue-500/30 border border-blue-400/30"
                            } flex items-center justify-center backdrop-blur-sm`}
                          >
                            <Icon className={`w-6 h-6 ${isPopular ? "text-purple-200" : "text-blue-300"}`} />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge
                            className={`${
                              isPopular
                                ? "bg-purple-900/50 text-purple-200 border-purple-400/30"
                                : "bg-blue-900/50 text-blue-200 border-blue-400/30"
                            } backdrop-blur-sm`}
                          >
                            {tier.name}
                          </Badge>
                        </div>
                      </div>
                    )}

                    <div className="px-6 pb-6 flex flex-col flex-grow">
                      <div className="text-center mb-6">
                        {!tier.image && (
                          <div
                            className={`w-16 h-16 mx-auto mb-4 rounded-full ${
                              isPopular ? "bg-gradient-to-br from-purple-500/30 to-pink-500/30" : "bg-blue-500/20"
                            } flex items-center justify-center`}
                          >
                            <Icon className={`w-8 h-8 ${isPopular ? "text-purple-300" : "text-blue-400"}`} />
                          </div>
                        )}
                        <h3 className={`font-bold text-white mb-3 ${isPopular ? "text-3xl" : "text-2xl"}`}>
                          {tier.name}
                        </h3>
                        <div className="mb-4">
                          <span
                            className={`font-bold ${
                              isPopular
                                ? "text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                                : "text-4xl text-blue-400"
                            }`}
                          >
                            {tier.price}
                          </span>
                          <span className="text-lg text-gray-400 font-normal ml-2">one-time</span>
                        </div>
                        <p className={`text-lg ${isPopular ? "text-purple-200" : "text-blue-200"}`}>
                          {tier.description}
                        </p>
                      </div>

                      <ul className={`space-y-3 mb-8 flex-grow ${isPopular ? "space-y-4" : ""}`}>
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle
                              className={`flex-shrink-0 mt-0.5 ${
                                isPopular ? "w-6 h-6 text-purple-400" : "w-5 h-5 text-blue-400"
                              }`}
                            />
                            <span className={`${isPopular ? "text-purple-200 text-base" : "text-blue-200 text-sm"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <Button
                          size={isPopular ? "xl" : "lg"}
                          variant={tier.ctaVariant || "default"}
                          className={`w-full ${
                            isPopular
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl"
                              : ""
                          }`}
                        >
                          {tier.ctaText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
