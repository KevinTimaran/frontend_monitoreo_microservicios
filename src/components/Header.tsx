const headerStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '16px',
}

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>Sistema de monitoreo de microservicios</h1>
      <p style={{ margin: '8px 0 0', color: '#475569' }}>
        Frontend base listo para conectar con el backend.
      </p>
    </header>
  )
}
