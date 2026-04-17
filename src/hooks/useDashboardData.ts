import { useCallback, useEffect, useState } from 'react'
import { metricsApiService } from '../services/metricsApiService'
import { useLogsPolling } from './useLogsPolling'
import type { LogEntry, LogFilter, MetricsSummary, PageResponse } from '../types'

interface UseDashboardDataResult {
  summary: MetricsSummary | null
  logsPage: PageResponse<LogEntry> | null
  loadingSummary: boolean
  loadingLogs: boolean
  simulating: boolean
  error: string | null
  filters: LogFilter
  fetchSummary: () => Promise<void>
  fetchLogs: () => Promise<void>
  refreshAll: () => Promise<void>
  simulateLoad: () => Promise<void>
  setFilters: React.Dispatch<React.SetStateAction<LogFilter>>
}

const initialFilters: LogFilter = {
  page: 0,
  size: 10,
  status: '',
  service: '',
}

export function useDashboardData(): UseDashboardDataResult {
  const [summary, setSummary] = useState<MetricsSummary | null>(null)
  const [logsPage, setLogsPage] = useState<PageResponse<LogEntry> | null>(null)
  const [loadingSummary, setLoadingSummary] = useState(false)
  const [loadingLogs, setLoadingLogs] = useState(false)
  const [simulating, setSimulating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<LogFilter>(initialFilters)

  const fetchSummary = useCallback(async () => {
    setLoadingSummary(true)
    try {
      const data = await metricsApiService.getSummary()
      setSummary(data)
      setError(null)
    } catch {
      setError('No se pudo cargar el resumen de metricas.')
    } finally {
      setLoadingSummary(false)
    }
  }, [])

  const fetchLogs = useCallback(async () => {
    setLoadingLogs(true)
    try {
      const data = await metricsApiService.getLogs(filters)
      setLogsPage(data)
      setError(null)
    } catch {
      setError('No se pudieron cargar los logs.')
    } finally {
      setLoadingLogs(false)
    }
  }, [filters])

  const refreshAll = useCallback(async () => {
    await Promise.all([fetchSummary(), fetchLogs()])
  }, [fetchLogs, fetchSummary])

  const simulateLoad = useCallback(async () => {
    setSimulating(true)
    try {
      await metricsApiService.simulateLoad()
      setError(null)
      await refreshAll()
    } catch {
      setError('No se pudo ejecutar la simulacion de carga.')
    } finally {
      setSimulating(false)
    }
  }, [refreshAll])

  useEffect(() => {
    void refreshAll()
  }, [refreshAll])

  const handlePollingRefresh = useCallback(() => {
    void refreshAll()
  }, [refreshAll])

  useLogsPolling(handlePollingRefresh, 3000)

  return {
    summary,
    logsPage,
    loadingSummary,
    loadingLogs,
    simulating,
    error,
    filters,
    fetchSummary,
    fetchLogs,
    refreshAll,
    simulateLoad,
    setFilters,
  }
}
