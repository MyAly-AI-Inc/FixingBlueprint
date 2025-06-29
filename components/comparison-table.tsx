import type React from "react"
import type { Tool } from "./tool-card"
import { Star, Gift, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ComparisonTableProps {
  tools: Tool[]
}

const StarRatingDisplay: React.FC<{ rating: number; maxRating?: number }> = ({ rating, maxRating = 5 }) => (
  <div className="flex">
    {[...Array(maxRating)].map((_, i) => (
      <Star
        key={i}
        className={cn("h-5 w-5", i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600")}
      />
    ))}
  </div>
)

const ComparisonTable: React.FC<ComparisonTableProps> = ({ tools }) => {
  const getBadgeVariant = (text: string) => {
    if (text.includes("FREE") || text.includes("BEGINNERS")) return "success"
    if (text.includes("PREMIUM") || text.includes("DETAILED") || text.includes("DESIGNER")) return "premium"
    return "default"
  }

  return (
    <div className="overflow-x-auto bg-gray-800/40 p-3 md:p-4 rounded-xl border border-green-500/40 backdrop-blur-md shadow-lg">
      <table className="min-w-full divide-y divide-gray-700/60 text-base">
        <thead className="bg-gray-900/60">
          <tr>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-green-300">
              Tool
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-green-300">
              Badge
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-green-300">
              <Gift className="inline h-5 w-5 mr-1.5" />
              Free Models
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-green-300">
              <Zap className="inline h-5 w-5 mr-1.5" />
              Speed
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-green-300">
              <Star className="inline h-5 w-5 mr-1.5" />
              Quality
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-green-300">
              Best For
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700/50 bg-gray-800/80">
          {tools.map((tool) => (
            <tr key={tool.id} className="hover:bg-gray-700/50 transition-colors">
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-100">
                {tool.icon} {tool.name}
              </td>
              <td className="px-4 py-4">
                <Badge variant={getBadgeVariant(tool.badgeText)} className="text-sm px-2 py-0.5">
                  {tool.badgeText}
                </Badge>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-300">{tool.freeModels}</td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-300">{tool.speed}</td>
              <td className="px-4 py-4">
                <StarRatingDisplay rating={tool.quality} />
              </td>
              <td className="px-4 py-4 text-gray-300 min-w-[180px]">{tool.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
