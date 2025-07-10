import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: "La clave de API de Gemini no está configurada." });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    const prompt = `
      Eres un asistente creativo para la fiesta de 40 años de Gustavo, un hombre colombiano con muy buen buen humor.
      Tu tarea es generar una lista de 3 ideas de regalos que suenen exageradas carisimas pero reales como por ejemplo un Ferrari, un Yate,
      un Viaje a una isla o país carisimo, un Iphone 18 Pro Max jajaja no ha salido pero lo queiro jajajaja, ideas divertidas que existan realmente
      pero como una broma para sus amigos. Responde únicamente con un objeto JSON válido que siga esta estructura: { "ideas": ["idea 1", "idea 2", "idea 3"] }.
      No incluyas ningún texto adicional, solo el JSON.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extraemos el bloque JSON de la respuesta, ignorando el markdown y cualquier texto adicional.
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("Respuesta no válida de la IA:", text);
      throw new Error("La IA no devolvió un objeto JSON válido.");
    }

    // Parseamos la respuesta JSON directamente
    const parsedResponse = JSON.parse(jsonMatch[0]);
    const ideas = parsedResponse.ideas;

    if (!ideas || ideas.length === 0) {
      throw new Error("La IA no generó ideas válidas.");
    }

    res.status(200).json({ ideas });
  } catch (error) {
    console.error("Error al contactar la API de Gemini:", error);
    res.status(500).json({ message: "Error al generar las ideas de regalo.", details: error.message });
  }
}