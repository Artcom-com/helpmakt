// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import addInNewSheet from '../../gsheet/gsheet';
import { CallsDurationsRequest } from '../../types/callsDurationSheet';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{[key: string]: string}>,
) {
  try {
    const { calls, docId, tableName }: CallsDurationsRequest = req.body as CallsDurationsRequest;

    const response = await addInNewSheet({
      docId, operation: 'callDuration', data: calls, tableName,
    });

    if (response.error) {
      return res.status(500).json({ error: response.error });
    }

    return res.status(200).json({ message: 'ok' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: (err as string) });
  }
}
