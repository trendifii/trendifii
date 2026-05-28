import { Cable, Megaphone, Bot } from 'lucide-react'

const features = [
    {
        icon: Cable,
        title: 'Plug and Play Simplicity',
        description:
            'Instant set-up, no tech hassles. Integrate your e-commerce platform in minutes and start your first advocacy campaign.',
    },
    {
        icon: Megaphone,
        title: 'Sustainable Brand Visibility',
        description:
            'Your customers have the best stories — cash in on them. Turn genuine experiences into high-performing marketing assets.',
    },
    {
        icon: Bot,
        title: 'Cash-In on User Habits',
        description:
            'Customers shop, you cash in, they get a little love back.',
    },
]

export default function BrandWhyUs() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-4xl font-bold text-center mb-4 lg:text-5xl">Why you&apos;ll love us</h2>
                <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
                    Everything you need to run a high-ROI advocacy programme — without the complexity.
                </p>

                <div className="flex gap-6 overflow-x-auto pb-6 snap-x no-scrollbar">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="min-w-[340px] flex-1 bg-muted/30 rounded-3xl p-10 snap-center border border-border/40 hover:bg-muted/50 transition-colors duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                                <feature.icon className="w-6 h-6 text-primary group-hover:text-background transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
