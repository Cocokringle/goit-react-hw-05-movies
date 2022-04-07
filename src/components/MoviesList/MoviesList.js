import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from 'services/movies-api';

export default function MoviesList({search}) {
    const [movies, setMovies] = useState()
    const location = useLocation()
    useEffect(() => {
        if(!search){
            return;
        }

        api.fetchSearchMovie(search).then(data => setMovies(data.results))
    }, [search])

    return (
        <>
        {movies && (
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                         <Link to={`${movie.id}`} state={{ from: location, label: 'Go to Search' }}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        )}
        </>
    )
}