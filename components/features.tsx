"use client"

import { useEffect, useRef } from "react"

const features = [
    {
        title: "Ultra-Low Latency",
        description: "10ms P95 latency with gRPC binary protocol and HTTP/2 multiplexing.",
    },
    {
        title: "Multi-Protocol Support",
        description: "WebSocket, HTTP/REST, and gRPC with automatic protocol negotiation.",
    },
    {
        title: "Circuit Breaker Reliability",
        description: "Automatic failover and graceful degradation prevent cascading failures.",
    },
    {
        title: "Multi-Tenant Architecture",
        description: "Isolated channels and namespaces for multiple applications per instance.",
    },
    {
        title: "High Performance Processing",
        description: "60k+ req/s with gRPC, batch processing support, and event pipelines.",
    },
    {
        title: "Open Source",
        description: "MIT licensed. Self-hosted, full control, no vendor lock-in.",
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
                        Built for Performance
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Production-ready realtime infrastructure with gRPC Phase 2 improvements, automatic failover, and multi-tenant support.
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
