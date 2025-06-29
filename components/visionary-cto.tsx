"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Network, Cpu } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"
import { Button } from "@/components/ui/button"

export function VisionaryCTO() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Subtle orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-orb opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-purple-orb opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">
              <Lightbulb className="mr-1 h-3 w-3" />
              Leadership
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-text leading-tight pb-1">
              Visionary Leadership
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-12">
              Meet the technical mind behind MyAly's revolutionary AI-powered 3D printing ecosystem.
            </p>
          </div>
        </RevealSection>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <RevealSection delay={100}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/tech-executive-portrait-blue-purple.png"
                  alt="Ahmed Boulakhras, CTO of MyAly AI"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500 hover:bg-blue-600">CTO</Badge>
                    <span className="text-white font-medium">Ahmed Boulakhras</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">
                Meet <span className="bg-clip-text text-transparent bg-gradient-text">Ahmed Boulakhras</span>
              </h3>
              <p className="text-lg text-slate-700 mb-6">
                As Chief Technology Officer, Ahmed brings over 15 years of expertise in artificial intelligence,
                distributed systems, and advanced manufacturing technologies to MyAly AI.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                His pioneering work in neural network architectures for 3D modeling and manufacturing optimization has
                revolutionized how AI can be applied to solve complex challenges in the 3D printing industry.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mt-1">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">AI Architecture</h4>
                    <p className="text-sm text-slate-600">
                      Pioneered proprietary neural networks for 3D model optimization
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mt-1">
                    <Network className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Global Systems</h4>
                    <p className="text-sm text-slate-600">Architected MyAly's distributed manufacturing network</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 mt-1">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Open Source</h4>
                    <p className="text-sm text-slate-600">Contributed to key 3D printing and AI open source projects</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-pink-100 p-3 rounded-lg text-pink-600 mt-1">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Innovation</h4>
                    <p className="text-sm text-slate-600">Holds 12+ patents in AI-driven manufacturing</p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-700 mb-8">
                "Our vision is to create an AI ecosystem that doesn't just automate tasks, but fundamentally transforms
                how creators and businesses approach product design and manufacturing."
              </blockquote>

              <Button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white border-0 rounded-full px-6">
                Read Ahmed's Technical Blog
              </Button>
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={300}>
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20"></div>
              <div className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">Technical Vision</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Distributed Intelligence</h4>
                    <p className="text-sm text-slate-600">
                      Building a global network of AI agents that collaborate to solve complex manufacturing challenges
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-purple-600">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Adaptive Learning</h4>
                    <p className="text-sm text-slate-600">
                      Systems that continuously improve from real-world manufacturing data and user feedback
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-indigo-600">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Democratized Design</h4>
                    <p className="text-sm text-slate-600">
                      Making advanced design and manufacturing accessible to creators regardless of technical expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
