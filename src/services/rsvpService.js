export const confirmRsvp = async (name) => {
  const response = await fetch('/api/rsvp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || 'La respuesta del servidor no fue exitosa.';
    throw new Error(errorMessage);
  }

  return await response.json();
};