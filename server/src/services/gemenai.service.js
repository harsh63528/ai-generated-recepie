import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API_KEY}` });

async function main(data) {
  try {
    // ✅ Normalize ingredients
    const ingredientsArray = Array.isArray(data.ingredients)
      ? data.ingredients
      : data.ingredients
        ? data.ingredients.split(",").map(i => i.trim())
        : [];

    // ✅ Validation (at least one required)
    if (!data.dish && ingredientsArray.length === 0) {
      throw new Error("Provide dish or ingredients");
    }

    const prompt = `
You are a professional chef AI.

Your task:
- If dish is provided → generate full recipe
- If only ingredients are provided → create a suitable dish
- If both are provided → use both

Difficulty level: ${data.level || "easy"}

STRICT RULES:
- Return ONLY JSON
- No explanation

FORMAT:
{
  "dish": "",
  "difficulty": "easy | medium | hard",
  "ingredients": ["string"],
  "steps": ["string"]
}

Dish: ${data.dish || ""}
Ingredients: ${ingredientsArray.join(", ")}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const rawText = response.candidates[0].content.parts[0].text;

    // ✅ Safe JSON extraction
    const jsonText = rawText.substring(
      rawText.indexOf("{"),
      rawText.lastIndexOf("}") + 1
    );

    return JSON.parse(jsonText);

  } catch (error) {
    console.error("Gemini Error:", error.message);

    return {
      dish: data.dish || "Custom Dish",
      difficulty: data.level || "easy",
      ingredients: data.ingredients || [],
      steps: ["Failed to generate recipe"]
    };
  }
}

export default main;