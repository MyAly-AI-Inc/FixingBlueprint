"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ChevronRight } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"

export function DesignEngineSection() {
  return (
    <section id="design-engine" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-grid-pattern"></div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">
              <Sparkles className="mr-1 h-3 w-3" />
              Design Engine
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-text leading-tight pb-1">
              AI-Powered Design Tailored to Your Unique Journey
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our design engine adapts to your unique situation, goals, and capabilities, helping you create products
              perfectly suited to your equipment, skills, and market opportunities.
            </p>
          </div>
        </RevealSection>

        <div className="grid gap-8 md:grid-cols-3 h-full">
          {/* Card 1 */}
          <RevealSection delay={100}>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/smart-container.png"
                  alt="Smart container with glowing neon lights"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Smart Materials</h3>
                <p className="text-slate-700">
                  Intelligent materials that adapt to your needs, designed with precision and manufactured with care.
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Card 2 */}
          <RevealSection delay={200}>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/desk-organizer.png"
                  alt="Geometric desk organizer with phone holder"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Functional Design</h3>
                <p className="text-slate-700">
                  Geometric precision meets practical functionality in products designed to enhance your everyday life.
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Card 3 */}
          <RevealSection delay={300}>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/phone-dock.png"
                  alt="Organic wooden phone dock with warm lighting"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Organic Innovation</h3>
                <p className="text-slate-700">
                  Natural materials transformed into elegant solutions that bring harmony to your living spaces.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={400}>
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
              Your personal AI design partner that understands <br />
              <span className="bg-clip-text text-transparent bg-gradient-text">
                your unique strengths, equipment, and highest ROI opportunities
              </span>
            </h3>
            <Button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white border-0 rounded-full h-12 px-8 mt-4">
              Coming Soon <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
