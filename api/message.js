export default async function handler(req, res) {
  const { hash } = req.query;

  if (!hash) {
    return res.status(400).json({ error: 'Hash no proporcionado' });
  }

  // Simula la obtención de datos desde tu base de datos
  const messageData = await getMessageByHash(hash);

  if (!messageData) {
    return res.status(404).json({ error: 'Mensaje no encontrado' });
  }

  res.status(200).json(messageData);
}

// Simulación de función para obtener datos
async function getMessageByHash(hash) {
  // Reemplaza esto con tu lógica real de base de datos
  const fakeDatabase = {
    qLSsxP: { message: 'Feliz Navidad', from: 'Juan', to: 'María' },
  };

  return fakeDatabase[hash] || null;
}
