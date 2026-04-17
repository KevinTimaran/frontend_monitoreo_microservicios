import Header from '../components/Header'
import LogsTable from '../components/LogsTable'
import ServiceCardsSection from '../components/ServiceCardsSection'
import SimulateLoadButton from '../components/SimulateLoadButton'
import { useDashboardData } from '../hooks/useDashboardData'

const wrapperStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '40px auto',
  padding: '0 16px',
}

const cardStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: '12px',
  padding: '20px',
  color: '#334155',
  boxShadow: '0 6px 20px rgba(15, 23, 42, 0.06)',
}

export default function DashboardPage() {
  const { summary, logsPage, loadingSummary, loadingLogs, simulating, error, simulateLoad } =
    useDashboardData()

  return (
    <main style={wrapperStyle}>
      <Header />
      <section style={{ ...cardStyle, marginBottom: '12px' }}>
        <SimulateLoadButton
          onClick={() => {
            void simulateLoad()
          }}
          loading={simulating}
        />
      </section>

      {error ? (
        <section style={{ ...cardStyle, borderColor: '#fecaca', color: '#991b1b', marginBottom: '12px' }}>
          {error}
        </section>
      ) : null}

      <section style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Servicios</h2>
        {loadingSummary && !summary ? (
          <p>Cargando resumen...</p>
        ) : (
          <ServiceCardsSection services={summary?.services ?? []} />
        )}
      </section>

      <section style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Logs</h2>
        <LogsTable logs={logsPage?.content ?? []} loading={loadingLogs && !logsPage} />
      </section>
    </main>
  )
}
