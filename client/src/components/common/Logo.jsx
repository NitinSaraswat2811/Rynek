import { Link } from 'react-router-dom'

const Logo = () => (
  <Link
    to="/"
    aria-label="Rynek home"
    className="shrink-0 text-xl font-extrabold leading-none tracking-tight text-ink sm:text-2xl"
  >
    ryn<span className="text-brand">e</span>k
  </Link>
)

export default Logo

