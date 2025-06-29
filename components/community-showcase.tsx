"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, ChevronLeft, ChevronRight, Upload } from "lucide-react"

interface PrintSubmission {
  id: string
  username: string
  title: string
  description: string
  imageSrc: string
  likes: number
  comments: number
  printer: string
  material: string
  difficulty: "easy" | "medium" | "hard"
  timeAgo: string
}

const communityPrints: PrintSubmission[] = [
  {
    id: "1",
    username: "NeonPrinter42",
    title: "My First Calibration Cube",
    description: "Printed on my new Ender 3 V2. Really happy with how clean the edges came out!",
    imageSrc: "/images/first-print-cube.png",
    likes: 24,
    comments: 7,
    printer: "Ender 3 V2",
    material: "PLA",
    difficulty: "easy",
    timeAgo: "2 days ago",
  },
  {
    id: "2",
    username: "MakerMelissa",
    title: "Robot Figurine",
    description: "My very first print! Had some stringing issues but overall I'm proud of it.",
    imageSrc: "/images/first-print-figurine.png",
    likes: 31,
    comments: 12,
    printer: "Prusa Mini+",
    material: "PLA",
    difficulty: "medium",
    timeAgo: "1 week ago",
  },
  {
    id: "3",
    username: "TechTinkerer",
    title: "Phone Stand",
    description: "Functional print that I use every day. Took a few tries to get the angle right.",
    imageSrc: "/images/first-print-phone-stand.png",
    likes: 42,
    comments: 8,
    printer: "Creality CR-10",
    material: "PETG",
    difficulty: "medium",
    timeAgo: "3 days ago",
  },
  {
    id: "4",
    username: "CyberMaker",
    title: "Geometric Keychain",
    description: "Simple but effective first print. Used it to test different layer heights.",
    imageSrc: "/images/first-print-keychain.png",
    likes: 18,
    comments: 3,
    printer: "Anycubic i3 Mega",
    material: "PLA",
    difficulty: "easy",
    timeAgo: "5 days ago",
  },
  {
    id: "5",
    username: "PrintPioneer",
    title: "Spiral Vase",
    description: "My first vase mode print! No supports needed and it holds water with a little sealant.",
    imageSrc: "/images/first-print-vase.png",
    likes: 56,
    comments: 14,
    printer: "Prusa MK3S+",
    material: "PETG",
    difficulty: "medium",
    timeAgo: "1 day ago",
  },
]

const difficultyColors = {
  easy: "bg-green-100 text-green-800",
  medium: "bg-blue-100 text-blue-800",
  hard: "bg-purple-100 text-purple-800",
}

export function CommunityShowcase() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(communityPrints.length / itemsPerPage)

  const paginatedPrints = communityPrints.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-fuchsia-800 flex items-center gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-2 py-1 rounded-md text-sm font-medium">
              COMMUNITY
            </span>
            First Print Showcase
          </h2>
          <p className="text-slate-600 mt-2">See what other makers created for their first prints and get inspired!</p>
        </div>

        <Button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
          <Upload className="h-4 w-4 mr-2" />
          Submit Your Print
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {paginatedPrints.map((print) => (
          <Card
            key={print.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group"
          >
            <div className="relative aspect-square">
              <Image
                src={print.imageSrc || "/placeholder.svg"}
                alt={print.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <Badge className={`${difficultyColors[print.difficulty]}`}>
                  {print.difficulty.charAt(0).toUpperCase() + print.difficulty.slice(1)}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                  {print.username.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{print.username}</p>
                  <p className="text-xs text-slate-500">{print.timeAgo}</p>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-1">{print.title}</h3>
              <p className="text-slate-600 text-sm mb-3 line-clamp-2">{print.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {print.printer}
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  {print.material}
                </Badge>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 border-t border-slate-100 flex justify-between">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-slate-600 hover:text-fuchsia-600 transition-colors">
                  <Heart className="h-4 w-4" />
                  <span className="text-xs">{print.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-slate-600 hover:text-fuchsia-600 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs">{print.comments}</span>
                </button>
              </div>
              <button className="text-slate-600 hover:text-fuchsia-600 transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={prevPage} aria-label="Previous page">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <span className="text-sm text-slate-600">
              Page {currentPage + 1} of {totalPages}
            </span>

            <Button variant="outline" size="icon" onClick={nextPage} aria-label="Next page">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
