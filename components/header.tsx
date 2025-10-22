"use client"

import { useState } from "react"
import Link from "next/link"
import AynoLogo from "./ayno-logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 glass-dark border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <AynoLogo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
          <Link href="#code" className="text-sm text-muted-foreground hover:text-foreground transition">
            SDKs
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
            Pricing
          </Link>
          <Link href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition">
            Docs
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition">Sign In</button>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden glass-dark border-t">
          <div className="px-4 py-4 space-y-4">
            <Link href="#features" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#code" className="block text-sm text-muted-foreground hover:text-foreground transition">
              SDKs
            </Link>
            <Link href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </Link>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
