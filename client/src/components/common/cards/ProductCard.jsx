import { Link } from 'react-router-dom'
import { getProductStyle } from '../../../data/categories'

// Stock ke number se label aur rang nikalta hai
const getStock = (n) => {
  if (n <= 0) return { label: 'Out of stock', cls: 'text-red-600' }
  if (n <= 5) return { label: 'Low stock', cls: 'text-amber-600' }
  return { label: 'In stock', cls: 'text-green-700' }
}

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    quantity,
    unit,
    stock,
    shopName,
    shopSlug,
    categorySlug,
    iconKey,
    distance,
    image, // optional: mock mein abhi nahi hai
  } = product

  const { icon: Icon, bg, fg } = getProductStyle(iconKey,categorySlug)
  const status = getStock(stock)

  return (
    <Link
      to={`/s/${shopSlug}`}
      className="block overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Top: photo, warna category icon */}
      <div
        className={`grid h-24 place-items-center sm:h-28 ${image ? '' : `${bg} ${fg}`}`}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <Icon size={36} strokeWidth={1.75} aria-hidden="true" />
        )}
      </div>

      {/* Bottom: details */}
      <div className="flex flex-col gap-0.5 p-3 sm:p-4">
        <p className="text-[17px] font-extrabold text-ink">
          ₹{price}
          <span className="ml-1.5 text-xs font-semibold text-muted">
            {quantity} {unit}
          </span>
        </p>
        <h3 className="truncate text-[15px] font-bold text-ink">{name}</h3>
        <p className="truncate text-xs text-muted">
          {shopName} · {distance} km
        </p>
        <p className={`mt-1 text-xs font-semibold ${status.cls}`}>
          ● {status.label}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
