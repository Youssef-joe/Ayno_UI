import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "Circuit Breaker - Ayno Docs",
  description: "Understanding the circuit breaker pattern in Ayno",
}

export default function CircuitBreakerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Circuit Breaker</h1>
        <p className="text-lg text-muted-foreground">Automatic failover and fault tolerance</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is Circuit Breaker?</h2>
          <p className="text-muted-foreground mb-4">
            The circuit breaker pattern prevents cascading failures by automatically falling back to a slower but reliable service when the fast service fails.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">States</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/10">
              <h3 className="font-semibold text-green-400 mb-2">🟢 CLOSED (Normal)</h3>
              <p className="text-sm text-muted-foreground">
                Everything is working. Using fast gRPC path (9090). If requests succeed, stay closed.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/10">
              <h3 className="font-semibold text-red-400 mb-2">🔴 OPEN (Protecting)</h3>
              <p className="text-sm text-muted-foreground">
                Too many failures detected (5 consecutive). Switch to slower HTTP fallback (8080). Reject new requests fast.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10">
              <h3 className="font-semibold text-yellow-400 mb-2">🟡 HALF_OPEN (Testing)</h3>
              <p className="text-sm text-muted-foreground">
                After 30 seconds, test if gRPC is back. If success, return to CLOSED. If failure, return to OPEN.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">State Transitions</h2>

          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
              {`CLOSED
  ↓ [5 consecutive failures]
OPEN
  ↓ [30 second timeout]
HALF_OPEN
  ├─ [success]
  │  ↓
  │  CLOSED (back to normal)
  │
  └─ [failure]
     ↓
     OPEN (stay protected)`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">CIRCUIT_BREAKER_THRESHOLD</h3>
              <p className="text-sm text-muted-foreground mb-2">Failures before opening</p>
              <div className="bg-black/50 px-3 py-3 rounded text-xs text-green-400">Default: 5</div>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">CIRCUIT_BREAKER_TIMEOUT</h3>
              <p className="text-sm text-muted-foreground mb-2">Milliseconds before recovery test</p>
              <div className="bg-black/50 px-3 py-3 rounded text-xs text-green-400">Default: 30000 (30 seconds)</div>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">USE_CIRCUIT_BREAKER</h3>
              <p className="text-sm text-muted-foreground mb-2">Enable/disable circuit breaker</p>
              <div className="bg-black/50 px-3 py-3 rounded text-xs text-green-400">Default: true</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Monitoring Status</h2>

          <p className="text-muted-foreground mb-4">Check circuit breaker status:</p>

          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
           <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
              {`curl http://localhost:4000/api/debug/circuit-breaker

Response:
{
  "state": "closed",
  "failures": 0,
  "last_failure": null
}`}
            </SyntaxHighlighter>
          </div>

          <p className="text-sm text-muted-foreground mt-2">
            States: <code className="bg-black/50 px-2 py-1 rounded text-xs">closed</code> | <code className="bg-black/50 px-2 py-1 rounded text-xs">open</code> | <code className="bg-black/50 px-2 py-1 rounded text-xs">half_open</code>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Automatic Failover</h2>

          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
              {`When CLOSED (normal):
  Event → Try gRPC (9090) → Success → User response

When OPEN (protecting):
  Event → Skip gRPC → Use HTTP (8080) → User response
  (Slower but still works!)

When HALF_OPEN (testing):
  Event → Try gRPC again → If works, CLOSED → Resume fast path`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">When Circuit Opens</h2>

          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong>1. Detection:</strong> 5 consecutive failures detected
            </li>
            <li>
              <strong>2. Protection:</strong> Circuit OPENS, fallback to HTTP activated
            </li>
            <li>
              <strong>3. Recovery:</strong> After 30 seconds, HALF_OPEN state tests gRPC
            </li>
            <li>
              <strong>4. Resolution:</strong> If successful, return to CLOSED; if fails, OPEN again
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Log Monitoring</h2>

          <p className="text-muted-foreground mb-4">Watch logs for circuit breaker activity:</p>

          <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
            <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
              {`# Watch for state changes
docker logs -f polyglot_1 | grep -i "circuit"

Look for:
✓ "Circuit breaker: CLOSED" → Normal
⚠ "Circuit breaker: OPEN" → Failover active
🔄 "Circuit breaker: HALF_OPEN" → Testing recovery
✓ "Event processed via gRPC" → Fast path
⚠ "Event processed via HTTP" → Fallback active`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Circuit stays OPEN</h3>
              <p className="text-sm text-muted-foreground">
                Go processor is down. Check <code className="bg-black/50 px-2 py-1 rounded text-xs">docker logs go-processor_1</code> and restart it.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">High latency when OPEN</h3>
              <p className="text-sm text-muted-foreground">
                Using HTTP fallback. Processor is slow. Either fix processor or scale to add more instances.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Circuit oscillates OPEN/CLOSED</h3>
              <p className="text-sm text-muted-foreground">
                Processor is flaky. Increase CIRCUIT_BREAKER_THRESHOLD or fix the underlying issue.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Impact</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2">State</th>
                <th className="text-left py-2">Latency</th>
                <th className="text-left py-2">Reliability</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2 text-green-400">CLOSED</td>
                <td className="py-2">10ms (gRPC)</td>
                <td className="py-2">100% when healthy</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-yellow-400">OPEN</td>
                <td className="py-2">50-100ms (HTTP)</td>
                <td className="py-2">100% with fallback</td>
              </tr>
              <tr>
                <td className="py-2 text-yellow-400">HALF_OPEN</td>
                <td className="py-2">Variable (testing)</td>
                <td className="py-2">Limited traffic</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/grpc-api" className="text-primary hover:underline">gRPC API</a></li>
            <li>→ <a href="/docs/http-api" className="text-primary hover:underline">HTTP API</a></li>
            <li>→ <a href="/docs/architecture" className="text-primary hover:underline">Architecture</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
