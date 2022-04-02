import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from "services/movies-api"
import PageHeading from 'components/PageHeading/PageHeading';

export default function HomePage(){
    const [trendingMovies, setTrendingMovies] = useState([])


    useEffect(() => {
        api.fetchTrendingMovies().then(response => setTrendingMovies(response.results))
    }, [])

    return (
        <>
        <PageHeading text='Trending today'/>
        {trendingMovies && (
            <ul>
                {trendingMovies.map(movie => (<li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>))}
                
            </ul>
        )}
        </>
    )
}