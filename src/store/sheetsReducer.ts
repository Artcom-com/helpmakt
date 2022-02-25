export interface SheetsState {
  sheetId: string
  tableName: string
  csv?: File
  date: Date | undefined
  locationName: string
  operation: 'callHours' | 'callDuration' | 'default'
}

export interface SheetActions {
  type: 'ADD_INFOS'
  sheetId: string
  tableName: string
  csv?: File
  date: Date | undefined
  locationName: string
  operation: 'callHours' | 'callDuration' | 'default'
}

const sheetsReducer = (state: SheetsState, actions: SheetActions): SheetsState => {
  if (actions.type === 'ADD_INFOS') {
    if (actions.operation === 'callHours') {
      return {
        sheetId: actions.sheetId,
        tableName: actions.tableName,
        date: actions.date as Date,
        operation: actions.operation,
        locationName: actions.locationName,
        csv: actions.csv,
      };
    }

    return {
      sheetId: actions.sheetId,
      tableName: actions.tableName,
      date: actions.date as Date,
      operation: actions.operation,
      locationName: actions.locationName,
      csv: actions.csv,
    };
  }

  return {
    sheetId: '',
    tableName: '',
    csv: undefined,
    date: undefined,
    locationName: '',
    operation: 'default',
  };
};

export default sheetsReducer;
