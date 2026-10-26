import { Link } from 'react-router-dom'
import { Phone, MessageCircle } from 'lucide-react'
import { getCategoryStyle } from '../../../data/categories'

// Dark tile par chamakne wale rang (poore class naam likhne zaroori hain)
const iconColors = {
  electrician: 'text-yellow-400',
  plumber: 'text-sky-400',
  repair: 'text-blue-400',
  tutors: 'text-violet-400',
  salon: 'text-pink-400',
  grocery: 'text-orange-400',
}

const getPriceLabel = ({ priceLabel, priceType, price }) => {
  if (priceLabel) return priceLabel
  if (priceType === 'from' && price != null) return `From ₹${price}`
  if (priceType === 'quote') return 'Free quote'
  if (priceType === 'trial') return 'Trial class'
  return null
}

const ServiceCard = ({ service }) => {
  const {
    name,
    providerName,
    providerSlug,
    categorySlug,
    distance,
    phone,
    whatsapp,
  } = service

  const { icon: Icon } = getCategoryStyle(categorySlug)
  const iconColor = iconColors[categorySlug] ?? 'text-white'
  const priceText = getPriceLabel(service)

  return (
    <div className="rounded-[20px] border border-line bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      {/* Dark tile, rangeen icon */}
      <div className="mb-3 flex size-12 items-center justify-center rounded-[14px] bg-ink">
        <Icon size={24} strokeWidth={2} className={iconColor} aria-hidden="true" />
      </div>

      <h3 className="truncate text-[14.5px] font-bold text-ink">{name}</h3>
      <Link
        to={`/s/${providerSlug}`}
        className="block truncate text-[12.5px] text-muted hover:text-brand hover:underline"
      >
        {providerName} · {distance} km
      </Link>

      {priceText && (
        <p className="mt-1.5 text-[15px] font-extrabold text-brand">{priceText}</p>
      )}

      <div className="mt-3 flex gap-1.5">
        {phone && (
          <a
            href={`tel:+${phone}`}
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-[11px] border-[1.5px] border-ink py-2 text-[12.5px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Phone size={13} aria-hidden="true" />
            Call
          </a>
        )}
        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-[11px] border-[1.5px] border-green-300 py-2 text-[12.5px] font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            <MessageCircle size={13} aria-hidden="true" />
            Chat
          </a>
        )}
      </div>
    </div>
  )
}

export default ServiceCard