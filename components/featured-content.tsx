"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RevealSection } from "@/components/reveal-section"

export function FeaturedContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealSection>
          <h2 className="text-3xl font-bold mb-2">Featured Content</h2>
          <p className="text-slate-600 mb-10">
            Curated insights and resources from this month's Print Profits edition.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* State of the Industry Card */}
          <RevealSection delay={100}>
            <FeaturedCard
              image="/forest-path-sunlight.png"
              title="April 2025 Analysis"
              category="STATE OF THE INDUSTRY"
              description="Comprehensive analysis of the current state of the 3D printing industry"
              color="bg-amber-500"
            />
          </RevealSection>

          {/* Material Opportunities Card */}
          <RevealSection delay={200}>
            <FeaturedCard
              image="/3d-printing-materials.png"
              title="New Materials Analysis"
              category="MATERIAL OPPORTUNITIES"
              description="Explore lucrative opportunities in the 3D printing materials market"
              color="bg-amber-500"
            />
          </RevealSection>

          {/* 3DxAI Newsletter Card */}
          <RevealSection delay={300}>
            <FeaturedCard
              image="/laptop-with-code.png"
              title="April 2025 Edition"
              category="3DxAI NEWSLETTER"
              description="Monthly insights into the evolving intersection of AI and 3D printing"
              color="bg-green-500"
            />
          </RevealSection>

          {/* Design Assistant Card */}
          <RevealSection delay={400}>
            <FeaturedCard
              image="/3d-printing-lab-woman.png"
              title="Design Assistant"
              category="PROMPT ENGINEERING"
              description="Optimize your design workflow with AI-powered prompt engineering"
              color="bg-blue-500"
            />
          </RevealSection>

          {/* Product Visualizer Card */}
          <RevealSection delay={500}>
            <FeaturedCard
              image="/ideas-to-reality-sign.png"
              title="Product Visualizer"
              category="AI TOOLBOX"
              description="Generate professional product renders with our AI visualization tools"
              color="bg-orange-500"
            />
          </RevealSection>

          {/* Monthly STL Collection Card */}
          <RevealSection delay={600}>
            <FeaturedCard
              image="/placeholder.svg?height=400&width=600&query=3D printed objects collection"
              title="April 2025"
              category="MONTHLY STL COLLECTION"
              description="Access this month's exclusive 3D printing designs with commercial license included"
              color="bg-red-500"
            />
          </RevealSection>
        </div>
      </div>
    </section>
  )
}

interface FeaturedCardProps {
  image: string
  title: string
  category: string
  description: string
  color: string
}

function FeaturedCard({ image, title, category, description, color }: FeaturedCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <div className={`text-xs font-semibold ${color} text-white px-2 py-1 rounded inline-block`}>{category}</div>
          </div>
          <div className="bg-gray-100 p-1 rounded-full group-hover:bg-gray-200 transition-colors">
            <ArrowUpRight className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>

      <Link href="#" className="absolute inset-0" aria-label={`Read more about ${title}`}>
        <span className="sr-only">Read more</span>
      </Link>
    </div>
  )
}
