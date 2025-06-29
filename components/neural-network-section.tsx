"use client"

import { Badge } from "@/components/ui/badge"
import { Brain } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"
import { NeuralNetworkDiagram } from "@/components/neural-network-diagram"

export function NeuralNetworkSection() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-900 text-blue-300 hover:bg-blue-800 border-blue-700">
                <Brain className="mr-1 h-3 w-3" />
                AI Technology
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-text leading-tight pb-1 text-white">
                Powered by Advanced Neural Networks
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
                Our proprietary neural network architecture processes design inputs and manufacturing constraints to
                create optimized 3D models in seconds.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Neural Network Architecture</h3>
                <p className="text-slate-300 mb-6">
                  Hover over input and output nodes to see how our AI processes design data to create optimized 3D
                  models
                </p>
                <NeuralNetworkDiagram />
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={400}>
            <div className="grid gap-8 md:grid-cols-3 mt-16">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-3 text-white">Real-time Processing</h3>
                <p className="text-slate-300">
                  Our neural network processes design inputs in milliseconds, providing instant feedback and
                  optimization suggestions.
                </p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-3 text-white">Continuous Learning</h3>
                <p className="text-slate-300">
                  The system learns from each design iteration, constantly improving its understanding of design
                  principles and manufacturing constraints.
                </p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-3 text-white">Adaptive Optimization</h3>
                <p className="text-slate-300">
                  Our AI automatically adjusts designs for optimal printability, strength, and material usage based on
                  your specific requirements.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* No transition needed here as the WorkflowSection already has a dark background */}
    </>
  )
}
