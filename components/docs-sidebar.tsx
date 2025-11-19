"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DocsSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname()

  const items = [
    {
      title: "Overview",
      href: "/docs",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Architecture",
          href: "/docs/architecture",
        },
      ],
    },
    {
      title: "Core Concepts",
      href: "/docs/core-concepts",
      items: [
        {
          title: "Concepts Overview",
          href: "/docs/core-concepts",
        },
        {
          title: "Channel Types",
          href: "/docs/channel-types",
        },
        {
          title: "Client SDKs",
          href: "/docs/client-sdks",
        },
      ],
    },
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Documentation
          </h2>
          <div className="space-y-1">
            {items.map((section, i) => (
              <div key={i} className="mb-4">
                {section.href ? (
                  <Link 
                    href={section.href}
                    className="mb-2 px-4 text-sm font-semibold text-foreground block hover:text-primary transition-colors"
                  >
                    {section.title}
                  </Link>
                ) : (
                  <h3 className="mb-2 px-4 text-sm font-semibold text-foreground">
                    {section.title}
                  </h3>
                )}
                {section.items.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start hover:bg-white/10 transition-colors",
                      pathname === item.href
                        ? "bg-white/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    asChild
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
