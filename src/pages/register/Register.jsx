import { useForm } from "react-hook-form"
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
// estas dos funciones de abajo (register, handleSubmit vienen por defecto en el useForm)
    const{register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = (formData)=>{
        console.log(formData);
        API.post("users/register",formData).then((res)=>{
            console.log(res);
            navigate("/login");
        })
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" {...register("email", {required:true})}/>
    {/* los ... dice que recoga esa informacion anterior mas lo siguiente */}
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" {...register("password", {required:true})}/>
        <button type="submit">Register</button>
    </form>
  )
}

export default Register