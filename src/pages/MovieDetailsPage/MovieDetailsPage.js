import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Link, Route, Routes} from 'react-router-dom';
import api from "services/movies-api"
import PageHeading from "components/PageHeading/PageHeading"
import s from "./MovieDetailsPage.module.css"


const Cast = lazy(() => import('./Cast/Cast' /*webpackChunkName: "cast" */))
const Reviews = lazy(() => import('./Reviews/Reviews' /*webpackChunkName: "reviews" */))

export default function MovieDetailsPage(){
    const [movies, setMovies] = useState()
    const movieId = useParams()
    // const location = useLocation()

    useEffect(() => {
        api.fetchMoviesDetails(movieId).then(response => setMovies(response))
    }, [movieId])

    return (
        <>
        {movies && (
        <>
        <PageHeading text={movies.title}/>
        <div className={s.box}>
        <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} />
        <div className={s.description}>
            <h2>{movies.title}</h2>
              <p>User Score: {movies.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movies.overview}</p>
              <h4>Genres</h4>
              <p>{movies.genres.map(genre => genre.name + ' ')}</p>
        </div>
        </div>
        <div className={s.additional}>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link
                  to={`/movies/${movieId.moviesId}/cast`}
                >
                  Cast
                </Link>
              </li>

              <li>
                <Link
                  to={`/movies/${movieId.moviesId}/reviews`}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        
        <Suspense fallback={<h1>тут должен быть лоадер</h1>}>
            <Routes>
                <Route path='/movies/:moviesId' element={<Cast/>} />
                <Route path='/reviews' element={<Reviews/>} movies={movies}/>
            </Routes>
        </Suspense>
        

        </>
        )}
 
        </>

    )
}