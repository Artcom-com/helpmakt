import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { CallsDurations } from '../types/callsDurationSheet';

export default async function callsDuration(data: CallsDurations, sheet: GoogleSpreadsheetWorksheet): Promise<void> {
  await sheet.addRow({
    Month: `${data.month}`,
    'Location Name': data.locationName,
    'Duração Média': data.average,
    '0 seg': data.countZeros,
    '0-1 min': data.count1Min,
    '1-2 min': data.count2Min,
    '2-3 min': data.count3Min,
    '3-4 min': data.count4Min,
    '4-5 min': data.count5Min,
    '5+ min': data.countMoreMin,
  });
}
