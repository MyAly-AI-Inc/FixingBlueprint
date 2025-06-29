"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Mail, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const contactOptions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@3dblueprint.io",
      color: "bg-blue-600",
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+1234567890",
      color: "bg-green-600",
    },
    {
      icon: MessageCircle,
      label: "Chat",
      href: "#",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault()
        console.log("Open chat")
      },
      color: "bg-purple-600",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col-reverse gap-3 mb-3"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                onClick={option.onClick}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ delay: index * 0.05 }}
                className={cn("flex items-center gap-2 px-4 py-2 rounded-full text-white shadow-lg", option.color)}
              >
                <option.icon size={18} />
                <span className="text-sm font-medium">{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white",
          isOpen ? "bg-red-600" : "bg-blue-600",
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>
      </motion.button>
    </div>
  )
}
