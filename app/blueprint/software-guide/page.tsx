"use client"

import { BlueprintDashboardLayout } from "@/components/blueprint-dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContentCard } from "@/components/responsive-content-card"
import { ResponsiveGrid } from "@/components/responsive-grid"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  Shapes,
  Layers,
  Printer,
  Brush,
  Code,
  Zap,
  CheckCircle,
  XCircle,
  HelpCircle,
  Info,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

export default function SoftwareGuidePage() {
  const softwareCategories = [
    {
      id: "modeling",
      name: "3D Modeling",
      icon: <Shapes className="h-5 w-5" />,
      description: "Software for creating 3D models from scratch",
    },
    {
      id: "slicing",
      name: "Slicing",
      icon: <Layers className="h-5 w-5" />,
      description: "Software for preparing 3D models for printing",
    },
    {
      id: "printing",
      name: "Printer Control",
      icon: <Printer className="h-5 w-5" />,
      description: "Software for controlling and monitoring your 3D printer",
    },
    {
      id: "post",
      name: "Post-Processing",
      icon: <Brush className="h-5 w-5" />,
      description: "Software for finishing and enhancing 3D printed models",
    },
    {
      id: "specialized",
      name: "Specialized",
      icon: <Zap className="h-5 w-5" />,
      description: "Software for specific 3D printing applications",
    },
  ]

  const modelingSoftware = [
    {
      name: "Blender",
      description: "Free and open-source 3D creation suite with powerful modeling tools.",
      imageSrc: "/placeholder.svg?key=xqdm1",
      difficulty: "intermediate",
      pricing: "Free",
      platform: "Windows, macOS, Linux",
      bestFor: "General 3D modeling, animation, and rendering",
      learningCurve: 75,
      features: ["Sculpting", "Animation", "Rendering", "Texturing", "Simulation"],
      url: "https://www.blender.org/",
    },
    {
      name: "Fusion 360",
      description: "Integrated CAD, CAM, and CAE software for product design and manufacturing.",
      imageSrc: "/placeholder.svg?key=ck4t3",
      difficulty: "intermediate",
      pricing: "Free for personal use, Paid for commercial",
      platform: "Windows, macOS",
      bestFor: "Mechanical design, engineering, and precision modeling",
      learningCurve: 65,
      features: ["Parametric Modeling", "Assembly Design", "Simulation", "CAM", "Rendering"],
      url: "https://www.autodesk.com/products/fusion-360/",
    },
    {
      name: "TinkerCAD",
      description: "Browser-based, easy-to-use 3D design and modeling tool, perfect for beginners.",
      imageSrc: "/placeholder.svg?key=f6ulb",
      difficulty: "beginner",
      pricing: "Free",
      platform: "Web Browser",
      bestFor: "Beginners, education, simple designs",
      learningCurve: 25,
      features: ["Basic Shapes", "Simple Interface", "Web-Based", "Collaboration", "STL Export"],
      url: "https://www.tinkercad.com/",
    },
    {
      name: "FreeCAD",
      description: "Open-source parametric 3D modeler made primarily for mechanical design.",
      imageSrc: "/placeholder.svg?key=ypp0x",
      difficulty: "intermediate",
      pricing: "Free",
      platform: "Windows, macOS, Linux",
      bestFor: "Mechanical design, architecture, and product design",
      learningCurve: 70,
      features: ["Parametric Modeling", "Technical Drawing", "Robot Simulation", "Rendering", "FEM Analysis"],
      url: "https://www.freecadweb.org/",
    },
    {
      name: "ZBrush",
      description: "Digital sculpting tool that combines 3D modeling with painting and texturing.",
      imageSrc: "/placeholder.svg?key=zdcks",
      difficulty: "advanced",
      pricing: "Paid",
      platform: "Windows, macOS",
      bestFor: "Organic modeling, character design, and detailed sculpting",
      learningCurve: 85,
      features: ["Digital Sculpting", "Dynamic Subdivision", "Texturing", "Painting", "3D Printing Preparation"],
      url: "https://pixologic.com/",
    },
    {
      name: "SketchUp",
      description: "User-friendly 3D modeling software for architecture, interior design, and more.",
      imageSrc: "/placeholder.svg?key=qsq81",
      difficulty: "beginner",
      pricing: "Free and Paid versions",
      platform: "Windows, macOS, Web Browser",
      bestFor: "Architecture, interior design, and woodworking",
      learningCurve: 40,
      features: ["Push/Pull Tools", "3D Warehouse", "Extensions", "Layout", "STL Export"],
      url: "https://www.sketchup.com/",
    },
  ]

  const slicingSoftware = [
    {
      name: "Cura",
      description: "Popular open-source slicing software with extensive printer compatibility.",
      imageSrc: "/placeholder.svg?key=ricv5",
      difficulty: "beginner",
      pricing: "Free",
      platform: "Windows, macOS, Linux",
      bestFor: "General 3D printing, beginners to advanced users",
      learningCurve: 40,
      features: ["Printer Profiles", "Layer Preview", "Print Settings", "Plugins", "Support Generation"],
      url: "https://ultimaker.com/software/ultimaker-cura",
    },
    {
      name: "PrusaSlicer",
      description: "Open-source slicing software developed by Prusa Research with powerful features.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=prusaslicer software interface",
      difficulty: "intermediate",
      pricing: "Free",
      platform: "Windows, macOS, Linux",
      bestFor: "Prusa printers, detailed control over print settings",
      learningCurve: 50,
      features: ["Multi-Material", "Paint-on Supports", "Variable Layer Height", "Printer Profiles", "Modifiers"],
      url: "https://www.prusa3d.com/prusaslicer/",
    },
    {
      name: "Simplify3D",
      description: "Premium slicing software with advanced features for professional users.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=simplify3d software interface",
      difficulty: "intermediate",
      pricing: "Paid",
      platform: "Windows, macOS, Linux",
      bestFor: "Professional users, complex prints, multi-extrusion",
      learningCurve: 60,
      features: ["Custom Supports", "Process Management", "Detailed Preview", "Multi-Extrusion", "Script Editor"],
      url: "https://www.simplify3d.com/",
    },
  ]

  const printerControlSoftware = [
    {
      name: "OctoPrint",
      description: "Web interface for controlling 3D printers with monitoring capabilities.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=octoprint interface with 3d printer",
      difficulty: "intermediate",
      pricing: "Free",
      platform: "Raspberry Pi, Linux, Windows, macOS",
      bestFor: "Remote monitoring and control of 3D printers",
      learningCurve: 55,
      features: ["Remote Control", "Webcam Integration", "Plugin System", "File Management", "Print Statistics"],
      url: "https://octoprint.org/",
    },
    {
      name: "Repetier-Host",
      description: "All-in-one solution for slicing and controlling 3D printers.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=repetier host software interface",
      difficulty: "intermediate",
      pricing: "Free",
      platform: "Windows, macOS, Linux",
      bestFor: "Direct printer control and multi-extruder printing",
      learningCurve: 60,
      features: [
        "Multiple Slicer Integration",
        "G-code Editor",
        "Multi-Extruder Support",
        "3D Visualization",
        "Manual Control",
      ],
      url: "https://www.repetier.com/",
    },
  ]

  const postProcessingSoftware = [
    {
      name: "Meshmixer",
      description: "Software for working with triangle meshes, ideal for 3D print preparation and repair.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=meshmixer software interface",
      difficulty: "intermediate",
      pricing: "Free",
      platform: "Windows, macOS",
      bestFor: "Mesh repair, support generation, and model modification",
      learningCurve: 65,
      features: ["Mesh Analysis", "Support Generation", "Hollowing", "Remeshing", "Boolean Operations"],
      url: "https://www.meshmixer.com/",
    },
    {
      name: "Netfabb",
      description: "Professional software for additive manufacturing and design.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=netfabb software interface",
      difficulty: "advanced",
      pricing: "Free Basic version, Paid Premium",
      platform: "Windows",
      bestFor: "Model repair, packing, and advanced manufacturing preparation",
      learningCurve: 75,
      features: ["Mesh Repair", "Part Packing", "Lattice Structures", "Support Generation", "Simulation"],
      url: "https://www.autodesk.com/products/netfabb/",
    },
  ]

  const specializedSoftware = [
    {
      name: "OpenSCAD",
      description: "Programming-based 3D modeling software for creating precise models.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=openscad software interface",
      difficulty: "advanced",
      pricing: "Free",
      platform: "Windows, macOS, Linux",
      bestFor: "Programmers, parametric designs, and precise technical models",
      learningCurve: 80,
      features: ["Script-Based Modeling", "Parametric Design", "CSG Modeling", "Import/Export", "2D Subsystem"],
      url: "https://www.openscad.org/",
    },
    {
      name: "3D-Tool",
      description: "CAD viewer and converter with measurement and analysis tools.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=3d tool software interface",
      difficulty: "intermediate",
      pricing: "Paid with Free Trial",
      platform: "Windows",
      bestFor: "CAD file viewing, conversion, and analysis",
      learningCurve: 60,
      features: ["CAD Conversion", "Measurement", "Cross-Section", "Comparison", "Markup"],
      url: "https://www.3d-tool.com/",
    },
  ]

  const softwareComparison = {
    modeling: [
      {
        criteria: "Ease of Use",
        Blender: "Moderate",
        "Fusion 360": "Moderate",
        TinkerCAD: "Easy",
        FreeCAD: "Moderate",
        ZBrush: "Difficult",
        SketchUp: "Easy",
      },
      {
        criteria: "Learning Resources",
        Blender: "Excellent",
        "Fusion 360": "Excellent",
        TinkerCAD: "Good",
        FreeCAD: "Moderate",
        ZBrush: "Good",
        SketchUp: "Excellent",
      },
      {
        criteria: "Precision Modeling",
        Blender: "Good",
        "Fusion 360": "Excellent",
        TinkerCAD: "Limited",
        FreeCAD: "Excellent",
        ZBrush: "Limited",
        SketchUp: "Moderate",
      },
      {
        criteria: "Organic Modeling",
        Blender: "Excellent",
        "Fusion 360": "Limited",
        TinkerCAD: "Poor",
        FreeCAD: "Poor",
        ZBrush: "Excellent",
        SketchUp: "Poor",
      },
      {
        criteria: "3D Print Preparation",
        Blender: "Good",
        "Fusion 360": "Excellent",
        TinkerCAD: "Good",
        FreeCAD: "Good",
        ZBrush: "Good",
        SketchUp: "Limited",
      },
    ],
    slicing: [
      {
        criteria: "User Interface",
        Cura: "Good",
        PrusaSlicer: "Good",
        Simplify3D: "Excellent",
      },
      {
        criteria: "Support Generation",
        Cura: "Good",
        PrusaSlicer: "Excellent",
        Simplify3D: "Excellent",
      },
      {
        criteria: "Print Quality",
        Cura: "Good",
        PrusaSlicer: "Excellent",
        Simplify3D: "Excellent",
      },
      {
        criteria: "Printer Compatibility",
        Cura: "Excellent",
        PrusaSlicer: "Good",
        Simplify3D: "Excellent",
      },
      {
        criteria: "Advanced Features",
        Cura: "Good",
        PrusaSlicer: "Good",
        Simplify3D: "Excellent",
      },
    ],
  }

  const tutorials = [
    {
      title: "Blender Basics for 3D Printing",
      description: "Learn how to use Blender to create models optimized for 3D printing.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=person using blender for 3d printing",
      href: "/blueprint/tutorials/blender-basics",
      category: "Modeling",
      readTime: "45 min",
      difficulty: "beginner",
    },
    {
      title: "Mastering Cura Slicer Settings",
      description: "Optimize your print settings in Cura for different materials and print quality.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=cura slicer settings optimization",
      href: "/blueprint/tutorials/cura-settings",
      category: "Slicing",
      readTime: "30 min",
      difficulty: "intermediate",
    },
    {
      title: "TinkerCAD for Beginners",
      description: "Get started with TinkerCAD and create your first 3D printable model.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=person using tinkercad on computer",
      href: "/blueprint/tutorials/tinkercad-beginners",
      category: "Modeling",
      readTime: "20 min",
      difficulty: "beginner",
    },
    {
      title: "Setting Up OctoPrint",
      description: "Install and configure OctoPrint for remote printer monitoring and control.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=octoprint setup with raspberry pi",
      href: "/blueprint/tutorials/octoprint-setup",
      category: "Printer Control",
      readTime: "60 min",
      difficulty: "intermediate",
    },
    {
      title: "Advanced Mesh Repair with Meshmixer",
      description: "Fix common mesh issues and prepare models for perfect 3D printing.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=meshmixer repair tools interface",
      href: "/blueprint/tutorials/meshmixer-repair",
      category: "Post-Processing",
      readTime: "40 min",
      difficulty: "advanced",
    },
    {
      title: "Parametric Modeling with Fusion 360",
      description: "Create adaptable models that can be easily modified using parameters.",
      imageSrc: "/placeholder.svg?height=300&width=600&query=fusion 360 parametric modeling",
      href: "/blueprint/tutorials/fusion-parametric",
      category: "Modeling",
      readTime: "50 min",
      difficulty: "intermediate",
    },
  ]

  return (
    <BlueprintDashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Link href="/blueprint">
                <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                  <ChevronLeft className="h-4 w-4" /> Dashboard
                </Button>
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/blueprint/design-basics">
                <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                  Design & Modeling
                </Button>
              </Link>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">3D Printing Software Guide</h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Comprehensive overview of software tools for every stage of the 3D printing process
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <Button variant="outline" size="sm" className="h-8 md:h-9">
              <Info className="mr-2 h-4 w-4" /> Software Compatibility
            </Button>
            <Button size="sm" className="h-8 md:h-9">
              <Download className="mr-2 h-4 w-4" /> Download Guide PDF
            </Button>
          </div>
        </div>

        {/* Introduction Card */}
        <Card className="bg-gradient-to-r from-blue-50 to-sky-50 border-blue-100">
          <CardContent className="p-6">
            <div className="md:flex gap-6 items-center">
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold mb-3">Choosing the Right Software</h2>
                <p className="mb-4">
                  The right software can make a significant difference in your 3D printing workflow. This guide will
                  help you navigate the various options available for each stage of the process, from designing your
                  model to controlling your printer and post-processing your prints.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">Beginner-Friendly Options</Badge>
                  <Badge className="bg-green-100 text-green-800">Free Alternatives</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Professional Tools</Badge>
                </div>
              </div>
              <div className="hidden md:block md:w-1/3 relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=3d printing software workflow diagram"
                  alt="3D Printing Software Workflow"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Software Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {softwareCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Software Tabs */}
        <Tabs defaultValue="modeling" className="space-y-6">
          <TabsList className="w-full md:w-auto flex flex-wrap justify-start">
            <TabsTrigger value="modeling" className="text-sm">
              <Shapes className="mr-2 h-4 w-4" /> 3D Modeling
            </TabsTrigger>
            <TabsTrigger value="slicing" className="text-sm">
              <Layers className="mr-2 h-4 w-4" /> Slicing
            </TabsTrigger>
            <TabsTrigger value="printing" className="text-sm">
              <Printer className="mr-2 h-4 w-4" /> Printer Control
            </TabsTrigger>
            <TabsTrigger value="post" className="text-sm">
              <Brush className="mr-2 h-4 w-4" /> Post-Processing
            </TabsTrigger>
            <TabsTrigger value="specialized" className="text-sm">
              <Code className="mr-2 h-4 w-4" /> Specialized
            </TabsTrigger>
          </TabsList>

          {/* 3D Modeling Software */}
          <TabsContent value="modeling" className="space-y-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">3D Modeling Software</h2>
              <p className="text-muted-foreground">
                3D modeling software allows you to create digital models that can be printed. Different software options
                cater to various skill levels and design needs.
              </p>

              {/* Software Comparison Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Software Comparison</CardTitle>
                  <CardDescription>
                    Compare key features and capabilities of popular 3D modeling software
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">Criteria</TableHead>
                        <TableHead>Blender</TableHead>
                        <TableHead>Fusion 360</TableHead>
                        <TableHead>TinkerCAD</TableHead>
                        <TableHead>FreeCAD</TableHead>
                        <TableHead>ZBrush</TableHead>
                        <TableHead>SketchUp</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {softwareComparison.modeling.map((row) => (
                        <TableRow key={row.criteria}>
                          <TableCell className="font-medium">{row.criteria}</TableCell>
                          <TableCell>{row["Blender"]}</TableCell>
                          <TableCell>{row["Fusion 360"]}</TableCell>
                          <TableCell>{row["TinkerCAD"]}</TableCell>
                          <TableCell>{row["FreeCAD"]}</TableCell>
                          <TableCell>{row["ZBrush"]}</TableCell>
                          <TableCell>{row["SketchUp"]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Software Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modelingSoftware.map((software) => (
                  <Card key={software.name} className="overflow-hidden flex flex-col h-full">
                    <div className="relative h-48">
                      <Image
                        src={software.imageSrc || "/placeholder.svg"}
                        alt={software.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={`
                            ${software.difficulty === "beginner" ? "bg-green-100 text-green-800" : ""}
                            ${software.difficulty === "intermediate" ? "bg-blue-100 text-blue-800" : ""}
                            ${software.difficulty === "advanced" ? "bg-purple-100 text-purple-800" : ""}
                          `}
                        >
                          {software.difficulty.charAt(0).toUpperCase() + software.difficulty.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>{software.name}</CardTitle>
                        <Badge variant="outline" className="font-mono">
                          {software.pricing}
                        </Badge>
                      </div>
                      <CardDescription>{software.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium mb-1">Platform</p>
                          <p className="text-sm text-muted-foreground">{software.platform}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Best For</p>
                          <p className="text-sm text-muted-foreground">{software.bestFor}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Learning Curve</p>
                          <div className="flex items-center gap-2">
                            <Progress value={software.learningCurve} className="h-2 flex-grow" />
                            <span className="text-xs text-muted-foreground">{software.learningCurve}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Key Features</p>
                          <div className="flex flex-wrap gap-1">
                            {software.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button asChild className="w-full">
                        <a href={software.url} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Getting Started with Blender */}
              <Card className="border-blue-100">
                <div className="md:flex">
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=blender interface tutorial for beginners"
                      alt="Getting Started with Blender"
                      fill
                      className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:flex-1">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Featured Tutorial</Badge>
                    <h2 className="text-xl font-bold mb-2">Getting Started with Blender for 3D Printing</h2>
                    <p className="mb-4">
                      Learn the basics of Blender's interface and tools specifically for creating 3D printable models.
                      This tutorial covers navigation, modeling techniques, and export settings optimized for 3D
                      printing.
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">45 minutes</span>
                      <span className="text-muted-foreground">•</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Beginner
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button>
                        Start Tutorial <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">Download Project Files</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Slicing Software */}
          <TabsContent value="slicing" className="space-y-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Slicing Software</h2>
              <p className="text-muted-foreground">
                Slicing software converts 3D models into instructions (G-code) that your 3D printer can understand. It
                allows you to configure print settings like layer height, infill, and supports.
              </p>

              {/* Software Comparison Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Slicer Comparison</CardTitle>
                  <CardDescription>Compare key features and capabilities of popular slicing software</CardDescription>
                </CardHeader>
                <CardContent className="p-0 overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">Criteria</TableHead>
                        <TableHead>Cura</TableHead>
                        <TableHead>PrusaSlicer</TableHead>
                        <TableHead>Simplify3D</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {softwareComparison.slicing.map((row) => (
                        <TableRow key={row.criteria}>
                          <TableCell className="font-medium">{row.criteria}</TableCell>
                          <TableCell>{row["Cura"]}</TableCell>
                          <TableCell>{row["PrusaSlicer"]}</TableCell>
                          <TableCell>{row["Simplify3D"]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Software Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {slicingSoftware.map((software) => (
                  <Card key={software.name} className="overflow-hidden flex flex-col h-full">
                    <div className="relative h-48">
                      <Image
                        src={software.imageSrc || "/placeholder.svg"}
                        alt={software.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={`
                            ${software.difficulty === "beginner" ? "bg-green-100 text-green-800" : ""}
                            ${software.difficulty === "intermediate" ? "bg-blue-100 text-blue-800" : ""}
                            ${software.difficulty === "advanced" ? "bg-purple-100 text-purple-800" : ""}
                          `}
                        >
                          {software.difficulty.charAt(0).toUpperCase() + software.difficulty.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>{software.name}</CardTitle>
                        <Badge variant="outline" className="font-mono">
                          {software.pricing}
                        </Badge>
                      </div>
                      <CardDescription>{software.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium mb-1">Platform</p>
                          <p className="text-sm text-muted-foreground">{software.platform}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Best For</p>
                          <p className="text-sm text-muted-foreground">{software.bestFor}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Learning Curve</p>
                          <div className="flex items-center gap-2">
                            <Progress value={software.learningCurve} className="h-2 flex-grow" />
                            <span className="text-xs text-muted-foreground">{software.learningCurve}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Key Features</p>
                          <div className="flex flex-wrap gap-1">
                            {software.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button asChild className="w-full">
                        <a href={software.url} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Cura Settings Guide */}
              <Card className="border-blue-100">
                <div className="md:flex">
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=cura slicer settings optimization guide"
                      alt="Cura Settings Guide"
                      fill
                      className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:flex-1">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Featured Guide</Badge>
                    <h2 className="text-xl font-bold mb-2">Mastering Cura Slicer Settings</h2>
                    <p className="mb-4">
                      Learn how to optimize your print settings in Cura for different materials and print quality. This
                      guide covers essential settings like layer height, infill, supports, and speed to achieve the best
                      results.
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">30 minutes</span>
                      <span className="text-muted-foreground">•</span>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        Intermediate
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button>
                        View Guide <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">Download Settings Profiles</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Printer Control Software */}
          <TabsContent value="printing" className="space-y-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Printer Control Software</h2>
              <p className="text-muted-foreground">
                Printer control software allows you to operate and monitor your 3D printer, often remotely. These tools
                provide interfaces for sending commands, tracking print progress, and managing print jobs.
              </p>

              {/* Software Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {printerControlSoftware.map((software) => (
                  <Card key={software.name} className="overflow-hidden flex flex-col h-full">
                    <div className="relative h-48">
                      <Image
                        src={software.imageSrc || "/placeholder.svg"}
                        alt={software.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={`
                            ${software.difficulty === "beginner" ? "bg-green-100 text-green-800" : ""}
                            ${software.difficulty === "intermediate" ? "bg-blue-100 text-blue-800" : ""}
                            ${software.difficulty === "advanced" ? "bg-purple-100 text-purple-800" : ""}
                          `}
                        >
                          {software.difficulty.charAt(0).toUpperCase() + software.difficulty.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>{software.name}</CardTitle>
                        <Badge variant="outline" className="font-mono">
                          {software.pricing}
                        </Badge>
                      </div>
                      <CardDescription>{software.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium mb-1">Platform</p>
                          <p className="text-sm text-muted-foreground">{software.platform}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Best For</p>
                          <p className="text-sm text-muted-foreground">{software.bestFor}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Learning Curve</p>
                          <div className="flex items-center gap-2">
                            <Progress value={software.learningCurve} className="h-2 flex-grow" />
                            <span className="text-xs text-muted-foreground">{software.learningCurve}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Key Features</p>
                          <div className="flex flex-wrap gap-1">
                            {software.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button asChild className="w-full">
                        <a href={software.url} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* OctoPrint Setup Guide */}
              <Card className="border-blue-100">
                <div className="md:flex">
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=octoprint setup with raspberry pi and 3d printer"
                      alt="OctoPrint Setup Guide"
                      fill
                      className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:flex-1">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Featured Guide</Badge>
                    <h2 className="text-xl font-bold mb-2">Setting Up OctoPrint for Remote Printing</h2>
                    <p className="mb-4">
                      Learn how to install and configure OctoPrint on a Raspberry Pi for remote monitoring and control
                      of your 3D printer. This guide covers hardware setup, software installation, and essential
                      plugins.
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">60 minutes</span>
                      <span className="text-muted-foreground">•</span>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        Intermediate
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button>
                        View Guide <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">Download Setup Checklist</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Post-Processing Software */}
          <TabsContent value="post" className="space-y-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Post-Processing Software</h2>
              <p className="text-muted-foreground">
                Post-processing software helps you repair, modify, and enhance 3D models after they've been created or
                before printing. These tools are essential for ensuring printability and fixing common mesh issues.
              </p>

              {/* Software Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {postProcessingSoftware.map((software) => (
                  <Card key={software.name} className="overflow-hidden flex flex-col h-full">
                    <div className="relative h-48">
                      <Image
                        src={software.imageSrc || "/placeholder.svg"}
                        alt={software.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={`
                            ${software.difficulty === "beginner" ? "bg-green-100 text-green-800" : ""}
                            ${software.difficulty === "intermediate" ? "bg-blue-100 text-blue-800" : ""}
                            ${software.difficulty === "advanced" ? "bg-purple-100 text-purple-800" : ""}
                          `}
                        >
                          {software.difficulty.charAt(0).toUpperCase() + software.difficulty.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>{software.name}</CardTitle>
                        <Badge variant="outline" className="font-mono">
                          {software.pricing}
                        </Badge>
                      </div>
                      <CardDescription>{software.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium mb-1">Platform</p>
                          <p className="text-sm text-muted-foreground">{software.platform}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Best For</p>
                          <p className="text-sm text-muted-foreground">{software.bestFor}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Learning Curve</p>
                          <div className="flex items-center gap-2">
                            <Progress value={software.learningCurve} className="h-2 flex-grow" />
                            <span className="text-xs text-muted-foreground">{software.learningCurve}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Key Features</p>
                          <div className="flex flex-wrap gap-1">
                            {software.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button asChild className="w-full">
                        <a href={software.url} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Meshmixer Guide */}
              <Card className="border-blue-100">
                <div className="md:flex">
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=meshmixer repair tools for 3d printing"
                      alt="Meshmixer Repair Guide"
                      fill
                      className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:flex-1">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Featured Guide</Badge>
                    <h2 className="text-xl font-bold mb-2">Advanced Mesh Repair with Meshmixer</h2>
                    <p className="mb-4">
                      Learn how to use Meshmixer to fix common mesh issues like holes, non-manifold edges, and
                      self-intersections. This guide covers essential repair tools and techniques to prepare models for
                      successful 3D printing.
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">40 minutes</span>
                      <span className="text-muted-foreground">•</span>
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">
                        Advanced
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button>
                        View Guide <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">Download Practice Files</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Specialized Software */}
          <TabsContent value="specialized" className="space-y-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Specialized Software</h2>
              <p className="text-muted-foreground">
                Specialized software tools cater to specific needs in the 3D printing workflow, such as parametric
                design, CAD file conversion, or script-based modeling.
              </p>

              {/* Software Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specializedSoftware.map((software) => (
                  <Card key={software.name} className="overflow-hidden flex flex-col h-full">
                    <div className="relative h-48">
                      <Image
                        src={software.imageSrc || "/placeholder.svg"}
                        alt={software.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={`
                            ${software.difficulty === "beginner" ? "bg-green-100 text-green-800" : ""}
                            ${software.difficulty === "intermediate" ? "bg-blue-100 text-blue-800" : ""}
                            ${software.difficulty === "advanced" ? "bg-purple-100 text-purple-800" : ""}
                          `}
                        >
                          {software.difficulty.charAt(0).toUpperCase() + software.difficulty.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>{software.name}</CardTitle>
                        <Badge variant="outline" className="font-mono">
                          {software.pricing}
                        </Badge>
                      </div>
                      <CardDescription>{software.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium mb-1">Platform</p>
                          <p className="text-sm text-muted-foreground">{software.platform}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Best For</p>
                          <p className="text-sm text-muted-foreground">{software.bestFor}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Learning Curve</p>
                          <div className="flex items-center gap-2">
                            <Progress value={software.learningCurve} className="h-2 flex-grow" />
                            <span className="text-xs text-muted-foreground">{software.learningCurve}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Key Features</p>
                          <div className="flex flex-wrap gap-1">
                            {software.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button asChild className="w-full">
                        <a href={software.url} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* OpenSCAD Guide */}
              <Card className="border-blue-100">
                <div className="md:flex">
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=openscad parametric design code example"
                      alt="OpenSCAD Guide"
                      fill
                      className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:flex-1">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Featured Guide</Badge>
                    <h2 className="text-xl font-bold mb-2">Parametric Design with OpenSCAD</h2>
                    <p className="mb-4">
                      Learn how to create parametric 3D models using OpenSCAD's programming approach. This guide covers
                      basic syntax, geometric primitives, transformations, and creating customizable designs.
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">50 minutes</span>
                      <span className="text-muted-foreground">•</span>
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">
                        Advanced
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button>
                        View Guide <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">Download Example Scripts</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Tutorials Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Related Tutorials</h2>
            <Button variant="outline" size="sm">
              View All Tutorials
            </Button>
          </div>

          <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3 }}>
            {tutorials.map((tutorial) => (
              <ResponsiveContentCard
                key={tutorial.title}
                title={tutorial.title}
                description={tutorial.description}
                imageSrc={tutorial.imageSrc}
                href={tutorial.href}
                category={tutorial.category}
                readTime={tutorial.readTime}
                difficulty={tutorial.difficulty}
              />
            ))}
          </ResponsiveGrid>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Common questions about 3D printing software</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-blue-600" /> Do I need different software for designing and
                printing?
              </h3>
              <p className="text-sm text-muted-foreground pl-6">
                Yes, typically you'll need at least two types of software: a 3D modeling program to create your designs
                and a slicer to prepare those designs for printing. Some all-in-one solutions exist, but specialized
                tools often provide better results for each step.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-blue-600" /> Which software is best for beginners?
              </h3>
              <p className="text-sm text-muted-foreground pl-6">
                For beginners, TinkerCAD is an excellent starting point for 3D modeling due to its simple interface and
                browser-based access. For slicing, Cura offers a user-friendly experience with both basic and advanced
                options as you progress.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-blue-600" /> Is free software good enough for serious 3D printing?
              </h3>
              <p className="text-sm text-muted-foreground pl-6">
                Many free options like Blender, FreeCAD, and PrusaSlicer are used by professionals and can produce
                excellent results. Paid software may offer specific features or workflows that benefit certain users,
                but free software is more than capable for most applications.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-blue-600" /> How do I choose between different slicers?
              </h3>
              <p className="text-sm text-muted-foreground pl-6">
                Consider factors like your printer compatibility, user interface preferences, and specific features you
                need. Many users try multiple slicers and settle on one that works best for their workflow. Some
                printers work better with specific slicers, so check manufacturer recommendations.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Software Compatibility Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Software Compatibility Chart</CardTitle>
            <CardDescription>File format compatibility between different software</CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Software</TableHead>
                  <TableHead>STL</TableHead>
                  <TableHead>OBJ</TableHead>
                  <TableHead>3MF</TableHead>
                  <TableHead>STEP</TableHead>
                  <TableHead>FBX</TableHead>
                  <TableHead>GCODE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Blender</TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fusion 360</TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">TinkerCAD</TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cura</TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">PrusaSlicer</TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Meshmixer</TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                  <TableCell>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="p-4">
            <p className="text-sm text-muted-foreground">
              This chart shows common file format compatibility. Some software may require plugins or extensions for
              additional format support.
            </p>
          </CardFooter>
        </Card>

        {/* Resources Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Software Update Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn how to keep your 3D printing software up to date and manage version transitions smoothly.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Guides
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Software Troubleshooting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Solutions for common issues and errors encountered when using 3D printing software.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Solutions
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Community Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with other users to share tips, ask questions, and solve software-related challenges.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Join Discussion
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </BlueprintDashboardLayout>
  )
}
