const mockDatabase = {}; // Simulación de base de datos para guardar hashes

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { formData } = req.body;
      if (!formData) {
        res.status(400).json({ error: 'Faltan datos en la solicitud.' });
        return;
      }

      // Generar un hash único
      const hash = Math.random().toString(36).substring(2, 8);

      // Guardar en la base de datos simulada
      mockDatabase[hash] = formData;

      // Devolver la URL acortada
      res.status(200).json({ shortURL: `${req.headers.origin}/q${hash}` });
    } catch (error) {
      console.error('Error en el servidor:', error);
      res.status(500).json({ error: 'Error en el servidor.' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}
