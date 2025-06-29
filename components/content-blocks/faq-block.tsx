"use client"

import type { FAQBlock } from "@/types/subcategory-page"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQBlockProps {
  block: FAQBlock
  className?: string
}

export function FAQBlockComponent({ block, className = "" }: FAQBlockProps) {
  const { title, items } = block.content
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`my-8 ${className}`} id={block.id}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleItem(index)}
            >
              <span className="font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
