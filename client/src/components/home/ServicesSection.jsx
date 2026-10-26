import SectionHeader from '../common/SectionHeader'
import ServiceCard from '../common/cards/ServiceCard'
import Container from '../common/Container'
import { nearbyServices } from '../../data/mock'

const ServicesSection = () => {
  return (
    <section className="pt-8 sm:pt-10">
      <Container>
        <SectionHeader
          title="Services near you"
          subtitle="Local providers you can call or message"
          href="/search?type=services"
        />

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {nearbyServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection