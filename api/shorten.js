const mockDatabase = {}; // Simulación de base de datos compartida

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { formData } = req.body;
    const hash = Math.random().toString(36).substring(2, 8); // Generar un hash único
    mockDatabase[hash] = formData; // Guardar los datos

    res.status(200).json({ shortURL: `${req.headers.origin}/${hash}` });
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
};

export { mockDatabase }; // Exporta la base de datos para compartirla con redirect.js
