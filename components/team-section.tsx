"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Users, Network, Cpu, Briefcase } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"
import { Button } from "@/components/ui/button"

// Team data structure
const leadershipTeam = [
  {
    name: "Aly Yu",
    role: "CEO & Founder",
    image: "/team/aly-yu.png",
    description: "Visionary entrepreneur with expertise in AI and manufacturing technologies.",
    icon: <Briefcase className="h-5 w-5" />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Ahmed Boulakhras",
    role: "Chief Technology Officer",
    image: "/tech-executive-portrait-blue-purple.png",
    description: "AI architecture expert with 15+ years in neural networks and distributed systems.",
    icon: <Cpu className="h-5 w-5" />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Sasha Hanson",
    role: "Chief Systems Officer",
    image: "/professional-woman-headshot.png",
    description: "Systems architecture specialist with expertise in scalable AI infrastructure.",
    icon: <Network className="h-5 w-5" />,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    name: "Guillermo Da Silva",
    role: "Chief Community Officer",
    image: "/latino-man-headshot.png",
    description: "Community building expert focused on creator ecosystems and user engagement.",
    icon: <Users className="h-5 w-5" />,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Edward Chun",
    role: "VP of Operations",
    image: "/professional-asian-man-headshot.png",
    description: "Operations strategist with background in manufacturing and supply chain optimization.",
    icon: <Briefcase className="h-5 w-5" />,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    name: "Antonije Velevski",
    role: "VP of Experimental Technology",
    image: "/european-tech-executive.png",
    description: "Innovation leader specializing in emerging technologies and experimental prototyping.",
    icon: <Cpu className="h-5 w-5" />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Jonas Macek",
    role: "VP of Product Design",
    image: "/european-product-designer.png",
    description: "Design visionary with expertise in 3D printing product development and user experience.",
    icon: <Briefcase className="h-5 w-5" />,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
]

const cofounderTeam = [
  {
    name: "John Casison",
    role: "VP of Growth Strategies",
    image: "/professional-asian-man-portrait.png",
  },
  {
    name: "Juri Pranjic",
    role: "Head of Strategic Partnerships",
    image: "/european-man-portrait.png",
  },
  {
    name: "Nari Saelim",
    role: "Strategic Advisor",
    image: "/professional-asian-woman-portrait.png",
  },
  {
    name: "Toufic Moussa",
    role: "Director of Product Distribution",
    image: "/professional-middle-eastern-man.png",
  },
]

export function TeamSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Subtle orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-orb opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-purple-orb opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">
              <Users className="mr-1 h-3 w-3" />
              Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-text leading-tight pb-1">
              Meet the Minds Behind MyAly
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-12">
              Our diverse team of experts is revolutionizing the 3D printing industry with cutting-edge AI technology.
            </p>
          </div>
        </RevealSection>

        {/* Board of Directors / Leadership Team */}
        <div className="mb-20">
          <RevealSection delay={100}>
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">Leadership Team</h3>
          </RevealSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {leadershipTeam.map((member, index) => (
              <RevealSection key={member.name} delay={150 + index * 50}>
                <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg?height=200&width=300&query=professional headshot"}
                      alt={`${member.name}, ${member.role} at MyAly AI`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-400 hover:bg-blue-500 text-white">{member.role}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{member.name}</h4>
                    <p className="text-sm text-slate-500 mb-4">{member.description}</p>
                    <div className="flex items-center gap-2">
                      <div className={`${member.iconBg} p-2 rounded-full ${member.iconColor}`}>{member.icon}</div>
                      <span className="text-xs font-medium text-slate-700">Leadership Team</span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Other Cofounders */}
        <div>
          <RevealSection delay={500}>
            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur opacity-10"></div>
              <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <Network className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Business & Strategy Team</h3>
                </div>
                <p className="text-slate-700 mb-6">
                  These visionary cofounders help drive MyAly's mission across various specialized domains.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                  {cofounderTeam.map((cofounder, index) => (
                    <div
                      key={cofounder.name}
                      className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-200 mb-3">
                        <Image
                          src={cofounder.image || "/placeholder.svg?height=100&width=100&query=professional portrait"}
                          alt={cofounder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-medium text-slate-900">{cofounder.name}</h4>
                      <p className="text-xs text-slate-600">{cofounder.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Join Our Team CTA */}
        <RevealSection delay={600}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Join Our Growing Team</h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI, 3D printing, and building the
              future of manufacturing.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white border-0 rounded-full px-6">
              View Open Positions
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
