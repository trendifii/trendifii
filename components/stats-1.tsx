export default function Stats() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">People trust people</h2>
                    <p className="text-muted-foreground text-balance">More than any form of marketing communication</p>
                </div>
                <div className="@xl:grid-cols-3 @lg:grid-cols-2 mt-12 grid grid-cols-1 gap-6 text-sm">
                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">7.5x</span> Authenticity Over Everything
                        </p>
                    </div>

                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">64%</span> The Power of Peer to Peer
                        </p>
                    </div>

                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">92%</span> The Trust Transfer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
