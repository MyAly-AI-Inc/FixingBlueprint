"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import MatrixRain from "@/components/matrix-rain"
import ToolCard, { type Tool } from "@/components/tool-card"
import ComparisonTable from "@/components/comparison-table"
import { EnhancedGradientHeading } from "@/components/enhanced-gradient-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileStack,
  BadgeCent,
  TestTubeDiagonal,
  Wrench,
  ListChecks,
  GitFork,
  LightbulbIcon as LightbulbFilament,
  TableProperties,
  Goal,
  ArrowRight,
  ImageDown,
  Pointer,
  Settings,
  Play,
  Download,
  FileCode,
  Repeat,
  Eraser,
  ClipboardEdit,
  SearchCheck,
  GitCompareArrows,
  MousePointerClick,
  Brain,
  Zap,
  Gift,
  AlertTriangle,
  ChevronRight,
  Network,
  Pipette,
} from "lucide-react"
import { PublicNavigation } from "@/components/public-navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { SEOHead } from "@/components/seo-head"
import { OptimizedImage } from "@/components/optimized-image"

const toolsData: Tool[] = [
  {
    id: "makerlab",
    name: "MakerWorld MakerLab",
    icon: "🏆",
    badgeText: "BEST FOR BEGINNERS",
    freeModels: "~50",
    speed: "2-3 min",
    quality: 5,
    description: "Custom model built specifically for 3D printing with watertight guarantees.",
    pros: ["No manifold errors", "Generous free tier", "Earn points for printers"],
    cons: ["Limited artistic flexibility"],
    bestFor: "Functional prints, clean geometry",
    primaryScreenshot: "/placeholder.svg?width=600&height=338",
    thumbnails: ["/placeholder.svg?width=150&height=84", "/placeholder.svg?width=150&height=84"],
  },
  {
    id: "hunyuan",
    name: "Hunyuan 2.5 by Tencent",
    icon: "🐉",
    badgeText: "MOST DETAILED",
    freeModels: "~30",
    speed: "4-7 min",
    quality: 5,
    description: "10 billion parameter model with incredible backside prediction.",
    pros: ["Multi-angle input (up to 4 images)", "Complex organic shapes", "Great predictions"],
    cons: ["Slower processing", "May add Asian features to humans"],
    bestFor: "Complex organic shapes, characters",
    primaryScreenshot: "/placeholder.svg?width=600&height=338",
    thumbnails: ["/placeholder.svg?width=150&height=84", "/placeholder.svg?width=150&height=84"],
  },
  {
    id: "meshy",
    name: "Meshy AI",
    icon: "🚀",
    badgeText: "FASTEST",
    freeModels: "~20",
    speed: "<1 min",
    quality: 4,
    description: "Lightning fast with 4 variations per generation.",
    pros: ["Very fast", "Multiple variations", "Good referral program"],
    cons: ["Quality can vary", "Limited free tier"],
    bestFor: "Quick iterations, testing ideas",
    primaryScreenshot: "/placeholder.svg?width=600&height=338",
    thumbnails: ["/placeholder.svg?width=150&height=84", "/placeholder.svg?width=150&height=84"],
  },
  {
    id: "vizcom",
    name: "Vizcom AI",
    icon: "🎨",
    badgeText: "DESIGNER'S CHOICE",
    freeModels: "~10",
    speed: "<30 sec",
    quality: 5,
    description: "All-in-one workflow from sketch to model with industrial design focus.",
    pros: ["Complete workflow", "Product photography", "Animation capable"],
    cons: ["Limited free tier", "Best for product design"],
    bestFor: "Product design, refined aesthetics",
    primaryScreenshot: "/placeholder.svg?width=600&height=338",
    thumbnails: ["/placeholder.svg?width=150&height=84", "/placeholder.svg?width=150&height=84"],
  },
  {
    id: "rodin",
    name: "Rodin by Hyper3D",
    icon: "🎯",
    badgeText: "PREMIUM QUALITY",
    freeModels: "~5",
    speed: "2-4 min",
    quality: 5,
    description: "High-end results with upcoming multipart meshing.",
    pros: ["Professional quality", "Advanced features coming"],
    cons: ["Very limited free tier", "Expensive"],
    bestFor: "Final production models",
    primaryScreenshot: "/placeholder.svg?width=600&height=338",
    thumbnails: ["/placeholder.svg?width=150&height=84", "/placeholder.svg?width=150&height=84"],
  },
  {
    id: "backflip",
    name: "Backflip AI",
    icon: "🔄",
    badgeText: "BEST EDITOR",
    freeModels: "~15",
    speed: "1-2 min",
    quality: 3,
    description: "Better as an editor than generator, no Blender needed.",
    pros: ["Built-in editing tools", "3D printing focus"],
    cons: ["Generation quality varies"],
    bestFor: "Editing models from other tools",
    primaryScreenshot: "/placeholder.svg?width=600&height=338",
    thumbnails: ["/placeholder.svg?width=150&height=84", "/placeholder.svg?width=150&height=84"],
  },
  {
    id: "printpal",
    name: "PrintPal.io",
    icon: "🆓",
    badgeText: "100% FREE",
    freeModels: "Unlimited",
    speed: "1-2 min",
    quality: 3,
    description: "Simple, free, constantly improving.",
    pros: ["Completely free", "No signup friction"],
    cons: ["Basic features", "Quality varies"],
    bestFor: "Quick tests, budget conscious",
    primaryScreenshot: "/placeholder.svg?width=600&height=338",
    thumbnails: ["/placeholder.svg?width=150&height=84", "/placeholder.svg?width=150&height=84"],
  },
]

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const heroStatsVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } },
}

const AiMeshingToolkitPage = () => {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroImageY = useTransform(heroScrollYProgress, [0, 1], ["0%", "50%"]) // Parallax for hero image

  const decisionMatrixItems = [
    { question: "Need it free?", answer: "MakerLab or PrintPal", icon: Gift },
    { question: "Need it fast?", answer: "Meshy or Vizcom", icon: Zap },
    { question: "Need complexity?", answer: "Hunyuan", icon: Network },
    { question: "Need refinement?", answer: "Vizcom or Rodin", icon: Pipette },
  ]

  const workflowSteps = [
    { title: "Prepare Image", description: "Clean background, single object, good lighting.", icon: ImageDown },
    { title: "Choose Tool", description: "Match tool capabilities to your project needs.", icon: Pointer },
    { title: "Upload & Configure", description: "Upload image(s), adjust generation settings.", icon: Settings },
    { title: "Process", description: "Wait for the AI (30s - 7min).", icon: Play },
    { title: "Export", description: "STL for single color, OBJ for multicolor/textures.", icon: Download },
  ]

  const tips = [
    {
      category: "Image Prep",
      items: [
        "Use a white or clean contrasting background.",
        "Prefer isometric or clear multi-angle views.",
        "Avoid strong shadows or complex lighting.",
      ],
      icon: Eraser,
    },
    {
      category: "Export Format",
      items: [
        "STL: Standard for single-color 3D printing, widely compatible.",
        "OBJ: Use for models with color, textures, or multiple parts.",
      ],
      icon: FileCode,
    },
    {
      category: "Success Strategies",
      items: [
        "Test your prompt/image on multiple tools.",
        "Save variations; initial results might not be perfect.",
        "Iterate on prompts and settings for better output.",
      ],
      icon: Repeat,
    },
  ]

  return (
    <>
      <SEOHead
        title="AI 3D Meshing Toolkit | 3DBlueprint.io"
        description="Discover the best AI tools for 3D model generation from images. Reviews, comparisons, and tips for 3D printing enthusiasts."
        imageUrl="/og-image-ai-toolkit.png"
      />
      <SplashCursor />
      <ScrollProgress />
      <PublicNavigation />
      <div className="bg-gray-950 text-gray-200 min-h-screen font-sans">
        {" "}
        {/* Added font-sans for consistency */}
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20" // Increased min-height and added padding-top
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <MatrixRain className="absolute inset-0 w-full h-full z-0 opacity-30" /> {/* Reduced opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/70 to-gray-950 z-10" />
          <motion.div style={{ y: heroImageY }} className="relative z-10 mb-8 md:mb-12">
            <OptimizedImage
              src="/placeholder.svg?width=400&height=400"
              alt="Abstract 3D Mesh"
              width={300}
              height={300}
              className="opacity-70 hover:opacity-100 transition-opacity duration-500" // Subtle hover effect
            />
          </motion.div>
          <motion.div variants={containerVariants} className="relative z-20 p-4 container mx-auto max-w-4xl">
            {" "}
            {/* Increased max-w */}
            <motion.h1
              variants={heroItemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight" // Increased size, adjusted leading
            >
              <Wrench className="inline-block h-12 w-12 md:h-16 md:w-16 mr-3 -mt-2 text-green-400" />
              The <span className="text-green-400">AI</span> Workshop
            </motion.h1>
            <motion.p
              variants={heroItemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed" // Increased size, adjusted leading
            >
              Eight tools. Each with its own magic. Each with its own quirks.
            </motion.p>
            <motion.p
              variants={heroItemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed" // Increased size, adjusted leading
            >
              I spent months testing them all so you don&apos;t have to. Subscription fees, failed meshes, countless
              hours—all distilled into what actually works.
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 text-lg sm:text-xl" // Increased size and gap
            >
              {[
                { icon: TestTubeDiagonal, text: "8 Tools Tested" },
                { icon: FileStack, text: "200+ Models Created" },
                { icon: BadgeCent, text: "$500+ Saved" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={heroStatsVariants}
                  className="flex items-center bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg" // Increased padding
                >
                  <stat.icon className="h-6 w-6 mr-3 text-green-400" /> {stat.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>
        <main className="container mx-auto px-4 py-20 md:py-32 space-y-24 md:space-y-32">
          {" "}
          {/* Increased padding and spacing */}
          {/* Quick Decision Matrix */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-6xl mx-auto" // Wider container for this section
          >
            <EnhancedGradientHeading
              level="h2"
              text="Quick Decision Matrix"
              icon={ListChecks}
              className="mb-12 text-center" // Increased margin
            />
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {" "}
              {/* Increased gap */}
              {decisionMatrixItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(50, 205, 50, 0.3)" }} // Added shadow
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="bg-gray-800/70 border-green-500/50 hover:border-green-400/80 transition-colors h-full flex flex-col p-6">
                    {" "}
                    {/* Increased padding */}
                    <CardHeader className="p-0 mb-4">
                      {" "}
                      {/* Adjusted padding */}
                      <CardTitle className="text-xl text-green-300 flex items-center">
                        {" "}
                        {/* Increased size */}
                        <item.icon className="h-6 w-6 mr-3 text-green-400" /> {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      {" "}
                      {/* Adjusted padding */}
                      <p className="text-2xl font-semibold text-gray-100 flex items-center leading-tight">
                        {" "}
                        {/* Increased size */}
                        <ArrowRight className="h-7 w-7 mr-3 text-gray-400" /> {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
          {/* Breaker Image Section 1 */}
          <ParallaxImageSection src="/placeholder.svg?width=1920&height=1080" alt="Abstract Technology Background" />
          {/* Tools Showcase Grid */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Adjust amount for earlier trigger
            variants={containerVariants}
          >
            <EnhancedGradientHeading
              level="h2"
              text="AI Meshing Tools Showcase"
              icon={Wrench}
              className="mb-12 text-center" // Increased margin
            />
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {" "}
              {/* Increased gap */}
              {toolsData.map((tool) => (
                <motion.div key={tool.id} variants={itemVariants}>
                  <ToolCard tool={tool} />
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                className="bg-gray-800/60 border border-yellow-500/40 rounded-lg shadow-xl p-8 md:col-span-2 flex flex-col items-center justify-center text-center" // Increased padding and shadow
              >
                <AlertTriangle className="h-16 w-16 text-yellow-400 mb-6" /> {/* Increased size */}
                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Others to Skip (For Now)</h3>{" "}
                {/* Increased size */}
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                  {" "}
                  {/* Increased size */}
                  Tools like Prism, Trellis, and several others were tested. While they have potential, they currently
                  don&apos;t match the capabilities, ease of use, or value proposition of the featured tools for typical
                  3D printing workflows. The AI landscape changes fast, so this may evolve!
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
          {/* Universal Workflow - Visual Redesign */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto" // Wider for workflow
          >
            <EnhancedGradientHeading
              level="h2"
              text="Universal AI Meshing Workflow"
              icon={GitFork}
              className="mb-16 text-center" // Increased margin
            />
            <div className="relative">
              {/* Connecting line - simple version for now, can be enhanced with SVG */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-green-500/30 transform -translate-y-1/2 -z-10" />

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10" // Increased gap
              >
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(50, 205, 50, 0.2)" }}
                    className="relative" // For potential connector elements
                  >
                    <Card className="bg-gray-800/70 border-green-500/50 text-center p-6 h-full flex flex-col items-center justify-start">
                      {" "}
                      {/* Increased padding */}
                      <CardHeader className="p-0 mb-4">
                        <motion.div
                          className="mx-auto bg-green-500/20 p-4 rounded-full w-fit mb-4" // Increased padding
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <step.icon className="h-10 w-10 text-green-400" /> {/* Increased size */}
                        </motion.div>
                        <CardTitle className="text-xl font-semibold text-green-300">
                          {" "}
                          {/* Increased size */}
                          Step {index + 1}: {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-base text-gray-400 leading-relaxed">{step.description}</p>{" "}
                        {/* Increased size */}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
          {/* Breaker Image Section 2 */}
          <ParallaxImageSection src="/placeholder.svg?width=1920&height=1080" alt="Futuristic Mesh Pattern" />
          {/* Tips Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-6xl mx-auto" // Wider
          >
            <EnhancedGradientHeading
              level="h2"
              text="Pro Tips for Success"
              icon={LightbulbFilament}
              className="mb-12 text-center" // Increased margin
            />
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {" "}
              {/* Increased gap */}
              {tips.map((tipCategory) => (
                <motion.div
                  key={tipCategory.category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(50, 205, 50, 0.25)" }}
                >
                  <Card className="bg-gray-800/70 border-green-500/50 p-6 h-full">
                    {" "}
                    {/* Increased padding */}
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl text-green-300 flex items-center">
                        {" "}
                        {/* Increased size */}
                        <tipCategory.icon className="h-6 w-6 mr-3 text-green-400" /> {tipCategory.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-3">
                        {" "}
                        {/* Increased spacing */}
                        {tipCategory.items.map((item, index) => (
                          <li key={index} className="flex items-start text-lg text-gray-300 leading-relaxed">
                            {" "}
                            {/* Increased size */}
                            <ChevronRight className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1.5" />{" "}
                            {/* Adjusted mt */}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
          {/* Comparison Table */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <EnhancedGradientHeading
              level="h2"
              text="Side-by-Side Tool Comparison"
              icon={TableProperties}
              className="mb-12 text-center" // Increased margin
            />
            <motion.div variants={itemVariants}>
              <ComparisonTable tools={toolsData} />
            </motion.div>
          </motion.section>
          {/* Call to Action */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto" // Wider
          >
            <EnhancedGradientHeading level="h2" text="Your Tool Assignment" icon={Goal} className="mb-8" />{" "}
            {/* Increased margin */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01, boxShadow: "0px 0px 25px rgba(50, 205, 50, 0.3)" }}
            >
              <Card className="bg-gradient-to-br from-green-600/20 via-gray-800/80 to-gray-800/80 border-green-500/60 p-8 md:p-10">
                {" "}
                {/* Increased padding */}
                <CardContent className="space-y-6 p-0">
                  {" "}
                  {/* Increased spacing */}
                  <p className="text-2xl text-gray-100 leading-relaxed">
                    {" "}
                    {/* Increased size */}
                    Ready to dive in? Here&apos;s your first mission to find your go-to AI meshing companion:
                  </p>
                  <ul className="space-y-3 text-left text-gray-200 list-inside text-lg">
                    {" "}
                    {/* Increased size and spacing */}
                    {[
                      {
                        text: "Create accounts on the top 3 free-tier tools (MakerLab, PrintPal, Meshy).",
                        icon: ClipboardEdit,
                      },
                      { text: "Run one of your sketches or reference images through each.", icon: SearchCheck },
                      { text: "Compare the results: quality, speed, ease of use.", icon: GitCompareArrows },
                      { text: "Pick your primary tool based on this initial test.", icon: MousePointerClick },
                      { text: "Master it this week: explore all its settings and features.", icon: Brain },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <item.icon className="h-6 w-6 mr-3 text-green-400 flex-shrink-0" /> {item.text}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="mt-8 px-8 py-4 text-lg bg-green-500 hover:bg-green-400 text-gray-900 font-bold animate-gradient-x from-green-400 to-teal-300 shadow-lg hover:shadow-green-400/50 transition-all duration-300" // Enhanced styling
                  >
                    Start Your AI Meshing Journey
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.section>
        </main>
        <ScrollToTop />
      </div>
      {/* Footer is now handled by app/layout.tsx */}
    </>
  )
}

// New component for Parallax Image Sections
const ParallaxImageSection: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animate when section is visible
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) // Adjust parallax intensity

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="opacity-40" // Adjust opacity as needed
        />
        <div className="absolute inset-0 bg-gray-950/50"></div> {/* Optional overlay */}
      </motion.div>
    </section>
  )
}

export default AiMeshingToolkitPage
