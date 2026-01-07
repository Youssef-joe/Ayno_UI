export default function DocsIndex() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Complete guide to building with Ayno Realtime Infrastructure
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 rounded-lg border border-white/10 hover:border-primary/30 transition">
          <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Installation, quick start, and configuration guides
          </p>
          <ul className="space-y-2 text-sm">
            <li>→ <a href="/docs/installation" className="text-primary hover:underline">Installation</a></li>
            <li>→ <a href="/docs/quick-start" className="text-primary hover:underline">Quick Start</a></li>
            <li>→ <a href="/docs/configuration" className="text-primary hover:underline">Configuration</a></li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border border-white/10 hover:border-primary/30 transition">
          <h3 className="text-lg font-semibold mb-2">Core Concepts</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Understand the architecture and key features
          </p>
          <ul className="space-y-2 text-sm">
            <li>→ <a href="/docs/architecture" className="text-primary hover:underline">Architecture</a></li>
            <li>→ <a href="/docs/multi-tenancy" className="text-primary hover:underline">Multi-Tenancy</a></li>
            <li>→ <a href="/docs/channels" className="text-primary hover:underline">Channels</a></li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border border-white/10 hover:border-primary/30 transition">
          <h3 className="text-lg font-semibold mb-2">API Reference</h3>
          <p className="text-muted-foreground text-sm mb-4">
            WebSocket, HTTP, and gRPC API documentation
          </p>
          <ul className="space-y-2 text-sm">
            <li>→ <a href="/docs/websocket-api" className="text-primary hover:underline">WebSocket API</a></li>
            <li>→ <a href="/docs/http-api" className="text-primary hover:underline">HTTP API</a></li>
            <li>→ <a href="/docs/grpc-api" className="text-primary hover:underline">gRPC API</a></li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border border-white/10 hover:border-primary/30 transition">
          <h3 className="text-lg font-semibold mb-2">Deployment</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Deploy to production with confidence
          </p>
          <ul className="space-y-2 text-sm">
            <li>→ <a href="/docs/docker-deployment" className="text-primary hover:underline">Docker Deployment</a></li>
            <li>→ <a href="/docs/production-setup" className="text-primary hover:underline">Production Setup</a></li>
            <li>→ <a href="/docs/scaling" className="text-primary hover:underline">Scaling Guide</a></li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border border-white/10 hover:border-primary/30 transition md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Advanced Topics</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Performance optimization and troubleshooting
          </p>
          <ul className="space-y-2 text-sm grid grid-cols-3 gap-4">
            <li>→ <a href="/docs/circuit-breaker" className="text-primary hover:underline">Circuit Breaker</a></li>
            <li>→ <a href="/docs/performance-tuning" className="text-primary hover:underline">Performance Tuning</a></li>
            <li>→ <a href="/docs/troubleshooting" className="text-primary hover:underline">Troubleshooting</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-lg border border-blue-500/20 bg-blue-500/5">
        <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
        <p className="text-sm text-muted-foreground">
          Check out our <a href="/docs/quick-start" className="text-primary hover:underline">Quick Start</a> guide to get up and running in minutes.
        </p>
      </div>
    </div>
  )
}
