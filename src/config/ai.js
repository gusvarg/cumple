export const giftGenerationPrompt = `
Tu única tarea es generar una lista de 3 ideas de regalos para un hombre colombiano de 40 años llamado Gustavo.
Las ideas deben ser objetos o experiencias de lujo, extremadamente caros y reales. El formato de cada idea debe ser una frase corta y divertida.
Inspírate en estos ejemplos: 'Un Ferrari rojo para igual quedar parado en los trancones', 'Un yate para pasear por el Caribe los domingos', 'Un viaje a Dubai con todo pago', 'Un reloj Rolex de oro para ver la hora de brillar'.
No te desvíes de este formato. No cuentes chistes. La broma es la extravagancia del regalo pero regalos reales.
IMPORTANTE: Responde únicamente con un objeto JSON válido que siga esta estructura: { "ideas": ["idea 1", "idea 2", "idea 3"] }.
No incluyas ningún texto adicional, solo el JSON.
`;