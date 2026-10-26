import Container from "../common/Container"
const items = [
  'Verified local shops',
  'Order or contact directly',
  'Browse without login',
]

const TrustStrip = () => {
  return (
    <section className="hidden w-full border-y border-line bg-white sm:block">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 text-[13px] font-semibold md:px-8 lg:justify-start">
        {items.map((text) => (
          <span key={text} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-brand">✓</span>
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TrustStrip
