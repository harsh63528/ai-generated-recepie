import { useRef } from "react";
import useStore from "../store/useStore";

export default function Login() {

  let email=useRef('');
  let password=useRef('');
  const { getUser, user} = useStore();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const data={
      email:email.current.value,
      password:password.current.value
    }
    await getUser(data);
    console.log('User from store:', user);
    }
    
  
  return (
   <>
   <div className="login">
    <form onSubmit={handlesubmit} method="post">
      <input type="email" name="email" id="" ref={email} />
      <input type="password" name="password" id="" ref={password} />
      <button type="submit">Login</button>
    </form>
   </div>
   </>
  );
}