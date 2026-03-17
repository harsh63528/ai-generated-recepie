export default function Home() {
  return (
    <div className="bg-background-light min-h-screen">
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold">RecipeAI</h1>
      </header>

      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">
          Turn your ingredients into meals
        </h1>

        <input
          type="text"
          placeholder="Enter ingredients..."
          className="mt-4 p-3 border rounded-lg w-80"
        />
      </section>
    </div>
  );
}