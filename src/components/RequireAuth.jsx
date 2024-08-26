// con RequireAuth protegeremos las rutas. las protegemos en App.jsx.
// creando su correspondiente controllador y la ruta en el back

import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { API } from "../services/api";


export const RequireAuth = ({ children }) => {
   /*  let location = useLocation();
    //console.log(location);  
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" state={{from:location}} replace/>
    }  
    return children */

    let location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    
    useEffect(() => {
            const token = localStorage.getItem("token");
          if (token) {
            API.get("users/checksession", token).then((res) => {
              console.log(res);
              setIsAuthenticated(true);
            }).catch((err)=>{
                console.log(err);
                setIsAuthenticated(false);
            });
          } else {
            setIsAuthenticated(false);
          }
        }, [])

        if (isAuthenticated === null) {

            return null;
        }

        if (!isAuthenticated) {
            return <Navigate to="/login" state={{from:location}} replace/>
        }

    return children

};

// con esto conseguimos que si no se ha realizado el login nunca podra mostrar la ruta /gallery
// con esta funcion le decimos que protega a los hijos cuando se use RequireAuth