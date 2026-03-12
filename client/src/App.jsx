
import Navbar from './component/layout/navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './page/home.jsx'
import LogIn from './page/login.jsx'
import SignUp from './page/signup.jsx'

function App() {
  return(
    <>
    <Navbar/>
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'  element={<LogIn/>}/>
      <Route path='/signup'  element={<SignUp/>}/>
    </Routes>
    </>
  )
  
}

export default App
