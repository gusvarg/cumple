export default function handler(req, res) {
  // 1. Asegurarse de que solo se acepten peticiones POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { name } = req.body;

  // 2. Validar que el nombre no esté vacío
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ message: 'El nombre es requerido.' });
  }

  // 3. En una app real, aquí guardarías el nombre en una base de datos, Google Sheets, etc.
  //    Por ahora, solo lo mostraremos en la consola del servidor para ver que funciona.
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    level: 'INFO',
    message: 'Confirmación de asistencia recibida',
    guestName: name.trim(),
  }));

  // 4. Enviar una respuesta de éxito
  res.status(200).json({ message: `Confirmación recibida para ${name.trim()}` });
}