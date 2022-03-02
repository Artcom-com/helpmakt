// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import addInNewSheet from '../../gsheet/gsheet';
import { CallsHoursRequest } from '../../types/callsHours';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{[key: string]: string}>,
) {
  const { data, docId, tableName }: CallsHoursRequest = req.body as CallsHoursRequest;

  const response = await addInNewSheet({
    docId, operation: 'callHours', data, tableName,
  });

  if (response.error) {
    return res.status(500).json({ error: response.error });
  }

  return res.status(200).json({ message: 'ok' });
}
