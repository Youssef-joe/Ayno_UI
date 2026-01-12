import SyntaxHighlighter from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const metadata = {
  title: "Scaling Guide - Ayno Docs",
  description: "Scale Ayno for high traffic and large deployments",
}

export default function ScalingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Scaling Guide</h1>
        <p className="text-lg text-muted-foreground">Scale Ayno to handle millions of connections</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Architecture for Scale</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Stateless Gateways</h3>
              <p className="text-sm text-muted-foreground">Multiple Elixir servers share session state via Redis</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Load Balancing</h3>
              <p className="text-sm text-muted-foreground">Nginx distributes traffic across servers</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Event Processing</h3>
              <p className="text-sm text-muted-foreground">Go processors handle 60k+ req/s per instance</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Horizontal Scaling</h2>
          
          <p className="text-muted-foreground mb-4">Scale Elixir servers with Docker Compose:</p>
          
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`# Start with 5 Elixir servers
docker-compose up --scale polyglot=5

# Increase to 10 if needed
docker-compose up --scale polyglot=10`}
          </SyntaxHighlighter>

          <p className="text-sm text-muted-foreground">
            Each server handles ~10k concurrent connections. With 5 servers: 50k connections. With 10 servers: 100k connections.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Event Processor Scaling</h2>
          
          <p className="text-muted-foreground mb-4">Scale Go processors independently:</p>
          
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {`# Start with 2-3 processors
docker-compose up --scale go-processor=2

# Each processor: 60k+ req/s
# 2 processors: 120k+ req/s
# 3 processors: 180k+ req/s`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Database Scaling</h2>
          
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong>Read Replicas:</strong> PostgreSQL with read replicas for high query volume
            </li>
            <li>
              <strong>Connection Pooling:</strong> PgBouncer to limit database connections
            </li>
            <li>
              <strong>Caching:</strong> Redis for session and message caching
            </li>
            <li>
              <strong>Sharding:</strong> Partition data by app_id for extreme scale
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Redis Scaling</h2>
          
          <p className="text-muted-foreground mb-4">Redis bottlenecks at high scale. Solutions:</p>
          
          <div className="space-y-3 text-muted-foreground">
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Redis Cluster:</strong> Distribute data across multiple Redis nodes
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Sentinel:</strong> High availability Redis with automatic failover
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Elasticache:</strong> AWS managed Redis for simplified scaling
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Monitoring at Scale</h2>
          
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Prometheus for metrics collection</li>
            <li>✓ Grafana for dashboards</li>
            <li>✓ ELK Stack for log aggregation</li>
            <li>✓ Jaeger for distributed tracing</li>
            <li>✓ Alert on: latency, errors, CPU, memory</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Targets</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary mb-1">Single Server</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>10,000 concurrent connections</li>
                <li>60,000+ req/s (with gRPC)</li>
                <li>10ms P95 latency</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="font-semibold text-primary mb-1">10 Server Cluster</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>100,000 concurrent connections</li>
                <li>600,000+ req/s</li>
                <li>Same 10ms P95 latency</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/production-setup" className="text-primary hover:underline">Production Setup</a></li>
            <li>→ <a href="/docs/configuration" className="text-primary hover:underline">Configuration</a></li>
            <li>→ <a href="/docs/circuit-breaker" className="text-primary hover:underline">Circuit Breaker</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
