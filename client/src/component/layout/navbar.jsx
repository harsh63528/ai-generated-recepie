import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-16 flex items-center justify-between px-6 bg-white shadow-md">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/vite.svg" alt="RecipeAI Logo" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-800">RecipeAI</span>
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
        </li>
        <li>
          <Link to="/recipes" className="hover:text-red-500 transition">Recipes</Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-3">
        <Link
          to="/login"
          className="px-4 py-1.5 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-4 py-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}