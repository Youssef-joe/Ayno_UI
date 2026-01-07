"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const docSections = [
  {
    title: "Getting Started",
    items: [
      { label: "Installation", href: "/docs/installation" },
      { label: "Quick Start", href: "/docs/quick-start" },
      { label: "Configuration", href: "/docs/configuration" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { label: "Architecture", href: "/docs/architecture" },
      { label: "Multi-Tenancy", href: "/docs/multi-tenancy" },
      { label: "Channels", href: "/docs/channels" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { label: "WebSocket API", href: "/docs/websocket-api" },
      { label: "HTTP API", href: "/docs/http-api" },
      { label: "gRPC API", href: "/docs/grpc-api" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { label: "Docker Deployment", href: "/docs/docker-deployment" },
      { label: "Production Setup", href: "/docs/production-setup" },
      { label: "Scaling Guide", href: "/docs/scaling" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { label: "Circuit Breaker", href: "/docs/circuit-breaker" },
      { label: "Performance Tuning", href: "/docs/performance-tuning" },
      { label: "Troubleshooting", href: "/docs/troubleshooting" },
    ],
  },
]

export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <nav className="w-64 border-r border-white/10 py-8 pr-8">
      <div className="sticky top-24">
        <h2 className="text-sm font-semibold text-foreground mb-6 px-4">Documentation</h2>

        <div className="space-y-8">
          {docSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-4">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 text-sm rounded transition ${
                        pathname === item.href
                          ? "bg-primary/20 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
          <a
            href="https://github.com/Youssef-joe/polyglot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 019-9m6 2l-1.174 5.225a2 2 0 01-1.948 1.557H8.322a2 2 0 01-1.948-1.557L4 4m6 5l2 9m6-9l-2 9m0 0l1.474 3.684a2 2 0 001.856 1.316h1.34a2 2 0 001.856-1.316L20 14" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </nav>
  )
}
