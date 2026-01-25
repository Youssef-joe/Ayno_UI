"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
    { label: "Throughput Improvement", value: "5x", color: "text-primary" },
    { label: "P95 Latency (gRPC)", value: "10ms", color: "text-accent" },
    { label: "Bandwidth Savings", value: "65%", color: "text-emerald-400" },
    { label: "Scaling Support", value: "Multi-tenant", color: "text-primary" },
]

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-20 px-4" ref={sectionRef}>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div
                                className={`text-2xl md:text-4xl font-bold mb-2 ${stat.color} transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                            >
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
