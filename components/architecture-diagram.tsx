"use client"

import { 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  Cpu, 
  Zap, 
  Shield, 
  Layers,
  ArrowDown,
  Activity
} from "lucide-react"

export function ArchitectureDiagram() {
  return (
    <div className="w-full py-8 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

        <div className="flex flex-col gap-12 relative z-10">
          
          {/* Client Layer */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-4">
              <Smartphone className="w-4 h-4" />
              <span>Client Layer</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Node icon={Globe} title="Web Client" desc="JS/TS SDK" color="blue" />
              <Node icon={Smartphone} title="Mobile App" desc="iOS / Android" color="indigo" />
              <Node icon={Server} title="Server SDK" desc="Node / Go / Py" color="violet" />
            </div>
          </div>

          {/* Connection Arrows */}
          <div className="flex justify-center gap-16 text-muted-foreground/30 animate-in fade-in duration-1000 delay-300">
            <ArrowDown className="w-6 h-6 animate-bounce" />
            <ArrowDown className="w-6 h-6 animate-bounce delay-100" />
            <ArrowDown className="w-6 h-6 animate-bounce delay-200" />
          </div>

          {/* Edge Layer */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-4">
              <Shield className="w-4 h-4" />
              <span>Edge Layer</span>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Global Load Balancer</h3>
                    <p className="text-sm text-muted-foreground">Geo-DNS & Anycast Routing</p>
                  </div>
                </div>
                <div className="h-px w-full md:w-auto md:h-12 bg-white/10" />
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Auth Service</h3>
                    <p className="text-sm text-muted-foreground">JWT Validation & Rate Limiting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Arrows */}
          <div className="flex justify-center text-muted-foreground/30 animate-in fade-in duration-1000 delay-500">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>

          {/* Gateway Layer */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-4">
              <Zap className="w-4 h-4" />
              <span>Gateway Cluster (Elixir)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-white/10 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold">Phoenix Channels</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Handles millions of persistent WebSocket connections with soft-realtime guarantees.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold">Presence Tracker</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Distributed CRDT-based presence system for tracking user status across the cluster.
                </p>
              </div>
            </div>
          </div>

          {/* Connection Arrows */}
          <div className="flex justify-center text-muted-foreground/30 animate-in fade-in duration-1000 delay-700">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>

          {/* Core & Data Layer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            
            {/* Core */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-4">
                <Cpu className="w-4 h-4" />
                <span>Core Processing (Go)</span>
              </div>
              <div className="h-full p-6 rounded-2xl border border-white/10 bg-green-500/5 backdrop-blur-sm hover:bg-green-500/10 transition-colors flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Event Router & Enricher</h3>
                    <p className="text-sm text-muted-foreground">High-throughput event processing pipeline</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="px-4 py-2 rounded-lg bg-black/20 text-xs font-mono text-center border border-white/5">
                    Match Engine
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-black/20 text-xs font-mono text-center border border-white/5">
                    Analytics
                  </div>
                </div>
              </div>
            </div>

            {/* Data */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-4">
                <Database className="w-4 h-4" />
                <span>Data Layer</span>
              </div>
              <div className="h-full p-6 rounded-2xl border border-white/10 bg-red-500/5 backdrop-blur-sm hover:bg-red-500/10 transition-colors flex flex-col gap-3">
                <NodeCompact icon={Database} title="Redis" color="red" />
                <NodeCompact icon={Database} title="Postgres" color="blue" />
                <NodeCompact icon={Database} title="Timescale" color="yellow" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function Node({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/20",
    indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/20",
    violet: "bg-violet-500/20 text-violet-400 border-violet-500/20",
  }

  return (
    <div className={`p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${colorClasses[color]} group-hover:scale-110 transition-transform`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-medium text-sm">{title}</h4>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function NodeCompact({ icon: Icon, title, color }: { icon: any, title: string, color: string }) {
  const colorClasses: Record<string, string> = {
    red: "text-red-400",
    blue: "text-blue-400",
    yellow: "text-yellow-400",
  }

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
      <Icon className={`w-4 h-4 ${colorClasses[color]}`} />
      <span className="text-sm font-medium">{title}</span>
    </div>
  )
}
