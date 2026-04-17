import StatusBadge from './StatusBadge'
import type { LogEntry } from '../types'

interface LogRowProps {
  log: LogEntry
}

export default function LogRow({ log }: LogRowProps) {
  return (
    <tr>
      <td>{log.requestId}</td>
      <td>{log.serviceId}</td>
      <td>{log.operation}</td>
      <td>{log.durationMs}</td>
      <td>
        <StatusBadge status={log.status} />
      </td>
      <td>{new Date(log.timestamp).toLocaleString()}</td>
    </tr>
  )
}
