import BrandHero from '@/components/brand-hero'
import BrandHowItWorks from '@/components/brand-how-it-works'
import BrandWhyUs from '@/components/brand-why-us'
import BrandCalculator from '@/components/brand-calculator'
import BrandCta from '@/components/brand-cta'

export const metadata = {
    title: 'For Brands | Trendifii',
    description: 'Turn your customers into your most powerful marketing channel. Bridge the gap between brands and their biggest fans.',
}

export default function BrandsPage() {
    return (
        <div>
            <BrandHero />
            <BrandHowItWorks />
            <BrandWhyUs />
            <BrandCalculator />
            <BrandCta />
        </div>
    )
}
