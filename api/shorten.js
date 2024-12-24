import { nanoid } from 'nanoid'; // Instala nanoid: npm install nanoid

// Simulación de una base de datos (para producción, usa un servicio como Firebase, DynamoDB, etc.)
const urlDatabase = {};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { formData } = req.body;

    if (!formData) {
      return res.status(400).json({ error: 'Faltan datos.' });
    }

    const hash = nanoid(6); // Genera un hash único de 6 caracteres
    const baseURL = 'https://christmasgift.justcoddev.com';
    const shortURL = `${baseURL}/${hash}`;

    // Guarda el hash con la información
    urlDatabase[hash] = formData;

    return res.status(200).json({ shortURL });
  }

  res.status(405).json({ error: 'Método no permitido.' });
}
