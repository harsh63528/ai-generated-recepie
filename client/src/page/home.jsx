import { useRef } from "react";
import useContent from "../store/useContent";

export default function Home() {
  const { content, getContent, contentLoading } = useContent();

  const dishname = useRef(null);
  const ingredients = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedDifficulty =
      document.querySelector('input[name="difficulty"]:checked')?.value;

    const data = {
      dish: dishname.current.value,
      ingredients: ingredients.current.value,
      level: selectedDifficulty || "easy",
    };

    await getContent(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-700">
          🍳 Recipe Generator
        </h1>

        <input
          type="text"
          ref={dishname}
          placeholder="Enter dish name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          ref={ingredients}
          placeholder="Enter ingredients (comma separated)"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Difficulty */}
        <div className="flex justify-between">
          {["easy", "medium", "hard"].map((level) => (
            <label key={level} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="difficulty"
                value={level}
                className="accent-blue-500"
              />
              <span className="capitalize">{level}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Generate Recipe
        </button>
      </form>

      {/* LOADING */}
      {contentLoading && (
        <p className="mt-6 text-blue-500 font-semibold">Generating recipe...</p>
      )}

      {/* RESULT */}
      {content && !contentLoading && (
        <div className="bg-white shadow-lg rounded-2xl p-6 mt-6 w-full max-w-md">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {content.dish}
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Difficulty: {content.difficulty}
          </p>

          <h3 className="font-semibold text-gray-700">Ingredients:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {content.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="font-semibold text-gray-700">Steps:</h3>
          <ol className="list-decimal list-inside text-gray-600">
            {content.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}