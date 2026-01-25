import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "Troubleshooting - Ayno Docs",
  description: "Solutions to common Ayno issues",
}

export default function TroubleshootingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Troubleshooting</h1>
        <p className="text-lg text-muted-foreground">Solutions to common issues</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Health Checks</h2>
          
          <p className="text-muted-foreground mb-4">Always start here:</p>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
{`# 1. Check if server is running
curl http://localhost:4000/health
# Expected: {"status":"healthy"}

# 2. Check if ready to accept traffic
curl http://localhost:4000/ready
# Expected: 200 OK (or 503 if degraded)

# 3. Check if alive
curl http://localhost:4000/alive
# Expected: 200 OK always

# 4. Check circuit breaker
curl http://localhost:4000/api/debug/circuit-breaker
# Expected: "state":"closed"`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Connection Issues</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Connection refused on port 4000</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Elixir server not running</p>
                <p><strong>Fix:</strong></p>
                <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
                  docker-compose up polyglot
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Port already in use</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Another process using port 4000</p>
                <p><strong>Fix:</strong></p>
                <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
                  lsof -i :4000  # Find process
                  kill -9 &lt;PID&gt;   # Kill it
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Timeout connecting to server</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Firewall blocking port or server overloaded</p>
                <p><strong>Fix:</strong></p>
                <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
                  docker logs polyglot_1 | tail -50
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">API Issues</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">401 Unauthorized</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Invalid or missing API key</p>
                <p><strong>Fix:</strong> Use format <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">valid_key_demo-app</SyntaxHighlighter></p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">404 Not Found</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Invalid app ID or channel name</p>
                <p><strong>Fix:</strong> Check app_id and channel format: <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">category:name</SyntaxHighlighter></p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">429 Too Many Requests</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Rate limit exceeded</p>
                <p><strong>Fix:</strong> Wait or scale server</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">503 Service Unavailable</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Server degraded or dependencies down</p>
                <p><strong>Fix:</strong> Check /ready endpoint and logs</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">WebSocket Issues</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">WebSocket connection refused</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Server not running or firewall issue</p>
                <p><strong>Fix:</strong> Check server is running, try HTTP first</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Messages not received</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Not subscribed to channel or auth failed</p>
                <p><strong>Fix:</strong> Send subscribe event after auth</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Connection drops frequently</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Network instability or server restarting</p>
                <p><strong>Fix:</strong> Implement reconnection logic with exponential backoff</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Issues</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">High latency ({'>'}50ms)</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Using HTTP fallback (circuit OPEN)</p>
                <p><strong>Fix:</strong> Check Go processor health, restart if needed</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">High CPU usage ({'>'}80%)</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Too many connections or large payloads</p>
                <p><strong>Fix:</strong> Scale servers: <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">--scale polyglot=5</SyntaxHighlighter></p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">High memory usage ({'>'}80%)</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Message history growing too large</p>
                <p><strong>Fix:</strong> Reduce history size or persist to database</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Low throughput ({'<'}30k req/s)</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Cause:</strong> Using HTTP instead of gRPC</p>
                <p><strong>Fix:</strong> Enable gRPC: <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">USE_GRPC=true</SyntaxHighlighter></p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Docker Issues</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Container won't start</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
                  docker-compose logs polyglot
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Services can't communicate</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Fix:</strong> Check service names in docker-compose.yml and use service name (not localhost) as hostname</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Build fails</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
                  docker-compose build --no-cache
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Diagnostics Commands</h2>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
            <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
{`# Full system diagnosis
echo "1. Check health"
curl -s http://localhost:4000/health | jq

echo "2. Check circuit breaker"
curl -s http://localhost:4000/api/debug/circuit-breaker | jq

echo "3. Check logs"
docker-compose logs --tail=20 polyglot

echo "4. Check resource usage"
docker stats --no-stream

echo "5. Check services running"
docker-compose ps

echo "6. Test API"
curl -X POST http://localhost:4000/apps/demo-app/channels/test:ch/publish \\
  -H "X-API-Key: valid_key_demo-app" \\
  -H "Content-Type: application/json" \\
  -d '{"type":"test","data":{}}'`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Help</h2>
          
          <ol className="space-y-2 text-muted-foreground">
            <li>1. Check health endpoints above</li>
            <li>2. Review logs: <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">docker-compose logs</SyntaxHighlighter></li>
            <li>3. Check docs for your specific issue</li>
            <li>4. Search GitHub issues</li>
            <li>5. Create a detailed issue with logs and steps to reproduce</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/quick-start" className="text-primary hover:underline">Quick Start</a></li>
            <li>→ <a href="/docs/circuit-breaker" className="text-primary hover:underline">Circuit Breaker</a></li>
            <li>→ <a href="/docs/configuration" className="text-primary hover:underline">Configuration</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
