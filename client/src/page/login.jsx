import useStore from "../store/useStore";

export default function Login() {

  const { getUser } = useStore();
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value,getUser)
  }
  return (
   <>
   <div className="login">
    <form onSubmit={handlesubmit()} method="post">
      <input type="email" name="email" id="" />
      <input type="password" name="password" id="" />
      <button type="submit">Login</button>
    </form>
   </div>
   </>
  );
}