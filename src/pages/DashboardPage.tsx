import Header from '../components/Header'

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
  return (
    <main style={wrapperStyle}>
      <Header />
      <section style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Frontend base inicializado</h2>
        <p style={{ marginBottom: 0 }}>
          Esta version minima ya esta lista para conectar con el backend real y desplegarse en
          Vercel.
        </p>
      </section>
    </main>
  )
}
