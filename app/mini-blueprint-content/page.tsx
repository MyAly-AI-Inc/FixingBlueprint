import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Target, Zap, Users, Globe, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "The 3D Printing Mini Blueprint - Free Guide | 3D Blueprint",
  description:
    "Discover the arbitrage window that's creating new entrepreneurs. Learn how to start a profitable 3D printing business from zero to $20K in 60 days.",
  keywords: "3D printing business, entrepreneurship, arbitrage opportunity, passive income, 3D printing profits",
}

export default function MiniBlueprintContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">FREE MINI BLUEPRINT</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            THE 3D PRINTING
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              OPPORTUNITY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the Arbitrage Window That's Creating New Entrepreneurs
          </p>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    MY STORY: FROM ZERO TO $20K IN 60 DAYS
                  </h2>
                  <blockquote className="text-lg text-gray-300 mb-6 italic">
                    "9 months ago I had never even touched a 3D printer. With just $500 in starting capital, I generated
                    $6,300 in my first month and grew from 1 little printer to 8. By month two, I hit $20K in sales—all
                    while studying philosophy at university full time."
                  </blockquote>
                  <div className="space-y-3">
                    <div className="flex items-center text-green-400">
                      <Globe className="w-5 h-5 mr-3" />
                      <span>Now sold to 60+ countries with multiple viral products</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <TrendingUp className="w-5 h-5 mr-3" />
                      <span>Billion-dollar brands seek my marketing and consulting help</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Users className="w-5 h-5 mr-3" />
                      <span>Zero previous experience or special connections</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/mini-blueprint/woman-with-glowing-print.jpeg"
                    alt="Successful 3D printing entrepreneur"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arbitrage Window Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">THE ARBITRAGE WINDOW EXPLAINED</h2>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">What is an Arbitrage Window?</h3>
              <p className="text-gray-300 mb-6">An arbitrage window opens when:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-cyan-400 font-bold text-xl">1</span>
                  </div>
                  <p className="text-gray-300">A technology becomes accessible to average people</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-cyan-400 font-bold text-xl">2</span>
                  </div>
                  <p className="text-gray-300">But knowledge about how to leverage it remains limited</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-cyan-400 font-bold text-xl">3</span>
                  </div>
                  <p className="text-gray-300">And the market hasn't yet been flooded with competitors</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg">
                <p className="text-gray-300 text-center">
                  This creates a brief period—sometimes months, sometimes a few years—where extraordinary profits are
                  possible for those who recognize the opportunity and act.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHY NOW IS THE PERFECT TIME</h2>
            <p className="text-xl text-cyan-400 font-semibold">The 3D Printing Arbitrage Window is Wide Open</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Technology Accessibility</h3>
                <p className="text-gray-300 text-sm">Sub-$500 printers produce professional results</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Knowledge Gap</h3>
                <p className="text-gray-300 text-sm">Business strategies aren't widely understood</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Market Readiness</h3>
                <p className="text-gray-300 text-sm">Consumers value and understand 3D printed products</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Limited Competition</h3>
                <p className="text-gray-300 text-sm">Profitable niches remain undiscovered</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300">
              The industry expanded by <span className="text-green-400 font-bold">47% in 2024</span> alone, with an
              estimated <span className="text-green-400 font-bold">8.3 million units</span> shipping by year-end.
            </p>
          </div>
        </div>
      </section>

      {/* Stained Glass Effect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">THE STAINED GLASS EFFECT</h2>
            <p className="text-xl text-gray-300">Breaking Through Misconceptions</p>
          </div>

          <Card className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/30">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 mb-8 text-center">Common myths creating opportunity for you:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-red-400 font-semibold mb-2">"It's too technical"</p>
                    <p className="text-gray-300 text-sm">Reality: Modern printers are as easy as coffee makers</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-red-400 font-semibold mb-2">"The market is saturated"</p>
                    <p className="text-gray-300 text-sm">
                      Reality: Most sellers compete in only a handful of categories
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-red-400 font-semibold mb-2">"You need dozens of printers"</p>
                    <p className="text-gray-300 text-sm">Reality: I made $5,000+ with just one</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-red-400 font-semibold mb-2">"It's just a hobby"</p>
                    <p className="text-gray-300 text-sm">
                      Reality: Thousands have built six and seven-figure businesses
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-red-400 font-semibold mb-2">"The profit margins aren't sustainable"</p>
                    <p className="text-gray-300 text-sm">Reality: Products routinely achieve 80%+ margins</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-orange-400 font-semibold">
                  Every time someone believes these myths, your opportunity grows.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Formula Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">IT'S LESS ABOUT WHAT YOU SELL</h2>
            <p className="text-xl text-cyan-400">The Real Success Formula</p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 mb-8 text-center">The entrepreneurs who succeed focus on:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300">Solving specific problems for specific people</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300">Creating systems rather than one-off products</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300">Building marketing that connects with real customers</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300">Consistent implementation rather than perfect products</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <blockquote className="text-xl text-cyan-400 font-semibold italic">
                  "It's less about what you sell—and more about how you sell it."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7 Key Factors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              THE 7 KEY FACTORS THAT DETERMINE YOUR PATH
            </h2>
            <p className="text-xl text-gray-300">Understanding Your Unique Advantage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { number: 1, title: "Budget Assessment", desc: "What financial resources you have available" },
              { number: 2, title: "3D Printing Experience", desc: "Your current technical comfort level" },
              { number: 3, title: "Time Availability", desc: "How many hours you can dedicate weekly" },
              { number: 4, title: "Strongest Skills", desc: "Your natural capabilities and expertise" },
              { number: 5, title: "Creative Aptitude", desc: "Your approach to problem-solving" },
              { number: 6, title: "Geographic Location", desc: "Where you're based and your market access" },
              { number: 7, title: "Growth Ambitions", desc: "Your goals for the business" },
            ].map((factor) => (
              <Card key={factor.number} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-400 font-bold">{factor.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{factor.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{factor.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300">
              There's no one-size-fits-all approach—your unique combination creates your advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Budget Levels Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">START WHERE YOU ARE: BUDGET LEVELS</h2>
            <p className="text-xl text-green-400">Every Budget Has a Viable Path</p>
          </div>

          <div className="space-y-6">
            {[
              {
                budget: "$0 Budget",
                strategy: "Broker between clients and existing services, focus on partnerships",
                color: "bg-gray-600",
              },
              {
                budget: "$500-$1,000",
                strategy: "Single printer startup with high-margin products (where I started)",
                color: "bg-green-600",
              },
              {
                budget: "$1,000-$2,000",
                strategy: "Quality printer or multiple budget units, more testing capacity",
                color: "bg-blue-600",
              },
              {
                budget: "$2,000-$5,000",
                strategy: "Multi-printer operation with diverse product lines",
                color: "bg-purple-600",
              },
              { budget: "$5,000+", strategy: "Professional setup with automation potential", color: "bg-orange-600" },
            ].map((level, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 ${level.color} rounded-full mr-4`}></div>
                    <h3 className="text-xl font-bold text-white">{level.budget}</h3>
                  </div>
                  <p className="text-gray-300">{level.strategy}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-300">
              Start with what you have, reinvest profits, and scale strategically.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Strategy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">LEVERAGE YOUR STRENGTHS</h2>
            <p className="text-xl text-gray-300">Your Skills Determine Your Strategy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                skill: "Design-Focused",
                strategy: "Create unique, high-value models with distinctive aesthetics",
                icon: "🎨",
              },
              {
                skill: "Marketing-Focused",
                strategy: "Excel at promotion with compelling stories, even for standard products",
                icon: "📢",
              },
              {
                skill: "Technical-Focused",
                strategy: "Offer precision-dependent products and engineered solutions",
                icon: "⚙️",
              },
              {
                skill: "Business-Focused",
                strategy: "Scale operations and build systems for growth",
                icon: "📈",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <h3 className="text-xl font-bold text-cyan-400">{item.skill}</h3>
                  </div>
                  <p className="text-gray-300">{item.strategy}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-300">
              Your strongest skill should guide your product and platform selection.
            </p>
          </div>
        </div>
      </section>

      {/* Time & Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">TIME & LOCATION STRATEGY</h2>
            <p className="text-xl text-gray-300">Work With Your Constraints, Not Against Them</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Time Availability Strategy</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">5-10 hours/week:</h4>
                    <p className="text-gray-300 text-sm">Focus on longer prints that work while you're away</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">10-20 hours/week:</h4>
                    <p className="text-gray-300 text-sm">Balance between hands-on and automated production</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">20+ hours/week:</h4>
                    <p className="text-gray-300 text-sm">Faster scaling across multiple products and platforms</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Location Impact</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Urban:</h4>
                    <p className="text-gray-300 text-sm">
                      Focus on local markets, premium pricing, consider space limitations
                    </p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Suburban:</h4>
                    <p className="text-gray-300 text-sm">Balanced approach between local and shipping</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Rural:</h4>
                    <p className="text-gray-300 text-sm">
                      Leverage lower costs, focus on lightweight products for shipping
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-300">
              Your constraints aren't limitations—they're guideposts for the right approach.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/30">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">THE COMPLETE 3D PRINTING BLUEPRINT</h2>
              <p className="text-xl text-cyan-400 mb-8">Take Your Next Step</p>

              <div className="text-left mb-8 max-w-2xl mx-auto">
                <p className="text-gray-300 mb-4">The full 3D Printing Blueprint contains:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>The complete Decision Tree system personalized to your situation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>My proprietary product scoring framework with 50+ validated ideas</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Step-by-step production guides for every major printer</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Zero-cost marketing templates that generated $20K+ per month</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Scaling systems to grow beyond $5K</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-300 mb-8">The knowledge in this mini-guide is just the beginning.</p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="https://www.3dblueprint.io" target="_blank" rel="noopener noreferrer">
                  Get the Complete System
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
