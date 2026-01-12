import Link from "next/link"

export default function CoreConceptsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          Core Concepts
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Understand the building blocks of the Polyglot engine.
        </p>
      </div>

      <div className="grid gap-6">
        <Link href="/docs/channel-types" className="block group">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.01]">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Channels</h3>
            <p className="text-muted-foreground">
              The fundamental unit of communication. Channels are lightweight, multiplexed connections that allow clients to subscribe to specific topics.
              Polyglot offers specialized channel types for different latency requirements.
            </p>
          </div>
        </Link>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Events</h3>
          <p className="text-muted-foreground">
            Messages sent over channels are called Events. They carry a payload and a type. Events are broadcasted to all subscribers of a channel
            in real-time.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Presence</h3>
          <p className="text-muted-foreground">
            Built-in presence tracking allows you to know who is online in a channel. Perfect for chat apps, collaboration tools, and games.
            Presence information is distributed across the cluster using CRDTs for eventual consistency.
          </p>
        </div>

        <Link href="/docs/client-sdks" className="block group">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.01]">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">SDKs</h3>
            <p className="text-muted-foreground">
              Official libraries to interact with the Polyglot API. We provide typed SDKs for maximum developer productivity and safety.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
