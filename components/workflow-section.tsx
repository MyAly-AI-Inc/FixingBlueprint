"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Search, Printer, ShoppingBag } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"

export function WorkflowSection() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">
                <ChevronRight className="mr-1 h-3 w-3" />
                Complete Workflow
              </Badge>

              <div className="relative mb-8 max-w-4xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-50"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/designer-header.jpeg"
                    alt="Designer working with 3D models"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-text leading-tight pb-1">
                From Concept to Customer
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-12">
                Our platform streamlines the entire 3D printing business process, helping you turn ideas into profitable
                products with just a few clicks.
              </p>
            </div>
          </RevealSection>

          {/* Workflow Cards */}
          <div className="relative">
            {/* Animated connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 hidden md:block overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70"></div>
              <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-flow"></div>
            </div>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 relative z-10">
              {/* Find Card */}
              <RevealSection delay={100} className="flex-1 md:max-w-xs">
                <div className="group h-full relative bg-white backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-blue-500 transform hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50 z-10"></div>
                    <img
                      src="/images/find-design.jpeg"
                      alt="Finding design inspiration"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-blue-900/80 p-3 rounded-full backdrop-blur-sm group-hover:bg-blue-700 transition-colors duration-300">
                      <Search className="h-6 w-6 text-blue-100" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Find</h3>
                    <p className="text-slate-700">
                      Discover trending designs and market opportunities with our AI-powered research tools. Identify
                      profitable niches before your competition.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={150} className="hidden md:flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </RevealSection>

              {/* Create Card */}
              <RevealSection delay={200} className="flex-1 md:max-w-xs">
                <div className="group h-full relative bg-white backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-purple-500 transform hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50 z-10"></div>
                    <img
                      src="/images/create-print.png"
                      alt="Creating and printing 3D models"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-purple-900/80 p-3 rounded-full backdrop-blur-sm group-hover:bg-purple-700 transition-colors duration-300">
                      <Printer className="h-6 w-6 text-purple-100" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Create</h3>
                    <p className="text-slate-700">
                      Design and optimize your products with our intuitive tools. Our platform ensures perfect prints
                      every time with optimized settings.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={250} className="hidden md:flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </RevealSection>

              {/* Sell Card */}
              <RevealSection delay={300} className="flex-1 md:max-w-xs">
                <div className="group h-full relative bg-white backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-pink-500 transform hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50 z-10"></div>
                    <img
                      src="/images/sell-product.jpeg"
                      alt="Selling 3D printed products"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-pink-900/80 p-3 rounded-full backdrop-blur-sm group-hover:bg-pink-700 transition-colors duration-300">
                      <ShoppingBag className="h-6 w-6 text-pink-100" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Sell</h3>
                    <p className="text-slate-700">
                      List your products on multiple marketplaces with a single click. Track sales, manage inventory,
                      and grow your 3D printing business.
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>

          <RevealSection delay={400}>
            <div className="text-center mt-16">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 rounded-full h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Your 3D Printing Business <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-4 text-sm text-slate-600">No technical experience required. Get started in minutes.</p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* The Features section already has a gradient transition, so we don't need to add one here */}
    </>
  )
}
