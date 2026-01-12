import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "Docker Deployment - Ayno Docs",
  description: "Deploy Ayno using Docker and Docker Compose",
}

export default function DockerDeploymentPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Docker Deployment</h1>
        <p className="text-lg text-muted-foreground">Get Ayno running with Docker in minutes</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <SyntaxHighlighter language="c++" style={oneDark} className="rounded-lg">
            {`docker-compose up --build`}
          </SyntaxHighlighter>
          <p className="text-sm text-muted-foreground mt-2">This starts all services automatically.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>

          <div className="space-y-3 text-foreground">
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong className="text-muted-foreground">Nginx - </strong>Load balancer on port 80
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong className="text-muted-foreground">Elixir/Phoenix - </strong>Gateway on port 4000
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong className="text-muted-foreground">Go Processor - </strong>Event processor on ports 8080 (HTTP) and 9090 (gRPC)
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong className="text-muted-foreground">Redis - </strong>Session store on port 6379
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong className="text-muted-foreground">PostgreSQL - </strong>Database on port 5432
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Scaling</h2>

          <p className="text-muted-foreground mb-4">Scale services with Docker Compose:</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Scale Elixir Servers</h3>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`docker-compose up --scale polyglot=3`}
              </SyntaxHighlighter>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Scale Go Processors</h3>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`docker-compose up --scale go-processor=2`}
              </SyntaxHighlighter>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Scale Both</h3>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`docker-compose up --scale polyglot=3 --scale go-processor=2`}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>

          <p className="text-muted-foreground mb-4">Set environment variables in docker-compose.yml:</p>

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
          <h2 className="text-2xl font-semibold mb-4">Monitoring</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">View Logs</h3>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`# All services
docker-compose logs -f

# Specific service
docker-compose logs -f polyglot
docker-compose logs -f go-processor`}
              </SyntaxHighlighter>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Check Health</h3>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`curl http://localhost/health
curl http://localhost:4000/ready
curl http://localhost:4000/api/debug/circuit-breaker`}
              </SyntaxHighlighter>
            </div>

            <div>
              <h3 className="font-semibold mb-2">List Services</h3>
              <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
                {`docker-compose ps`}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>

          <div className="space-y-3 text-muted-foreground">
            <div className="p-3 rounded border border-yellow-500/20 bg-yellow-500/5">
              <strong>Port already in use:</strong> Change ports in docker-compose.yml or stop conflicting services
            </div>
            <div className="p-3 rounded border border-yellow-500/20 bg-yellow-500/5">
              <strong>Build fails:</strong> Clear cache with <code className="bg-black/50 p-2 rounded text-xs">docker-compose build --no-cache</code>
            </div>
            <div className="p-3 rounded border border-yellow-500/20 bg-yellow-500/5">
              <strong>Services won't connect:</strong> Make sure service names match in docker-compose.yml
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/production-setup" className="text-primary hover:underline">Production Setup</a></li>
            <li>→ <a href="/docs/scaling" className="text-primary hover:underline">Scaling Guide</a></li>
            <li>→ <a href="/docs/configuration" className="text-primary hover:underline">Configuration</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
