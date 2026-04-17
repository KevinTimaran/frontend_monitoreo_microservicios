export type LogStatus = 'SUCCESS' | 'ERROR'

export interface MetricsSummary {
  generatedAt: string
  totalCalls: number
  globalErrorRate: number
  services: ServiceMetric[]
}

export interface ServiceMetric {
  serviceId: string
  totalCalls: number
  successRate: number
  errorRate: number
  averageDurationMs: number
  last20Durations: number[]
}

export interface LogEntry {
  requestId: string
  serviceId: string
  operation: string
  durationMs: number
  status: LogStatus
  timestamp: string
  inputParams: string
  responseBody: string
  errorMessage?: string
  stackTraceSummary?: string
}

export interface PageResponse<T> {
  content: T[]
  page: number
  size: number
  totalElements: number
  totalPages: number
  last: boolean
}

export interface SimulationResult {
  totalGenerated: number
  successCount: number
  errorCount: number
  executedAt: string
}

export interface ServiceOperationRequest {
  params: unknown[]
}

export interface LogFilter {
  service?: string
  status?: '' | LogStatus
  from?: string
  to?: string
  page: number
  size: number
}
