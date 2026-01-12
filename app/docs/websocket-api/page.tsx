import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "WebSocket API - Ayno Docs",
  description: "WebSocket API documentation for realtime communication",
}

export default function WebSocketAPIPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">WebSocket API</h1>
        <p className="text-lg text-muted-foreground">Real-time bidirectional communication</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Connection</h2>

          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`// Connect to WebSocket
const socket = new WebSocket('ws://localhost:4000/socket');

socket.onopen = () => {
  console.log('Connected');
};`}
          </SyntaxHighlighter>

          <p className="text-sm text-white/70 mt-4">
            Default port: 4000 | Production: Use <code className="bg-black/50 px-2 py-1 text-valid_key_{'app_id'} text-xs">wss://</code> for secure connection
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>

          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`socket.send(JSON.stringify({
  event: 'auth',
  data: {
    app_id: 'demo-app',
    token: 'valid_token_alice'
  }
}));`}
          </SyntaxHighlighter>

          <div className="p-4 rounded-lg border border-white/10 bg-white/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Token Format:</strong> <code className="bg-black/50 px-2 py-1 rounded text-xs">valid_token_{'{'}'user_id'{'}'}</code>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Channel</h2>

          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`socket.send(JSON.stringify({
  event: 'subscribe',
  channel: 'room:lobby'
}));`}
          </SyntaxHighlighter>

          <p className="text-sm text-white/70 mt-4">
            Subscribe to multiple channels by sending multiple subscribe events.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Receive Messages</h2>

          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  
  if (message.event === 'message') {
    console.log('New message:', message.data);
  }
};`}
          </SyntaxHighlighter>

          <p className="text-sm text-white/70 mt-4">
            Messages are delivered instantly to all subscribers (~10ms latency).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Publish Message</h2>

          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`socket.send(JSON.stringify({
  event: 'publish',
  channel: 'room:lobby',
  data: {
    type: 'message',
    payload: {
      text: 'Hello everyone!'
    }
  }
}));`}
          </SyntaxHighlighter>

          <p className="text-sm text-white/70 mt-4">
            Publishing via WebSocket is optional. You can also use the HTTP API for publishing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Events</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">auth</h3>
              <p className="text-sm text-muted-foreground">Authenticate the connection with app_id and token</p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">subscribe</h3>
              <p className="text-sm text-muted-foreground">Join a channel and receive messages</p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">unsubscribe</h3>
              <p className="text-sm text-muted-foreground">Leave a channel</p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">publish</h3>
              <p className="text-sm text-muted-foreground">Broadcast a message to a channel</p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">message</h3>
              <p className="text-sm text-muted-foreground">Incoming message from a channel</p>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-mono font-semibold text-primary mb-2">error</h3>
              <p className="text-sm text-muted-foreground">Error event with error details</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>

          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.event === 'error') {
    console.error('Server error:', message.data.message);
  }
};`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Reconnection</h2>

          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`function connectWebSocket() {
  const socket = new WebSocket('ws://localhost:4000/socket');
  
  socket.onclose = () => {
    console.log('Disconnected. Reconnecting...');
    setTimeout(connectWebSocket, 3000); // Retry after 3s
  };
  
  return socket;
}`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Complete Example</h2>

          <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
            {`// Initialize
const socket = new WebSocket('ws://localhost:4000/socket');

// On connect
socket.onopen = () => {
  // Authenticate
  socket.send(JSON.stringify({
    event: 'auth',
    data: { app_id: 'demo-app', token: 'valid_token_alice' }
  }));
  
  // Subscribe to channel
  socket.send(JSON.stringify({
    event: 'subscribe',
    channel: 'room:lobby'
  }));
};

// Receive messages
socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.event === 'message') {
    console.log('From ' + msg.data.user + ': ' + msg.data.text);
  }
};

// Handle errors
socket.onerror = (error) => console.error('Error:', error);
socket.onclose = () => console.log('Disconnected');`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/http-api" className="text-primary hover:underline">HTTP API</a></li>
            <li>→ <a href="/docs/channels" className="text-primary hover:underline">Channels</a></li>
            <li>→ <a href="/docs/quick-start" className="text-primary hover:underline">Quick Start</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
