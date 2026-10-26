import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { getCategoryStyle } from '../../../data/categories'

const BusinessCard = ({ shop }) => {
  const { slug, name, category, categorySlug, distance, rating, isOpen, tag, image, logo } = shop
  const { icon: Icon, bg, fg } = getCategoryStyle(categorySlug)

  return (
    <Link
      to={`/s/${slug}`}
      className="block overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className={`relative grid h-28 place-items-center sm:h-32 ${image ? '' : `${bg} ${fg}`}`}>
        {image ? (
          <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover" />
        ) : logo ? (
          <span className="grid size-16 place-items-center rounded-full bg-white p-2 shadow">
            <img src={logo} alt={`${name} logo`} className="size-full object-contain" />
          </span>
        ) : (
          <Icon size={40} strokeWidth={1.75} aria-hidden="true" />
        )}

        <span className="absolute left-2.5 top-2.5 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-ink shadow-sm">
          {distance} km
        </span>
      </div>

      <div className="flex flex-col gap-1 p-3 sm:p-4">
        <h3 className="truncate text-[15px] font-bold text-ink">{name}</h3>
        <p className="truncate text-xs text-muted">{category}</p>

        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold">
          {rating != null && (
            <span className="inline-flex items-center gap-1 text-ink">
              <Star size={13} className="fill-amber-400 text-amber-400" aria-hidden="true" />
              {rating}
            </span>
          )}
          <span className={isOpen ? 'text-green-700' : 'text-red-600'}>
            {isOpen ? 'Open' : 'Closed'}
          </span>
          {tag && (
            <span className="rounded-md bg-brand/10 px-2 py-0.5 text-[11px] font-bold text-brand">
              {tag}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default BusinessCard