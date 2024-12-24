export default function handler(req, res) {
  const mockDatabase = {};

  if (req.method === 'POST') {
    const { formData } = req.body;
    const hash = Math.random().toString(36).substring(2, 8); // Generar un hash único
    mockDatabase[hash] = formData;

    // Asegúrate de incluir el hash en la ruta correcta
    res.status(200).json({ shortURL: `${req.headers.origin}/q${hash}` });
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}
