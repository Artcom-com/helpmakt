import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { CallsHours } from '../types/callsHours';

export default async function callsHours(data: CallsHours, sheet: GoogleSpreadsheetWorksheet): Promise<void> {
  await sheet.addRow({
    Month: `${data.month}`,
    'Location Name': data.locationName,
    '8h': data.calls[0],
    '9h': data.calls[1],
    '10h': data.calls[2],
    '11h': data.calls[3],
    '12h': data.calls[4],
    '13h': data.calls[5],
    '14h': data.calls[6],
    '15h': data.calls[7],
    '16h': data.calls[8],
    '17h': data.calls[9],
  });
}
