import type React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"

type CalloutVariant = "info" | "warning" | "success" | "error"

interface CalloutProps {
  title: string
  children: React.ReactNode
  variant?: CalloutVariant
}

export function Callout({ title, children, variant = "info" }: CalloutProps) {
  const variantStyles: Record<CalloutVariant, string> = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
  }

  const variantIcons: Record<CalloutVariant, React.ReactNode> = {
    info: <Info className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    success: <CheckCircle className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
  }

  return (
    <div className={cn("p-4 border-l-4 rounded-r-lg", variantStyles[variant])}>
      <div className="flex items-center gap-2 font-medium mb-2">
        {variantIcons[variant]}
        <h3>{title}</h3>
      </div>
      <div className="ml-7">{children}</div>
    </div>
  )
}
