import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OverviewPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Welcome to Polyglot
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          The next-generation real-time engine for modern applications. Build chat, notifications, and live data feeds with ease.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
          <h2 className="text-2xl font-semibold mb-4">Why Polyglot?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Multi-language architecture (Elixir, Go, C++)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Sub-millisecond latency for critical paths
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Scales to millions of concurrent connections
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Drop-in SDKs for JS/TS, iOS, and Android
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-muted-foreground mb-6">
            Ready to build? Dive into our core concepts or check out the architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/docs/core-concepts">Core Concepts</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/docs/architecture">View Architecture</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
