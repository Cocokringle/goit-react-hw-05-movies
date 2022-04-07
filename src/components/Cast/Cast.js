import api from 'services/movies-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css'

export default function Cast (){
    const { moviesId } = useParams();
    const [cast, setCast] = useState();

    useEffect(() => {
        api.fetchMovieCast(moviesId).then(data => setCast(data.cast))
    }, [moviesId])



    return (
        <>
        {cast && (
                <ul>
                {cast.map(actor => (
                    <li key={actor.id} className={s.item}> 
                        <img className={s.photo} src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} alt={actor.name} />
                        <h3>{actor.name}</h3>
                        <h4>Character: {actor.character}</h4>
                    </li>
                ))}
            </ul>
        )}
        
        </>

    )
}