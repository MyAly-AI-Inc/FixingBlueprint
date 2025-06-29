"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function StateOfIndustrySection() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-purple-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10">
              <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-200 border-purple-200">
                April 2025 Industry Report
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                State of the <span className="text-purple-600">3D Printing Industry</span>
              </h2>

              <p className="text-slate-600 mb-6">
                Comprehensive market analysis, emerging trends, and growth opportunities in the rapidly evolving 3D
                printing ecosystem.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-slate-700">19.3% Market Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-sm font-medium text-slate-700">$22.6B Market Size</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-slate-700">42% AI Integration</span>
                </div>
              </div>

              <Button className="group bg-purple-600 hover:bg-purple-700 text-white">
                Read Full Report <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="relative h-full min-h-[300px] md:min-h-0">
              <Image
                src="/holographic-3d-printing.png"
                alt="3D Printing Industry Analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
