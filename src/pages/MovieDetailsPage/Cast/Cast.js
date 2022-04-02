
import { useParams } from 'react-router-dom';

export default function Cast (movies){
    const { movieId } = useParams();
    const movie = movies.find(actor => actor.id === Number(movieId))

    return (
        <>
        {movie && (
                <ul>
                {movie.map(actor => (
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