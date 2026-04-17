import ServiceCard from './ServiceCard'
import type { ServiceMetric } from '../types'

interface ServiceCardsSectionProps {
  services: ServiceMetric[]
}

export default function ServiceCardsSection({ services }: ServiceCardsSectionProps) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '12px',
      }}
    >
      {services.map((service) => (
        <ServiceCard key={service.serviceId} service={service} />
      ))}
    </section>
  )
}
