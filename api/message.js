const mockDatabase = {}; // Simulación de la base de datos (usa la misma que en `/api/shorten`)

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { hash } = req.query;
    if (!hash || !mockDatabase[hash]) {
      res.status(404).json({ error: 'Hash no encontrado.' });
      return;
    }

    const data = mockDatabase[hash];
    res.status(200).json(data);
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}
