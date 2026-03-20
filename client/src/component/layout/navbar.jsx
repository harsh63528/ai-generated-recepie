import { Link } from "react-router-dom";
import useStore from "../../store/useStore";

export default function Navbar() {
  const { user, logout, logoutloading } = useStore();

  return (
    <nav className="h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/vite.svg" alt="RecipeAI Logo" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-800 tracking-wide">
          RecipeAI
        </span>
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <Link
            to="/"
            className="relative hover:text-red-500 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/recipes"
            className="relative hover:text-red-500 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all"
          >
            Recipes
          </Link>
        </li>
      </ul>

      {/* Auth Section */}
      {!user ? (
        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-4 py-1.5 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-200"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 shadow-sm"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          
          {/* User Info */}
          <span className="text-gray-700 font-medium hidden sm:block">
            Hi, {user?.username || "User"}
          </span>

          {/* Logout Button */}
          <button
            onClick={logout}
            disabled={logoutloading}
            className="px-4 py-1.5 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition disabled:opacity-50"
          >
            {logoutloading ? "..." : "Logout"}
          </button>
        </div>
      )}
    </nav>
  );
}