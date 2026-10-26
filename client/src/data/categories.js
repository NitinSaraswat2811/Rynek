import {
  ShoppingBasket, Utensils, Cake, Pill, Pencil, Scissors,
  Smartphone, Zap, Droplets, GraduationCap, LayoutGrid, Store,
  Milk, Croissant, Notebook, Egg, Wheat, Package,
} from 'lucide-react'

export const categories = [
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

export const defaultCategory = { icon: Store, bg: 'bg-stone-200', fg: 'text-stone-600' }

export const getCategoryStyle = (slug) =>
  categories.find((c) => c.slug === slug) ?? defaultCategory

export const productIcons = {
  milk:     { icon: Milk,      bg: 'bg-sky-100',    fg: 'text-sky-600' },
  bread:    { icon: Croissant, bg: 'bg-amber-100',  fg: 'text-amber-700' },
  notebook: { icon: Notebook,  bg: 'bg-violet-100', fg: 'text-violet-600' },
  eggs:     { icon: Egg,       bg: 'bg-orange-100', fg: 'text-orange-600' },
  atta:     { icon: Wheat,     bg: 'bg-yellow-100', fg: 'text-yellow-700' },
  paneer:   { icon: Package,   bg: 'bg-yellow-100', fg: 'text-yellow-600' },
}

export const getProductStyle = (iconKey, categorySlug) =>
  productIcons[iconKey] ?? getCategoryStyle(categorySlug)