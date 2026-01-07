"use client"

import DocsSidebar from "@/components/docs-sidebar"

export default function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background text-foreground">
      <div className="hidden lg:block lg:w-64 border-r border-white/10 flex-shrink-0">
        <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <DocsSidebar />
        </div>
      </div>

      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  )
}
