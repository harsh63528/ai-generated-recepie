
import Navbar from './component/layout/navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './page/home.jsx'
import LogIn from './page/login.jsx'
import SignUp from './page/signup.jsx'
import { useEffect } from 'react'
import useStore from './store/useStore.js'
import Error from './page/error.jsx'

function App() {
 let{user,Profile}= useStore();
 useEffect(()=>{
    Profile();
  },[]);
  
  return(
    <>
    <Navbar/>
    
     <Routes>
      <Route path='/' element={ user===null ? <LogIn />: <Home/> }/>
      <Route path='/login'  element={<LogIn/>}/>
      <Route path='/signup'  element={<SignUp/>}/>
      <Route path='*' element={<Error/>}/> 
    </Routes>
    </>
  )
  
}

export default App
