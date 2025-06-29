import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Layers,
  Settings,
  ShoppingCart,
  Zap,
  Check,
  X,
  Clock,
  Users,
  Star,
  Award,
  Lightbulb,
  Target,
  HelpCircle,
} from "lucide-react"
import { PathFinderTool } from "@/components/path-finder-tool"

export default function BlueprintPage() {
  return (
    <>
      {/* Header Section with Texture Background */}
      <section className="relative py-32 overflow-hidden min-h-[400px] flex items-center">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
          <Image
            src="/images/3d-printing-neon-lab.jpeg"
            alt="Blueprint Background"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-800/40 to-blue-900/80"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 z-10 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Content */}
        <div className="container relative z-20 mx-auto px-4 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center mt-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
              Blueprint Learning Platform
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your comprehensive guide to mastering 3D printing skills and building a profitable business
            </p>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600"></div>
      </section>

      {/* Blueprint Fundamentals - Blue */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full mb-4">
                <BookOpen size={16} />
                <span className="font-medium">Blueprint Fundamentals</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Start Your 3D Printing Journey</h2>
              <p className="text-blue-700 mb-6">
                Master the essentials of 3D printing with our comprehensive fundamentals track. Learn printer selection,
                setup, materials, and complete your first successful prints.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 text-sm font-bold">1</span>
                  </div>
                  <span className="text-blue-800">Printer Selection</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 text-sm font-bold">2</span>
                  </div>
                  <span className="text-blue-800">Setup Guide</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 text-sm font-bold">3</span>
                  </div>
                  <span className="text-blue-800">Material Basics</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 text-sm font-bold">4</span>
                  </div>
                  <span className="text-blue-800">First Prints</span>
                </div>
              </div>

              <Link
                href="/#early-access"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Fundamentals
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/3d-printing-lab-with-filaments.png"
                  alt="3D Printing Fundamentals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                  Beginner Friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design and Modeling - Green */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/3d-design-hologram.png"
                  alt="3D Design and Modeling"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
                  Creative Design
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full mb-4">
                <Layers size={16} />
                <span className="font-medium">Design & Modeling</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Create Professional 3D Models</h2>
              <p className="text-green-700 mb-6">
                Learn to design and optimize 3D models for successful printing and marketability. Master CAD software,
                design principles, and advanced modeling techniques.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 text-sm font-bold">1</span>
                  </div>
                  <span className="text-green-800">CAD Fundamentals</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 text-sm font-bold">2</span>
                  </div>
                  <span className="text-green-800">Software Tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 text-sm font-bold">3</span>
                  </div>
                  <span className="text-green-800">Design Optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 text-sm font-bold">4</span>
                  </div>
                  <span className="text-green-800">Advanced Features</span>
                </div>
              </div>

              <Link
                href="/#early-access"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Design & Modeling
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise - Orange */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1 rounded-full mb-4">
                <Settings size={16} />
                <span className="font-medium">Technical Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Master Technical Skills</h2>
              <p className="text-orange-700 mb-6">
                Develop advanced technical skills for professional-quality prints. Learn slicer mastery, post-processing
                techniques, printer maintenance, and expert troubleshooting.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-700 text-sm font-bold">1</span>
                  </div>
                  <span className="text-orange-800">Slicer Mastery</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-700 text-sm font-bold">2</span>
                  </div>
                  <span className="text-orange-800">Post-Processing</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-700 text-sm font-bold">3</span>
                  </div>
                  <span className="text-orange-800">Printer Maintenance</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-700 text-sm font-bold">4</span>
                  </div>
                  <span className="text-orange-800">Troubleshooting</span>
                </div>
              </div>

              <Link
                href="/#early-access"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Technical Skills
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/3d-printing-specialist.png"
                  alt="Technical Expertise"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
                  Expert Techniques
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business and Marketing - Purple */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/3d-printing-entrepreneur.jpeg"
                  alt="Business and Marketing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium">
                  Profit Strategy
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full mb-4">
                <ShoppingCart size={16} />
                <span className="font-medium">Business & Marketing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Build a Profitable Business</h2>
              <p className="text-purple-700 mb-6">
                Transform your 3D printing skills into a profitable business. Learn market research, product
                development, pricing strategies, and how to scale your operations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">1</span>
                  </div>
                  <span className="text-purple-800">Market Research</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">2</span>
                  </div>
                  <span className="text-purple-800">Product Development</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">3</span>
                  </div>
                  <span className="text-purple-800">Selling Platforms</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">4</span>
                  </div>
                  <span className="text-purple-800">Scaling Operations</span>
                </div>
              </div>

              <Link
                href="/#early-access"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Business Strategies
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI and Advanced Topics - Cyan */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full mb-4">
                <Zap size={16} />
                <span className="font-medium">AI & Advanced Topics</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4">Explore Cutting-Edge Technology</h2>
              <p className="text-cyan-700 mb-6">
                Stay ahead of the curve with insights on emerging technologies in 3D printing. Learn about AI
                integration, custom firmware, multi-material printing, and more.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-700 text-sm font-bold">1</span>
                  </div>
                  <span className="text-cyan-800">AI Integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-700 text-sm font-bold">2</span>
                  </div>
                  <span className="text-cyan-800">Custom Firmware</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-700 text-sm font-bold">3</span>
                  </div>
                  <span className="text-cyan-800">Multi-Material Printing</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-700 text-sm font-bold">4</span>
                  </div>
                  <span className="text-cyan-800">Emerging Technologies</span>
                </div>
              </div>

              <Link
                href="/#early-access"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Advanced Topics
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/experimental-3d-printing.png"
                  alt="AI and Advanced Topics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium">
                  Future Technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Category Comparison</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Compare our learning tracks to find the perfect fit for your goals and experience level.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200"></th>
                  <th className="p-4 text-center border-b-2 border-blue-200 bg-blue-50">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <BookOpen size={20} className="text-blue-600" />
                      </div>
                      <span className="font-bold text-blue-800">Fundamentals</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border-b-2 border-green-200 bg-green-50">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <Layers size={20} className="text-green-600" />
                      </div>
                      <span className="font-bold text-green-800">Design & Modeling</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border-b-2 border-orange-200 bg-orange-50">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                        <Settings size={20} className="text-orange-600" />
                      </div>
                      <span className="font-bold text-orange-800">Technical Skills</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border-b-2 border-purple-200 bg-purple-50">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                        <ShoppingCart size={20} className="text-purple-600" />
                      </div>
                      <span className="font-bold text-purple-800">Business</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border-b-2 border-cyan-200 bg-cyan-50">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mb-2">
                        <Zap size={20} className="text-cyan-600" />
                      </div>
                      <span className="font-bold text-cyan-800">Advanced Topics</span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {/* Difficulty Level */}
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium flex items-center gap-2">
                    <Target size={18} className="text-gray-500" />
                    <span>Difficulty Level</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <span className="font-medium text-blue-800">Beginner</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <span className="font-medium text-green-800">Beginner to Intermediate</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <span className="font-medium text-orange-800">Intermediate</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <span className="font-medium text-purple-800">Intermediate</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <span className="font-medium text-cyan-800">Advanced</span>
                  </td>
                </tr>

                {/* Time Commitment */}
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium flex items-center gap-2">
                    <Clock size={18} className="text-gray-500" />
                    <span>Time Commitment</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <span className="font-medium text-blue-800">2-4 weeks</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <span className="font-medium text-green-800">4-6 weeks</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <span className="font-medium text-orange-800">6-8 weeks</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <span className="font-medium text-purple-800">8-10 weeks</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <span className="font-medium text-cyan-800">10-12 weeks</span>
                  </td>
                </tr>

                {/* Prerequisites */}
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium flex items-center gap-2">
                    <Lightbulb size={18} className="text-gray-500" />
                    <span>Prerequisites</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <span className="font-medium text-blue-800">None</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <span className="font-medium text-green-800">Fundamentals</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <span className="font-medium text-orange-800">Fundamentals</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <span className="font-medium text-purple-800">Fundamentals + Technical</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <span className="font-medium text-cyan-800">All Previous Tracks</span>
                  </td>
                </tr>

                {/* Equipment Needed */}
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium flex items-center gap-2">
                    <Settings size={18} className="text-gray-500" />
                    <span>Equipment Needed</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <span className="font-medium text-blue-800">Basic 3D Printer</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <span className="font-medium text-green-800">3D Printer + Computer</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <span className="font-medium text-orange-800">Mid-Range Printer</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <span className="font-medium text-purple-800">Any Printer</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <span className="font-medium text-cyan-800">Advanced Printer</span>
                  </td>
                </tr>

                {/* Hands-on Projects */}
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium flex items-center gap-2">
                    <Award size={18} className="text-gray-500" />
                    <span>Hands-on Projects</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <span className="font-medium text-blue-800">8 Projects</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <span className="font-medium text-green-800">12 Projects</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <span className="font-medium text-orange-800">10 Projects</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <span className="font-medium text-purple-800">6 Projects</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <span className="font-medium text-cyan-800">5 Projects</span>
                  </td>
                </tr>

                {/* Community Support */}
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium flex items-center gap-2">
                    <Users size={18} className="text-gray-500" />
                    <span>Community Support</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <Check size={20} className="inline text-blue-600" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <Check size={20} className="inline text-green-600" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <Check size={20} className="inline text-orange-600" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <Check size={20} className="inline text-purple-600" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <Check size={20} className="inline text-cyan-600" />
                  </td>
                </tr>

                {/* Expert Mentorship */}
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium flex items-center gap-2">
                    <Star size={18} className="text-gray-500" />
                    <span>Expert Mentorship</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <X size={20} className="inline text-gray-400" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <Check size={20} className="inline text-green-600" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <Check size={20} className="inline text-orange-600" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <Check size={20} className="inline text-purple-600" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <Check size={20} className="inline text-cyan-600" />
                  </td>
                </tr>

                {/* Business Potential */}
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium flex items-center gap-2">
                    <ShoppingCart size={18} className="text-gray-500" />
                    <span>Business Potential</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <div className="flex justify-center">
                      <div className="flex">
                        <Star size={16} className="text-blue-400 fill-blue-400" />
                        <Star size={16} className="text-gray-300" />
                        <Star size={16} className="text-gray-300" />
                        <Star size={16} className="text-gray-300" />
                        <Star size={16} className="text-gray-300" />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <div className="flex justify-center">
                      <div className="flex">
                        <Star size={16} className="text-green-400 fill-green-400" />
                        <Star size={16} className="text-green-400 fill-green-400" />
                        <Star size={16} className="text-green-400 fill-green-400" />
                        <Star size={16} className="text-gray-300" />
                        <Star size={16} className="text-gray-300" />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <div className="flex justify-center">
                      <div className="flex">
                        <Star size={16} className="text-orange-400 fill-orange-400" />
                        <Star size={16} className="text-orange-400 fill-orange-400" />
                        <Star size={16} className="text-orange-400 fill-orange-400" />
                        <Star size={16} className="text-orange-400 fill-orange-400" />
                        <Star size={16} className="text-gray-300" />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <div className="flex justify-center">
                      <div className="flex">
                        <Star size={16} className="text-purple-400 fill-purple-400" />
                        <Star size={16} className="text-purple-400 fill-purple-400" />
                        <Star size={16} className="text-purple-400 fill-purple-400" />
                        <Star size={16} className="text-purple-400 fill-purple-400" />
                        <Star size={16} className="text-purple-400 fill-purple-400" />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <div className="flex justify-center">
                      <div className="flex">
                        <Star size={16} className="text-cyan-400 fill-cyan-400" />
                        <Star size={16} className="text-cyan-400 fill-cyan-400" />
                        <Star size={16} className="text-cyan-400 fill-cyan-400" />
                        <Star size={16} className="text-cyan-400 fill-cyan-400" />
                        <Star size={16} className="text-cyan-400 fill-cyan-400" />
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Action Buttons */}
                <tr>
                  <td className="p-4 border-b border-gray-200"></td>
                  <td className="p-4 text-center border-b border-gray-200 bg-blue-50/50">
                    <Link
                      href="/#early-access"
                      className="inline-flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Start Now
                      <ArrowRight size={14} />
                    </Link>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-green-50/50">
                    <Link
                      href="/#early-access"
                      className="inline-flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Start Now
                      <ArrowRight size={14} />
                    </Link>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-orange-50/50">
                    <Link
                      href="/#early-access"
                      className="inline-flex items-center justify-center gap-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Start Now
                      <ArrowRight size={14} />
                    </Link>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-purple-50/50">
                    <Link
                      href="/#early-access"
                      className="inline-flex items-center justify-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Start Now
                      <ArrowRight size={14} />
                    </Link>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200 bg-cyan-50/50">
                    <Link
                      href="/#early-access"
                      className="inline-flex items-center justify-center gap-1 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Start Now
                      <ArrowRight size={14} />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Path Finder Tool Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Not Sure Where to Start?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Take our quick assessment to find the perfect learning path for your goals, experience level, and
              available resources.
            </p>
          </div>

          <PathFinderTool />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">By Makers for Makers</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Free Forever, our commitment to democratizing knowledge aimed at increasing the rate of innovation in the 3D
            printing and product design industries.
          </p>

          {/* Creator Attribution */}
          <div className="mb-8">
            <div className="inline-block">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blueprint%20Photos-3YF4S8Y2933DTynPN3CJCaj0uZEvUl.png"
                  alt="Aly Yu, CEO of MyAly AI"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-blue-100 font-medium">Created By Aly Yu, CEO of MyAly AI</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#early-access"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              href="/#early-access"
              className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-lg font-medium border border-blue-500 transition-colors"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
