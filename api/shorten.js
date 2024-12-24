export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { formData } = req.body;

    // Genera un hash único
    const hash = Math.random().toString(36).substring(2, 8);

    // Guarda el mensaje con el hash en tu base de datos (ejemplo simulado)
    await saveMessage(hash, formData);

    // Genera la URL con hash routing
    const shortURL = `${req.headers.origin}/#/${hash}`;
    res.status(200).json({ shortURL });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
