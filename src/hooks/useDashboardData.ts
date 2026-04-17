import { useState } from 'react'
import type { MetricsSummary, PageResponse, LogEntry } from '../types'

interface UseDashboardDataResult {
  summary: MetricsSummary | null
  logsPage: PageResponse<LogEntry> | null
  loading: boolean
  error: string | null
}

export function useDashboardData(): UseDashboardDataResult {
  const [summary] = useState<MetricsSummary | null>(null)
  const [logsPage] = useState<PageResponse<LogEntry> | null>(null)
  const [loading] = useState(false)
  const [error] = useState<string | null>(null)

  return { summary, logsPage, loading, error }
}
