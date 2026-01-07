export const metadata = {
  title: "Performance Tuning - Ayno Docs",
  description: "Optimize Ayno for maximum performance",
}

export default function PerformanceTuningPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Performance Tuning</h1>
        <p className="text-lg text-muted-foreground">Optimize Ayno for your use case</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Baseline Performance</h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary">60k+ req/s</div>
              <p className="text-xs text-muted-foreground">throughput with gRPC</p>
            </div>
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary">10ms P95</div>
              <p className="text-xs text-muted-foreground">end-to-end latency</p>
            </div>
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary">350B avg</div>
              <p className="text-xs text-muted-foreground">event payload</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">gRPC Optimization</h2>
          
          <p className="text-muted-foreground mb-4">Use gRPC for 5-10x better performance:</p>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <code className="text-sm text-green-400">
{`# Enable gRPC
USE_GRPC=true
GO_PROCESSOR_GRPC_HOST=localhost
GO_PROCESSOR_GRPC_PORT=9090

# Verify it's working
curl http://localhost:4000/api/debug/circuit-breaker
# Should show: "state": "closed"`}
            </code>
          </div>

          <p className="text-sm text-muted-foreground">
            gRPC automatically falls back to HTTP if gRPC is unavailable (circuit breaker).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Connection Pooling</h2>
          
          <p className="text-muted-foreground mb-4">
            Reuse connections to reduce overhead:
          </p>

          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <code className="text-sm text-green-400">
{`# In docker-compose.yml, increase pool size
environment:
  GRPC_POOL_SIZE=100  # Connections to Go processor
  HTTP_POOL_SIZE=50   # HTTP connections`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Memory Optimization</h2>
          
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong>Limit history size:</strong> Store only recent messages in memory
            </li>
            <li>
              <strong>Message batching:</strong> Group messages to reduce overhead
            </li>
            <li>
              <strong>Compress payloads:</strong> Use gzip for large events
            </li>
            <li>
              <strong>Clean sessions:</strong> Remove inactive sessions periodically
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">CPU Optimization</h2>
          
          <div className="space-y-3 text-muted-foreground">
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Use gRPC:</strong> More efficient than JSON/HTTP
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Scale horizontally:</strong> Add more CPU with more servers
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Reduce logging:</strong> Set LOG_LEVEL=warn or error in prod
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Benchmarking</h2>
          
          <p className="text-muted-foreground mb-4">Run benchmarks to measure performance:</p>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
            <code className="text-green-400">
{`# Simple throughput test
curl -X POST http://localhost:4000/apps/demo-app/channels/room:test/publish \\
  -H "X-API-Key: valid_key_demo-app" \\
  -H "Content-Type: application/json" \\
  -d '{"type":"msg","data":{"text":"test"}}' \\
  --rate 10000

# Check results
curl http://localhost:4000/api/debug/circuit-breaker

# Verify circuit is CLOSED (using gRPC)
# Verify no errors in logs`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Monitoring Performance</h2>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
            <code className="text-green-400">
{`# Watch performance metrics
docker stats --no-stream polyglot_1

# Should see:
# CPU: < 70%
# Memory: < 500MB
# Network: Scales with traffic

# Check latency
curl -w "Time: %{time_total}s\\n" http://localhost:4000/health
# Should be < 100ms

# Monitor error rates
docker logs -f polyglot_1 | grep -i error
# Should see very few errors`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Bottlenecks</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Circuit breaker OPEN</h3>
              <p className="text-sm text-muted-foreground">
                Go processor is slow. Restart or scale: <code className="bg-black/50 px-2 py-1 rounded text-xs">docker-compose up --scale go-processor=2</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">High latency</h3>
              <p className="text-sm text-muted-foreground">
                Check if using gRPC. Verify circuit breaker is CLOSED. Scale servers if CPU {'>'}70%.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Memory growing</h3>
              <p className="text-sm text-muted-foreground">
                Message history too large. Implement cleanup or store in database instead of memory.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">High error rate</h3>
              <p className="text-sm text-muted-foreground">
                Check logs: <code className="bg-black/50 px-2 py-1 rounded text-xs">docker logs polyglot_1 | tail -50</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Scaling Checklist</h2>
          
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ gRPC enabled and working (circuit CLOSED)</li>
            <li>✓ Multiple Elixir servers (3+)</li>
            <li>✓ Multiple Go processors (2+)</li>
            <li>✓ Redis healthy and responsive</li>
            <li>✓ Log level = info (not debug)</li>
            <li>✓ CPU {'<'} 70%, Memory {'<'} 80%</li>
            <li>✓ Latency {'<'} 20ms P95</li>
            <li>✓ Error rate {'<'} 0.1%</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/grpc-api" className="text-primary hover:underline">gRPC API</a></li>
            <li>→ <a href="/docs/scaling" className="text-primary hover:underline">Scaling Guide</a></li>
            <li>→ <a href="/docs/circuit-breaker" className="text-primary hover:underline">Circuit Breaker</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
