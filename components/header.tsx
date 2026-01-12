"use client"

import { useState } from "react"
import Link from "next/link"
import AynoLogo from "./ayno-logo"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 left-0 right-0 z-50 w-full glass-dark border-b">
            <nav className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-4 h-20 flex items-center">
                <Link href="/" className="flex items-center">
                    <AynoLogo />
                </Link>

                <div className="flex-1 hidden md:flex justify-center">
                    <div className="hidden md:flex items-center space-x-16">
                        <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </Link>
                        <Link href="/#code" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            API
                        </Link>
                        <a
                            href="https://github.com/Youssef-joe/polyglot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            GitHub
                        </a>
                        <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Documentation
                        </Link>
                    </div>
                </div>

                <button className="md:hidden flex-1 flex justify-end p-2" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-sm border-t">
                    <div className="px-4 py-4 space-y-3">
                        <Link href="#features" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
                            Features
                        </Link>
                        <Link href="#code" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
                            API
                        </Link>
                        <a
                            href="https://github.com/Youssef-joe/polyglot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                        >
                            GitHub
                        </a>
                        <Link href="/docs" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
                            Documentation
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
