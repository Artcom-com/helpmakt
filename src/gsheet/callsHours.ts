import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { CallsHours } from '../types/callsHours';

export default async function callsHours(data: CallsHours, sheet: GoogleSpreadsheetWorksheet): Promise<void> {
  await sheet.addRows(data.calls.map((call) => ({
    Month: `${data.month}`,
    'Location Name': call.locationName,
    '8h': call.calls[0],
    '9h': call.calls[1],
    '10h': call.calls[2],
    '11h': call.calls[3],
    '12h': call.calls[4],
    '13h': call.calls[5],
    '14h': call.calls[6],
    '15h': call.calls[7],
    '16h': call.calls[8],
    '17h': call.calls[9],
  })));
}
