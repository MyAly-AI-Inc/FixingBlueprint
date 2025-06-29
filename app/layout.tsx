import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { ConditionalNavigation } from "@/components/conditional-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "3D Blueprint - Learn 3D Printing",
  description: "Learn 3D printing from beginner to advanced with 3D Blueprint",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ConditionalNavigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
