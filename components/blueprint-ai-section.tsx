"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RevealSection } from "@/components/reveal-section"
import { Lightbulb, Palette, TrendingUp, ChevronRight, Play, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function BlueprintAISection() {
  // Create refs for the slider elements
  const sliderRef = useRef(null)
  const afterImageRef = useRef(null)
  const containerRef = useRef(null)
  const [sliderPosition, setSliderPosition] = useState(50) // Default to middle (50%)

  // Slider functionality
  useEffect(() => {
    const slider = sliderRef.current
    const afterImage = afterImageRef.current
    const container = containerRef.current

    if (!slider || !afterImage || !container) return

    let isDragging = false

    const updateSliderPosition = (clientX) => {
      const rect = container.getBoundingClientRect()
      const position = ((clientX - rect.left) / rect.width) * 100
      const clampedPosition = Math.max(0, Math.min(100, position))

      setSliderPosition(clampedPosition)
    }

    const handleMouseDown = (e) => {
      isDragging = true
      updateSliderPosition(e.clientX)
    }

    const handleMouseMove = (e) => {
      if (isDragging) {
        updateSliderPosition(e.clientX)
      }
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    const handleTouchStart = (e) => {
      isDragging = true
      updateSliderPosition(e.touches[0].clientX)
    }

    const handleTouchMove = (e) => {
      if (isDragging) {
        updateSliderPosition(e.touches[0].clientX)
      }
    }

    // Add event listeners
    slider.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    slider.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleMouseUp)

    // Cleanup
    return () => {
      slider.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)

      slider.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, []) // Empty dependency array means this runs once on mount

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

        {/* Subtle orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-orb opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-blue-orb opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-200 border-purple-200">
                Blueprint AI
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                From Idea to Profitable Product in Days, Not Months
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Our AI design engine helps you create, optimize, and market 3D printed products that actually sell
              </p>
            </div>
          </RevealSection>

          {/* Main content - Modern and Interactive */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/4 right-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>

            {/* Interactive tabs */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left column - Visual transformation with interactive slider */}
              <RevealSection delay={100} className="w-full lg:w-1/2">
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100 transform transition-all duration-500 hover:shadow-2xl group-hover:scale-[1.01]">
                    {/* Interactive Before/After Slider */}
                    <div ref={containerRef} className="relative h-[500px] overflow-hidden">
                      {/* Before Image (positioned absolutely) */}
                      <div className="absolute inset-0 transition-all duration-300 ease-in-out">
                        <div className="absolute top-2 left-2 z-10 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                          BEFORE
                        </div>
                        <div className="h-full flex flex-col">
                          <div className="flex-1 p-6 relative">
                            <Image
                              src="/blueprint-before.png"
                              alt="Person looking confused with a blank canvas"
                              width={400}
                              height={300}
                              className="w-full h-auto rounded-lg mb-4 opacity-80"
                            />
                            <h3 className="text-lg font-semibold text-gray-400 mb-2">Just an idea</h3>
                            <ul className="text-sm text-gray-500 space-y-2">
                              <li className="flex items-center">
                                <span className="inline-block w-4 h-4 bg-gray-200 rounded-full mr-2"></span>
                                Unsure where to start
                              </li>
                              <li className="flex items-center">
                                <span className="inline-block w-4 h-4 bg-gray-200 rounded-full mr-2"></span>
                                No design skills
                              </li>
                              <li className="flex items-center">
                                <span className="inline-block w-4 h-4 bg-gray-200 rounded-full mr-2"></span>
                                Weeks of research needed
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* After Image (with clip-path for slider effect) */}
                      <div
                        ref={afterImageRef}
                        className="absolute inset-0 transition-all duration-300 ease-in-out"
                        style={{
                          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
                        }}
                      >
                        <div className="absolute top-2 right-2 z-10 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                          AFTER
                        </div>
                        <div className="h-full bg-gradient-to-br from-white to-purple-50">
                          <div className="flex-1 p-6 relative">
                            <Image
                              src="/blueprint-after.png"
                              alt="Person confidently showcasing their finished product"
                              width={400}
                              height={300}
                              className="w-full h-auto rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-purple-700 mb-2">Profitable product</h3>
                            <ul className="text-sm text-slate-700 space-y-2">
                              <li className="flex items-center">
                                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                                Market-validated design
                              </li>
                              <li className="flex items-center">
                                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                                Optimized for printing & profit
                              </li>
                              <li className="flex items-center">
                                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                                Ready to sell in days
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Slider Control - Positioned dynamically based on state */}
                      <div
                        ref={sliderRef}
                        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                      </div>

                      {/* Slider Instructions */}
                      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500 font-medium">
                        Drag slider to compare before & after
                      </div>
                    </div>

                    {/* Journey steps - Interactive timeline */}
                    <div className="bg-gray-50 p-6">
                      <div className="relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-purple-300 to-purple-500 transform -translate-y-1/2"></div>

                        <div className="flex justify-between items-center relative">
                          <div className="text-center flex-1 z-10">
                            <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center mx-auto mb-2 transition-colors cursor-pointer">
                              <span className="text-gray-600 font-medium">1</span>
                            </div>
                            <p className="text-xs text-gray-600">Idea</p>
                          </div>

                          <div className="text-center flex-1 z-10">
                            <div className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center mx-auto mb-2 transition-colors cursor-pointer">
                              <span className="text-purple-600 font-medium">2</span>
                            </div>
                            <p className="text-xs text-gray-600">Blueprint AI</p>
                          </div>

                          <div className="text-center flex-1 z-10">
                            <div className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center mx-auto mb-2 transition-colors cursor-pointer">
                              <span className="text-white font-medium">3</span>
                            </div>
                            <p className="text-xs text-gray-600">Profit</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>

              {/* Right column - Benefits and results with interactive elements */}
              <div className="w-full lg:w-1/2">
                <RevealSection delay={200}>
                  <p className="text-lg text-slate-700 mb-8">
                    Our AI helps entrepreneurs at every stage of product development, regardless of technical skills or
                    experience. We remove barriers to entry and accelerate your path to profitable products.
                  </p>
                </RevealSection>

                {/* Interactive accordion-style key benefits */}
                <div className="space-y-4 mb-10">
                  <RevealSection delay={250}>
                    <div className="group bg-white hover:bg-purple-50 rounded-lg border border-purple-100 hover:border-purple-200 p-4 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mt-1 group-hover:bg-purple-200 transition-colors">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1 flex items-center">
                            Find Winning Products
                            <ChevronRight className="h-4 w-4 ml-2 text-purple-400 group-hover:rotate-90 transition-transform duration-300" />
                          </h3>
                          <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                            Discover profitable niches with proven demand and low competition
                          </p>
                          <div className="mt-3 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                            <div className="pt-2 border-t border-purple-100">
                              <ul className="text-sm text-slate-600 space-y-1">
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  Market analysis of top-selling products
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  Profit margin calculator
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  Trend prediction algorithm
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealSection>

                  <RevealSection delay={300}>
                    <div className="group bg-white hover:bg-purple-50 rounded-lg border border-purple-100 hover:border-purple-200 p-4 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mt-1 group-hover:bg-purple-200 transition-colors">
                          <Palette className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1 flex items-center">
                            Create Without Design Skills
                            <ChevronRight className="h-4 w-4 ml-2 text-purple-400 group-hover:rotate-90 transition-transform duration-300" />
                          </h3>
                          <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                            Generate market-ready 3D models even if you can't design
                          </p>
                          <div className="mt-3 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                            <div className="pt-2 border-t border-purple-100">
                              <ul className="text-sm text-slate-600 space-y-1">
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  Text-to-3D model generation
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  One-click design optimization
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  Customizable templates
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealSection>

                  <RevealSection delay={350}>
                    <div className="group bg-white hover:bg-purple-50 rounded-lg border border-purple-100 hover:border-purple-200 p-4 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mt-1 group-hover:bg-purple-200 transition-colors">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1 flex items-center">
                            Optimize for Profit
                            <ChevronRight className="h-4 w-4 ml-2 text-purple-400 group-hover:rotate-90 transition-transform duration-300" />
                          </h3>
                          <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                            Get specific improvements to increase margins and customer appeal
                          </p>
                          <div className="mt-3 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                            <div className="pt-2 border-t border-purple-100">
                              <ul className="text-sm text-slate-600 space-y-1">
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  Material cost optimization
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  Print time reduction
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                                  Pricing strategy recommendations
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealSection>
                </div>

                {/* Real results with animated counters */}
                <RevealSection delay={500}>
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 mb-8 hover:shadow-md transition-all duration-300">
                    <h3 className="text-lg font-semibold text-purple-700 mb-4">Real Results from Real Users</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center group">
                        <p className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                          68hrs
                        </p>
                        <p className="text-sm text-slate-600">Average time saved in product development</p>
                      </div>
                      <div className="text-center group">
                        <p className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                          72%
                        </p>
                        <p className="text-sm text-slate-600">Users launched first product within 2 weeks</p>
                      </div>
                      <div className="text-center group">
                        <p className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                          3.2×
                        </p>
                        <p className="text-sm text-slate-600">Higher profit margins vs. random products</p>
                      </div>
                      <div className="text-center group">
                        <p className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                          40%
                        </p>
                        <p className="text-sm text-slate-600">Higher conversion with AI-optimized listings</p>
                      </div>
                    </div>
                  </div>
                </RevealSection>

                {/* CTA buttons with animation */}
                <RevealSection delay={550}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white border-0 rounded-full h-12 px-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
                      Create Your First Profitable Product <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-200 text-purple-600 hover:text-purple-700 hover:border-purple-300 rounded-full h-12 px-8 transform transition-all duration-300 hover:-translate-y-1"
                    >
                      <Play className="mr-2 h-4 w-4" /> See How It Works
                    </Button>
                  </div>
                  <p className="text-sm text-slate-500 mt-3">
                    No design skills required • Start with any budget • See results in days
                  </p>
                </RevealSection>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <RevealSection delay={600}>
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-20"></div>
                <div className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/testimonial-avatar.png"
                        alt="Testimonial avatar"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-slate-700 italic mb-4">
                        "I went from having zero design experience to running a profitable 3D printing business in just
                        3 weeks. Blueprint AI did all the heavy lifting - finding the right products, creating the
                        designs, and even helping with my marketing copy. I'm now making $3,200/month in passive
                        income."
                      </p>
                      <div>
                        <p className="font-semibold text-slate-900">Sarah Johnson</p>
                        <p className="text-sm text-slate-500">Etsy Shop Owner, Started April 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
