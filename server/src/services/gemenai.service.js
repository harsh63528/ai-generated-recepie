import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API_KEY}` });

async function main(data) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a recipe for ${data.dish} with the following ingredients: ${data.ingredients.join(", ")}. The recipe should be easy to follow and include step-by-step instructions.`,
  });
  return response
}

export default main;