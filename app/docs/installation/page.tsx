export const metadata = {
  title: "Installation - Ayno Docs",
  description: "Install Ayno Realtime Engine and get started",
}

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Installation</h1>
        <p className="text-lg text-muted-foreground">Get Ayno up and running in minutes</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Docker and Docker Compose (recommended)</li>
            <li>• Node.js 18+ (for SDK development)</li>
            <li>• Git for cloning the repository</li>
            <li>• 2GB RAM minimum, 10GB disk space</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Start with Docker</h2>
          <p className="text-muted-foreground mb-4">The easiest way to get started</p>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <code className="text-sm text-green-400">
{`# Clone the repository
git clone https://github.com/Youssef-joe/polyglot
cd polyglot

# Start all services
docker-compose up --build

# Verify it's running
curl http://localhost/health`}
            </code>
          </div>

          <p className="text-sm text-muted-foreground">
            This starts Nginx (port 80), Elixir gateway (port 4000), Go processor (port 8080), and Redis (port 6379)
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Manual Installation</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Install Elixir</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto">
                <code className="text-sm text-green-400">
{`# macOS
brew install elixir

# Linux (Ubuntu)
wget https://repo.hex.pm/builds/elixir/v1.17.0.zip
unzip elixir-v1.17.0.zip`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Install Go</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto">
                <code className="text-sm text-green-400">
{`# Download from golang.org
# Or use package manager

# macOS
brew install go

# Linux
sudo apt-get install golang-go`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Install Redis</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto">
                <code className="text-sm text-green-400">
{`# macOS
brew install redis

# Linux
sudo apt-get install redis-server`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4. Build and Run</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-auto">
                <code className="text-sm text-green-400">
{`# Terminal 1: Go Processor
cd go_processor
go build -o processor main.go
./processor

# Terminal 2: Elixir Gateway
mix deps.get
mix phx.server`}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Health Check</h2>
          <p className="text-muted-foreground mb-4">Verify the installation:</p>
          
          <div className="bg-black/50 rounded-lg p-4 overflow-auto mb-4">
            <code className="text-sm text-green-400">
{`curl http://localhost:4000/health

# Expected response:
# {"status":"healthy"}`}
            </code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-red-400 mb-2">Port Already in Use</h3>
              <p className="text-sm text-muted-foreground">
                Check which process is using the port and stop it, or use different ports in docker-compose.yml
              </p>
            </div>
            
            <div className="p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
              <h3 className="font-semibold text-yellow-400 mb-2">Dependencies Not Found</h3>
              <p className="text-sm text-muted-foreground">
                Run <code className="bg-black/50 px-2 py-1 rounded text-xs">mix deps.get</code> to download dependencies
              </p>
            </div>

            <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
              <h3 className="font-semibold text-blue-400 mb-2">Connection Refused</h3>
              <p className="text-sm text-muted-foreground">
                Make sure all services are running. Check logs with <code className="bg-black/50 px-2 py-1 rounded text-xs">docker logs</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ Read <a href="/docs/quick-start" className="text-primary hover:underline">Quick Start</a> for first API call</li>
            <li>→ Check <a href="/docs/configuration" className="text-primary hover:underline">Configuration</a> for environment setup</li>
            <li>→ Explore <a href="/docs/websocket-api" className="text-primary hover:underline">WebSocket API</a> for real-time features</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
