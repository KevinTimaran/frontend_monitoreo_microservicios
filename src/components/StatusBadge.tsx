import type { LogStatus } from '../types'

interface StatusBadgeProps {
  status: LogStatus
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isSuccess = status === 'SUCCESS'

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        backgroundColor: isSuccess ? '#dcfce7' : '#fee2e2',
        color: isSuccess ? '#166534' : '#991b1b',
      }}
    >
      {status}
    </span>
  )
}
