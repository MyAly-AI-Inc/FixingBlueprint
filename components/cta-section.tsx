"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Engineering Student",
    company: "MIT",
    image: "/professional-asian-woman-portrait.png",
    quote:
      "Blueprint's structured approach helped me go from zero to printing complex engineering prototypes in just 6 weeks. The community support is incredible!",
    rating: 5,
    achievement: "Built 15+ functional prototypes",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Product Designer",
    company: "Tesla",
    image: "/latino-man-headshot.png",
    quote:
      "The business modules taught me how to turn my 3D printing hobby into a $50k/year side business. The ROI calculations alone saved me months of trial and error.",
    rating: 5,
    achievement: "$50k annual revenue",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Maker & Entrepreneur",
    company: "Custom Jewelry Co.",
    image: "/south-asian-developer.png",
    quote:
      "I went from complete beginner to running a successful jewelry printing business. Blueprint's step-by-step guidance made the impossible feel achievable.",
    rating: 5,
    achievement: "6-figure jewelry business",
  },
]

export function CTASection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your 3D Printing Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of makers who are mastering 3D printing and building successful businesses with Blueprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
            >
              Get Started Free
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              View Course Catalog
            </Button>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Success Stories from Our Community</h3>

          {/* Testimonial Card */}
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Large Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-100">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[currentTestimonial].quote}"</p>

                  {/* Author Info */}
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 text-xl">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                    </p>
                  </div>

                  {/* Achievement Badge */}
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    <span>🎯</span>
                    {testimonials[currentTestimonial].achievement}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 rotate-180 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom text */}
        <p className="text-center text-blue-100 mt-12 text-sm">
          No credit card required • Full access to all features • Join our community today
        </p>
      </div>
    </section>
  )
}
