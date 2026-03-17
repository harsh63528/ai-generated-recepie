import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <>
    <nav className="min-h-16 flex items-center justify-between px-6 bg-white shadow-md">
      <div className="logo">
        <img src="client/public/vite.svg" alt="RecipeAI Logo" />
      </div>
      <div className="options">
        <ul className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </div>
      <div className="account">
        <ul className="flex gap-2">
          <li><Link to="/login" className="bg-red-500 p-2 rounded-2xl text-center text-white ">Login</Link></li>
          <li><Link to="/signup" className="bg-blue-500 px-2 py-2 rounded-2xl text-center text-white">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}