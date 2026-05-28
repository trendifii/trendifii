'use client'

import { useState } from 'react'

function formatCompact(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
    return n.toLocaleString()
}

export default function BrandCalculator() {
    const [cashback, setCashback] = useState(150_000)

    const reach = Math.round(cashback * 33.33)
    const sales = Math.round(cashback * 3.33)
    const shoutouts = Math.round(cashback * 0.112)

    return (
        <section className="py-24 md:py-32 bg-indigo-400 relative overflow-hidden">
            <div
                aria-hidden
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Spend smart, earn smarter
                    </h2>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Set your cashback budget and see the reach your brand can unlock.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="space-y-4 mb-12">
                        <h3 className="text-gray-900 font-bold text-xl">Cashback Vs Reach Calculator</h3>
                        <div className="flex justify-between font-semibold text-gray-900">
                            <span className="text-indigo-600">€0</span>
                            <span className="text-indigo-600">€{cashback.toLocaleString()}</span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={600_000}
                            step={5_000}
                            value={cashback}
                            onChange={(e) => setCashback(Number(e.target.value))}
                            className="w-full h-3 rounded-full appearance-none cursor-pointer accent-indigo-600 bg-gray-200"
                            aria-label="Cashback budget"
                        />
                        <div className="flex justify-between text-xs text-gray-400">
                            <span>€0</span>
                            <span>€150K</span>
                            <span>€300K</span>
                            <span>€450K</span>
                            <span>€600K</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                        {[
                            { emoji: '🤩', value: formatCompact(reach), label: 'Estimated Reach' },
                            { emoji: '🥳', value: formatCompact(sales), label: 'Upfront Sales' },
                            { emoji: '😎', value: formatCompact(shoutouts), label: 'Shout Outs' },
                        ].map((item, i) => (
                            <div key={item.label} className={`flex items-center gap-4 ${i > 0 ? 'sm:border-l sm:border-gray-100 sm:pl-8' : ''}`}>
                                <div className="w-12 h-12 rounded-full bg-indigo-400/20 flex items-center justify-center text-2xl shrink-0">
                                    {item.emoji}
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                                    <p className="text-sm text-gray-500">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
