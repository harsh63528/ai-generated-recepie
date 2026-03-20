import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API_KEY}` });


async function main(data) {

  try {
const prompt = `
Generate recipe in JSON format only.

      {
        "dish": "",
        "difficulty": "",
        "ingredients": [],
        "steps": []
      }

      Dish: ${data.dish}
      Ingredients: ${data.ingredients.join(", ")}
      Difficulty: ${data.level}

`;
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  const rawText = response.candidates[0].content.parts[0].text;

    const match = rawText.match(/\{[\s\S]*\}/);

    if (!match) throw new Error("Invalid JSON");

    return JSON.parse(match[0]);
  }
  catch (error) {
    console.error("Gemini Error:", error.message);

    return {
      dish: data.dish,
      difficulty: data.level,
      ingredients: data.ingredients,
      steps: ["Failed to generate recipe"]
    };

  }

  



}

export default main;