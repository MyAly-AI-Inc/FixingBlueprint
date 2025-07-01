import type { Metadata } from "next"
import AIToolsClientPage from "./AIToolsClientPage"

export const metadata: Metadata = {
  title: "AI-Powered 3D Printing Tools | Transform Your Business in 2025",
  description:
    "Revolutionary AI tools for 3D printing entrepreneurs. Generate designs, optimize materials, and scale your business with cutting-edge automation. Free toolkit included.",
  keywords: "AI 3D printing, 3D design automation, 3D printing business tools, AI design generator",
  openGraph: {
    title: "AI 3D Printing Tools - Free Business Toolkit",
    description: "Get the complete AI toolkit for 3D printing success",
    images: ["/og-ai-tools.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 3D Printing Tools",
    description: "Transform your 3D printing business with AI",
  },
}

export default function AIToolsPage() {
  return <AIToolsClientPage />
}
