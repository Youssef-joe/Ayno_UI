import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark, coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "HTTP API - Ayno Docs",
  description: "HTTP REST API documentation",
}

export default function HTTPAPIPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">HTTP API</h1>
        <p className="text-lg text-muted-foreground">REST API for server-to-server communication</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <SyntaxHighlighter language="text" style={oneDark} className="rounded-lg">
              {`http://localhost:4000`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>

          <p className="text-muted-foreground mb-4">All API requests require an API key header:</p>

          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`X-API-Key: valid_key_demo-app`}
          </SyntaxHighlighter>

          <div className="flex items-center gap-4 mt-4">
            <p className="text-lg text-white/70">
              Format:
            </p>
            <span className="rounded-lg px-2 py-1 bg-primary/40">
              {`valid_key_{app_id}`}
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">GET /health</h3>
              <p className="text-sm text-muted-foreground mb-2">Check server health</p>
              <SyntaxHighlighter language="json" style={oneDark} className="rounded-lg">
                {`Response: {"status":"healthy"}`}
              </SyntaxHighlighter>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">GET /ready</h3>
              <p className="text-sm text-muted-foreground mb-2">Readiness probe (200 if ready, 503 if degraded)</p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">GET /alive</h3>
              <p className="text-sm text-muted-foreground mb-2">Liveness probe (always 200 if running)</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold my-8">Channel Operations</h2>

          <div className="space-y-16">
            <div>
              <h3 className="font-mono font-semibold text-primary mb-2">GET /apps/{'{'}app_id{'}'}/channels/{'{'}channel{'}'}/history</h3>
              <p className="text-sm text-foreground mb-2">Get message history</p>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`curl http://localhost:4000/apps/demo-app/channels/room:lobby/history

Response:
[
  {
    "id": "msg_1",
    "type": "message",
    "data": {"user": "alice", "text": "Hello"},
    "timestamp": 1704067200000
  }
]`}
              </SyntaxHighlighter>
            </div>

            <div>
              <h3 className="font-mono font-semibold text-primary mb-2">POST /apps/{'{'}app_id{'}'}/channels/{'{'}channel{'}'}/publish</h3>
              <p className="text-sm text-foreground mb-2">Publish event to channel</p>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`curl -X POST http://localhost:4000/apps/demo-app/channels/room:lobby/publish \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: valid_key_demo-app" \\
  -d '{
    "type": "message",
    "data": {"user": "alice", "text": "Hello"}
  }'

Response:
{
  "status": "published",
  "message_id": "msg_12345",
  "timestamp": 1704067200000
}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Debug Endpoints</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">GET /api/debug/circuit-breaker</h3>
              <p className="text-sm text-muted-foreground mb-2">Circuit breaker status</p>
              <SyntaxHighlighter language="json" style={oneDark} className="rounded-lg">
                {`{"state":"closed","failures":0}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Response Format</h2>

          <ul className="space-y-4 list-disc">
            <li>
              <div>
                <h3 className="font-semibold mb-2">Success (200)</h3>
                <SyntaxHighlighter language="json" style={oneDark} className="rounded-lg">
                  {`{
  "status": "published",
  "message_id": "msg_12345",
  "timestamp": 1704067200000
}`}
                </SyntaxHighlighter>
              </div>
            </li>

            <li>
              <div>
                <h3 className="font-semibold mb-2">Error (4xx/5xx)</h3>
                <SyntaxHighlighter language="json" style={oneDark} className="rounded-lg">
                  {`{
  "error": "unauthorized",
  "message": "Invalid API key"
}`}
                </SyntaxHighlighter>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Error Codes</h2>

          <div className="space-y-2 text-muted-foreground">
            <div className="p-3 rounded border border-red-500/20 bg-red-500/5">
              <strong>400 Bad Request</strong> - Invalid request body or parameters
            </div>
            <div className="p-3 rounded border border-red-500/20 bg-red-500/5">
              <strong>401 Unauthorized</strong> - Missing or invalid API key
            </div>
            <div className="p-3 rounded border border-red-500/20 bg-red-500/5">
              <strong>404 Not Found</strong> - Channel or app not found
            </div>
            <div className="p-3 rounded border border-red-500/20 bg-red-500/5">
              <strong>429 Too Many Requests</strong> - Rate limit exceeded
            </div>
            <div className="p-3 rounded border border-red-500/20 bg-red-500/5">
              <strong>500 Internal Server Error</strong> - Server error
            </div>
            <div className="p-3 rounded border border-red-500/20 bg-red-500/5">
              <strong>503 Service Unavailable</strong> - Server degraded or unavailable
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Rate Limiting</h2>

          <p className="text-muted-foreground mb-4">
            API endpoints are subject to rate limiting. Responses include rate limit headers:
          </p>

          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1704067260`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/websocket-api" className="text-primary hover:underline">WebSocket API</a></li>
            <li>→ <a href="/docs/channels" className="text-primary hover:underline">Channels</a></li>
            <li>→ <a href="/docs/quick-start" className="text-primary hover:underline">Quick Start</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
