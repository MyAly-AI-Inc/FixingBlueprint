"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Printer, DollarSign, Zap, PenToolIcon as Tool, Award } from "lucide-react"

interface PrinterType {
  id: string
  name: string
  description: string
  image: string
  priceRange: string
  speedRating: number
  qualityRating: number
  reliabilityRating: number
  maintenanceRating: number
  pros: string[]
  cons: string[]
  bestFor: string[]
  popularModels: {
    name: string
    price: string
    link: string
  }[]
}

const printerTypes: PrinterType[] = [
  {
    id: "fdm",
    name: "FDM (Fused Deposition Modeling)",
    description:
      "The most common type of 3D printer. FDM printers work by extruding melted filament layer by layer to build objects.",
    image: "/images/3d-printer-models.png",
    priceRange: "$200 - $10,000+",
    speedRating: 4,
    qualityRating: 3,
    reliabilityRating: 4,
    maintenanceRating: 3,
    pros: [
      "Affordable entry-level options",
      "Wide variety of materials",
      "Large community support",
      "Easy to modify and upgrade",
    ],
    cons: [
      "Visible layer lines",
      "Limited detail for small objects",
      "Requires post-processing for smooth finish",
      "Potential for warping and failed prints",
    ],
    bestFor: ["Beginners", "Functional parts", "Prototypes", "Large objects", "Educational settings"],
    popularModels: [
      { name: "Prusa i3 MK3S+", price: "$749 (kit) / $999 (assembled)", link: "#" },
      { name: "Creality Ender 3 V2", price: "$279", link: "#" },
      { name: "Ultimaker S5", price: "$5,995", link: "#" },
      { name: "Bambu Lab X1 Carbon", price: "$1,449", link: "#" },
    ],
  },
  {
    id: "resin",
    name: "Resin (SLA/MSLA/DLP)",
    description:
      "Resin printers use light to cure liquid resin layer by layer, offering exceptional detail and smooth surfaces.",
    image: "/images/specialized-filaments.png",
    priceRange: "$300 - $15,000+",
    speedRating: 2,
    qualityRating: 5,
    reliabilityRating: 3,
    maintenanceRating: 2,
    pros: [
      "Extremely high detail",
      "Smooth surface finish",
      "Great for small objects",
      "Excellent for miniatures and jewelry",
    ],
    cons: [
      "Toxic materials require ventilation",
      "Messy post-processing",
      "Smaller build volumes",
      "More expensive materials",
    ],
    bestFor: ["Detailed miniatures", "Jewelry making", "Dental applications", "High-precision parts"],
    popularModels: [
      { name: "Elegoo Mars 3", price: "$300", link: "#" },
      { name: "Anycubic Photon Mono X", price: "$459", link: "#" },
      { name: "Formlabs Form 3+", price: "$3,750", link: "#" },
      { name: "Phrozen Sonic Mini 8K", price: "$599", link: "#" },
    ],
  },
  {
    id: "industrial",
    name: "Industrial (SLS/MJF/DMLS)",
    description:
      "Industrial printers use lasers or other technologies to sinter or melt powdered materials, creating strong, functional parts.",
    image: "/images/large-format-printing.png",
    priceRange: "$10,000 - $1,000,000+",
    speedRating: 3,
    qualityRating: 5,
    reliabilityRating: 5,
    maintenanceRating: 1,
    pros: [
      "Exceptional strength and durability",
      "No support structures needed",
      "Wide range of industrial materials",
      "High precision and repeatability",
    ],
    cons: ["Extremely expensive", "Requires specialized knowledge", "High maintenance costs", "Large footprint"],
    bestFor: ["Manufacturing", "Aerospace", "Medical applications", "End-use parts"],
    popularModels: [
      { name: "Formlabs Fuse 1", price: "$18,499", link: "#" },
      { name: "HP Jet Fusion 5200", price: "$300,000+", link: "#" },
      { name: "EOS M 290", price: "$500,000+", link: "#" },
      { name: "Markforged Metal X", price: "$99,500", link: "#" },
    ],
  },
]

interface BudgetRange {
  min: number
  max: number
  label: string
}

const budgetRanges: BudgetRange[] = [
  { min: 0, max: 500, label: "Budget ($0-$500)" },
  { min: 501, max: 1500, label: "Mid-range ($501-$1,500)" },
  { min: 1501, max: 5000, label: "Professional ($1,501-$5,000)" },
  { min: 5001, max: 50000, label: "Industrial ($5,001+)" },
]

export default function PrinterSelectionClientPage() {
  const [selectedBudget, setSelectedBudget] = useState<BudgetRange>(budgetRanges[0])
  const [selectedPriority, setPriority] = useState<string>("quality")
  const [sliderValue, setSliderValue] = useState([500])

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value)
    const newBudget = budgetRanges.find((range) => value[0] >= range.min && value[0] <= range.max)
    if (newBudget) {
      setSelectedBudget(newBudget)
    }
  }

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-2 h-6 mx-0.5 rounded-full ${i < rating ? "bg-blue-500" : "bg-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Find Your Perfect 3D Printer</h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Printer Selection Wizard</CardTitle>
            <CardDescription>
              Adjust your budget and priorities to find the right printer for your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Budget Range</h3>
                <div className="mb-2">
                  <Slider
                    defaultValue={[500]}
                    max={10000}
                    step={100}
                    value={sliderValue}
                    onValueChange={handleSliderChange}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$0</span>
                    <span>$2,500</span>
                    <span>$5,000</span>
                    <span>$7,500</span>
                    <span>$10,000+</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {budgetRanges.map((range) => (
                    <Badge
                      key={range.label}
                      variant={selectedBudget.label === range.label ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedBudget(range)
                        setSliderValue([range.min + 100])
                      }}
                    >
                      {range.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Your Priority</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={selectedPriority === "quality" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setPriority("quality")}
                  >
                    Print Quality
                  </Badge>
                  <Badge
                    variant={selectedPriority === "speed" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setPriority("speed")}
                  >
                    Print Speed
                  </Badge>
                  <Badge
                    variant={selectedPriority === "ease" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setPriority("ease")}
                  >
                    Ease of Use
                  </Badge>
                  <Badge
                    variant={selectedPriority === "materials" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setPriority("materials")}
                  >
                    Material Options
                  </Badge>
                  <Badge
                    variant={selectedPriority === "reliability" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setPriority("reliability")}
                  >
                    Reliability
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400">Find Recommended Printers</Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue="fdm" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fdm">FDM Printers</TabsTrigger>
            <TabsTrigger value="resin">Resin Printers</TabsTrigger>
            <TabsTrigger value="industrial">Industrial</TabsTrigger>
          </TabsList>

          {printerTypes.map((printer) => (
            <TabsContent key={printer.id} value={printer.id} className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">{printer.name}</CardTitle>
                      <CardDescription className="text-base mt-2">{printer.description}</CardDescription>
                    </div>
                    <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                      <Image
                        src={printer.image || "/placeholder.svg"}
                        alt={printer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Specifications</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                            <span>Price Range:</span>
                          </div>
                          <span className="font-medium">{printer.priceRange}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Zap className="h-5 w-5 mr-2 text-blue-500" />
                            <span>Print Speed:</span>
                          </div>
                          {renderRating(printer.speedRating)}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 mr-2 text-blue-500" />
                            <span>Print Quality:</span>
                          </div>
                          {renderRating(printer.qualityRating)}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Printer className="h-5 w-5 mr-2 text-blue-500" />
                            <span>Reliability:</span>
                          </div>
                          {renderRating(printer.reliabilityRating)}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Tool className="h-5 w-5 mr-2 text-blue-500" />
                            <span>Maintenance:</span>
                          </div>
                          {renderRating(printer.maintenanceRating)}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Pros</h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {printer.pros.map((pro, index) => (
                              <li key={index} className="text-green-600">
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Cons</h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {printer.cons.map((con, index) => (
                              <li key={index} className="text-red-500">
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-lg font-medium mb-2">Best For</h3>
                        <div className="flex flex-wrap gap-2">
                          {printer.bestFor.map((use, index) => (
                            <Badge key={index} variant="secondary">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Popular Models</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {printer.popularModels.map((model, index) => (
                        <Card key={index} className="bg-gray-50">
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-base">{model.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-gray-500">{model.price}</p>
                          </CardContent>
                          <CardFooter className="p-4 pt-0">
                            <Button variant="outline" size="sm" className="w-full">
                              View Details
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Printer Selection Guide</h2>
        <div className="prose max-w-none">
          <p>
            Choosing the right 3D printer is a crucial first step in your 3D printing journey. The printer you select
            will determine the types of projects you can tackle, the materials you can use, and the quality of your
            prints.
          </p>

          <h3>Consider Your Use Case</h3>
          <p>Before purchasing a 3D printer, think carefully about what you plan to use it for:</p>
          <ul>
            <li>
              <strong>Hobbyist:</strong> If you're just getting started or printing for fun, an entry-level FDM printer
              is likely your best bet.
            </li>
            <li>
              <strong>Miniatures/Figurines:</strong> For highly detailed small objects, a resin printer will give you
              the best results.
            </li>
            <li>
              <strong>Functional Parts:</strong> For mechanical parts that need strength, an FDM printer with
              engineering materials is ideal.
            </li>
            <li>
              <strong>Professional/Business:</strong> Consider reliability, print quality, and total cost of ownership.
            </li>
          </ul>

          <h3>Key Factors to Consider</h3>
          <ol>
            <li>
              <strong>Budget:</strong> Not just the initial cost, but also ongoing expenses for materials, maintenance,
              and potential upgrades.
            </li>
            <li>
              <strong>Build Volume:</strong> The maximum size of objects you can print.
            </li>
            <li>
              <strong>Print Quality:</strong> Resolution and precision capabilities.
            </li>
            <li>
              <strong>Print Speed:</strong> How quickly the printer can produce objects.
            </li>
            <li>
              <strong>Material Compatibility:</strong> The range of filaments or resins the printer can use.
            </li>
            <li>
              <strong>Reliability:</strong> How consistently the printer produces successful prints.
            </li>
            <li>
              <strong>Community Support:</strong> Available resources, forums, and user base for troubleshooting.
            </li>
            <li>
              <strong>Software Ecosystem:</strong> Compatibility with slicers and design software.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
