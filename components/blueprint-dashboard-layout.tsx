import type React from "react"
import { BlueprintHeader } from "@/components/blueprint-header"
// import { BlueprintSidebar } from '@/components/blueprint-sidebar'; // If you have/create a sidebar
// import { Toaster } from "@/components/ui/toaster"; // If you use toasts

interface BlueprintDashboardLayoutProps {
  children: React.ReactNode
}

export function BlueprintDashboardLayout({ children }: BlueprintDashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlueprintHeader />
      <div className="flex flex-1">
        {/* 
      // Example if you add a sidebar:
      <aside className="hidden md:block w-64 border-r p-4">
        <BlueprintSidebar /> 
      </aside> 
      */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
      {/* <Toaster /> */}
      {/* You could add a BlueprintFooter here if needed */}
    </div>
  )
}

export default BlueprintDashboardLayout
