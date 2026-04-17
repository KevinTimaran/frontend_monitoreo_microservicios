import type { ServiceMetric } from '../types'

interface ServiceCardProps {
  service: ServiceMetric
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const hasHighError = service.errorRate > 15

  return (
    <article
      style={{
        border: `1px solid ${hasHighError ? '#fecaca' : '#e2e8f0'}`,
        backgroundColor: hasHighError ? '#fff1f2' : '#ffffff',
        borderRadius: '10px',
        padding: '12px',
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: '8px' }}>{service.serviceId}</h3>
      <p style={{ margin: '4px 0' }}>Total calls: {service.totalCalls}</p>
      <p style={{ margin: '4px 0' }}>Success rate: {service.successRate.toFixed(2)}%</p>
      <p style={{ margin: '4px 0' }}>Error rate: {service.errorRate.toFixed(2)}%</p>
      <p style={{ margin: '4px 0' }}>Average duration: {service.averageDurationMs.toFixed(2)} ms</p>
    </article>
  )
}
