import  { useEffect, useState } from "react"
//import axios from "axios"
import { API } from "../../services/api"

const Gallery = () => {
  const [libros,setLibros] = useState([])
  useEffect(()=>{
   /*  axios.get("http://localhost:5000/libros").then((res)=>{
      console.log(res.data);
      setLibros(res.data)
    }) */ // la linea de abajo es aquivalente a la de arriba sin usar api.js
   API.get("libros").then((res) => {
    //console.log(res.data);  
    setLibros(res.data);  
   })
  },[])
  return (
    <div>
      <ul>
        {libros.map((libro,index) => (
          <li key={index}>{libro.titulo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery