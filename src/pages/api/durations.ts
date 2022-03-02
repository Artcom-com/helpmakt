// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import addInNewSheet from '../../gsheet/gsheet';
import { CallsDurationsRequest } from '../../types/callsDurationSheet';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{[key: string]: string}>,
) {
  const { calls, docId, tableName }: CallsDurationsRequest = req.body as CallsDurationsRequest;

  console.log(req.body);
  console.log(calls, docId);

  const response = await addInNewSheet({
    docId, operation: 'callDuration', data: calls, tableName,
  });

  if (response.error) {
    return res.status(500).json({ error: response.error });
  }

  return res.status(200).json({ message: 'ok' });
}
