import { createContext } from 'react';
import { Calls } from '../types/callsHours';

export interface SheetsType {
  sheetId: string
  tableName: string
  calls: Calls[] | undefined
  date: Date | undefined
  operation: 'callHours' | 'callDuration' | 'default'
  locationName: string
}

export interface SheetsContextType extends SheetsType {
  handleAddSheetInfos: (infos: SheetsType) => void
}

export default createContext<SheetsContextType>({
  sheetId: '',
  tableName: '',
  calls: undefined,
  date: undefined,
  operation: 'default',
  locationName: '',
  handleAddSheetInfos: (infos: SheetsType) => console.log(infos),
});
