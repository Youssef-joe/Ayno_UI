import { Github, Linkedin, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        About the Author
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-400 rounded-full mb-8"></div>
                </div>

                <div className="space-y-8 text-muted-foreground">
                    <section className="bg-background/40 backdrop-blur-md border border-white/10 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            Youssef Ali
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Software Developer specialize in web developing as a backend developer and open-source enthusiast passionate about building high-performance
                            real-time systems. Creator of Ayno (Polyglot), a multi-language realtime platform.
                        </p>
                        <p className="text-lg leading-relaxed">
                            With expertise in systems programming and distributed architectures, I focus on creating
                            scalable infrastructure that powers modern real-time applications. Ayno represents my
                            vision for a unified, performant platform that leverages the strengths of multiple
                            programming languages.
                        </p>
                    </section>

                    <section className="bg-background/40 backdrop-blur-md border border-white/10 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            Technical Expertise
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-lg font-medium text-foreground mb-2">Languages</h3>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li>Elixir / Erlang</li>
                                    <li>TypeScript / JavaScript</li>
                                    <li>Go</li>
                                    <li>C++</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-foreground mb-2">Focus Areas</h3>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li>Real-time Systems</li>
                                    <li>Distributed Architecture</li>
                                    <li>High-Performance Computing</li>
                                    <li>Open Source Development</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-background/40 backdrop-blur-md border border-white/10 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            Connect
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://youssef-ali.obl.ee/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all hover:scale-105"
                            >
                                <Globe className="w-6 h-6 mr-2 transition-transform group-hover:animate-spin" />
                                <span className="text-foreground font-medium">Website</span>
                            </a>
                            <a
                                href="https://github.com/Youssef-joe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all hover:scale-105"
                            >
                                <Github className="w-6 h-6 mr-2 transition-transform group-hover:animate-spin" />
                                <span className="text-foreground font-medium">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/youssef-ali-7792b21b3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all hover:scale-105"
                            >
                                <Linkedin className="w-6 h-6 mr-2 transition-transform group-hover:animate-spin" />
                                <span className="text-foreground font-medium">LinkedIn</span>
                            </a>
                        </div>
                    </section>

                    <section className="bg-background/40 backdrop-blur-md border border-white/10 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            About Ayno
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Ayno is an open-source realtime platform that combines the strengths of three powerful
                            languages: Elixir for fault-tolerant distributed systems, Go for high-throughput
                            network handling, and C++ for performance-critical operations.
                        </p>
                        <p className="leading-relaxed">
                            The project demonstrates how polyglot architecture can deliver superior performance
                            while maintaining code clarity and developer productivity. It's designed to handle
                            millions of concurrent connections with minimal latency.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
