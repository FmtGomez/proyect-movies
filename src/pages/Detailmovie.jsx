import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import { key } from '../Requests'

export const Detailmovie = () => {

    const [movies, setMovies] = useState([]);
    const params = useParams();


    useEffect(() => {
        if (params.id) {

            axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`)
                .then(response => {
                    setMovies(response.data)

                })
        }
    }, [params.id]);

    return (
        <>
            <div className='w-full text-white'>
                <img
                    className='w-full h-[400px] object-cover '
                    src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
                    alt="/"
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[500px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold '>{movies.title}</h1>
                </div>
                <div w-full h-full text-white >
                    <p className=' my-40 p-4 text-2xl text-white  '>{movies.overview}</p>

                </div>
            </div>
        </>
    )
}
