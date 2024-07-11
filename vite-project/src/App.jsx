
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

import NavCustom from "./components/NavCustom"
import Users from "./components/Users"
import Home from "./components/Home"
import UpdateUser from "./components/UpdateUser"

function App() {
 

  return (
    <BrowserRouter>
    <NavCustom/>
    <Routes>
      <Route path="/users" element={<Users/>}/>
      <Route path="/updateUsers/:userId" element={<UpdateUser/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
