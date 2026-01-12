export default function ChannelTypesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Channel Types
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Polyglot supports different channel types optimized for specific use cases, from standard chat to ultra-low latency trading data.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/10 transition-all hover:scale-[1.02] duration-300">
          <h3 className="text-2xl font-semibold tracking-tight text-primary">room:*</h3>
          <p className="text-sm text-muted-foreground">Chat & Gaming</p>
          <p className="leading-7 text-sm">
            Standard channels for chat applications and casual gaming. Optimized for reliability and message ordering.
          </p>
          <div className="mt-4 inline-block rounded bg-primary/20 px-2 py-1 text-xs font-mono text-primary">Latency: ~1ms</div>
        </div>

        <div className="space-y-2 rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/10 transition-all hover:scale-[1.02] duration-300">
          <h3 className="text-2xl font-semibold tracking-tight text-primary">post:*</h3>
          <p className="text-sm text-muted-foreground">Social & Notifications</p>
          <p className="leading-7 text-sm">
            Designed for social feeds, notifications, and activity streams. Handles high throughput of broadcast messages.
          </p>
          <div className="mt-4 inline-block rounded bg-primary/20 px-2 py-1 text-xs font-mono text-primary">Latency: ~1ms</div>
        </div>

        <div className="space-y-2 rounded-lg border border-red-500/20 bg-red-500/5 p-6 shadow-sm hover:bg-red-500/10 transition-all hover:scale-[1.02] duration-300">
          <h3 className="text-2xl font-semibold tracking-tight text-red-400">ticker:*</h3>
          <p className="text-sm text-muted-foreground">Trading & Markets</p>
          <p className="leading-7 text-sm">
            Powered by the C++ driver. Ultra-low latency channels for real-time financial data, stock tickers, and crypto markets.
          </p>
          <div className="mt-4 inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-mono text-red-400">Latency: &lt; 1ms</div>
        </div>

        <div className="space-y-2 rounded-lg border border-red-500/20 bg-red-500/5 p-6 shadow-sm hover:bg-red-500/10 transition-all hover:scale-[1.02] duration-300">
          <h3 className="text-2xl font-semibold tracking-tight text-red-400">match:*</h3>
          <p className="text-sm text-muted-foreground">Competitive Gaming</p>
          <p className="leading-7 text-sm">
            Powered by the C++ driver. Critical path for competitive gaming state synchronization where every millisecond counts.
          </p>
          <div className="mt-4 inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-mono text-red-400">Latency: &lt; 1ms</div>
        </div>
      </div>
    </div>
  )
}
