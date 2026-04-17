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
    const response = await apiClient.get<MetricsSummary>('/api/metrics/summary')
    return response.data
  }

  async getLogs(filters: LogFilter): Promise<PageResponse<LogEntry>> {
    const response = await apiClient.get<PageResponse<LogEntry>>('/api/metrics/logs', {
      params: filters,
    })
    return response.data
  }

  async simulateLoad(): Promise<SimulationResult> {
    const response = await apiClient.post<SimulationResult>('/api/metrics/simulate-load')
    return response.data
  }
}

export const metricsApiService = new MetricsApiService()
