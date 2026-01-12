export default function ClientSDKsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Client SDKs
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Polyglot provides official SDKs for JavaScript and TypeScript to easily integrate real-time features into your web applications.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b border-white/10 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Installation
        </h2>
        <p className="text-muted-foreground">
          You can install the Polyglot client using your preferred package manager.
        </p>
        
        <div className="rounded-md bg-black/50 border border-white/10 p-4 font-mono text-sm text-green-400">
          npm install @polyglot/client
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b border-white/10 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Basic Usage
        </h2>
        <p className="text-muted-foreground">
          Here is a simple example of how to connect to the Polyglot service and subscribe to a channel.
        </p>

        <div className="rounded-md bg-black/50 border border-white/10 p-4 overflow-x-auto">
          <pre className="text-sm font-mono text-blue-300">
{`import { PolyglotClient } from '@polyglot/client';

const client = new PolyglotClient({
  endpoint: 'wss://api.polyglot.com/socket',
  apiKey: 'YOUR_API_KEY'
});

client.connect();

const channel = client.subscribe('room:lobby');

channel.on('message', (payload) => {
  console.log('Received message:', payload);
});

channel.push('message', { text: 'Hello World!' });`}
          </pre>
        </div>
      </div>
    </div>
  )
}
