import LogRow from './LogRow'
import type { LogEntry } from '../types'

interface LogsTableProps {
  logs: LogEntry[]
  loading?: boolean
}

export default function LogsTable({ logs, loading = false }: LogsTableProps) {
  if (loading) {
    return <p>Cargando logs...</p>
  }

  if (logs.length === 0) {
    return <p>No hay logs disponibles.</p>
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Request ID</th>
            <th style={{ textAlign: 'left' }}>Service</th>
            <th style={{ textAlign: 'left' }}>Operation</th>
            <th style={{ textAlign: 'left' }}>Duration (ms)</th>
            <th style={{ textAlign: 'left' }}>Status</th>
            <th style={{ textAlign: 'left' }}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogRow key={log.requestId} log={log} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
