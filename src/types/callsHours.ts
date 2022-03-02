export interface CallsHours {
  month: Date
  locationName: string
  calls: string[]
}

export interface CallsHoursRequest {
  data: CallsHours
  docId: string
  tableName?: string
}
