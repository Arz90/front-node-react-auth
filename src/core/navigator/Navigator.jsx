import { useContext } from "react"
import { Link } from "react-router-dom"
import { JwtContent } from "../../context/jwtContent"

const Navigator = () => {
    const {jwt} = useContext(JwtContent); // enlace para rebotar la informacion con el contexto 
    //console.log(jwt);
    
  return (
    <nav>
        <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
               
        {/* jwt solo te lo mostrara cuando haya hecho el login o el register */}
        {/* aplicamos un ternario - si jwt es true (&&) */}
            {jwt && (
                <>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                </>
            )}

            {/* si no hay token muestra login y register */}
            {jwt ===null && (
                <>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                </>
            )}
        </ul>
    </nav>
  )
}

export default Navigator