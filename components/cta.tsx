export default function CTA() {
    return (
        <section id="pricing" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="glass-premium rounded-3xl p-12 text-center">
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                        Ready to Deploy?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        Polyglot is open-source and production-ready. Deploy locally, on-premises, or in your cloud.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://github.com/Youssef-joe/polyglot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition transform hover:scale-105 block"
                        >
                            View on GitHub
                        </a>
                        <a
                            href="https://github.com/Youssef-joe/polyglot#quick-start"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition block"
                        >
                            Quick Start
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
