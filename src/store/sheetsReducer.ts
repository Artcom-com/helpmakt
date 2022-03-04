export interface SheetsState {
  sheetId: string
  tableName: string
  date: Date | undefined
  operation: 'callHours' | 'callDuration' | 'default'
}

export interface SheetActions {
  type: 'ADD_INFOS'
  sheetId: string
  tableName: string
  date: Date | undefined
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
      };
    }

    return {
      sheetId: actions.sheetId,
      tableName: actions.tableName,
      date: actions.date as Date,
      operation: actions.operation,
    };
  }

  return {
    sheetId: '',
    tableName: '',
    date: undefined,
    operation: 'default',
  };
};

export default sheetsReducer;
