import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 px-4 bg-background/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-4">Ayno</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Open-source realtime platform built with Elixir, Go, and C++. High-performance infrastructure for real-time applications.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#features" className="hover:text-foreground transition">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#code" className="hover:text-foreground transition">
                                    APIs
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Youssef-joe/polyglot/tree/main/examples"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition"
                                >
                                    Examples
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="https://github.com/Youssef-joe/polyglot#readme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Youssef-joe/polyglot/blob/main/IMPLEMENTATION_SUMMARY.md"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition"
                                >
                                    Architecture
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Youssef-joe/polyglot/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition"
                                >
                                    Issues
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Community</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="https://github.com/Youssef-joe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition"
                                >
                                    Author
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Youssef-joe/polyglot/blob/main/LICENSE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition"
                                >
                                    License (MIT)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Youssef-joe/polyglot/discussions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition"
                                >
                                    Discussions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; 2025 Polyglot. Open Source (MIT License)</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a
                            href="https://github.com/Youssef-joe/polyglot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://github.com/Youssef-joe/polyglot/blob/main/LICENSE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition"
                        >
                            License
                        </a>
                        <a
                            href="https://github.com/Youssef-joe/polyglot/security"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition"
                        >
                            Security
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
