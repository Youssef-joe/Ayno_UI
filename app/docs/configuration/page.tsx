import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "Configuration - Ayno Docs",
  description: "Configure Ayno for your environment",
}

export default function ConfigurationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Configuration</h1>
        <p className="text-lg text-muted-foreground">Environment variables and settings</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Environment Variables</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">MIX_ENV</h3>
              <p className="text-sm text-foreground mb-2">Elixir environment (dev, test, prod)</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">dev | test | prod</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">LOG_LEVEL</h3>
              <p className="text-sm text-foreground mb-2">Log verbosity</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">debug | info | warn | error</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">REDIS_HOST</h3>
              <p className="text-sm text-foreground mb-2">Redis server hostname</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">Default: localhost</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">REDIS_PORT</h3>
              <p className="text-sm text-foreground mb-2">Redis server port</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">Default: 6379</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">USE_GRPC</h3>
              <p className="text-sm text-foreground mb-2">Enable gRPC for processor communication</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">true | false</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">GO_PROCESSOR_URL</h3>
              <p className="text-sm text-foreground mb-2">Go processor HTTP endpoint</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">http://localhost:8080</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">GO_PROCESSOR_GRPC_HOST</h3>
              <p className="text-sm text-foreground mb-2">Go processor gRPC host</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">Default: localhost</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">GO_PROCESSOR_GRPC_PORT</h3>
              <p className="text-sm text-foreground mb-2">Go processor gRPC port</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">Default: 9090</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">CIRCUIT_BREAKER_THRESHOLD</h3>
              <p className="text-sm text-foreground mb-2">Failures before circuit opens</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">Default: 5</code>
            </div>

            <div className="p-4 rounded-lg border border-white/10 bg-black/50">
              <h3 className="font-mono font-semibold text-primary mb-2">CIRCUIT_BREAKER_TIMEOUT</h3>
              <p className="text-sm text-foreground mb-2">Milliseconds before recovery attempt</p>
              <code className="text-xs bg-primary/50 px-2 py-1 rounded">Default: 30000</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Development Setup</h2>
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`# .env.dev
MIX_ENV=dev
LOG_LEVEL=debug
REDIS_HOST=localhost
REDIS_PORT=6379
USE_GRPC=true
GO_PROCESSOR_URL=http://localhost:8080
GO_PROCESSOR_GRPC_HOST=localhost
GO_PROCESSOR_GRPC_PORT=9090`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Production Setup</h2>
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`# .env.prod
MIX_ENV=prod
LOG_LEVEL=info
REDIS_HOST=redis.production.internal
REDIS_PORT=6379
USE_GRPC=true
GO_PROCESSOR_URL=http://go-processor:8080
GO_PROCESSOR_GRPC_HOST=go-processor
GO_PROCESSOR_GRPC_PORT=9090
CIRCUIT_BREAKER_THRESHOLD=5
CIRCUIT_BREAKER_TIMEOUT=30000`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Docker Environment</h2>
          <p className="text-muted-foreground mb-4">Set variables in docker-compose.yml:</p>
          <SyntaxHighlighter language="yaml" style={oneDark} className="rounded-lg">
            {`services:
  polyglot:
    environment:
      MIX_ENV: prod
      LOG_LEVEL: info
      REDIS_HOST: redis
      USE_GRPC: 'true'
      GO_PROCESSOR_GRPC_HOST: go-processor
      GO_PROCESSOR_GRPC_PORT: 9090`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Verify Configuration</h2>
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`# Check environment variables
docker exec polyglot_1 printenv | grep MIX_ENV

# View health status
curl http://localhost:4000/health

# Check circuit breaker status
curl http://localhost:4000/api/debug/circuit-breaker`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/installation" className="text-primary hover:underline">Installation</a></li>
            <li>→ <a href="/docs/docker-deployment" className="text-primary hover:underline">Docker Deployment</a></li>
            <li>→ <a href="/docs/production-setup" className="text-primary hover:underline">Production Setup</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
