import React, {useState} from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa"
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion,doc, updateDoc } from 'firebase/firestore';
import {Link} from "react-router-dom";



export const Movie = ({el}) => {
    const [like, setLike] = useState(false);
    const [saved,setSaved]=useState(false);
    const {user} = UserAuth();

    const movieID = doc(db, "users",`${user?.email}`)
    
    const savedShow = async()=>{
        if(user?.email){
            setLike(!like);
            setSaved(true);
            await updateDoc(movieID,{
                savedShows: arrayUnion({
                    id:el.id,
                    title:el.title,
                    img:el.backdrop_path, 
                })
            })
        }else{
            alert("Por Favor Inicia Sesión")
        }
    }
    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`} alt={el.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white'>
            <Link to={`/detail-movie/${el.id}`}>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center '>
                    {el?.title}
                </p>
            </Link>
                <p onClick={savedShow}>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300 ' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300 ' />}
                </p>
            </div>
        </div>
    )
}
