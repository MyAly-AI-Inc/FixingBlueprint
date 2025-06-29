"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MaterialsGuideHeader() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/3d-printing-materials.png"
          alt="Various 3D printing materials including filaments and resins"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 to-slate-950/90" />
      </div>

      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24">
        {/* Back link with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blueprint/fundamentals"
            className="inline-flex items-center text-sm font-medium text-blue-300 transition-colors hover:text-blue-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fundamentals
          </Link>
        </motion.div>

        {/* Header content with animations */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            3D Printing Materials Guide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-xl text-blue-100 sm:text-2xl max-w-3xl"
          >
            Discover the perfect materials for your 3D printing projects. From common filaments to specialty resins,
            learn about properties, applications, and how to choose the right material for your needs.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
