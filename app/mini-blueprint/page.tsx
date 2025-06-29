"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PublicNavigation } from "@/components/public-navigation"
import {
  Star,
  Users,
  BookOpen,
  CheckCircle,
  Instagram,
  ShieldCheck,
  Gift,
  TrendingUp,
  Lightbulb,
  HelpCircle,
  Download,
  Calculator,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

// Re-using AnimatedGradientHeading from homepage for consistency
const AnimatedGradientHeading = ({
  children,
  fromColor = "from-blue-400",
  toColor = "to-blue-600",
  viaColor,
  className = "",
}: {
  children: React.ReactNode
  fromColor?: string
  toColor?: string
  viaColor?: string
  className?: string
}) => {
  return (
    <motion.h2
      className={`text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${fromColor} ${viaColor ? viaColor : ""} ${toColor} ${className}`}
      style={{
        backgroundSize: "200% 100%",
        backgroundPosition: "0% 50%",
      }}
      whileInView={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      {children}
    </motion.h2>
  )
}

const StatCard = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm border border-gray-700/50">
    <Icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-sm text-blue-200">{label}</div>
  </div>
)

const JourneyCard = ({
  month,
  title,
  description,
  image,
  imageAlt,
}: {
  month: string
  title: string
  description: string
  image: string
  imageAlt: string
}) => (
  <Card className="bg-gray-800/70 border-gray-700/50 text-white overflow-hidden h-full flex flex-col">
    <CardHeader className="p-0">
      <div className="aspect-video relative">
        <Image
          src={image || "/placeholder.svg"} // Already updated to use specific queries or actual images
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </CardHeader>
    <CardContent className="p-4 flex-grow">
      <Badge className="mb-2 bg-cyan-500 text-black">{month}</Badge>
      <CardTitle className="text-xl mb-2 text-cyan-300">{title}</CardTitle>
      <CardDescription className="text-blue-200 text-sm">{description}</CardDescription>
    </CardContent>
  </Card>
)

const PricingCard = ({
  title,
  price,
  description,
  features,
  ctaText,
  popular = false,
  enterprise = false,
}: {
  title: string
  price: string
  description: string
  features: string[]
  ctaText: string
  popular?: boolean
  enterprise?: boolean
}) => (
  <Card
    className={`bg-gray-800/70 border-gray-700/50 text-white h-full flex flex-col ${popular ? "border-cyan-500 border-2 shadow-cyan-500/30 shadow-2xl" : ""}`}
  >
    {popular && (
      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-3 py-1 text-sm font-semibold">
        Most Popular
      </Badge>
    )}
    <CardHeader className="pt-8">
      <CardTitle className={`text-2xl font-bold ${popular ? "text-cyan-300" : "text-white"}`}>{title}</CardTitle>
      <CardDescription className="text-blue-200">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="text-4xl font-extrabold my-4">
        {price}
        {enterprise && <span className="text-base font-normal text-blue-300"> / custom</span>}
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-blue-200 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        className={`w-full ${popular ? "bg-cyan-500 hover:bg-cyan-600 text-black" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
      >
        {ctaText}
      </Button>
    </CardFooter>
  </Card>
)

const TestimonialCard = ({
  name,
  quote,
  image,
  imageAlt,
}: {
  name: string
  quote: string
  image: string
  imageAlt: string
}) => (
  <Card className="bg-gray-800/70 border-gray-700/50 text-white p-6">
    <div className="flex items-center mb-4">
      <Image src={image || "/placeholder.svg"} alt={imageAlt} width={48} height={48} className="rounded-full mr-4" />
      <CardTitle className="text-lg text-cyan-300">{name}</CardTitle>
    </div>
    <CardDescription className="text-blue-200 italic">"{quote}"</CardDescription>
  </Card>
)

export default function MiniBlueprintPage() {
  const [profitCalculatorState, setProfitCalculatorState] = useState({
    product: "Phone Accessories",
    sellPrice: 15,
    cost: 2,
    printTime: 1.5,
    unitsToSell: 50,
    hoursPerDay: 4,
  })

  const products = [
    { name: "Phone Accessories", sell: 15, cost: 2, time: 1.5, difficulty: "Easy", demand: "High Demand" },
    { name: "Home Decor Items", sell: 35, cost: 5, time: 3, difficulty: "Medium", demand: "Growing" },
    { name: "Custom Miniatures", sell: 25, cost: 3, time: 2, difficulty: "Medium", demand: "Niche" },
    { name: "Functional Tools", sell: 45, cost: 8, time: 4, difficulty: "Hard", demand: "Steady" },
    { name: "Jewelry & Fashion", sell: 60, cost: 12, time: 2.5, difficulty: "Medium", demand: "Premium" },
  ]

  const selectedProduct = products.find((p) => p.name === profitCalculatorState.product) || products[0]
  const profitPerUnit = selectedProduct.sell - selectedProduct.cost
  const unitsPerDay = profitCalculatorState.hoursPerDay / selectedProduct.time
  const maxPossibleUnits = Math.floor(unitsPerDay * 30)
  const actualUnitsToSell = Math.min(profitCalculatorState.unitsToSell, maxPossibleUnits)
  const monthlyRevenue = actualUnitsToSell * selectedProduct.sell
  const monthlyProfit = actualUnitsToSell * profitPerUnit
  const yearlyProfit = monthlyProfit * 12
  const profitPerHour = profitPerUnit / selectedProduct.time

  const journeyData = [
    {
      month: "Month 1",
      title: "The Spark",
      description:
        "Started with a $300 printer, $200 supplies. Sold keychains, cat masks, planters. Bought 8 more printers.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt: "Illustration of initial 3D printer setup and small products like keychains and planters",
    },
    {
      month: "Month 2",
      title: "Growth Spurt",
      description: "Full-time University, grew business to $10K/month selling on website and Amazon.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt:
        "Graph showing business growth alongside university textbooks, symbolizing balancing studies and business",
    },
    {
      month: "Month 3",
      title: "Scaling Up",
      description: "Traded sofa for industrial shelving, 30+ printers to increase production.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt: "Room transformed into a workshop, filled with industrial shelves and multiple 3D printers",
    },
    {
      month: "Month 4",
      title: "Systematic Success",
      description: "Fulfilling bulk orders, running business with efficient systems.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt: "Organized 3D printing workshop with stacks of boxes ready for shipping, indicating efficient systems",
    },
    {
      month: "Month 5",
      title: "Viral Hit & Custom Work",
      description: "5-in-1 phone stand went viral. Started complex custom client work and AI company.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt: "Viral 3D printed phone stand product surrounded by social media icons and an AI brain graphic",
    },
    {
      month: "Month 6",
      title: "Deep Dive & Mentorship",
      description: "Obsessed over 3D printing history, mapped key variables, focused on helping others.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt: "Person intently studying historical 3D printing documents and simultaneously mentoring others",
    },
    {
      month: "Month 7",
      title: "Academic Breakthrough",
      description: "Finished thesis: The Axiogenetic Theorem, a model for value prediction.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt:
        "Illustration of a complex mathematical theorem inscribed on an ancient scroll, signifying academic achievement",
    },
    {
      month: "Month 8",
      title: "Global Expansion",
      description: "Expanding globally, establishing partnerships with international distributors.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt: "World map with glowing connection lines indicating global partnerships for a 3D printing business",
    },
    {
      month: "Month 9",
      title: "AI Innovation",
      description: "Launched proprietary AI models for 3D printing optimization and market trends.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt: "AI brain graphic interacting with a 3D printer and analyzing market trend charts for optimization",
    },
    {
      month: "Month 10",
      title: "Industry Revolution",
      description: "Developed advanced automation, expanded AI to revolutionize 3D printing.",
      image: "/placeholder.svg?width=400&height=300",
      imageAlt: "Futuristic automated 3D printing factory operated by robots, powered by advanced AI systems",
    },
  ]

  const faqItems = [
    {
      q: "How much money can I make with 3D printing?",
      a: "Profit potential varies based on products, pricing, and marketing. Our calculator gives an estimate. Many students achieve significant income, some $10K-20K+ monthly within their first year.",
    },
    {
      q: "Do I need prior experience with 3D printing?",
      a: "No! Our blueprints cater to all levels, from complete beginners to experienced makers looking to monetize their skills.",
    },
    {
      q: "What's included in the blueprint?",
      a: "Blueprints include guides, STL files, marketing strategies, pricing tools, community access, and more, depending on the chosen package.",
    },
    {
      q: "How quickly can I start making money?",
      a: "Some students sell their first print within a week. Consistent effort following the blueprint can lead to profits within the first month.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <PublicNavigation />
      {/* Hero Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 backdrop-blur-sm">
                Created by @aly3dprints • 45.9K followers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Launch Your 3D Printing Business With The <span className="text-cyan-400">Ultimate Blueprint!</span>
              </h1>
              <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
                Get instant access to guides, STL files and marketing strategies to start profiting from 3D printing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-black rounded-full px-8 py-3 text-lg font-semibold shadow-lg"
                >
                  Grab Your Free Guide Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 rounded-full px-8 py-3 text-lg"
                >
                  Browse All Blueprints
                </Button>
              </div>
              <div className="mt-12 flex justify-center items-center gap-4">
                <div className="flex -space-x-2">
                  <Image
                    src="/placeholder.svg?width=40&height=40"
                    alt="Satisfied student avatar 1"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-blue-500"
                  />
                  <Image
                    src="/placeholder.svg?width=40&height=40"
                    alt="Satisfied student avatar 2"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-blue-500"
                  />
                  <Image
                    src="/placeholder.svg?width=40&height=40"
                    alt="Satisfied student avatar 3"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-blue-500"
                  />
                </div>
                <p className="text-blue-200">Join 2000+ other entrepreneurs in our online community</p>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
      {/* Complete System Section */}
      <ScrollReveal>
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="mb-8">
                <Image
                  src="/images/mini-blueprint/3d-blueprint-graphic.png"
                  alt="3D Blueprint branding graphic with Aly Yu"
                  width={700}
                  height={394}
                  className="rounded-lg shadow-xl mx-auto"
                  priority
                />
              </div>
              <h2 className="text-3xl font-bold text-white">3D Printing Blueprint by Aly Yu</h2>
              <p className="text-blue-200 mt-2">A Complete System Including:</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-blue-200">
              {[
                "Marketing Strategies",
                "Printer Buying Guide",
                "How to Find Profitable Products",
                "AI Product Design",
                "Custom Product Creation",
                "Marketplace Optimization",
                "Pricing Strategies",
                "Customer Service Guide",
                "STL Files & Commercial Licenses",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/50 p-4 rounded-lg flex items-center gap-3 border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* Why Aly Section */}
      <ScrollReveal>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedGradientHeading fromColor="from-pink-500" toColor="to-purple-600">
                Why Aly?
              </AnimatedGradientHeading>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                With a proven track record of helping creators succeed, you're in good hands.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StatCard icon={Instagram} label="Instagram Followers" value="46.1K+" />
              <StatCard icon={Lightbulb} label="Leading Innovator" value="AI & 3D Printing" />
              <StatCard icon={Users} label="Skool Community Members" value="1,200+" />
              <StatCard icon={TrendingUp} label="Marketing Consultant" value="Top Brands" />
              <StatCard icon={ShieldCheck} label="Brand Partnership" value="Elevate.store" />
              <StatCard icon={Star} label="Success Stories" value="100+" />
            </div>
            <motion.div
              className="mt-12 text-center bg-green-800/30 p-6 rounded-lg border border-green-700/50 max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ShieldCheck className="h-10 w-10 text-green-400 mx-auto mb-3" />
              <h3 className="text-2xl font-semibold text-white mb-2">30-Day Money-Back Guarantee</h3>
              <p className="text-green-200">
                Not satisfied with your purchase? I offer a full 30-day money-back guarantee on all paid blueprints. No
                questions asked. 100% Satisfaction.
              </p>
            </motion.div>
            <div className="mt-10 text-center">
              <p className="text-blue-300 mb-2">Trusted by creators on:</p>
              <div className="flex justify-center items-center space-x-6">
                <span className="text-xl font-semibold">Etsy</span>
                <span className="text-xl font-semibold">MakerWorld</span>
                <span className="text-xl font-semibold">Shopify</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* Message from Founder */}
      <ScrollReveal>
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <motion.div
                className="lg:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/mini-blueprint/woman-with-glowing-print.jpeg"
                  alt="Aly Yu, founder of 3D Blueprint, holding a glowing 3D printed object, symbolizing creativity"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto border-4 border-cyan-500 object-cover aspect-square"
                />
              </motion.div>
              <motion.div
                className="lg:w-2/3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <AnimatedGradientHeading fromColor="from-cyan-400" toColor="to-blue-500" className="text-left">
                  A Message from the Founder
                </AnimatedGradientHeading>
                <p className="text-xl font-semibold text-white mb-4">Hey there! I'm Aly.</p>
                <p className="text-blue-200 mb-4">
                  I created this blueprint to empower creators and entrepreneurs who want to turn their creativity into
                  income. After building my own successful 3D printing studio and helping hundreds of entrepreneurs,
                  I've distilled my insights into this comprehensive guide.
                </p>
                <p className="text-blue-200">
                  No matter your background or starting budget, this blueprint will show you how to transform 3D
                  printing from a hobby into a profitable business.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* My Journey Section */}
      <ScrollReveal>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedGradientHeading fromColor="from-teal-400" toColor="to-cyan-500">
                My Journey in Detail
              </AnimatedGradientHeading>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {journeyData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <JourneyCard
                    month={item.month}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    imageAlt={item.imageAlt}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* Why I Created This / My Mission */}
      <ScrollReveal>
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-[5/4] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/mini-blueprint/man-with-holographic-ui.jpeg"
                  alt="Man interacting with futuristic holographic UI, representing AI in 3D printing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mt-6 mb-3">Why I Created This Blueprint</h3>
              <p className="text-blue-200">
                I designed this blueprint because it's what I needed when I was starting out. It's the culmination of
                everything I've learned about starting and growing a 3D printing business. It's the step-by-step guide
                that I wish I had.
              </p>
              <p className="text-blue-200 mt-2">MyAly.ai - The Future of 3D Printing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-[5/4] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/mini-blueprint/man-in-workshop.jpeg"
                  alt="Successful 3D printing entrepreneur in his workshop with multiple printers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mt-6 mb-3">My Mission</h3>
              <p className="text-blue-200 mb-3">
                My journey started in August 2024 with a single $300 printer, selling keychains to friends. What began
                as a side hustle to help pay for college transformed into a thriving business generating over $20K
                monthly. Who knew my Philosophy and Art History degree would become such a valuable asset in this
                industry? This unique perspective helped me design viral products and expand globally.
              </p>
              <p className="text-blue-200 mb-3">
                Now, it's my turn to help others discover the freedom that 3D printing creates. I'm sharing everything
                I've learned about building a profitable business in this industry. My mission is simple: help creative
                people like you turn your ideas into income.
              </p>
              <p className="text-cyan-300 font-semibold">
                If I could start with $500 and build this, imagine what you could create with the right blueprint!
              </p>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
      {/* Brain Behind Blueprint */}
      <ScrollReveal>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Image
              src="/images/mini-blueprint/woman-with-glowing-print.jpeg"
              alt="Aly Yu, 3D printing mentor, creatively holding a glowing 3D print"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 shadow-2xl border-4 border-purple-500 object-cover aspect-square"
            />
            <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">The Brain Behind The Blueprint</h2>
            <AnimatedGradientHeading fromColor="from-purple-400" toColor="to-pink-500" className="mb-4">
              Hey I'm Aly, Your 3D Printing Mentor
            </AnimatedGradientHeading>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-6">
              From a single $300 printer to a thriving $20K+/month business, I've learned what it takes to succeed in 3D
              printing. But the journey would have been so much easier if I knew all the things I do now. So now I'm
              sharing my blueprint to help you build your own profitable business.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                <Users className="mr-2 h-4 w-4" /> Join My Community
              </Button>
              <Button
                variant="outline"
                className="text-pink-400 border-pink-400 hover:bg-pink-400/10 rounded-full px-6"
              >
                <Instagram className="mr-2 h-4 w-4" /> Follow on Instagram
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* Choose Your Path Section */}
      <ScrollReveal>
        <section id="free-guide" className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedGradientHeading fromColor="from-green-400" toColor="to-teal-500">
                Choose Your Path to Success
              </AnimatedGradientHeading>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Select the blueprint that matches your goals and investment level. From free guides to full-service
                solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PricingCard
                title="Free Mini Blueprint"
                price="FREE"
                description="FAQ & Quickstart Guide to get you started."
                features={[
                  "Basic 3D printing concepts",
                  "Frequently asked questions",
                  "Initial setup checklist",
                  "Resource recommendations",
                ]}
                ctaText="Get Free Guide"
              />
              <PricingCard
                title="Facebook Marketplace Secrets"
                price="$19"
                description="A Gen Z Guide to 3D Printed Zuckerbucks."
                features={[
                  "Facebook Marketplace optimization",
                  "Gen Z marketing strategies",
                  "Proven product templates",
                  "Engagement tactics",
                ]}
                ctaText="Get Started"
              />
              <PricingCard
                title="3D Blueprint: Ultimate Edition"
                price="$97"
                description="The complete roadmap to 3D printing profits."
                features={[
                  "Comprehensive business setup",
                  "Marketing strategy blueprint",
                  "Pricing calculator & templates",
                  "Advanced optimization techniques",
                  "Private community access",
                ]}
                ctaText="Get Started"
                popular
              />
              <PricingCard
                title="Enterprise Solutions"
                price="From $297"
                description="Tailored solutions for serious entrepreneurs."
                features={[
                  "Custom-tailored blueprint",
                  "1-month PrintProfit.io membership",
                  "Product design services",
                  "Full business setup available",
                  "Premium support options",
                ]}
                ctaText="Select Package"
                enterprise
              />
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* Testimonials Section */}
      <ScrollReveal>
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedGradientHeading fromColor="from-pink-400" toColor="to-purple-500">
                What My Community Is Saying
              </AnimatedGradientHeading>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah T."
                quote="Aly's guide helped me sell my first print in just one week! I couldn't believe how simple she made everything."
                image="/placeholder.svg?width=48&height=48"
                imageAlt="Avatar of Sarah T., a happy customer"
              />
              <TestimonialCard
                name="Marcus K."
                quote="The STL bundle paid for itself after just 3 sales on Etsy. The commercial license is a game-changer!"
                image="/placeholder.svg?width=48&height=48"
                imageAlt="Avatar of Marcus K., a satisfied customer"
              />
              <TestimonialCard
                name="Leila M."
                quote="I was hesitant to start a 3D printing business, but Aly's blueprint gave me the confidence I needed. Now I'm making $1200/month!"
                image="/placeholder.svg?width=48&height=48"
                imageAlt="Avatar of Leila M., a successful entrepreneur"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* Commercial License Offer Section */}
      <ScrollReveal>
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4 text-center">
            <Gift className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
            <AnimatedGradientHeading fromColor="from-cyan-400" toColor="to-blue-500">
              Get Free Lifetime Commercial Licenses!
            </AnimatedGradientHeading>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Unlock commercial rights for my top-selling 3D models, including the popular 5-in-1 Phone Stand, Cat
              Masks, and more!
              <br />
              <span className="text-sm">
                *Commercial license allows selling physical prints on platforms like Etsy, Shopify, and anywhere else
                you'd like! You keep 100% of each sale with no royalties or fees.
              </span>
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 border-gray-700/50 text-white p-6">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="/placeholder.svg?width=300&height=200"
                    alt="3D printed 5-in-1 Phone Stand Tripod model"
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardTitle className="text-xl mb-2">5-in-1 Phone Stand Tripod</CardTitle>
                <ul className="text-sm text-blue-200 list-disc list-inside text-left mb-4">
                  <li>Full commercial rights included</li>
                  <li>Optimized for POV shots and close-ups</li>
                  <li>Multi-functional design</li>
                </ul>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black w-full">
                  Claim Free Commercial License
                </Button>
              </Card>
              <Card className="bg-gray-900/50 border-gray-700/50 text-white p-6">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="/placeholder.svg?width=300&height=200"
                    alt="Collection of bonus 3D models including cat masks and keychains"
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardTitle className="text-xl mb-2">Bonus Models Collection</CardTitle>
                <ul className="text-sm text-blue-200 list-disc list-inside text-left mb-4">
                  <li>Cat Masks</li>
                  <li>Decorative Keychains</li>
                  <li>Additional Trending 3D Models</li>
                  <li>Limited time offer!</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Get Bonus Models License</Button>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* 3 Simple Steps Section */}
      <ScrollReveal>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedGradientHeading fromColor="from-green-400" toColor="to-teal-500">
                Start Profiting in 3 Simple Steps
              </AnimatedGradientHeading>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Follow this easy process to go from complete beginner to running your own profitable 3D printing
                business.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Download,
                  title: "Download the Free Guide",
                  description:
                    "Start with our free guide to learn the fundamentals of setting up a profitable 3D printing business.",
                },
                {
                  icon: BookOpen,
                  title: "Choose Your Blueprint",
                  description:
                    "Select the blueprint package that aligns with your goals, from beginner guides to premium STL bundles.",
                },
                {
                  icon: TrendingUp,
                  title: "Launch Your Business",
                  description:
                    "Apply the strategies in your blueprint to start creating, selling, and scaling your 3D printing business.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-800/70 border-gray-700/50 p-6 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-800/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500">
                    <step.icon className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <span className="text-green-400 mr-2">{idx + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-blue-200 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* Final CTA Section */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Turn Your 3D Printer Into a Profit Machine?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of creators who have transformed their hobby into a thriving business with my proven
              blueprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-black rounded-full px-8 py-3 text-lg font-semibold shadow-lg"
              >
                Start For Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 rounded-full px-8 py-3 text-lg"
              >
                Get The Full Blueprint
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* FAQ Section */}
      <ScrollReveal>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedGradientHeading fromColor="from-sky-400" toColor="to-blue-500">
                Frequently Asked Questions
              </AnimatedGradientHeading>
            </div>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-gray-800/50 border-gray-700/50 rounded-lg mb-3"
                >
                  <AccordionTrigger className="p-4 text-lg text-white hover:no-underline">
                    <HelpCircle className="h-5 w-5 text-blue-400 mr-3 inline-block" />
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-0 text-blue-200">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </ScrollReveal>
      {/* Interactive Profit Calculator Section */}
      <ScrollReveal>
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Calculator className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
              <AnimatedGradientHeading fromColor="from-cyan-400" toColor="to-blue-500">
                Interactive Profit Calculator
              </AnimatedGradientHeading>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                See your potential earnings with different 3D printing products. Adjust the settings to match your
                goals.
              </p>
            </div>

            <Card className="bg-gray-900/50 border-gray-700/50 p-6 md:p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column: Settings */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Your Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="product-select" className="block text-sm font-medium text-blue-200 mb-1">
                        Choose Your Product
                      </label>
                      <select
                        id="product-select"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md p-2.5 text-white focus:ring-cyan-500 focus:border-cyan-500"
                        value={profitCalculatorState.product}
                        onChange={(e) => {
                          const newProduct = products.find((p) => p.name === e.target.value) || products[0]
                          setProfitCalculatorState((prev) => ({
                            ...prev,
                            product: newProduct.name,
                            sellPrice: newProduct.sell,
                            cost: newProduct.cost,
                            printTime: newProduct.time,
                          }))
                        }}
                      >
                        {products.map((p) => (
                          <option key={p.name} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                      <div className="mt-2 text-sm text-gray-300">
                        {" "}
                        {/* Increased font size and contrast slightly */}
                        Sell: ${selectedProduct.sell} • Cost: ${selectedProduct.cost} • {selectedProduct.time}h print •{" "}
                        {selectedProduct.difficulty} • {selectedProduct.demand}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="units-sell" className="block text-sm font-medium text-blue-200 mb-1">
                        Units to sell per month ({actualUnitsToSell})
                      </label>
                      <input
                        type="range"
                        id="units-sell"
                        min="1"
                        max={maxPossibleUnits > 0 ? maxPossibleUnits : 1}
                        step="1"
                        value={profitCalculatorState.unitsToSell}
                        onChange={(e) =>
                          setProfitCalculatorState((prev) => ({
                            ...prev,
                            unitsToSell: Number.parseInt(e.target.value),
                          }))
                        }
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                      />
                      <div className="text-xs text-gray-400 mt-1">Max possible: {maxPossibleUnits} units/month</div>
                    </div>

                    <div>
                      <label htmlFor="hours-print" className="block text-sm font-medium text-blue-200 mb-1">
                        Hours you can print per day ({profitCalculatorState.hoursPerDay})
                      </label>
                      <input
                        type="range"
                        id="hours-print"
                        min="1"
                        max="24"
                        step="1"
                        value={profitCalculatorState.hoursPerDay}
                        onChange={(e) =>
                          setProfitCalculatorState((prev) => ({
                            ...prev,
                            hoursPerDay: Number.parseInt(e.target.value),
                          }))
                        }
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                      />
                      <div className="text-xs text-gray-400 mt-1">
                        You can print {unitsPerDay.toFixed(1)} units per day
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Profit Potential */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-700/50">
                  <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Your Profit Potential</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-blue-200">Monthly Revenue:</span>
                      <span className="text-3xl font-bold text-white">${monthlyRevenue.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-blue-200">Monthly Profit:</span>
                      <span className="text-3xl font-bold text-green-400">${monthlyProfit.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-blue-200">Yearly Profit Potential:</span>
                      <span className="text-3xl font-bold text-white">${yearlyProfit.toFixed(0)}</span>
                    </div>
                  </div>
                  <hr className="my-6 border-gray-700" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-blue-200">
                      <span>Profit per unit:</span>{" "}
                      <span className="font-medium text-white">${profitPerUnit.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-blue-200">
                      <span>Print time per unit:</span>{" "}
                      <span className="font-medium text-white">{selectedProduct.time.toFixed(1)}h</span>
                    </div>
                    <div className="flex justify-between text-blue-200">
                      <span>Profit per hour:</span>{" "}
                      <span className="font-medium text-white">${profitPerHour.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-blue-200 mb-4">
                  These numbers represent just the beginning. Many of our students scale to multiple printers and
                  higher-value products, reaching $10K-20K+ monthly within their first year.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black rounded-full px-8 py-3 text-lg">
                  Get Started With This Blueprint
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </ScrollReveal>
      {/* Final CTA (repeated from above, common for landing pages) */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-purple-700 to-pink-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Don't Wait – Start Your 3D Printing Journey Today!</h2>
            <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
              Join thousands of creators who have transformed their hobby into a thriving business with my proven
              blueprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-200 text-pink-700 rounded-full px-8 py-3 text-lg font-semibold shadow-lg"
              >
                Get Your Free Guide
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 rounded-full px-8 py-3 text-lg"
              >
                Browse All Blueprints
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
