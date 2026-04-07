import Image from 'next/image'

const brands = [
    "/brands/brand_1.svg",
    "/brands/brand_2.webp",
    "/brands/brand_3.svg",
    "/brands/brand_4_long.png",
    "/brands/brand_5.png"
]

export default function BrandCarousel() {
    return (
        <section className="flex max-w-2xl mx-auto overflow-x-auto bg-gray-50 py-8 md:py-16 dark:bg-transparent pointer-events-none">
            <div className="flex gap-8 animate-[scroll_20s_linear_infinite] pr-8">
                {brands.map((brand, index) => (
                        <Image
                            key={`brand_${index}`}
                            className="max-w-[96px] max-h-[50px] object-contain object-center"
                            src={brand}
                            alt="brand"
                            width="96"
                            height="50"
                        />
                ))}
            </div>
            <div aria-hidden className="flex gap-8 animate-[scroll_20s_linear_infinite] pr-8">
                {brands.map((brand, index) => (
                        <Image
                            key={`brand_${index}`}
                            className="max-w-[96px] max-h-[50px] object-contain object-center"
                            src={brand}
                            alt="brand"
                            width="96"
                            height="50"
                        />
                ))}
            </div>
        </section>
    )
}
