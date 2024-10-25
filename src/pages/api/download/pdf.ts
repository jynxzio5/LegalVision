import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filename } = req.query;
  const filePath = path.join(process.cwd(), 'public/pdfs', filename as string);
  
  try {
    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    fileStream.pipe(res);
  } catch {
    res.status(404).json({ error: 'File not found' });
  }
}
