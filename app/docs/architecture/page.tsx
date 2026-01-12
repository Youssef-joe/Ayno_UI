export const metadata = {
  title: "Architecture - Ayno Docs",
  description: "Ayno system architecture and design",
}

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Architecture</h1>
        <p className="text-lg text-muted-foreground">Understanding Ayno's system design</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">System Overview</h2>
          <div className="p-4 rounded-lg border border-white/10 bg-black/50 overflow-x-auto">
            <pre className="text-xs text-green-400 font-mono">
{`┌─────────────────────────────────────┐
│         Client Layer                │
│  (Web, Mobile, Desktop)             │
└─────────────────────┬───────────────┘
                      │
         ┌────────────┴────────────┐
         │                         │
    ┌────▼─────┐          ┌───────▼──┐
    │  HTTP    │          │WebSocket │
    │  (80)    │          │  (4000)  │
    └────┬─────┘          └───────┬──┘
         │                         │
    ┌────▼─────────────────────────▼──┐
    │  Nginx Load Balancer            │
    └────┬──────────────────────────┬──┘
         │                          │
    ┌────▼──────────┐      ┌────────▼────┐
    │ Elixir/Phoenix│      │ Elixir/      │
    │ (Port 4000)   │      │Phoenix       │
    │ - Channels    │      │ (Scaled)     │
    │ - WebSocket   │      └──────────────┘
    │ - HTTP API    │
    └────┬──────────┘
         │
    ┌────▼──────────────────┐
    │ Go Event Processor    │
    │ (Port 8080/9090)      │
    │ - gRPC (9090)         │
    │ - HTTP (8080)         │
    └────┬──────────────────┘
         │
    ┌────▼──────────┬────────────────┐
    │               │                │
┌───▼──┐      ┌────▼────┐      ┌────▼────┐
│Redis │      │Database │      │Analytics│
│(6379)│      │(5432)   │      │         │
└──────┘      └─────────┘      └─────────┘`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Components</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">🌐 Nginx (Port 80/443)</h3>
              <p className="text-sm text-muted-foreground">
                Load balancer that distributes traffic across Elixir servers. Handles SSL/TLS termination and reverse proxying.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">⚡ Elixir/Phoenix (Port 4000)</h3>
              <p className="text-sm text-muted-foreground">
                Gateway server handling WebSocket connections and HTTP requests. Manages channels, messages, and client connections.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">🔄 Go Processor (Port 8080/9090)</h3>
              <p className="text-sm text-muted-foreground">
                High-performance event processor. Exposes both HTTP (8080) and gRPC (9090) interfaces for low-latency communication.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">💾 Redis (Port 6379)</h3>
              <p className="text-sm text-muted-foreground">
                Session store and pub/sub backbone. Coordinates multi-server setups and manages user sessions.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">🗄️ PostgreSQL (Port 5432)</h3>
              <p className="text-sm text-muted-foreground">
                Persistent storage for applications, channels, and audit logs. Optional for stateless operation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Flow</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Client Publishes Message</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
                <code className="text-green-400">
{`POST /apps/demo-app/channels/room:lobby/publish
→ Nginx
→ Elixir/Phoenix
→ Validates API key
→ Sends to Go Processor (gRPC/HTTP)
→ Processor broadcasts to subscribers
→ Response with message ID`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. WebSocket Real-time</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
                <code className="text-green-400">
{`Client connects → WebSocket
→ Elixir authenticates token
→ Joins channel (via Phoenix PubSub)
→ Subscribes to channel:room:lobby
← Receives messages in real-time
← 10ms latency (gRPC path)`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Circuit Breaker Pattern</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
                <code className="text-green-400">
{`Normal: gRPC (9090) → Fast
On failure: Fall back to HTTP (8080)
After 5 failures: Circuit OPEN
After 30s: Try recovery (HALF_OPEN)
Success: Circuit CLOSED (back to gRPC)`}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Scalability</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Horizontal Scaling</h3>
              <p className="text-sm text-muted-foreground">
                Multiple Elixir servers behind load balancer. Redis coordinates state across instances.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Event Processing</h3>
              <p className="text-sm text-muted-foreground">
                Go Processor handles 60k+ req/s. Can scale independently of gateway.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Connection Pooling</h3>
              <p className="text-sm text-muted-foreground">
                gRPC connection pooling for efficient processor communication.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Multi-tenancy</h3>
              <p className="text-sm text-muted-foreground">
                Isolated channels per app. One deployment serves multiple customers.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Characteristics</h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="text-lg font-semibold text-primary mb-1">Throughput</div>
              <div className="text-sm text-muted-foreground">60,000+ req/s</div>
              <div className="text-xs text-muted-foreground mt-2">with gRPC optimization</div>
            </div>

            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="text-lg font-semibold text-primary mb-1">P95 Latency</div>
              <div className="text-sm text-muted-foreground">10ms</div>
              <div className="text-xs text-muted-foreground mt-2">end-to-end delivery</div>
            </div>

            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="text-lg font-semibold text-primary mb-1">Message Size</div>
              <div className="text-sm text-muted-foreground">350 bytes</div>
              <div className="text-xs text-muted-foreground mt-2">average payload</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fault Tolerance</h2>
          
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>Circuit Breaker</strong> - Automatic failover to HTTP if gRPC fails</li>
            <li>✓ <strong>Connection Pooling</strong> - Reuses connections for efficiency</li>
            <li>✓ <strong>Health Checks</strong> - /health, /ready, /alive endpoints</li>
            <li>✓ <strong>Session Persistence</strong> - Redis stores sessions across restarts</li>
            <li>✓ <strong>Load Balancing</strong> - Nginx distributes load across instances</li>
            <li>✓ <strong>Graceful Degradation</strong> - Falls back to HTTP on processor failure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/channels" className="text-primary hover:underline">Channels</a></li>
            <li>→ <a href="/docs/circuit-breaker" className="text-primary hover:underline">Circuit Breaker</a></li>
            <li>→ <a href="/docs/scaling" className="text-primary hover:underline">Scaling Guide</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
