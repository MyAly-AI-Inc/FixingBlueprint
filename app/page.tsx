"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { BrainCircuit, BarChart3, Code, Eye, Users, Rocket } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Tool Integration",
      description: "Watch me integrate a new AI tool every day to create content, drive traffic, and generate revenue.",
      highlights: ["Content creation workflows", "Traffic generation systems", "Revenue optimization tools"],
      color: "blue" as const,
    },
    {
      icon: BarChart3,
      title: "Live Sales Tracking",
      description: "See every sale, customer interaction, and revenue stream as it happens in real-time.",
      highlights: ["Daily revenue reports", "Customer feedback analysis", "Profit margin breakdowns"],
      color: "green" as const,
    },
    {
      icon: Code,
      title: "Behind the Code",
      description: "Get access to the actual code, systems, and workflows that power the business.",
      highlights: ["Complete source code", "System architecture docs", "Deployment strategies"],
      color: "purple" as const,
    },
  ]

  const pricingTiers = [
    {
      name: "Observer",
      price: "$19",
      description: "Follow Along",
      features: [
        "Weekly progress updates",
        "Access to Aly's newsletter",
        "Full prompt hub access",
        "Challenge summary report",
      ],
      icon: Eye,
      ctaText: "Start Observing",
      ctaVariant: "default" as const,
    },
    {
      name: "Join the Club",
      price: "$49",
      description: "Be Part of the Journey",
      features: [
        "Everything in Observer",
        "Daily step-by-step breakdowns",
        "Exclusive club community access",
        "Live Q&A sessions with Aly",
        "Behind-the-scenes content",
      ],
      icon: Users,
      popular: true,
      ctaText: "Join the Club",
      ctaVariant: "gradient" as const,
    },
    {
      name: "All Access",
      price: "$199",
      description: "Get Everything",
      features: [
        "Everything in Club",
        "All 3D STL files created",
        "Complete source code access",
        "AI tool templates & systems",
        "Private Discord access",
      ],
      icon: Rocket,
      ctaText: "Get All Access",
      ctaVariant: "default" as const,
    },
  ]

  const faqs = [
    {
      category: "Challenge",
      question: "What exactly is the 30-day challenge?",
      answer:
        "I'm building a complete 3D printing business from scratch in 30 days, documenting every step, tool, and sale in real-time. At the end, I'm giving the entire business away to one participant.",
    },
    {
      category: "Access",
      question: "How do I watch the live challenge?",
      answer:
        "Choose your access level above. Observer gets weekly updates, Club members get daily breakdowns and live Q&As, and All Access gets everything including source code and files.",
    },
    {
      category: "Blueprint",
      question: "Is the 3D Blueprint really free?",
      answer:
        "Yes! The 3D Blueprint educational platform is 100% free forever. The paid tiers are specifically for the live 30-day challenge experience and exclusive content.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <SplashCursor
        DENSITY_DISSIPATION={4}
        COLOR_UPDATE_SPEED={6}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={8000}
        SHADING={true}
        CURL={20}
      />

      <HeroSection
        variant="live-challenge"
        title="Building a Futuristic 3D Business in 30 Days"
        subtitle="In real time, right before your eyes."
        description="From zero to the most futuristic 3D printing business ever created - and then I'm giving it away to one of you."
        badge={{
          text: "LIVE CHALLENGE",
          variant: "live",
        }}
        primaryCta={{
          text: "Watch Live Now",
          href: "/aly",
          icon: <span className="mr-2">🔴</span>,
        }}
        secondaryCta={{
          text: "Get the Blueprint",
          href: "/blueprint",
          icon: <span className="mr-2">📚</span>,
        }}
      />

      <FeatureGrid
        title="30 Days of Pure Innovation"
        description="Watch every tool being built, every strategy being tested, and every sale being made in real-time."
        badge="WHAT YOU'LL WITNESS"
        features={features}
      />

      <PricingSection
        title="Choose Your Access Level"
        description="Watch me build the most advanced 3D printing business in real-time. Get the tools, strategies, and systems as they're created."
        badge="JOIN THE CHALLENGE"
        tiers={pricingTiers}
      />

      <FaqSection
        title="Common Questions"
        description="Get quick answers about the challenge and Blueprint platform."
        badge="QUICK ANSWERS"
        faqs={faqs}
      />

      <CtaSection
        title="Ready to Watch History in the Making?"
        description="Join thousands of entrepreneurs watching the most transparent business build ever attempted."
        primaryCta={{
          text: "Join the Challenge",
          href: "/aly",
          icon: <span className="mr-2">🔴</span>,
        }}
        secondaryCta={{
          text: "Explore Blueprint",
          href: "/blueprint",
          icon: <span className="mr-2">📚</span>,
        }}
      />
    </div>
  )
}
