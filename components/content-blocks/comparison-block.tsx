import type { ComparisonBlock } from "@/types/subcategory-page"
import Image from "next/image"
import { Star, StarHalf } from "lucide-react"

interface ComparisonBlockProps {
  block: ComparisonBlock
  className?: string
}

export function ComparisonBlockComponent({ block, className = "" }: ComparisonBlockProps) {
  const { title, items } = block.content

  return (
    <div className={`my-8 ${className}`} id={block.id}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            {item.image && (
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-medium">{item.title}</h4>
                {item.rating && (
                  <div className="flex items-center">
                    {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                    {item.rating % 1 !== 0 && <StarHalf className="h-4 w-4 text-amber-500 fill-amber-500" />}
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-green-600 mb-1">Pros</h5>
                  <ul className="text-sm space-y-1">
                    {item.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-red-600 mb-1">Cons</h5>
                  <ul className="text-sm space-y-1">
                    {item.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
