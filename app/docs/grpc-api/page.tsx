import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "gRPC API - Ayno Docs",
  description: "gRPC API documentation for high-performance communication",
}

export default function GRPCAPIPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">gRPC API</h1>
        <p className="text-lg text-muted-foreground">High-performance binary protocol for internal communication</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            gRPC is an internal protocol used by the Go Event Processor for ultra-low-latency communication. It's automatically used when available and falls back to HTTP if needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Connection Details</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Protocol</h3>
              <p className="text-sm text-muted-foreground">
                <code className="bg-primary text-black px-2 py-1 rounded text-xs">gRPC over HTTP/2</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Port</h3>
              <p className="text-sm text-muted-foreground">
                <code className="bg-primary text-black px-2 py-1 rounded text-xs">9090</code> (default)
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Host</h3>
              <p className="text-sm text-muted-foreground">
                <code className="bg-primary text-black px-2 py-1 rounded text-xs">go-processor</code> (Docker) or <code className="bg-primary text-black px-2 py-1 rounded text-xs">localhost</code> (local)
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Configuration</h3>
              <p className="text-sm text-muted-foreground">
                Set <code className="bg-primary text-black px-2 py-1 rounded text-xs">USE_GRPC=true</code> to enable
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Benefits</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary mb-1">Binary Protocol</div>
              <p className="text-sm text-muted-foreground">
                Smaller payload size (350B vs 1KB with JSON)
              </p>
            </div>

            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary mb-1">HTTP/2 Multiplexing</div>
              <p className="text-sm text-muted-foreground">
                Multiple concurrent streams over single connection
              </p>
            </div>

            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary mb-1">Connection Pooling</div>
              <p className="text-sm text-muted-foreground">
                Reuses connections for efficiency
              </p>
            </div>

            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary mb-1">Lower Latency</div>
              <p className="text-sm text-muted-foreground">
                10ms P95 latency vs HTTP alternatives
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Circuit Breaker Integration</h2>
          
          <p className="text-muted-foreground mb-4">
            gRPC automatically integrates with the circuit breaker pattern:
          </p>

          <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
            {`State: CLOSED (Normal)
├─ Try gRPC (9090)
├─ Success → Continue
└─ Failure (5 consecutive)
   ↓
   State: OPEN (Protecting)
   ├─ Skip gRPC
   ├─ Use HTTP (8080)
   └─ Reject fast
   ↓
   After 30 seconds
   ↓
   State: HALF_OPEN (Recovery)
   ├─ Test gRPC again
   ├─ Success → CLOSED
   └─ Failure → OPEN`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">.env Configuration</h3>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`# Enable gRPC
USE_GRPC=true

# gRPC connection details
GO_PROCESSOR_GRPC_HOST=go-processor
GO_PROCESSOR_GRPC_PORT=9090

# HTTP fallback (used if gRPC fails)
GO_PROCESSOR_URL=http://go-processor:8080

# Circuit breaker settings
CIRCUIT_BREAKER_THRESHOLD=5
CIRCUIT_BREAKER_TIMEOUT=30000`}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Monitoring</h2>
          
          <p className="text-muted-foreground mb-4">Check gRPC connectivity:</p>

          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`# Check circuit breaker status
curl http://localhost:4000/api/debug/circuit-breaker

Response:
{
  "state": "closed",
  "failures": 0,
  "last_failure": null
}

# Check logs for gRPC usage
docker logs polyglot_1 | grep -i grpc

# Look for:
# - "Event processed via gRPC" → Success
# - "Event processed via HTTP" → Fallback active
# - "Circuit breaker: OPEN" → gRPC down`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Events not using gRPC</h3>
              <p className="text-sm text-muted-foreground">
                Check <code className="bg-primary text-black px-2 py-1 rounded text-xs">USE_GRPC=true</code> and verify gRPC server is running on port 9090
              </p>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Connection refused on port 9090</h3>
              <p className="text-sm text-muted-foreground">
                Go processor not running. Check <code className="bg-primary text-black px-2 py-1 rounded text-xs">docker logs go-processor_1</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Circuit breaker constantly "OPEN"</h3>
              <p className="text-sm text-muted-foreground">
                gRPC server has issues. Fall back to HTTP or troubleshoot processor health
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">When to Use gRPC</h2>
          
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>Always enabled in production</strong> for low latency</li>
            <li>✓ <strong>Automatic fallback</strong> if processor is down (uses HTTP)</li>
            <li>✓ <strong>No client-side changes</strong> needed - transparent to users</li>
            <li>✓ <strong>Recommended for</strong> high-throughput, low-latency applications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/circuit-breaker" className="text-primary hover:underline">Circuit Breaker</a></li>
            <li>→ <a href="/docs/http-api" className="text-primary hover:underline">HTTP API</a></li>
            <li>→ <a href="/docs/performance-tuning" className="text-primary hover:underline">Performance Tuning</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
