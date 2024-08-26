
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
// con as Router lo que hacemos es cambiarle el nombre a Router
import './App.css'
import Home from "./pages/home/Home"
import Gallery from "./pages/gallery/Gallery"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Navigator from "./core/navigator/navigator"
import { useState } from "react"
import { JwtContent } from "./context/jwtContent"
import { RequireAuth } from "./components/RequireAuth"

// nos traemos todas las rutas de las pages
// abajo esta la estructura de Rutas

function App() {

  const [jwt,setJwt] = useState(null); //variable de estado

  return (
    <>
    <JwtContent.Provider value={{jwt,setJwt}}> {/* todo lo que este dentro de Jwt.Content.Provider sera lo que ira rebotando por toda la app. usando estos dos valores = jasonWebToken  */}
      <Router>
      {/* navi debe estar dentro de router siempre para evitar fallos */}
      <Navigator/> 
        <Routes>
          <Route path="/" element = {<Home/>}/>                    
          <Route path="/gallery" 
                 element = {
                  <RequireAuth> {/* protegemos la ruta /gallery con RequireAuth*/}
                  <Gallery/>
                  </RequireAuth>
                }
              />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>          
        </Routes>  
      </Router>
      </JwtContent.Provider>
    </>
  )
}

export default App
