import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "Quick Start - Ayno Docs",
  description: "Get started with Ayno in minutes",
}

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Quick Start</h1>
        <p className="text-lg text-muted-foreground">Build your first realtime app in 5 minutes</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Start Ayno</h2>
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`docker-compose up --build`}
          </SyntaxHighlighter>
          <p className="text-sm text-muted-foreground mt-2">This starts all services on localhost</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Check Health</h2>
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`curl http://localhost:4000/health`}
          </SyntaxHighlighter>
          <span className="bg-primary text-md mt-2 px-2 py-1 rounded text-black">
            {"{"}"status":"healthy"{"}"}
          </span>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Publish an Event</h2>
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`curl -X POST http://localhost:4000/apps/demo-app/channels/room:test/publish \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: valid_key_demo-app" \\
  -d '{
    "type": "message",
    "data": {"text": "Hello Ayno"}
  }'`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Get Channel History</h2>
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`curl http://localhost:4000/apps/demo-app/channels/room:test/history`}
          </SyntaxHighlighter>
          <span className="bg-primary text-md mt-2 px-2 py-1 rounded text-black">Returns all messages in the channel</span>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Connect via WebSocket (JavaScript)</h2>
          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`const socket = new WebSocket('ws://localhost:4000/socket');

socket.onopen = () => {
  socket.send(JSON.stringify({
    app_id: 'demo-app',
    token: 'valid_token_user123'
  }));
};

socket.onmessage = (event) => {
  console.log('Message:', JSON.parse(event.data));
};`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">App ID</h3>
              <p className="text-sm text-muted-foreground">
                Unique identifier for your application. Default: <code className="bg-black/50 px-2 py-1 rounded text-xs">demo-app</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Channel</h3>
              <p className="text-sm text-muted-foreground">
                A namespace for messages. Format: <code className="bg-black/50 px-2 py-1 rounded text-xs">room:lobby</code> or <code className="bg-black/50 px-2 py-1 rounded text-xs">trading:AAPL</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">API Key</h3>
              <p className="text-sm text-muted-foreground">
                Used for HTTP requests. Format: <code className="bg-black/50 px-2 py-1 rounded text-xs">valid_key_{'{'}app_id{'}'}</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Token</h3>
              <p className="text-sm text-muted-foreground">
                Used for WebSocket connections. Format: <code className="bg-black/50 px-2 py-1 rounded text-xs">valid_token_user123</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="text-2xl font-bold text-primary">60k+</div>
              <p className="text-sm text-muted-foreground">req/s throughput</p>
            </div>
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="text-2xl font-bold text-primary">10ms</div>
              <p className="text-sm text-muted-foreground">P95 latency</p>
            </div>
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="text-2xl font-bold text-primary">350B</div>
              <p className="text-sm text-muted-foreground">avg event size</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ Learn about <a href="/docs/channels" className="text-primary hover:underline">Channels</a></li>
            <li>→ Explore <a href="/docs/websocket-api" className="text-primary hover:underline">WebSocket API</a></li>
            <li>→ Deploy to <a href="/docs/docker-deployment" className="text-primary hover:underline">Docker</a></li>
            <li>→ Scale with <a href="/docs/scaling" className="text-primary hover:underline">Scaling Guide</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
