export interface Calls {
  locationName: string
  calls: string[]
}

export interface CallsHours {
  month: Date
  calls: Calls[]
}

export interface CallsHoursRequest {
  data: CallsHours
  docId: string
  tableName?: string
}
