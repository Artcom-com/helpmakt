export interface CallsDurations {
  month: Date
  locationName: string
  average: string
  count1Min: number
  count2Min: number
  count3Min: number
  count4Min: number
  count5Min: number
  countMoreMin: number
}

export interface CallsDurationsRequest {
  calls: CallsDurations
  docId: string
  tableName?: string
}
