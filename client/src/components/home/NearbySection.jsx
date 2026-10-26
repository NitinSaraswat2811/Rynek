import { useState } from 'react'
import Container from '../common/Container'
import SectionHeader from '../common/SectionHeader'
import { nearbyShops } from '../../data/mock'
import BusinessCard from '../common/cards/BusinessCard'

const filters = ['All', 'Open now', 'Delivery', 'Top rated', 'Within 2 km']

const NearbySection = () => {
    const [active, setActive] = useState('All')

    return (
        <section className="pt-8 sm:pt-10">
            <Container>
                <SectionHeader
                    title="Nearby you"
                    subtitle="Shops and providers within walking or delivery distance"
                    href="/search?sort=nearest"
                />

                {/* Filter chips: gap kaam karta hai kyunki flex seedha buttons ke parent par hai */}
                <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
                    {filters.map((f) => (
                        <button
                            key={f}
                            type="button"
                            aria-pressed={active === f}
                            onClick={() => setActive(f)}
                            className={`h-8 shrink-0 whitespace-nowrap rounded-full border px-4 text-[13px] font-semibold transition-colors ${active === f
                                    ? 'border-ink bg-ink text-white'
                                    : 'border-line bg-white text-ink hover:border-brand/40'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Cards yahan aayenge (BusinessCard banne ke baad) */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                    {/* <BusinessCard /> ... */}

                    {nearbyShops.map((shop) => (
                        <BusinessCard key={shop.id} shop={shop} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default NearbySection