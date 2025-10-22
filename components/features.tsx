"use client"

import { useEffect, useRef } from "react"

const features = [
  {
    title: "Ultra-Low Latency",
    description: "Sub-50ms global latency with our distributed edge network.",
  },
  {
    title: "Enterprise Security",
    description: "End-to-end encryption, SOC 2 compliance, and advanced authentication.",
  },
  {
    title: "Real-time Analytics",
    description: "Monitor connections, throughput, and performance in real-time.",
  },
  {
    title: "Global Scale",
    description: "Automatically scale across 6 continents with zero configuration.",
  },
  {
    title: "Multi-Language SDKs",
    description: "JavaScript, Python, Go, Rust, and more out of the box.",
  },
  {
    title: "Pay-as-you-go",
    description: "Only pay for what you use. No hidden fees or minimums.",
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Built for Developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build real-time applications at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="glass-premium p-8 rounded-2xl transition-all duration-500 opacity-0 translate-y-10 hover:bg-white/12 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
