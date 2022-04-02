import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movies-api';


export default function Cast (){
    const { movieId } = useParams();
    const [cast, setCast] = useState([])

    useEffect(() => {
        api.fetchMovieCast(movieId).then(({cast}) => setCast([...cast]))
    }, [movieId])


    return (
        <>
        {cast && (
                <ul>
                {cast.map(actor => (
                    <li key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} alt={actor.name} />
                        <h3>{actor.name}</h3>
                        <h4>Character: {actor.character}</h4>
                    </li>
                ))}
            </ul>
        )}
        
        </>

    )
}