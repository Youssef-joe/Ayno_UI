import DocsSidebar from "@/components/docs-sidebar"
import DocsLayoutClient from "@/components/docs-layout-client"

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
    <DocsLayoutClient>
      {children}
    </DocsLayoutClient>
  )
}
