
import { use, useRef } from "react";
import useContent from "../store/useContent";
export default function Home() {
  const { content, getContent } = useContent();
  const dishname=useRef(null);
  const ingredients=useRef(null);
  const difficulty=useRef(null);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const data={
      dishname:dishname.current.value,
      ingredients:ingredients.current.value,
      difficulty:difficulty.current.value
    }
    console.log("Form data:", data);
    await getContent(data);
    console.log("Content after fetching:", content);
    }

  return (
   
    <>
    <form action=""  onSubmit={handleSubmit} method="post">
      <input type="text" name="dishname" id="" ref={dishname} placeholder="enter dish name"/>
      <input type="text" name="ingredients" ref={ingredients} placeholder="Enter ingredients" />
      <label>
        <input 
        type="radio" 
        name="difficulty" 
        id=""
        value="easy" 
        ref={difficulty} 
        placeholder="Easy" />
        easy
          </label>
      <label>
        <input 
        type="radio" 
        name="difficulty" 
        id=""
        value="medium" 
        ref={difficulty} 
        placeholder="Medium" />
        medium
        </label>

      <label>
        <input 
        type="radio" 
        name="difficulty" 
        id=""
        value="hard" 
        ref={difficulty} 
        placeholder="Hard" />
        hard
      </label>
      <button type="submit">Generate Recipe</button>
    </form>
    </>
  );
}