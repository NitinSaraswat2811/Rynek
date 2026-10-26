import { Link } from 'react-router-dom'
import Container from './Container'

const columns = [
  {
    title: 'Rynek',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'For vendors',
    links: [
      { label: 'Sell on Rynek', to: '/vendor/register' },
      { label: 'Vendor login', to: '/login' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Help centre', to: '/help' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

const Footer = () => (
  <footer className="mt-12 bg-ink text-[#CDBBA6] sm:mt-16">
    <Container className="py-8 sm:py-10">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="max-w-xs">
          <p className="text-2xl font-extrabold leading-none tracking-tight text-white">
            ryn<span className="text-brand">e</span>k
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Discover shops, products and services near you. Browse freely, log
            in only when you order.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-14">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-5 text-xs">
        © {new Date().getFullYear()} Rynek. All rights reserved.
      </div>
    </Container>
  </footer>
)

export default Footer