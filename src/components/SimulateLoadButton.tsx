interface SimulateLoadButtonProps {
  onClick: () => void
  loading?: boolean
}

export default function SimulateLoadButton({ onClick, loading = false }: SimulateLoadButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      style={{
        border: '1px solid #2563eb',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        borderRadius: '8px',
        padding: '8px 12px',
        cursor: loading ? 'not-allowed' : 'pointer',
      }}
    >
      {loading ? 'Simulando...' : 'Simular carga'}
    </button>
  )
}
