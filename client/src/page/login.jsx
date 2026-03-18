import { useRef } from "react";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const { logIn,user} = useStore();

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
       navigate('/');
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handlesubmit}
        className="flex flex-col gap-4 p-6 shadow-md rounded-xl w-80"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          ref={email}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}