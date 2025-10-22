"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-8 px-4 py-2 glass rounded-full text-sm">
            <span className="text-primary font-medium">Real-time Infrastructure</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
            See What's
            <br />
            <span className="text-primary">Coming Next</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Real-time intelligence that sees beyond the present. Ayno knows what your users need before they do,
            with eyes on every interaction and insight into every moment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition">
              View Documentation
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">99.99%</div>
              <div className="text-sm text-muted-foreground mt-2">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">{"<50ms"}</div>
              <div className="text-sm text-muted-foreground mt-2">Global Latency</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">10M+</div>
              <div className="text-sm text-muted-foreground mt-2">Messages/sec</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
