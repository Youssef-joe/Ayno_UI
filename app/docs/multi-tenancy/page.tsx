export const metadata = {
  title: "Multi-Tenancy - Ayno Docs",
  description: "Multi-tenant architecture in Ayno",
}

export default function MultiTenancyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Multi-Tenancy</h1>
        <p className="text-lg text-muted-foreground">Building isolated applications on shared infrastructure</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is Multi-Tenancy?</h2>
          <p className="text-muted-foreground mb-4">
            Multi-tenancy allows one Ayno deployment to serve multiple independent applications (tenants) with complete data isolation. Each tenant has:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Unique App ID</li>
            <li>✓ Private channels</li>
            <li>✓ Isolated message history</li>
            <li>✓ Custom API keys</li>
            <li>✓ Authentication tokens</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">App Isolation</h2>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <code className="text-sm text-green-400">
{`Single deployment serves multiple apps:

App A: /apps/app-a/channels/*
App B: /apps/app-b/channels/*
App C: /apps/app-c/channels/*

Complete isolation:
- Messages from App A never leak to App B
- Channels are app-specific
- Authentication is per-app`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Create App ID</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto">
                <code className="text-sm text-green-400">
{`app_id = "my-chat-app"  # Unique identifier`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Generate API Keys</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto">
                <code className="text-sm text-green-400">
{`API Key format: valid_key_\${app_id}

Example: valid_key_my-chat-app

Use in HTTP requests:
curl -H "X-API-Key: valid_key_my-chat-app" ...`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Generate Auth Tokens</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto">
                <code className="text-sm text-green-400">
{`Token format: valid_token_\${user_id}

Example: valid_token_user_123

Use in WebSocket:
{"app_id": "my-chat-app", "token": "valid_token_user_123"}`}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Channel Isolation</h2>
          
          <p className="text-muted-foreground mb-4">Channels are isolated per app:</p>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto">
            <code className="text-sm text-green-400">
{`App A:
/apps/app-a/channels/room:lobby
/apps/app-a/channels/trading:AAPL

App B:
/apps/app-b/channels/room:lobby  ← Different channel!
/apps/app-b/channels/support:general

Each app's room:lobby is completely separate`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Example: Multiple Tenants</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Chat App A</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>API Key: <code className="bg-black/50 px-1 rounded text-xs">valid_key_chat-app-a</code></li>
                <li>Channels: <code className="bg-black/50 px-1 rounded text-xs">room:*</code></li>
                <li>Users: alice, bob, charlie</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Trading App B</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>API Key: <code className="bg-black/50 px-1 rounded text-xs">valid_key_trading-app-b</code></li>
                <li>Channels: <code className="bg-black/50 px-1 rounded text-xs">trading:*</code></li>
                <li>Users: trader1, trader2</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Gaming App C</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>API Key: <code className="bg-black/50 px-1 rounded text-xs">valid_key_game-app-c</code></li>
                <li>Channels: <code className="bg-black/50 px-1 rounded text-xs">game:*</code></li>
                <li>Users: player1, player2, player3</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security Considerations</h2>
          
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong>API Keys:</strong> Keep private. Never expose in client code. Use OAuth/JWT tokens instead.
            </li>
            <li>
              <strong>Tokens:</strong> Short-lived and user-specific. Implement token refresh.
            </li>
            <li>
              <strong>App IDs:</strong> Public, but not sensitive. Acts as namespace only.
            </li>
            <li>
              <strong>Isolation:</strong> Guaranteed at database level. One app cannot access another's data.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/channels" className="text-primary hover:underline">Channels</a></li>
            <li>→ <a href="/docs/http-api" className="text-primary hover:underline">HTTP API</a></li>
            <li>→ <a href="/docs/websocket-api" className="text-primary hover:underline">WebSocket API</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
