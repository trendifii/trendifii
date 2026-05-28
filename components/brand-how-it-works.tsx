import { ShoppingBasket, FilePlusCorner, HandCoins } from 'lucide-react'

const steps = [
    {
        number: 'Step 1',
        heading: 'They Shop',
        description:
            'Customers shop in-store or online, boosting brand revenue. Every transaction is the start of a potential brand story.',
        icon: ShoppingBasket,
        bg: 'bg-indigo-500',
        iconBg: 'bg-indigo-600/40',
        accent: 'text-indigo-200',
        stat: { label: 'Spent', value: '€250.00' },
    },
    {
        number: 'Step 2',
        heading: 'They Post',
        description:
            'Customers create high-quality UGC content and share it across their favourite social platforms, creating authentic organic reach.',
        icon: FilePlusCorner,
        bg: 'bg-indigo-400',
        iconBg: 'bg-indigo-500/40',
        accent: 'text-indigo-100',
        stat: { label: 'Likes', value: '10K' },
    },
    {
        number: 'Step 3',
        heading: 'They Earn',
        description:
            'Brands reward this positive impact with cashback tied to the unique social score, making every purchase a win for your brand.',
        icon: HandCoins,
        bg: 'bg-indigo-500',
        iconBg: 'bg-indigo-600/40',
        accent: 'text-indigo-200',
        stat: { label: 'Reward Sent', value: '€30.00' },
    },
]

export default function BrandHowItWorks() {
    return (
        <div>
            {steps.map((step) => (
                <section
                    key={step.number}
                    className={`sticky top-0 min-h-dvh flex items-center overflow-hidden ${step.bg}`}>
                    <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full py-24">
                        <div className="space-y-6 text-white">
                            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                                {step.number}
                            </span>
                            <h2 className="text-6xl md:text-7xl font-bold leading-none">{step.heading}</h2>
                            <p className={`text-lg leading-relaxed max-w-md ${step.accent}`}>
                                {step.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="relative w-72 h-72">
                                <div className={`w-full h-full rounded-3xl ${step.iconBg} flex items-center justify-center`}>
                                    <step.icon className="w-32 h-32 text-white/80" strokeWidth={1} />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-white/95 text-gray-900 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
                                    <span className="text-2xl">💰</span>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500">{step.stat.label}</p>
                                        <p className="text-xl font-bold">{step.stat.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}
