import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet, ServiceAccountCredentials } from 'google-spreadsheet';
import { CallsDurations } from '../types/callsDurationSheet';
import { CallsHours } from '../types/callsHours';
import { OperationType } from '../types/operations';
import callsDuration from './callDuration';
import callsHours from './callsHours';

export interface GSheetInfos {
  docId: string
  operation: OperationType
  tableName?: string
  data?: CallsDurations | CallsHours
}

const setHeaderValues = (operation: OperationType): string[] => {
  if (operation === 'callDuration') {
    return ['Month', 'Location Name', 'Duração Média', '0-1 min', '1-2 min', '2-3 min', '3-4 min', '4-5 min', '5+ min'];
  }

  return ['Month', 'Location Name', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'];
};

async function addInNewSheet({
  docId, operation, data, tableName,
}: GSheetInfos): Promise<{[key: string]: string}> {
  try {
    const accessAccount: ServiceAccountCredentials = {
      client_email: process.env.CLIENT_EMAIL as string,
      private_key: Buffer.from(process.env.PRIVATE_KEY as string, 'base64').toString('ascii'),
    };

    const doc = new GoogleSpreadsheet(docId);
    await doc.useServiceAccountAuth(accessAccount);
    await doc.loadInfo();

    const sheets = doc.sheetsByIndex;
    let table!: GoogleSpreadsheetWorksheet;

    if (tableName) {
      // eslint-disable-next-line no-restricted-syntax
      for (const sheet of sheets) {
        if (sheet.title === tableName) table = sheet;
      }
    } else {
      // eslint-disable-next-line prefer-destructuring
      table = doc.sheetsByIndex[0];
    }
    await table.loadCells();

    if (table.cellStats.nonEmpty === 0) {
      const headers = setHeaderValues(operation);
      await table.setHeaderRow(headers);
    }

    if (data) {
      if (operation === 'callDuration') await callsDuration(data as CallsDurations, table);
      if (operation === 'callHours') await callsHours(data as CallsHours, table);
    } else {
      return { message: 'É previso provisionar as informações.' };
    }

    return { message: 'Operação [Duração de Chamadas] ocorreu com sucesso.' };
  } catch (err) {
    console.log(`err: ${err}`);

    return { error: 'Desculpe, ocorreu algum erro. Por favor, tente novamente' };
  }
}

export default addInNewSheet;
