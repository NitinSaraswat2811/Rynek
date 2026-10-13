import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import SearchBar from '../common/SearchBar'

const scopes = ['All', 'Shops', 'Products', 'Services']
const popular = ['milk', 'bakery', 'electrician', 'salon', 'mobile repair']

const Hero = () => {
    const [scope, setScope] = useState('All')

    return (
        <section className="hero-bg py-10 text-center sm:py-16">
            <Container>
                <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[54px]">
                    Everything <span className="text-brand">nearby</span>,
                    <br className="hidden sm:block" /> one search away.
                </h1>

                <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
                    Shops, products and services around you. Browse freely; log in only
                    when you order.
                </p>

                <div className="mt-6 sm:mt-8">
                    <SearchBar />
                </div>

                {/* Scope chips + voice hint (same row) */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    {scopes.map((s) => (
                        <button
                            key={s}
                            type="button"
                            aria-pressed={scope === s}
                            onClick={() => setScope(s)}
                            className={`h-8 rounded-full border px-4 text-[13px] font-semibold transition-colors ${scope === s
                                ? 'border-brand/20 bg-brand/10 text-brand'
                                : 'border-line bg-white text-ink hover:border-brand/40'
                                }`}
                        >
                            {s}
                        </button>
                    ))}

                    <span className="ml-1 hidden text-[13px] text-muted md:inline">
                        🎙️ Try saying “bijli wala jo aaj available ho”
                    </span>
                </div>

                {/* Popular searches */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[13px]">
                    <span className="text-muted">Popular:</span>
                    {popular.map((p) => (
                        <Link
                            key={p}
                            to={`/search?q=${encodeURIComponent(p)}`}
                            className="rounded-full border border-line bg-white px-3 py-1 font-semibold transition-colors hover:border-brand/40"
                        >
                            {p}
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Hero