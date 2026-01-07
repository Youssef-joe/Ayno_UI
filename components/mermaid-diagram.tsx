"use client"

import { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"

interface MermaidDiagramProps {
  chart: string
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
      fontFamily: "inherit",
    })

    const renderDiagram = async () => {
      if (containerRef.current) {
        try {
          const { svg } = await mermaid.render(`mermaid-${Date.now()}`, chart)
          containerRef.current.innerHTML = svg
          setIsRendered(true)
        } catch (error) {
          console.error("Mermaid rendering failed:", error)
          // Fallback to text if rendering fails
          containerRef.current.innerText = chart
        }
      }
    }

    renderDiagram()
  }, [chart])

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-white/10 bg-black/20 p-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
      <div className="mb-4 text-sm font-medium text-muted-foreground flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        System Architecture
      </div>
      <div 
        ref={containerRef} 
        className={`flex justify-center overflow-x-auto transition-opacity duration-500 ${isRendered ? 'opacity-100' : 'opacity-0'}`}
      />
      <p className="mt-4 text-xs text-muted-foreground text-center">
        * Interactive real-time data flow visualization
      </p>
    </div>
  )
}
