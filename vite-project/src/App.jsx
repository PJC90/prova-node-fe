
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

import NavCustom from "./components/NavCustom"
import Users from "./components/Users"
import Home from "./components/Home"
import UpdateUser from "./components/UpdateUser"
import Login from "./components/Login"
import { AuthProvider } from "./context/AuthContext"
import Registration from "./components/Registration"

function App() {
 

  return (
    <AuthProvider>
    <BrowserRouter>
    <NavCustom/>
    <Routes>
      <Route path="/users" element={<Users/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/updateUsers/:userId" element={<UpdateUser/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/registrazione" element={<Registration/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
