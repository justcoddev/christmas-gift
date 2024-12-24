export default async function handler(req, res) {
  const { hash } = req.query;

  if (!hash || !urlDatabase[hash]) {
    return res.status(404).json({ error: 'URL no encontrada.' });
  }

  const formData = urlDatabase[hash];
  res.status(200).json({ formData });
}
