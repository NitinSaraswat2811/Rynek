import { Link } from 'react-router-dom'
import {
  ShoppingBasket,
  Utensils,
  Cake,
  Pill,
  Pencil,
  Scissors,
  Smartphone,
  Zap,
  Droplets,
  GraduationCap,
  LayoutGrid,
} from 'lucide-react'
import Container from '../common/Container'

const categories = [
  { name: 'Grocery',     slug: 'grocery',     icon: ShoppingBasket, bg: 'bg-orange-100', fg: 'text-orange-600' },
  { name: 'Food',        slug: 'food',        icon: Utensils,       bg: 'bg-red-100',    fg: 'text-red-600' },
  { name: 'Bakery',      slug: 'bakery',      icon: Cake,           bg: 'bg-amber-100',  fg: 'text-amber-700' },
  { name: 'Pharmacy',    slug: 'pharmacy',    icon: Pill,           bg: 'bg-green-100',  fg: 'text-green-600' },
  { name: 'Stationery',  slug: 'stationery',  icon: Pencil,         bg: 'bg-violet-100', fg: 'text-violet-600' },
  { name: 'Salon',       slug: 'salon',       icon: Scissors,       bg: 'bg-pink-100',   fg: 'text-pink-600' },
  { name: 'Repair',      slug: 'repair',      icon: Smartphone,     bg: 'bg-blue-100',   fg: 'text-blue-600' },
  { name: 'Electrician', slug: 'electrician', icon: Zap,            bg: 'bg-yellow-100', fg: 'text-yellow-600' },
  { name: 'Plumber',     slug: 'plumber',     icon: Droplets,       bg: 'bg-cyan-100',   fg: 'text-cyan-600' },
  { name: 'Tutors',      slug: 'tutors',      icon: GraduationCap,  bg: 'bg-indigo-100', fg: 'text-indigo-600' },
  { name: 'More',        slug: 'all',         icon: LayoutGrid,     bg: 'bg-stone-200',  fg: 'text-stone-600' },
]

const CategoryRow = () => (
  <section className="pt-6 sm:pt-8">
    <Container>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2 sm:gap-6">
        {categories.map(({ name, slug, icon: Icon, bg, fg }) => (
          <Link
            key={slug}
            to={`/search?category=${slug}`}
            className="group flex w-[80px] shrink-0 flex-col items-center gap-2 text-center"
          >
            <span
              className={`grid size-16 place-items-center rounded-2xl transition-transform group-hover:-translate-y-0.5 ${bg} ${fg}`}
            >
              <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="text-[13px] font-semibold text-ink">{name}</span>
          </Link>
        ))}
      </div>
    </Container>
  </section>
)

export default CategoryRow
