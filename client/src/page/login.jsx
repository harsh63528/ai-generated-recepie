import { useRef } from "react";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const { logIn, loginloading } = useStore();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    if (!data.email || !data.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await logIn(data);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300 px-4">
      
      <form
        onSubmit={handlesubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          🔐 Login
        </h2>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loginloading}
          className="w-full bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 transition disabled:opacity-50"
        >
          {loginloading ? "Logging in..." : "Login"}
        </button>

        {/* Extra */}
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <span className="text-red-500 cursor-pointer hover:underline" onClick={()=>navigate('/signup')}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}