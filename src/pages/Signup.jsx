import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { UserAuth } from '../context/AuthContext'

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const {user, signUp} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await signUp(email,password);
            navigate("/")
        }catch(error){
            console.log(error)
        }

    };


    return (
        <>
            <div className='w-full h-screen '>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/78452953-652a-4927-bbc3-41d554264762/AR-es-20220627-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
                <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold' >Registrarse</h1>
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
                                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Registrarse</button>
                                    <div className='flex justify-between items-center text-sm text-gray-600'>
                                        <p><input className='mr-2' type="checkbox"/>Recordar</p>
                                        <p>Necesitas ayuda?</p>
                                    </div>
                                    <p className='py-8'>
                                    <span className='text-gray-600'>Ya estas suscripto? </span>{" "} <Link to="/login"> Registrarse</Link> 
                                    </p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
