const mockDatabase = {}; // Usa la misma "base de datos" que en shorten.js

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { hash } = req.query;

    if (!hash || !mockDatabase[hash]) {
      res.status(404).json({ error: 'Hash no encontrado.' });
      return;
    }

    res.status(200).json(mockDatabase[hash]);
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}
