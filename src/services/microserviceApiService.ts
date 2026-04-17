import apiClient from './apiClient'
import type { ServiceOperationRequest } from '../types'

export class MicroserviceApiService {
  async executeInventoryOperation(operation: string, request: ServiceOperationRequest) {
    const response = await apiClient.post(`/api/services/inventory/${operation}`, request)
    return response.data
  }

  async executeOrderOperation(operation: string, request: ServiceOperationRequest) {
    const response = await apiClient.post(`/api/services/orders/${operation}`, request)
    return response.data
  }

  async executePaymentOperation(operation: string, request: ServiceOperationRequest) {
    const response = await apiClient.post(`/api/services/payments/${operation}`, request)
    return response.data
  }
}

export const microserviceApiService = new MicroserviceApiService()
