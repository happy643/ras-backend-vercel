
import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const userData = req.body;

    console.log('收到資料:', userData);

    res.status(200).json({ message: '收到資料了！' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
