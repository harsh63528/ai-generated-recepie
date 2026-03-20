import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API_KEY}` });


async function main(data) {

  const prompt = `
You are a professional chef AI.

Your task depends on the user input:

1. If a dish name is provided:
   → Return ingredients and steps for that dish.

2. If only ingredients are provided:
   → Create a suitable dish using those ingredients.

Difficulty level will be provided as: easy, medium, or hard.
Adjust the complexity of steps accordingly.

STRICT RULES:
- Return ONLY valid JSON
- No extra text, no explanation
- Follow the structure exactly

JSON FORMAT:
{
  "dish": "string",
  "difficulty": "easy | medium | hard",
  "ingredients": ["string"],
  "steps": ["string"]
}

USER INPUT:
Dish: ${data.dish || ""}
Ingredients: ${data.ingredients?.join(", ") || ""}
Difficulty: ${data.level}
`;
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  return response
}

export default main;