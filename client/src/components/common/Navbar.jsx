import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import Container from './Container'

const linkClass = ({ isActive }) =>
  `hidden h-10 items-center rounded-lg px-3 text-sm font-semibold transition-colors md:inline-flex ${isActive ? 'bg-brand/10 text-brand' : 'text-muted hover:bg-black/5 hover:text-ink'
  }`

const Navbar = () => (
  <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur">
    <nav aria-label="Main">
      <Container className="flex h-16 items-center gap-3">
        {/* Left: logo + location (shrinks when space is tight) */}
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4">
          <Logo />
          <span aria-hidden="true" className="hidden h-6 w-px shrink-0 bg-line sm:block" />
          <button
            type="button"
            className="inline-flex h-9 min-w-0 items-center gap-1.5 rounded-full border border-line bg-cream px-3 text-[13px] font-semibold text-ink transition-colors hover:border-brand/40 sm:h-10 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <span aria-hidden="true" className="shrink-0">📍</span>
            <span className="min-w-0 truncate sm:max-w-[9rem]">Gandhi Nagar</span>
            <span aria-hidden="true" className="shrink-0 text-muted">▾</span>
          </button>
        </div>

        {/* Right: links + login (never shrinks) */}
        <div className="flex shrink-0 items-center gap-1">
          <NavLink to="/categories" className={linkClass}>
            Categories
          </NavLink>
          <NavLink to="/vendor/register" className={linkClass}>
            Sell on Rynek
          </NavLink>
          <Link
            to="/login"
            className="inline-flex h-9 items-center whitespace-nowrap rounded-full bg-ink px-4 text-[13px] font-semibold text-white transition-colors hover:bg-black sm:ml-2 sm:h-10 sm:px-5 sm:text-sm"
          >
            Log in
          </Link>
        </div>
      </Container>
    </nav>
  </header>
)

export default Navbar