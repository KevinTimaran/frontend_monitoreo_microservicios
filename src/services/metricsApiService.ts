import apiClient from './apiClient'
import type {
  LogEntry,
  LogFilter,
  MetricsSummary,
  PageResponse,
  SimulationResult,
} from '../types'

export class MetricsApiService {
  async getSummary(): Promise<MetricsSummary> {
    const response = await apiClient.get<Partial<MetricsSummary>>('/api/metrics/summary')
    const data = response.data

    return {
      generatedAt: data.generatedAt ?? new Date().toISOString(),
      totalCalls: data.totalCalls ?? 0,
      globalErrorRate: data.globalErrorRate ?? 0,
      services: data.services ?? [],
    }
  }

  async getLogs(filters: LogFilter): Promise<PageResponse<LogEntry>> {
    const response = await apiClient.get<Partial<PageResponse<LogEntry>>>('/api/metrics/logs', {
      params: filters,
    })
    const data = response.data
    const page = data.page ?? filters.page
    const size = data.size ?? filters.size
    const totalElements = data.totalElements ?? 0
    const totalPages = data.totalPages ?? 0
    const last = data.last ?? page + 1 >= totalPages

    return {
      content: data.content ?? [],
      page,
      size,
      totalElements,
      totalPages,
      last,
    }
  }

  async simulateLoad(): Promise<SimulationResult> {
    const response = await apiClient.post<{
      totalGenerated?: number
      successCount?: number
      errorCount?: number
      executedAt?: string
      totalExecutions?: number
      successfulExecutions?: number
      failedExecutions?: number
      simulatedDurationMs?: number
      message?: string
    }>('/api/metrics/simulate-load')
    const data = response.data

    return {
      totalGenerated: data.totalGenerated ?? data.totalExecutions ?? 0,
      successCount: data.successCount ?? data.successfulExecutions ?? 0,
      errorCount: data.errorCount ?? data.failedExecutions ?? 0,
      executedAt: data.executedAt ?? new Date().toISOString(),
    }
  }
}

export const metricsApiService = new MetricsApiService()
