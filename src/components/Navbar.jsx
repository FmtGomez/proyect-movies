import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
export const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <div className='flex items-center justify-center gap-[50px] p-4 z-[100] w-full absolute'>
      <Link to="/">
        <h1 className='text-rose-600 text-4xl font-bold  cursor-pointer'>GMZ-MOVIES</h1>
      </Link>
      {
        user?.email ? <div>
          <Link to="/account">
            <button className='text-white pr-4 '>Favoritos</button>
          </Link>
          <button onClick={handleLogout}
            className='bg-red-600 px-6  py-2 rounded cursor-pointer text-white'>
            Cerrar Sesion
          </button>
        </div> : <div>
          <Link to="/login">
            <button className='bg-blue-500 px-6  py-2 rounded text-white pr-4 mr-3 '>Ingresar</button>
          </Link>
          <Link to="/signup">
            <button className='bg-red-600 px-6  py-2 rounded cursor-pointer text-white'>Registrarse</button>
          </Link>
        </div>
      }
    </div>
  )
}
