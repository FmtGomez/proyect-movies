import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState("")
    const {user, logIn} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("")
        try{
            await logIn(email,password);
            navigate("/")
        }catch(error){
            console.log(error)
            setError(error.message)
        }

    };

  return (
    <>
             <div className='w-full h-screen '>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src="https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:0/wp:1/w:600/u:https://cdn.flickeringmyth.com/wp-content/uploads/2021/10/mainstream-modern-film-600x315.jpg" alt="/" />
                <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold' >Iniciar Sesión</h1>
                            {error? <p className='p-3 text-red-600 my-2'>Revise los datos e intente nuevamente</p>:null }
                            <form onSubmit={handleSubmit} className='w-full flex flex-col' >
                                <input
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className='p-3 my-2 bg-gray-600 rounded'
                                    type="email"
                                    placeholder='Email'
                                    autoComplete='email' />
                                <input
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className='p-3 my-2 bg-gray-600 rounded'
                                    type="password"
                                    placeholder='Contraseña'
                                    autoComplete='current-password' />
                                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Iniciar Sesión</button>
                                    <div className='flex justify-between items-center text-sm text-gray-600'>
                                        <p><input className='mr-2' type="checkbox"/>Recordar</p>
                                        <p>Necesitas ayuda?</p>
                                    </div>
                                    <p className='py-8'>
                                    <span className='text-gray-600'>Todavía no estas suscripto? </span>{" "} <Link to="/signup"> Ingresar</Link> 
                                    </p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}
