export const metadata = {
  title: "Production Setup - Ayno Docs",
  description: "Production deployment and configuration for Ayno",
}

export default function ProductionSetupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Production Setup</h1>
        <p className="text-lg text-muted-foreground">Deploy Ayno to production safely and efficiently</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Pre-Deployment Checklist</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Set MIX_ENV=prod</li>
            <li>✓ Configure SSL/TLS certificates</li>
            <li>✓ Set LOG_LEVEL=info</li>
            <li>✓ Enable gRPC (USE_GRPC=true)</li>
            <li>✓ Configure persistent storage</li>
            <li>✓ Set up monitoring and alerting</li>
            <li>✓ Configure backups</li>
            <li>✓ Load test before launch</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Environment Variables</h2>
          <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
            <code className="text-green-400">
{`MIX_ENV=prod
LOG_LEVEL=info
REDIS_HOST=redis.internal
REDIS_PORT=6379
USE_GRPC=true
GO_PROCESSOR_GRPC_HOST=go-processor.internal
GO_PROCESSOR_GRPC_PORT=9090
CIRCUIT_BREAKER_THRESHOLD=5
CIRCUIT_BREAKER_TIMEOUT=30000`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">SSL/TLS Setup</h2>
          <p className="text-muted-foreground mb-4">Secure your connections with HTTPS:</p>
          <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
            <code className="text-green-400">
{`# Using Let's Encrypt with Certbot
certbot certonly --standalone -d ayno.example.com

# Update docker-compose.yml with cert paths
volumes:
  - /etc/letsencrypt/live/ayno.example.com:/certs:ro`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Database Setup</h2>
          <p className="text-muted-foreground mb-4">PostgreSQL is optional but recommended for production:</p>
          <div className="space-y-3 text-muted-foreground">
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Backup Strategy:</strong> Daily automated backups
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Replication:</strong> Set up read replicas for high availability
            </div>
            <div className="p-3 rounded border border-white/10 bg-white/5">
              <strong>Connection Pooling:</strong> Use PgBouncer for connection management
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Monitoring & Alerts</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Monitor /ready endpoint (should return 200)</li>
            <li>✓ Track circuit breaker state</li>
            <li>✓ Monitor error rates</li>
            <li>✓ Track latency (P50, P95, P99)</li>
            <li>✓ Monitor memory usage</li>
            <li>✓ Alert on high CPU usage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">High Availability</h2>
          <div className="bg-black/50 rounded-lg p-4 overflow-auto text-xs">
            <code className="text-green-400">
{`# Scale Elixir servers (3+ recommended)
docker-compose up --scale polyglot=3

# Scale Go processors
docker-compose up --scale go-processor=2

# Load balancer distributes traffic
# Nginx handles failover automatically`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Docs</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ <a href="/docs/scaling" className="text-primary hover:underline">Scaling Guide</a></li>
            <li>→ <a href="/docs/docker-deployment" className="text-primary hover:underline">Docker Deployment</a></li>
            <li>→ <a href="/docs/configuration" className="text-primary hover:underline">Configuration</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
