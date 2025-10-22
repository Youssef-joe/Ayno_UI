"use client"

import { useState } from "react"

const examples = [
  {
    language: "JavaScript",
    code: `import { Ayno } from '@ayno/js'

const ayno = new Ayno({
  apiKey: 'your-api-key'
})

ayno.subscribe('chat', (message) => {
  console.log('New message:', message)
})

ayno.publish('chat', {
  user: 'Alice',
  text: 'Hello, world!'
})`,
  },
  {
    language: "Python",
    code: `from ayno import Ayno

ayno = Ayno(api_key='your-api-key')

@ayno.on('chat')
def handle_message(message):
    print(f"New message: {message}")

ayno.publish('chat', {
    'user': 'Bob',
    'text': 'Hello from Python!'
})`,
  },
  {
    language: "Go",
    code: `package main

import "github.com/ayno/go"

func main() {
  client := ayno.NewClient("your-api-key")
  
  client.Subscribe("chat", func(msg interface{}) {
    fmt.Println("Message:", msg)
  })
  
  client.Publish("chat", map[string]string{
    "user": "Charlie",
    "text": "Hello from Go!",
  })
}`,
  },
]

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="code" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Simple, Elegant APIs
          </h2>
          <p className="text-lg text-muted-foreground">Get started in minutes with our intuitive SDKs.</p>
        </div>

        <div className="glass-premium rounded-2xl overflow-hidden">
          <div className="flex border-b border-white/10">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-6 py-4 font-medium transition text-sm ${
                  activeTab === index
                    ? "bg-white/10 text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {example.language}
              </button>
            ))}
          </div>

          <div className="p-6 bg-black/40">
            <pre className="text-sm text-cyan-300 font-mono overflow-x-auto leading-relaxed">
              <code>{examples[activeTab].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
