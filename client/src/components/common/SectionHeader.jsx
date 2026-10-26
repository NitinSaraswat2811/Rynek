import { Link } from 'react-router-dom'

const SectionHeader = ({ title, subtitle, href }) => (
  <div className="mb-4">
    <div className="flex items-center justify-between gap-4">
      <h2 className="min-w-0 text-xl font-extrabold tracking-tight sm:text-2xl">
        {title}
      </h2>

      {href && (
        <Link
          to={href}
          className="shrink-0 text-sm font-bold text-brand hover:underline"
        >
          See all →
        </Link>
      )}
    </div>

    {subtitle && (
      <p className="mt-0.5 text-[13px] text-muted sm:text-sm">{subtitle}</p>
    )}
  </div>
)

export default SectionHeader
