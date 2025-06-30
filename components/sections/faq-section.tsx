"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  category: string
  question: string
  answer: string
}

interface FaqSectionProps {
  title: string
  description: string
  faqs: FaqItem[]
  badge?: string
}

export function FaqSection({ title, description, faqs, badge }: FaqSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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
            {badge && <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50 mb-4">{badge}</Badge>}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">{description}</p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center gap-4">
                  <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50">{faq.category}</Badge>
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                </div>
                <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-blue-200 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
