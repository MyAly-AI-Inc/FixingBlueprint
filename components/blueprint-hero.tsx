"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ChevronRight, GraduationCap, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlueprintHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="pt-6">
            {" "}
            {/* Added padding-top here */}
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/30 backdrop-blur-sm">
                <GraduationCap className="mr-1 h-3 w-3" />
                Updated May 2025
              </Badge>

              {/* Learning paths badge */}
              <div className="flex items-center gap-1 bg-blue-800/30 px-2 py-1 rounded text-xs backdrop-blur-sm">
                <BookOpen className="h-3 w-3 text-blue-200" />
                <span className="text-blue-200">Learning paths:</span>
                <span className="bg-blue-800/50 px-1.5 rounded font-mono font-medium">12</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Master 3D Printing with <span className="text-cyan-400">Blueprint</span>
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-xl">
              Your comprehensive learning platform for mastering 3D printing skills, from fundamentals to advanced
              techniques and entrepreneurship.
            </p>
            {/* Statistics row */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-300" />
                <span className="text-sm font-medium">15,000+ Learners</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-300" />
                <span className="text-sm font-medium">200+ Tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-300" />
                <span className="text-sm font-medium">4.8/5 Rating</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8">
                Start Learning
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Link href="/blueprint/learning-paths">
                <Button
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm text-blue-700 border-blue-300 hover:bg-transparent transition-all duration-300 rounded-full px-8"
                >
                  Explore Learning Paths
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 bg-blue-800/20 rounded-2xl group-hover:bg-blue-800/10 transition-colors duration-300"></div>
            <Image
              src="/3d-printing-neon-lab.jpeg"
              alt="3D Printing Learning Platform"
              fill
              priority
              className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Floating highlight card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-xl max-w-[220px] hidden md:block">
              <Badge className="bg-cyan-500 text-white hover:bg-cyan-600 mb-2">Featured</Badge>
              <p className="text-sm font-medium">Interactive 3D models in every lesson</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 opacity-70"></div>
    </section>
  )
}
