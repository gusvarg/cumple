export const fetchGiftIdeas = async () => {
  const response = await fetch('/api/generate-gifts', {
    method: 'POST',
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage = data.details || data.message || `Error de API: ${response.statusText}`;
    throw new Error(errorMessage);
  }

  if (!data.ideas || data.ideas.length === 0) {
    throw new Error("No se recibieron ideas en la respuesta.");
  }

  return data.ideas;
};