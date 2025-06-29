"use client"
import { BlueprintLogo } from "@/components/blueprint-logo"
import { Clock, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t py-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left Column: Logo + Tagline */}
          <motion.div variants={item} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="inline-block"
            >
              <BlueprintLogo className="h-8 w-auto" />
            </motion.div>
            <motion.p variants={item} className="text-muted-foreground max-w-xs">
              If you want to change the world, you have to risk it all.
            </motion.p>
            <motion.p variants={item} className="text-sm text-blue-500 font-medium">
              <span className="inline-flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Launching Soon
              </span>
            </motion.p>

            {/* Instagram Link */}
            <motion.div variants={item} className="pt-2">
              <a
                href="https://instagram.com/aly3dprints"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-muted-foreground hover:text-blue-500 transition-colors duration-300"
              >
                <Instagram size={18} className="mr-2" />
                <span className="text-sm">@aly3dprints</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Newsletter */}
          <motion.div variants={item} className="space-y-4">
            <motion.blockquote variants={item} className="text-lg font-medium text-foreground italic">
              "Art is not what you see. It is what you make others see."
            </motion.blockquote>
            <motion.p variants={item} className="text-sm text-muted-foreground text-right">
              — Degas
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bottom: Copyright */}
        <motion.div variants={item} className="border-t border-border mt-8 pt-6 text-center">
          <motion.p variants={item} className="text-xs text-muted-foreground">
            © 2025 3DBlueprint.io • A Division of MyAly AI, Inc.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
