import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BrandCta() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div
                aria-hidden
                className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"
            />
            <div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] bg-primary/5 -z-10"
            />

            <div className="mx-auto max-w-3xl px-6 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                    Your next big marketing win starts here
                </h2>
                <p className="text-muted-foreground text-lg">
                    Let&apos;s get your brand in front of millions of authentic voices.
                </p>
                <Button size="lg" className="px-12 py-6 text-base" asChild>
                    <Link href="mailto:hello@trendifii.com">Book a Demo</Link>
                </Button>
            </div>
        </section>
    )
}
