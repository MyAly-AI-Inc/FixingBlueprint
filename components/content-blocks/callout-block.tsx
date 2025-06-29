import type { CalloutBlock } from "@/types/subcategory-page"
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

interface CalloutBlockProps {
  block: CalloutBlock
  className?: string
}

export function CalloutBlockComponent({ block, className = "" }: CalloutBlockProps) {
  const { title, text, variant = "info" } = block.content

  const variantStyles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: <Info className="h-5 w-5 text-blue-500" />,
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-800",
      icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: <AlertCircle className="h-5 w-5 text-red-500" />,
    },
  }

  const style = variantStyles[variant]

  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-4 my-8 ${className}`} id={block.id}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${style.text}`}>{title}</h3>
          <div className={`mt-2 text-sm ${style.text}`}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
