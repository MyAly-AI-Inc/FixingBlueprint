"use client"

import type React from "react"
import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Cpu,
  DollarSign,
  Eye,
  Gift,
  HardHat,
  Home,
  Lightbulb,
  ListChecks,
  MapPin,
  Puzzle,
  Rocket,
  Scale,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  PenToolIcon as Tool,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  Layers,
  BarChart3,
  CalendarClock,
  Package,
  Paintbrush,
  Recycle,
  SlidersHorizontal,
  Brain,
  Box,
  Award,
  FlaskConical,
  Gem,
  GraduationCap,
  Landmark,
  Library,
  Network,
  PackageCheck,
  Projector,
  Ruler,
  TestTube2,
  Target,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { EnhancedGradientHeading } from "@/components/enhanced-gradient-heading"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { OptimizedImage } from "@/components/optimized-image" // Assuming you have this

gsap.registerPlugin(ScrollTrigger)

interface ListItemProps {
  icon?: React.ElementType
  text: string | React.ReactNode
  iconColor?: string
}

const ListItem: React.FC<ListItemProps> = ({ icon: Icon, text, iconColor = "text-blue-400" }) => (
  <li className="flex items-start gap-3 mb-2">
    {Icon && <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-1`} />}
    <span className="text-blue-100/90">{text}</span>
  </li>
)

interface DetailListItemProps {
  term: string
  description: string
  icon: React.ElementType
  iconColor?: string
}

const DetailListItem: React.FC<DetailListItemProps> = ({
  term,
  description,
  icon: Icon,
  iconColor = "text-purple-400",
}) => (
  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg mb-3">
    <Icon className={`w-7 h-7 ${iconColor} flex-shrink-0 mt-1`} />
    <div>
      <h4 className="font-semibold text-lg text-purple-300">{term}</h4>
      <p className="text-blue-100/80 text-sm">{description}</p>
    </div>
  </div>
)

export default function ProductSystemPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const sectionBaseClass = "py-12 md:py-16 relative overflow-hidden"
  const contentWrapperClass = "max-w-3xl mx-auto"

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animations
      gsap.from(".page-title", { opacity: 0, y: 50, duration: 0.8, delay: 0.2, ease: "power3.out" })
      gsap.from(".page-subtitle", { opacity: 0, y: 30, duration: 0.8, delay: 0.4, ease: "power3.out" })
      gsap.from(".page-badge", { opacity: 0, scale: 0.5, duration: 0.6, delay: 0.1, ease: "back.out(1.7)" })

      // Animate sections on scroll
      const sections = gsap.utils.toArray<HTMLElement>(".animated-section")
      sections.forEach((section, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Trigger when 80% of the section is visible from the top
            end: "bottom 20%",
            toggleActions: "play none none none", // Play animation once
            // markers: true, // For debugging
          },
        })

        const heading = section.querySelector(".section-heading")
        const subHeading = section.querySelector(".section-subheading")
        const paragraphs = section.querySelectorAll(".section-paragraph")
        const listItems = section.querySelectorAll(".section-list-item > li, .section-detail-list-item > div")
        const images = section.querySelectorAll(".section-image")
        const ctaContent = section.querySelector(".cta-content")

        if (heading) {
          tl.from(heading, { opacity: 0, y: 50, duration: 0.7, ease: "power3.out" }, 0)
        }
        if (subHeading) {
          tl.from(subHeading, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" }, "-=0.4")
        }
        if (paragraphs.length > 0) {
          tl.from(paragraphs, { opacity: 0, y: 20, duration: 0.5, stagger: 0.15, ease: "circ.out" }, "-=0.3")
        }
        if (listItems.length > 0) {
          tl.from(listItems, { opacity: 0, x: -30, duration: 0.4, stagger: 0.1, ease: "sine.out" }, "-=0.2")
        }
        if (images.length > 0) {
          tl.from(images, { opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.2, ease: "power3.out" }, "-=0.3")
        }
        if (ctaContent) {
          tl.from(ctaContent.children, { opacity: 0, y: 30, stagger: 0.2, duration: 0.6, ease: "power3.out" }, 0.2)
        }
      })
    }, pageRef) // scope animations to this component

    return () => ctx.revert() // cleanup
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <SplashCursor
        DENSITY_DISSIPATION={4}
        COLOR_UPDATE_SPEED={6}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={8000}
        SHADING={true}
        CURLL={20}
      />
      <ScrollProgress />
      <ScrollToTop />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
        <section className="text-center mb-16 md:mb-24">
          <Badge className="page-badge mb-4 bg-green-500/20 text-green-300 border-green-700/50 px-4 py-1 text-sm">
            Proven Framework
          </Badge>
          <h1 className="page-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              3 PLUS 1
            </span>{" "}
            PRODUCT SYSTEM
          </h1>
          <p className="page-subtitle text-xl md:text-2xl text-blue-200/90 max-w-3xl mx-auto">
            The Proven Framework Behind 7-Figure 3D Printing Businesses
          </p>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-sky-400" toColor="to-cyan-500" variant="panel">
                THE FUNDAMENTAL PRINCIPLE
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-sky-200 mb-6 mt-2">
              Finding Focus in a World of Options
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">
              The 3 Plus 1 Equals 40 system is built on a simple truth:
            </p>
            <ul className="section-list-item space-y-3 mb-4 pl-4">
              <ListItem icon={Users} text="Entrepreneurs who try to do everything fail." iconColor="text-sky-400" />
              <ListItem
                icon={Search}
                text="Those who focus too narrowly miss opportunities."
                iconColor="text-sky-400"
              />
            </ul>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">
              The sweet spot is having a defined core focus (the "3") with deliberate space for innovation (the "Plus
              1").
            </p>
            <p className="section-paragraph text-lg text-blue-100/90">
              This system creates the perfect balance between focus and flexibility, channeling your energy for maximum
              impact.
            </p>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-violet-400" toColor="to-purple-500" variant="outline">
                WHY EXACTLY THREE CORE PRODUCTS?
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-violet-200 mb-6 mt-2">
              The Magic Number for Maximum Returns
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">
              Three products is the perfect number because:
            </p>
            <ul className="section-list-item space-y-3 mb-4 pl-4">
              <ListItem
                icon={ShieldCheck}
                text="It provides enough diversification to spread risk."
                iconColor="text-violet-400"
              />
              <ListItem
                icon={BarChart3}
                text="It creates enough data points to identify patterns."
                iconColor="text-violet-400"
              />
              <ListItem
                icon={SlidersHorizontal}
                text="It's manageable enough to master production workflows."
                iconColor="text-violet-400"
              />
              <ListItem
                icon={TrendingUp}
                text="It creates natural comparison that drives improvement."
                iconColor="text-violet-400"
              />
              <ListItem
                icon={Brain}
                text="It fits within the typical attention span of a solo entrepreneur."
                iconColor="text-violet-400"
              />
            </ul>
            <p className="section-paragraph text-lg text-blue-100/90">
              I've tested this extensively with hundreds of entrepreneurs. Those who focus on exactly three core
              products consistently outperform those who try fewer or more.
            </p>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-emerald-400" toColor="to-green-500" variant="glow">
                THE PRODUCT TRINITY
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-emerald-200 mb-6 mt-2">
              Strategic Selection of Your Core Three
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-6">
              Your three products should be strategically selected:
            </p>

            <div className="section-image my-8 rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage
                src="/placeholder.svg?width=800&height=450"
                alt="Showcase of three distinct 3D printed products"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>

            <div className="section-detail-list-item space-y-6">
              <div>
                <h4 className="text-xl font-bold text-emerald-300 mb-2 flex items-center">
                  <Package className="mr-2" />
                  1. Your "Safe Bet"
                </h4>
                <ul className="space-y-2 pl-6">
                  <ListItem text="Proven market demand" icon={CheckCircle} iconColor="text-emerald-400" />
                  <ListItem
                    text="Multiple competitors already selling successfully"
                    icon={CheckCircle}
                    iconColor="text-emerald-400"
                  />
                  <ListItem text="Stable or growing demand" icon={CheckCircle} iconColor="text-emerald-400" />
                  <ListItem
                    text="Reasonable profit margin (minimum 70%)"
                    icon={CheckCircle}
                    iconColor="text-emerald-400"
                  />
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-300 mb-2 flex items-center">
                  <Star className="mr-2" />
                  2. Your "Strength Aligner"
                </h4>
                <ul className="space-y-2 pl-6">
                  <ListItem
                    text="Perfectly matches your unique skills"
                    icon={CheckCircle}
                    iconColor="text-emerald-400"
                  />
                  <ListItem
                    text="Leverages your natural capabilities"
                    icon={CheckCircle}
                    iconColor="text-emerald-400"
                  />
                  <ListItem
                    text="Creates competitive advantage through your strengths"
                    icon={CheckCircle}
                    iconColor="text-emerald-400"
                  />
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-300 mb-2 flex items-center">
                  <Gem className="mr-2" />
                  3. Your "Value Maximizer"
                </h4>
                <ul className="space-y-2 pl-6">
                  <ListItem
                    text="Exceptional perceived value to production cost ratio"
                    icon={CheckCircle}
                    iconColor="text-emerald-400"
                  />
                  <ListItem text="Relatively quick to produce" icon={CheckCircle} iconColor="text-emerald-400" />
                  <ListItem text="Commands premium pricing" icon={CheckCircle} iconColor="text-emerald-400" />
                  <ListItem
                    text="Solves a clear problem or fulfills a strong desire"
                    icon={CheckCircle}
                    iconColor="text-emerald-400"
                  />
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-amber-400" toColor="to-orange-500" variant="panel">
                THE 80/20 FOCUS SPLIT
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-amber-200 mb-6 mt-2">
              Disciplined Allocation of Your Resources
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">With your three core products selected:</p>
            <ul className="section-list-item space-y-3 mb-4 pl-4">
              <ListItem
                icon={Target}
                text="Dedicate 80% of your time and resources to them."
                iconColor="text-amber-400"
              />
              <ListItem icon={Settings} text="Focus on optimizing production efficiency." iconColor="text-amber-400" />
              <ListItem icon={Rocket} text="Perfect your marketing approach." iconColor="text-amber-400" />
              <ListItem icon={PackageCheck} text="Build systems for consistent delivery." iconColor="text-amber-400" />
              <ListItem icon={Users} text="Gather and implement customer feedback." iconColor="text-amber-400" />
            </ul>
            <p className="section-paragraph text-lg text-blue-100/90">
              This disciplined focus creates depth rather than breadth. Instead of being mediocre at selling many
              products, you become exceptional at selling a few.
            </p>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-rose-400" toColor="to-pink-500" variant="outline">
                THE "PLUS 1 INNOVATION"
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-rose-200 mb-6 mt-2">
              Your Strategic Sandbox
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">
              The remaining 20% of your time is dedicated to your "Plus 1":
            </p>
            <ul className="section-list-item space-y-3 mb-4 pl-4">
              <ListItem
                icon={Lightbulb}
                text="Developing a new product not yet part of your core offering."
                iconColor="text-rose-400"
              />
              <ListItem icon={TrendingUp} text="Testing new marketing approaches." iconColor="text-rose-400" />
              <ListItem icon={FlaskConical} text="Exploring new platforms or materials." iconColor="text-rose-400" />
              <ListItem
                icon={GraduationCap}
                text="Learning new skills that expand your capabilities."
                iconColor="text-rose-400"
              />
            </ul>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">Your Plus 1 serves as:</p>
            <ul className="section-list-item space-y-3 mb-4 pl-4">
              <ListItem icon={ShieldCheck} text="Insurance against market changes." iconColor="text-rose-400" />
              <ListItem icon={Rocket} text="Opportunity for breakthrough growth." iconColor="text-rose-400" />
              <ListItem icon={Sparkles} text="Creativity outlet to prevent burnout." iconColor="text-rose-400" />
              <ListItem icon={TestTube2} text="Market testing ground for new concepts." iconColor="text-rose-400" />
            </ul>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-teal-400" toColor="to-cyan-500" variant="glow">
                INTRODUCTION TO THE P.R.O.F.I.T.S. METHOD
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-teal-200 mb-6 mt-2">
              Finding Winning Products Systematically
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-6">
              The P.R.O.F.I.T.S. method evaluates products objectively:
            </p>
            <div className="section-detail-list-item space-y-3">
              <DetailListItem
                icon={Puzzle}
                term="P - Problem-solving"
                description="How well does it solve a genuine customer need?"
                iconColor="text-teal-400"
              />
              <DetailListItem
                icon={DollarSign}
                term="R - Return on Investment"
                description="What's the profit margin percentage?"
                iconColor="text-teal-400"
              />
              <DetailListItem
                icon={Eye}
                term="O - Opportunity"
                description="How much potential for variations or expansion?"
                iconColor="text-teal-400"
              />
              <DetailListItem
                icon={Wrench}
                term="F - Feasibility"
                description="How reliably can you produce it with your equipment?"
                iconColor="text-teal-400"
              />
              <DetailListItem
                icon={Users}
                term="I - In-demand"
                description="How strong is the proven market demand?"
                iconColor="text-teal-400"
              />
              <DetailListItem
                icon={Zap}
                term="T - Time-to-Money"
                description="How efficient is the production time-to-profit ratio?"
                iconColor="text-teal-400"
              />
              <DetailListItem
                icon={Landmark}
                term="S - Staying Power"
                description="How long will it maintain market relevance?"
                iconColor="text-teal-400"
              />
            </div>
            <p className="section-paragraph text-lg text-blue-100/90 mt-6">
              The full blueprint contains the complete scoring system and evaluation framework.
            </p>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-lime-400" toColor="to-green-500" variant="panel">
                THE MATCH SYSTEM
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-lime-200 mb-6 mt-2">
              Aligning Products with Your Situation
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-6">
              The MATCH system ensures products fit YOUR specific circumstances:
            </p>
            <div className="section-detail-list-item space-y-3">
              <DetailListItem
                icon={Cpu}
                term="M - Maker Skills"
                description="How well it leverages your strongest skills."
                iconColor="text-lime-400"
              />
              <DetailListItem
                icon={Paintbrush}
                term="A - Artistic Alignment"
                description="How well it matches your creative orientation."
                iconColor="text-lime-400"
              />
              <DetailListItem
                icon={CalendarClock}
                term="T - Time Available"
                description="How well it fits within your available hours."
                iconColor="text-lime-400"
              />
              <DetailListItem
                icon={Scale}
                term="C - Competition Analysis"
                description="Your ability to differentiate in the marketplace."
                iconColor="text-lime-400"
              />
              <DetailListItem
                icon={MapPin}
                term="H - Home Location"
                description="How well it leverages your geographic advantages."
                iconColor="text-lime-400"
              />
            </div>
            <p className="section-paragraph text-lg text-blue-100/90 mt-6">
              The highest-performing products have both strong market potential (PROFITS) AND strong personal alignment
              (MATCH).
            </p>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-fuchsia-400" toColor="to-pink-600" variant="outline">
                PROVEN PRODUCT CATEGORIES
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-fuchsia-200 mb-6 mt-2">
              Where to Start Your Search
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-6">
              Categories with consistently strong performance:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="section-image rounded-lg overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/placeholder.svg?width=400&height=300"
                  alt="3D Printed Home Organization"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="section-image rounded-lg overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/placeholder.svg?width=400&height=300"
                  alt="3D Printed Workspace Solutions"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="section-image rounded-lg overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/placeholder.svg?width=400&height=300"
                  alt="3D Printed Lifestyle Accessories"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="section-detail-list-item space-y-6">
              <div>
                <h4 className="text-xl font-bold text-fuchsia-300 mb-2 flex items-center">
                  <Home className="mr-2" />
                  1. Home Organization
                </h4>
                <ul className="space-y-2 pl-6">
                  <ListItem text="Solves universal problems" icon={CheckCircle} iconColor="text-fuchsia-400" />
                  <ListItem
                    text="High utility drives value perception"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                  <ListItem
                    text="Evergreen demand regardless of trends"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                  <ListItem
                    text="Easy to differentiate through design and features"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-fuchsia-300 mb-2 flex items-center">
                  <Briefcase className="mr-2" />
                  2. Workspace Solutions
                </h4>
                <ul className="space-y-2 pl-6">
                  <ListItem
                    text="Growing market with remote work expansion"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                  <ListItem
                    text="Specific problems with clear solutions"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                  <ListItem
                    text="Premium pricing for productivity enhancement"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                  <ListItem text="Repeat purchase potential" icon={CheckCircle} iconColor="text-fuchsia-400" />
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-fuchsia-300 mb-2 flex items-center">
                  <Gift className="mr-2" />
                  3. Lifestyle Accessories
                </h4>
                <ul className="space-y-2 pl-6">
                  <ListItem
                    text="Strong emotional connection with customers"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                  <ListItem
                    text="Visual appeal drives social sharing"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                  <ListItem
                    text="Personalization commands premium prices"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                  <ListItem
                    text="Seasonal variations create multiple selling opportunities"
                    icon={CheckCircle}
                    iconColor="text-fuchsia-400"
                  />
                </ul>
              </div>
            </div>
            <p className="section-paragraph text-lg text-blue-100/90 mt-6">
              The full blueprint contains 50+ specific product ideas with detailed analyses.
            </p>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-red-400" toColor="to-orange-500" variant="glow">
                EQUIPMENT SELECTION STRATEGY
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-red-200 mb-6 mt-2">
              Choosing the Right Tools for Your Products
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">
              After identifying your Product Trinity, select equipment that matches their needs:
            </p>
            <div className="section-image my-8 rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage
                src="/placeholder.svg?width=800&height=450"
                alt="3D printer in a workshop"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <ul className="section-list-item space-y-3 mb-4 pl-4">
              <ListItem icon={ShieldCheck} text="Focus on reliability over features." iconColor="text-red-400" />
              <ListItem
                icon={Box}
                text="Consider build volume requirements (with 10-15% buffer)."
                iconColor="text-red-400"
              />
              <ListItem
                icon={Award}
                text="Prioritize print quality consistency for customer satisfaction."
                iconColor="text-red-400"
              />
              <ListItem
                icon={Layers}
                text="Consider material compatibility for your specific products."
                iconColor="text-red-400"
              />
              <ListItem icon={Tool} text="Factor in ease of use to minimize learning curve." iconColor="text-red-400" />
            </ul>
            <p className="section-paragraph text-lg text-blue-100/90 font-semibold">
              Remember: The right printer depends on your specific products—not the other way around.
            </p>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className={contentWrapperClass}>
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-yellow-400" toColor="to-amber-500" variant="panel">
                MATERIALS STRATEGY FOR BEGINNERS
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-yellow-200 mb-6 mt-2">
              Start Simple, Expand Strategically
            </h3>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">Begin with a focused material selection:</p>
            <div className="section-image my-8 rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage
                src="/placeholder.svg?width=800&height=400"
                alt="Colorful PLA filaments"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <ul className="section-list-item space-y-3 mb-4 pl-4">
              <ListItem
                icon={Recycle}
                text="4 colors of PLA (including black and white as essentials)."
                iconColor="text-yellow-400"
              />
              <ListItem
                icon={Gem}
                text="1 premium material (like Silk PLA for high-value appearance)."
                iconColor="text-yellow-400"
              />
            </ul>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">
              Focus on consistency and reliability over exotic options.
            </p>
            <p className="section-paragraph text-lg text-blue-100/90 mb-4">
              Advanced materials to consider as you grow:
            </p>
            <ul className="section-list-item space-y-3 mb-4 pl-4">
              <ListItem icon={HardHat} text="PETG for durability and outdoor use." iconColor="text-yellow-400" />
              <ListItem icon={Projector} text="TPU for flexible applications." iconColor="text-yellow-400" />
              <ListItem
                icon={FlaskConical}
                text="Specialty filaments for specific product categories."
                iconColor="text-yellow-400"
              />
            </ul>
            <p className="section-paragraph text-lg text-blue-100/90">
              The right materials enhance perceived value without significantly increasing costs.
            </p>
          </div>
        </section>

        <section className={`${sectionBaseClass} animated-section`}>
          <div className="cta-content text-center bg-gradient-to-r from-blue-700/30 to-indigo-700/30 p-8 md:p-12 rounded-xl shadow-2xl border border-blue-600/50">
            <div className="section-heading">
              <EnhancedGradientHeading fromColor="from-blue-300" toColor="to-indigo-400" variant="glow">
                THE COMPLETE 3D PRINTING BLUEPRINT
              </EnhancedGradientHeading>
            </div>
            <h3 className="section-subheading text-2xl font-semibold text-blue-100 mb-6 mt-2">Take Your Next Step</h3>
            <p className="section-paragraph text-lg text-blue-200/90 mb-6 max-w-2xl mx-auto">
              The full 3D Printing Blueprint contains:
            </p>
            <ul className="section-list-item space-y-2 mb-8 text-left max-w-md mx-auto">
              <ListItem
                icon={ListChecks}
                text="The complete P.R.O.F.I.T.S. MATCH scoring system."
                iconColor="text-blue-300"
              />
              <ListItem
                icon={Library}
                text="50+ validated product ideas with detailed analyses."
                iconColor="text-blue-300"
              />
              <ListItem
                icon={CalendarClock}
                text="Month-by-month implementation plan for the 3 Plus 1 system."
                iconColor="text-blue-300"
              />
              <ListItem
                icon={Ruler}
                text="Production optimization guides for each product type."
                iconColor="text-blue-300"
              />
              <ListItem icon={Network} text="Advanced product development frameworks." iconColor="text-blue-300" />
            </ul>
            <p className="section-paragraph text-lg text-blue-200/90 mb-8">
              The knowledge in this mini-guide is just the beginning.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-10 py-7 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://www.3dblueprint.io" target="_blank" rel="noopener noreferrer">
                Get The Complete System
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
