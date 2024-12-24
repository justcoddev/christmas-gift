import { mockDatabase } from './shorten';

export default function handler(req, res) {
  const { hash } = req.query;

  if (!hash || !mockDatabase[hash]) {
    return res.status(404).json({ error: 'URL no encontrada.' });
  }

  const formData = mockDatabase[hash]; // Obtén los datos asociados al hash
  res.status(200).json({ formData });
}
