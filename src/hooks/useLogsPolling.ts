import { useState } from 'react'

interface UseLogsPollingResult {
  isPolling: boolean
  startPolling: () => void
  stopPolling: () => void
}

export function useLogsPolling(): UseLogsPollingResult {
  const [isPolling, setIsPolling] = useState(false)

  const startPolling = () => {
    setIsPolling(true)
  }

  const stopPolling = () => {
    setIsPolling(false)
  }

  return {
    isPolling,
    startPolling,
    stopPolling,
  }
}
