"use client"

import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"

const examples = [
    {
        language: "WebSocket (JavaScript)",
        code: `import { Socket } from "phoenix"

const socket = new Socket("ws://localhost:4000/socket", {
  params: { 
    app_id: "demo-app", 
    token: "valid_token_user123" 
  }
})

socket.connect()

const channel = socket.channel("room:lobby", {})
channel.join()

channel.on("message", (event) => {
  console.log("New message:", event)
})

channel.push("message", {
  text: "Hello from Phoenix!",
  user: "Alice"
})`,
        lang: "javascript",
    },
    {
        language: "HTTP (cURL)",
        code: `# Publish event via HTTP
curl -X POST http://localhost:4000/apps/demo-app/channels/room:test/publish \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: valid_key_demo-app" \\
  -d '{
    "type": "message",
    "data": {
      "user": "Bob",
      "text": "Hello from HTTP!"
    }
  }'

# Get channel history
curl http://localhost:4000/apps/demo-app/channels/room:test/history`,
        lang: "bash",
    },
    {
        language: "gRPC (Go)",
        code: `package main

import (
  "context"
  pb "polyglot/pb"
  "google.golang.org/grpc"
)

func main() {
  conn, _ := grpc.Dial(
    "localhost:9090",
    grpc.WithInsecure(),
  )
  defer conn.Close()

  client := pb.NewProcessorClient(conn)
  resp, _ := client.ProcessEvent(
    context.Background(),
    &pb.ProcessRequest{
      AppId: "demo-app",
      Event: &pb.Event{
        Type: "message",
        Data: "Hello from gRPC!",
      },
    },
  )
  
  println("Processed:", resp.Status)
}`,
        lang: "go",
    },
]

export default function CodeExamples() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section id="code" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
                        Multiple Protocol Support
                    </h2>
                    <p className="text-lg text-muted-foreground">WebSocket, HTTP, and gRPC — choose what works for your use case.</p>
                </div>

                <div className="glass-premium rounded-2xl overflow-hidden">
                    <div className="flex border-b border-white/10">
                        {examples.map((example, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 px-6 py-4 font-medium transition text-sm ${activeTab === index
                                        ? "bg-white/10 text-primary border-b-2 border-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {example.language}
                            </button>
                        ))}
                    </div>

                    <div className="bg-black/40 overflow-hidden rounded-b-2xl">
                        <SyntaxHighlighter
                            language={examples[activeTab].lang}
                            style={atomOneDark}
                            customStyle={{
                                margin: 0,
                                padding: "24px",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                backgroundColor: "transparent",
                            }}
                            wrapLines={true}
                            showLineNumbers={false}
                        >
                            {examples[activeTab].code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </section>
    )
}
