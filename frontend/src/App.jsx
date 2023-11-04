import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import SingupScreen from './screens/SignUpScreen'

function  App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Header/>

     <Routes>
      <Route path='/' element={<HomeScreen/>} ></Route>
      <Route path='/login' element={<LoginScreen/>} ></Route>
      <Route path='/signup' element={<SingupScreen/>} ></Route>
     </Routes>
 
    </>
  )
}

export default App
