import DocsSidebar from "@/components/docs-sidebar"

export const metadata = {
  title: "Documentation - Ayno",
  description: "Complete documentation for Ayno Realtime Infrastructure",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <DocsSidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {children}
        </div>
      </main>
    </div>
  )
}
