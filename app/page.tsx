"use client"

import { useEffect, useRef } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CodeExamples from "@/components/code-examples"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }> = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2,
        color: ["#b8860b", "#00d9ff", "#7ec850"][Math.floor(Math.random() * 3)],
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(13, 13, 20, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1

      // Draw connections with enhanced visibility
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.strokeStyle = `rgba(184, 134, 11, ${0.3 * (1 - distance / 200)})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-50" />
      <div className="relative z-10">
        <Hero />
        <Features />
        <CodeExamples />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
