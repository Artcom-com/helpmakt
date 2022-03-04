import { createContext } from 'react';

export interface SheetsType {
  sheetId: string
  tableName: string
  date: Date | undefined
  operation: 'callHours' | 'callDuration' | 'default'
}

export interface SheetsContextType extends SheetsType {
  handleAddSheetInfos: (infos: SheetsType) => void
}

export default createContext<SheetsContextType>({
  sheetId: '',
  tableName: '',
  date: undefined,
  operation: 'default',
  handleAddSheetInfos: (infos: SheetsType) => console.log(infos),
});
