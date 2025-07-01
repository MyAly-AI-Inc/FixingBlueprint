"use client"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <motion.div
            key={`content-${index}`}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 mb-4">
              {item.badge}
            </Badge>

            <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <div className="relative mb-10 rounded-lg overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="3D printing process"
                    width={1000}
                    height={600}
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
              <div className="text-gray-300 leading-relaxed">{item.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: "The Blueprint Method: From Concept to Creation",
    description: (
      <>
        <p>
          The 3D Blueprint Method revolutionizes how we approach 3D printing projects. Starting with AI-powered design
          generation, we transform simple ideas into complex, printable models that push the boundaries of what's
          possible with additive manufacturing.
        </p>
        <p>
          Our proprietary algorithm analyzes structural integrity, material properties, and manufacturing constraints to
          ensure every design is not just beautiful, but functionally superior and cost-effective to produce.
        </p>
        <p>
          Through iterative refinement and machine learning optimization, we've achieved a 98% first-print success rate,
          dramatically reducing material waste and production time for our clients worldwide.
        </p>
      </>
    ),
    badge: "Design Phase",
    image: "/images/3d-design-hologram.png",
  },
  {
    title: "AI-Powered Material Optimization",
    description: (
      <>
        <p>
          Our advanced material selection AI considers over 200 variables including strength requirements, environmental
          conditions, cost constraints, and aesthetic preferences to recommend the optimal filament for each specific
          application.
        </p>
        <p>
          By analyzing thousands of successful prints and their real-world performance data, our system continuously
          learns and improves its recommendations, leading to stronger, more durable prints at lower costs.
        </p>
      </>
    ),
    badge: "Material Science",
    image: "/images/specialized-filaments.png",
  },
  {
    title: "Automated Quality Control & Scaling",
    description: (
      <>
        <p>
          The final phase integrates computer vision and IoT sensors to monitor every aspect of the printing process in
          real-time. Our system can detect and correct issues before they become failures, ensuring consistent quality
          across all productions.
        </p>
        <p>
          With automated post-processing workflows and intelligent scheduling, businesses can scale from prototype to
          production seamlessly, handling hundreds of concurrent prints with minimal human intervention.
        </p>
      </>
    ),
    badge: "Production",
    image: "/images/3d-printing-lab-with-filaments.png",
  },
]
