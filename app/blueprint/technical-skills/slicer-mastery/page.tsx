"use client"

import Link from "next/link"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CategoryHero } from "@/components/category-hero"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { getCategoryStyle } from "@/lib/style-guide"
import {
  Settings,
  Zap,
  Clock,
  Layers,
  Maximize2,
  Minimize2,
  Thermometer,
  Droplet,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Download,
  Play,
  ExternalLink,
} from "lucide-react"

export default function SlicerMasteryPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const style = getCategoryStyle("technical-skills")

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <CategoryHero
        category="technical-skills"
        title="Slicer Mastery"
        description="Master the art and science of slicing software to optimize your 3D prints for quality, speed, and efficiency."
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          category="technical-skills"
          items={[
            { label: "Blueprint", href: "/blueprint" },
            { label: "Technical Skills", href: "/blueprint/technical-skills" },
            { label: "Slicer Mastery", href: "/blueprint/technical-skills/slicer-mastery", isCurrent: true },
          ]}
          className="my-6"
        />

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="prose max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${style.tailwindClasses.primaryText}`}>
                The Bridge Between Design and Reality
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Slicing software is the crucial bridge between your 3D model and a finished print. It translates your
                design into machine instructions (G-code) that your 3D printer can understand and execute.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Mastering your slicer is perhaps the single most important technical skill for achieving consistent,
                high-quality prints while maximizing efficiency and minimizing waste.
              </p>

              <div className={`p-4 border-l-4 ${style.tailwindClasses.primaryBorder} bg-teal-50 rounded-r-lg mb-6`}>
                <h3 className={`text-lg font-semibold ${style.tailwindClasses.primaryText}`}>Why Slicing Matters</h3>
                <p className="text-gray-700">
                  Even the most perfectly designed model will fail without proper slicing. Your slicer settings
                  determine print speed, strength, detail level, material usage, and ultimately, whether your print
                  succeeds or fails.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className={style.tailwindClasses.primaryButton}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Cheat Sheet
                </Button>
                <Button
                  variant="outline"
                  className={`border ${style.tailwindClasses.primaryBorder} ${style.tailwindClasses.primaryText}`}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Tutorial
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=800&query=3D printing slicer software interface showing layer preview"
                alt="Slicer software interface showing layer preview of a 3D model"
                width={800}
                height={600}
                className="object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-sm">
                  Modern slicing software provides powerful visualization tools to preview exactly how your model will
                  print, layer by layer.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Slicers Section */}
        <section className="mb-16" id="popular-slicers">
          <h2 className={`text-3xl font-bold mb-8 ${style.tailwindClasses.primaryText}`}>Popular Slicing Software</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "PrusaSlicer",
                image: "/placeholder.svg?height=200&width=400&query=PrusaSlicer logo and interface",
                description:
                  "Open-source slicer with excellent presets and advanced features. Great for beginners and experts alike.",
                difficulty: 70,
                features: 85,
                community: 90,
                link: "https://www.prusa3d.com/prusaslicer/",
              },
              {
                name: "Cura",
                image: "/placeholder.svg?height=200&width=400&query=Ultimaker Cura logo and interface",
                description: "Widely used open-source slicer with an extensive library of profiles and plugins.",
                difficulty: 65,
                features: 90,
                community: 95,
                link: "https://ultimaker.com/software/ultimaker-cura",
              },
              {
                name: "Simplify3D",
                image: "/placeholder.svg?height=200&width=400&query=Simplify3D logo and interface",
                description:
                  "Premium commercial slicer known for its fine-grained control and excellent support generation.",
                difficulty: 80,
                features: 95,
                community: 75,
                link: "https://www.simplify3d.com/",
              },
              {
                name: "SuperSlicer",
                image: "/placeholder.svg?height=200&width=400&query=SuperSlicer logo and interface",
                description: "Advanced fork of PrusaSlicer with additional features for power users.",
                difficulty: 85,
                features: 95,
                community: 80,
                link: "https://github.com/supermerill/SuperSlicer",
              },
              {
                name: "IdeaMaker",
                image: "/placeholder.svg?height=200&width=400&query=IdeaMaker logo and interface",
                description: "Feature-rich slicer from Raise3D with excellent UI and advanced capabilities.",
                difficulty: 75,
                features: 85,
                community: 70,
                link: "https://www.raise3d.com/ideamaker/",
              },
              {
                name: "OrcaSlicer",
                image: "/placeholder.svg?height=200&width=400&query=OrcaSlicer logo and interface",
                description: "Modern slicer focused on speed and quality optimizations for the latest printers.",
                difficulty: 75,
                features: 90,
                community: 85,
                link: "https://github.com/SoftFever/OrcaSlicer",
              },
            ].map((slicer, index) => (
              <motion.div
                key={slicer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={slicer.image || "/placeholder.svg"}
                      alt={`${slicer.name} interface`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className={style.tailwindClasses.primaryText}>{slicer.name}</CardTitle>
                    <CardDescription>{slicer.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Ease of Use</span>
                          <span className="text-sm font-medium text-gray-700">{100 - slicer.difficulty}%</span>
                        </div>
                        <Progress value={100 - slicer.difficulty} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Features</span>
                          <span className="text-sm font-medium text-gray-700">{slicer.features}%</span>
                        </div>
                        <Progress value={slicer.features} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Community Support</span>
                          <span className="text-sm font-medium text-gray-700">{slicer.community}%</span>
                        </div>
                        <Progress value={slicer.community} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={slicer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium ${style.tailwindClasses.primaryText}`}
                    >
                      Visit Website
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Essential Settings Section */}
        <section className="mb-16" id="essential-settings">
          <h2 className={`text-3xl font-bold mb-8 ${style.tailwindClasses.primaryText}`}>Essential Slicer Settings</h2>

          <Tabs defaultValue="quality" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="quality">Quality</TabsTrigger>
              <TabsTrigger value="speed">Speed</TabsTrigger>
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="quality" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${style.tailwindClasses.primaryText}`}>Layer Height</h3>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=3D printing layer height comparison"
                      alt="Comparison of different layer heights in 3D printing"
                      width={500}
                      height={300}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Layer height is the thickness of each printed layer and has the most significant impact on print
                    quality and time.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className={`inline-flex p-1 rounded-full ${style.tailwindClasses.accentBg} mr-2 mt-1`}>
                        <Minimize2 className="h-3 w-3 text-white" />
                      </span>
                      <span>
                        <strong>Fine (0.1mm or less):</strong> Excellent detail, longer print times
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-flex p-1 rounded-full ${style.tailwindClasses.accentBg} mr-2 mt-1`}>
                        <Layers className="h-3 w-3 text-white" />
                      </span>
                      <span>
                        <strong>Medium (0.15-0.2mm):</strong> Good balance of detail and speed
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-flex p-1 rounded-full ${style.tailwindClasses.accentBg} mr-2 mt-1`}>
                        <Maximize2 className="h-3 w-3 text-white" />
                      </span>
                      <span>
                        <strong>Draft (0.3mm or more):</strong> Fast prints, visible layer lines
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${style.tailwindClasses.primaryText}`}>Wall Thickness</h3>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=3D printing wall thickness comparison"
                      alt="Comparison of different wall thicknesses in 3D printing"
                      width={500}
                      height={300}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Wall thickness determines how thick the outer shells of your print will be, affecting both strength
                    and appearance.
                  </p>
                  <div className={`p-4 border ${style.tailwindClasses.primaryBorder} rounded-lg`}>
                    <h4 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>Recommended Settings</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>Decorative items:</strong> 2 walls (0.8mm with 0.4mm nozzle)
                      </li>
                      <li>
                        <strong>Functional parts:</strong> 3-4 walls (1.2-1.6mm with 0.4mm nozzle)
                      </li>
                      <li>
                        <strong>Structural components:</strong> 4+ walls (1.6mm+ with 0.4mm nozzle)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`p-4 border-l-4 ${style.tailwindClasses.primaryBorder} bg-teal-50 rounded-r-lg`}>
                <h4 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>
                  Pro Tip: Variable Layer Height
                </h4>
                <p className="text-gray-700">
                  Many modern slicers support variable layer height, allowing you to use thinner layers for detailed
                  areas and thicker layers for simple sections. This can dramatically reduce print time while
                  maintaining quality where it matters.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="speed" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${style.tailwindClasses.primaryText}`}>Print Speed</h3>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=3D printing speed settings visualization"
                      alt="Visualization of different print speed settings"
                      width={500}
                      height={300}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Print speed determines how fast the printhead moves while extruding material. Different parts of
                    your print benefit from different speeds.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Outer Walls</span>
                        <span className="text-sm font-medium text-gray-700">20-40 mm/s</span>
                      </div>
                      <Progress value={30} max={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Inner Walls</span>
                        <span className="text-sm font-medium text-gray-700">40-60 mm/s</span>
                      </div>
                      <Progress value={50} max={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Infill</span>
                        <span className="text-sm font-medium text-gray-700">60-100 mm/s</span>
                      </div>
                      <Progress value={80} max={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Travel</span>
                        <span className="text-sm font-medium text-gray-700">120-200 mm/s</span>
                      </div>
                      <Progress value={95} max={100} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${style.tailwindClasses.primaryText}`}>
                    Acceleration & Jerk Control
                  </h3>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=3D printing acceleration and jerk settings"
                      alt="Visualization of acceleration and jerk settings in 3D printing"
                      width={500}
                      height={300}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Advanced slicers allow control over acceleration and jerk (instantaneous speed changes), which can
                    significantly impact print quality and speed.
                  </p>
                  <div className={`p-4 border ${style.tailwindClasses.primaryBorder} rounded-lg`}>
                    <h4 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>Finding the Balance</h4>
                    <p className="text-gray-700 mb-3">
                      Higher acceleration values increase print speed but can introduce ringing artifacts (ghosting).
                      Lower values produce cleaner prints but take longer.
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className={`h-5 w-5 ${style.tailwindClasses.primaryText}`} />
                      <span className="text-sm text-gray-700">
                        Start with your printer's default values and adjust in small increments while testing.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 border-l-4 ${style.tailwindClasses.primaryBorder} bg-teal-50 rounded-r-lg`}>
                <h4 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>
                  Pro Tip: Adaptive Layer Time
                </h4>
                <p className="text-gray-700">
                  Enable "minimum layer time" settings to ensure small layers have enough time to cool before the next
                  layer is printed. This prevents distortion in small, detailed areas while allowing the rest of the
                  print to proceed at full speed.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="strength" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${style.tailwindClasses.primaryText}`}>
                    Infill Density & Pattern
                  </h3>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=3D printing infill patterns comparison"
                      alt="Comparison of different infill patterns in 3D printing"
                      width={500}
                      height={300}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Infill density determines how solid the interior of your print will be, while the pattern affects
                    strength characteristics and material usage.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className={`p-3 border ${style.tailwindClasses.primaryBorder} rounded-lg`}>
                      <h5 className={`font-medium ${style.tailwindClasses.primaryText} mb-1`}>Density Guide</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>
                          <strong>10-20%:</strong> Decorative items
                        </li>
                        <li>
                          <strong>20-40%:</strong> Standard functional parts
                        </li>
                        <li>
                          <strong>40-70%:</strong> Durable components
                        </li>
                        <li>
                          <strong>70-100%:</strong> Maximum strength
                        </li>
                      </ul>
                    </div>
                    <div className={`p-3 border ${style.tailwindClasses.primaryBorder} rounded-lg`}>
                      <h5 className={`font-medium ${style.tailwindClasses.primaryText} mb-1`}>Best Patterns</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>
                          <strong>Cubic/3D:</strong> All-around strength
                        </li>
                        <li>
                          <strong>Gyroid:</strong> Flexible, efficient
                        </li>
                        <li>
                          <strong>Triangular:</strong> Top strength
                        </li>
                        <li>
                          <strong>Grid:</strong> Simple, fast
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${style.tailwindClasses.primaryText}`}>
                    Temperature & Flow Rate
                  </h3>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=3D printing temperature tower test"
                      alt="Temperature tower test showing different temperature settings"
                      width={500}
                      height={300}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Proper temperature and flow rate settings ensure optimal layer adhesion and strength while
                    preventing issues like stringing or under-extrusion.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${style.tailwindClasses.accentBg} text-white`}>
                        <Thermometer className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Temperature</h5>
                        <p className="text-sm text-gray-700">
                          Higher temperatures improve layer adhesion and strength but can cause stringing. Print a
                          temperature tower to find the optimal setting for your filament.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${style.tailwindClasses.accentBg} text-white`}>
                        <Droplet className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Flow Rate</h5>
                        <p className="text-sm text-gray-700">
                          Calibrate your flow rate (extrusion multiplier) to ensure you're not over or under-extruding.
                          This significantly impacts part strength and dimensional accuracy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 border-l-4 ${style.tailwindClasses.primaryBorder} bg-teal-50 rounded-r-lg`}>
                <h4 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>Pro Tip: Adaptive Infill</h4>
                <p className="text-gray-700">
                  Some slicers offer adaptive or variable infill, which increases density near walls, tops, and bottoms
                  while using less material in the core. This provides strength where needed while saving material and
                  print time.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${style.tailwindClasses.primaryText}`}>
                    Support Structures
                  </h3>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=3D printing support structures types"
                      alt="Different types of support structures in 3D printing"
                      width={500}
                      height={300}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Support structures prevent overhangs from collapsing during printing. Configuring them properly is
                    crucial for successful prints while minimizing post-processing.
                  </p>
                  <div className={`p-4 border ${style.tailwindClasses.primaryBorder} rounded-lg`}>
                    <h4 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>Key Support Settings</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>
                        <strong>Overhang Angle:</strong> Typically 45-60°. Lower angles mean more support.
                      </li>
                      <li>
                        <strong>Support Density:</strong> 10-20% is usually sufficient.
                      </li>
                      <li>
                        <strong>Z Distance:</strong> Gap between support and model (0.1-0.2mm).
                      </li>
                      <li>
                        <strong>Pattern:</strong> Zigzag for easy removal, grid for stability.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${style.tailwindClasses.primaryText}`}>
                    Advanced Support Techniques
                  </h3>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=3D printing tree supports and custom supports"
                      alt="Tree supports and custom support placement in 3D printing"
                      width={500}
                      height={300}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Modern slicers offer advanced support options that can save material, reduce print time, and make
                    supports easier to remove.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${style.tailwindClasses.accentBg} text-white`}>
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Tree Supports</h5>
                        <p className="text-sm text-gray-700">
                          Branch-like structures that reach up to overhangs. They use less material, are easier to
                          remove, and can reach around your model.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${style.tailwindClasses.accentBg} text-white`}>
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Custom Supports</h5>
                        <p className="text-sm text-gray-700">
                          Manually place supports exactly where needed, avoiding unnecessary structures and reducing
                          post-processing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 border-l-4 ${style.tailwindClasses.primaryBorder} bg-teal-50 rounded-r-lg`}>
                <h4 className={`font-semibold ${style.tailwindClasses.primaryText} mb-2`}>
                  Pro Tip: Support Interfaces
                </h4>
                <p className="text-gray-700">
                  Enable support interfaces (denser layers where supports meet the model) for a cleaner bottom surface
                  on overhangs while keeping the bulk of supports sparse for easy removal.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Optimization Workflow Section */}
        <section className="mb-16" id="optimization-workflow">
          <h2 className={`text-3xl font-bold mb-8 ${style.tailwindClasses.primaryText}`}>
            Slicer Optimization Workflow
          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-teal-200 transform md:translate-x-0 translate-x-4"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  title: "Analyze Your Model",
                  content:
                    "Before slicing, examine your model for potential issues. Look for thin walls, sharp overhangs, small details, and structural considerations.",
                  icon: <Settings className="h-5 w-5" />,
                  image: "/placeholder.svg?height=300&width=500&query=3D model analysis in slicer software",
                },
                {
                  title: "Choose Quality Profile",
                  content:
                    "Select a base quality profile (draft, standard, or high quality) based on your needs. This sets baseline settings that you can then customize.",
                  icon: <Layers className="h-5 w-5" />,
                  image: "/placeholder.svg?height=300&width=500&query=3D printing quality profiles selection",
                },
                {
                  title: "Optimize Critical Settings",
                  content:
                    "Adjust the most important settings for your specific model: layer height, wall count, infill density, and support configuration.",
                  icon: <Settings className="h-5 w-5" />,
                  image: "/placeholder.svg?height=300&width=500&query=3D printing critical settings adjustment",
                },
                {
                  title: "Preview & Analyze",
                  content:
                    "Use the layer preview to check for potential issues. Look for gaps, thin walls, support placement, and travel moves.",
                  icon: <Maximize2 className="h-5 w-5" />,
                  image: "/placeholder.svg?height=300&width=500&query=3D printing layer preview analysis",
                },
                {
                  title: "Fine-tune & Export",
                  content:
                    "Make final adjustments based on your preview analysis, then export your G-code file for printing.",
                  icon: <Zap className="h-5 w-5" />,
                  image: "/placeholder.svg?height=300&width=500&query=3D printing gcode export",
                },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-teal-500 transform md:translate-x-[-50%] translate-x-[-50%] z-10 flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Content - alternating sides on desktop */}
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"} pl-12 md:pl-0`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`bg-white p-6 rounded-xl shadow-md border ${style.tailwindClasses.primaryBorder}`}
                    >
                      <h3 className={`text-xl font-semibold mb-3 ${style.tailwindClasses.primaryText}`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{step.content}</p>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty div for layout on desktop */}
                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "" : ""}`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="mb-16" id="troubleshooting">
          <h2 className={`text-3xl font-bold mb-8 ${style.tailwindClasses.primaryText}`}>
            Common Slicing Issues & Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Stringing & Oozing",
                problem: "Thin strands of filament between separate parts of your print.",
                solutions: [
                  "Increase retraction distance (3-8mm)",
                  "Increase retraction speed (30-60mm/s)",
                  "Lower printing temperature by 5-10°C",
                  "Enable combing mode to keep travel moves within the print",
                ],
                image: "/placeholder.svg?height=200&width=300&query=3D printing stringing problem",
              },
              {
                title: "Layer Shifting",
                problem: "Layers are misaligned partway through the print.",
                solutions: [
                  "Reduce print speed, especially for outer walls",
                  "Lower acceleration and jerk settings",
                  "Enable Z-hop for travel moves",
                  "Check if your model has thin features that might catch on the nozzle",
                ],
                image: "/placeholder.svg?height=200&width=300&query=3D printing layer shifting problem",
              },
              {
                title: "Gaps in Top Layers",
                problem: "Holes or gaps in the top surface of your print.",
                solutions: [
                  "Increase top layer count (4-6 layers recommended)",
                  "Increase infill density (30-50%)",
                  "Reduce top layer print speed",
                  "Ensure proper cooling for top layers",
                ],
                image: "/placeholder.svg?height=200&width=300&query=3D printing gaps in top layers",
              },
              {
                title: "Warping & Curling",
                problem: "Corners or edges of the print lift off the build plate.",
                solutions: [
                  "Add a brim (5-10mm width)",
                  "Increase first layer width and height",
                  "Reduce cooling fan speed for first few layers",
                  "Use draft shield or printing enclosure",
                ],
                image: "/placeholder.svg?height=200&width=300&query=3D printing warping problem",
              },
              {
                title: "Weak Infill",
                problem: "Infill is sparse or breaks easily, compromising part strength.",
                solutions: [
                  "Increase infill overlap with walls (15-30%)",
                  "Use stronger infill patterns (cubic, gyroid)",
                  "Reduce infill print speed",
                  "Increase infill line width",
                ],
                image: "/placeholder.svg?height=200&width=300&query=3D printing weak infill problem",
              },
              {
                title: "Support Removal Damage",
                problem: "Removing supports damages the model surface.",
                solutions: [
                  "Increase support Z distance (0.1-0.2mm)",
                  "Use support interfaces with higher Z distance",
                  "Try tree supports instead of traditional supports",
                  "Add support blockers in critical areas",
                ],
                image: "/placeholder.svg?height=200&width=300&query=3D printing support removal damage",
              },
            ].map((issue, index) => (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={issue.image || "/placeholder.svg"}
                      alt={`${issue.title} issue in 3D printing`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold">{issue.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2 rounded-full ${style.tailwindClasses.accentBg} text-white flex-shrink-0`}>
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <p className="text-gray-700">
                        <strong>Problem:</strong> {issue.problem}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${style.tailwindClasses.accentBg} text-white flex-shrink-0`}>
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium mb-2">Solutions:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {issue.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-teal-500">•</span>
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div
            className={`rounded-2xl overflow-hidden relative bg-teal-50 border ${style.tailwindClasses.primaryBorder}`}
          >
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/placeholder.svg?height=600&width=1200&query=3D printing slicer software advanced features"
                alt="3D printing slicer software with advanced features"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${style.tailwindClasses.primaryText}`}>
                  Ready to Master Your Slicer?
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-700">
                  Take your 3D printing to the next level with our comprehensive slicer profiles and advanced tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className={style.tailwindClasses.primaryButton}>
                    <Download className="mr-2 h-5 w-5" />
                    Download Optimized Profiles
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`border ${style.tailwindClasses.primaryBorder} ${style.tailwindClasses.primaryText}`}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Advanced Tutorial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 ${style.tailwindClasses.primaryText}`}>Related Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Printer Maintenance",
                description: "Keep your 3D printer in optimal working condition for consistent, high-quality prints.",
                href: "/blueprint/technical-skills/printer-maintenance",
                image: "/placeholder.svg?height=200&width=400&query=3D printer maintenance",
              },
              {
                title: "Troubleshooting Guide",
                description: "Diagnose and fix common 3D printing problems to save time and material.",
                href: "/blueprint/technical-skills/troubleshooting",
                image: "/placeholder.svg?height=200&width=400&query=3D printing troubleshooting",
              },
              {
                title: "Post-Processing",
                description: "Techniques to finish and refine your 3D prints for professional results.",
                href: "/blueprint/technical-skills/post-processing",
                image: "/placeholder.svg?height=200&width=400&query=3D printing post-processing",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${style.tailwindClasses.primaryText}`}>{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <Button asChild variant="outline" className={`${style.tailwindClasses.primaryText} border-teal-200`}>
                    <Link href={item.href}>
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
