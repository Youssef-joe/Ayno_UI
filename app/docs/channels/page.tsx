import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "Channels - Ayno Docs",
  description: "Understanding and using Ayno channels",
}

export default function ChannelsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Channels</h1>
        <p className="text-lg text-muted-foreground">Organize your realtime data with channels</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What are Channels?</h2>
          <p className="text-muted-foreground mb-4">
            Channels are namespaces for organizing messages. They allow you to broadcast to groups of users without sending messages to everyone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Channel Naming</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">Format</h3>
              <p className="text-sm text-muted-foreground">
                Channels use colon-separated naming: <code className="bg-black/50 px-2 py-1 rounded text-xs">category:identifier</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">Examples</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><code className="bg-black/50 px-2 py-1 rounded text-xs">room:lobby</code> - Main chat room</div>
                <div><code className="bg-black/50 px-2 py-1 rounded text-xs">room:announcements</code> - Announcements</div>
                <div><code className="bg-black/50 px-2 py-1 rounded text-xs">trading:AAPL</code> - Apple stock updates</div>
                <div><code className="bg-black/50 px-2 py-1 rounded text-xs">trading:GOOGL</code> - Google stock updates</div>
                <div><code className="bg-black/50 px-2 py-1 rounded text-xs">user:alice:notifications</code> - Alice's notifications</div>
                <div><code className="bg-black/50 px-2 py-1 rounded text-xs">game:room:12345</code> - Game room</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Publishing to Channels</h2>

          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">

              {`POST /apps/demo-app/channels/room:lobby/publish
Content-Type: application/json
X-API-Key: valid_key_demo-app

{
  "type": "message",
  "data": {
    "user": "alice",
    "text": "Hello everyone!"
  }
}`}
            </SyntaxHighlighter>
          </div>

          <p className="text-sm text-muted-foreground">
            The message is broadcast to all WebSocket connections subscribed to <code className="bg-black/50 px-2 py-1 rounded text-xs">room:lobby</code>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Subscribing to Channels</h2>

          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
              {`// JavaScript
const socket = new WebSocket('ws://localhost:4000/socket');

socket.onopen = () => {
  // Authenticate
  socket.send(JSON.stringify({
    app_id: 'demo-app',
    token: 'valid_token_alice'
  }));
  
  // Subscribe to channel
  socket.send(JSON.stringify({
    event: 'subscribe',
    channel: 'room:lobby'
  }));
};

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('New message:', message.data);
};`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Channel Patterns</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">📢 Public Channels</h3>
              <p className="text-sm text-muted-foreground">
                Broadcast to all subscribers: <code className="bg-black/50 px-2 py-1 rounded text-xs">room:*</code>, <code className="bg-black/50 px-2 py-1 rounded text-xs">announcements</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">👤 Private Channels</h3>
              <p className="text-sm text-muted-foreground">
                User-specific messages: <code className="bg-black/50 px-2 py-1 rounded text-xs">user:alice:notifications</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">🔒 Presence Channels</h3>
              <p className="text-sm text-muted-foreground">
                Track who's online: <code className="bg-black/50 px-2 py-1 rounded text-xs">presence:room:lobby</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">📊 Data Channels</h3>
              <p className="text-sm text-muted-foreground">
                Real-time updates: <code className="bg-black/50 px-2 py-1 rounded text-xs">trading:AAPL</code>, <code className="bg-black/50 px-2 py-1 rounded text-xs">metrics:server-1</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Channel History</h2>

          <p className="text-muted-foreground mb-4">Retrieve message history from a channel:</p>

          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
              {`GET /apps/demo-app/channels/room:lobby/history

Response:
[
  {
    "id": "msg_1",
    "type": "message",
    "data": {"user": "alice", "text": "Hello"},
    "timestamp": 1704067200000
  },
  {
    "id": "msg_2",
    "type": "message",
    "data": {"user": "bob", "text": "Hi!"},
    "timestamp": 1704067205000
  }
]`}
            </SyntaxHighlighter>
          </div>

          <p className="text-sm text-muted-foreground">
            History is stored in memory (ETS) for recent messages and can be persisted to database.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong>Use descriptive names:</strong> <code className="bg-black/50 px-2 py-1 rounded text-xs">room:announcements</code> not <code className="bg-black/50 px-2 py-1 rounded text-xs">ch1</code>
            </li>
            <li>
              <strong>Organize by type:</strong> Use category prefix like <code className="bg-black/50 px-2 py-1 rounded text-xs">trading:</code>, <code className="bg-black/50 px-2 py-1 rounded text-xs">user:</code>
            </li>
            <li>
              <strong>Include identifiers:</strong> <code className="bg-black/50 px-2 py-1 rounded text-xs">room:12345</code> for dynamic channels
            </li>
            <li>
              <strong>Keep names short:</strong> Reduces payload size in realtime messages
            </li>
            <li>
              <strong>Use authorization:</strong> Validate user can join channel before subscribing
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/websocket-api" className="text-primary hover:underline">WebSocket API</a></li>
            <li>→ <a href="/docs/http-api" className="text-primary hover:underline">HTTP API</a></li>
            <li>→ <a href="/docs/multi-tenancy" className="text-primary hover:underline">Multi-Tenancy</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
