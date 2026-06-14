import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'

export default function BrandHero() {
    return (
        <section className="relative min-h-dvh flex items-center overflow-hidden pt-20">
            <div
                aria-hidden
                className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] bg-primary/10 -z-10"
            />
            <div
                aria-hidden
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] bg-primary/5 -z-10"
            />

            <div className="mx-auto max-w-4xl px-6 text-center w-full space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden />
                    <span className="text-primary text-xs font-medium tracking-widest uppercase">Next Gen Influence</span>
                </div>

                <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h1"
                    className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                    Get Your Customers to Get You More Customers!
                </TextEffect>

                <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.5}
                    as="p"
                    className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    Bridging the gap between brands and their biggest fans. Join trendifii to turn authentic customer advocacy into a measurable, rewarding growth engine.
                </TextEffect>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
                    <Button size="lg" asChild>
                        <Link href="mailto:hello@trendifii.com">Book a Demo</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
