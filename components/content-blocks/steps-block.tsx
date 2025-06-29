import type { StepsBlock } from "@/types/subcategory-page"
import Image from "next/image"

interface StepsBlockProps {
  block: StepsBlock
  className?: string
}

export function StepsBlockComponent({ block, className = "" }: StepsBlockProps) {
  const { title, steps } = block.content

  return (
    <div className={`my-8 ${className}`} id={block.id}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 flex items-start">
              <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-medium mb-2">{step.title}</h4>
              <p className="text-gray-700">{step.description}</p>
              {step.image && (
                <div className="mt-4 rounded-lg overflow-hidden">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`Step ${index + 1}: ${step.title}`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
