import { ArchitectureDiagram } from "@/components/architecture-diagram"

export default function ArchitecturePage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          System Architecture
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A deep dive into the Polyglot real-time engine. Designed for scale, fault tolerance, and sub-millisecond latency.
        </p>
      </div>
      
      <ArchitectureDiagram />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300">
          <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Elixir Gateway</h3>
          <p className="text-sm text-muted-foreground">
            Manages millions of concurrent WebSocket connections with Phoenix Channels. Handles authentication, presence, and initial request validation.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300">
          <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Go Core</h3>
          <p className="text-sm text-muted-foreground">
            The central nervous system. Routes events, enriches data, and manages the state. Optimized for high-throughput event processing.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300">
          <div className="h-10 w-10 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">C++ Drivers</h3>
          <p className="text-sm text-muted-foreground">
            Specialized drivers for ultra-low latency workloads like market tickers and competitive gaming state.
          </p>
        </div>
      </div>
    </div>
  )
}
