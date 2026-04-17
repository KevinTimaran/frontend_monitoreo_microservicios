import { useEffect } from 'react'

export function useLogsPolling(callback: () => void, intervalMs = 3000) {
  useEffect(() => {
    callback()

    const intervalId = window.setInterval(() => {
      callback()
    }, intervalMs)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [callback, intervalMs])
}
