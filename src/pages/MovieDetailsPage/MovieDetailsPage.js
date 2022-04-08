import { useState, useEffect } from 'react';
import { useParams, Link,  Outlet, useLocation, useNavigate} from 'react-router-dom';
import api from "services/movies-api"
import PageHeading from "components/PageHeading/PageHeading"
import s from "./MovieDetailsPage.module.css"
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';




export default function MovieDetailsPage(){
    const [movies, setMovies] = useState()
    const moviesId = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        api.fetchMoviesDetails(moviesId).then(response => setMovies(response))
    }, [moviesId])

    const GoBack = () => {
      navigate(
        location.state?.from?.pathname
          ? `${location.state?.from?.pathname}${location.state?.from?.search}`
          : '/',
      );
    };

    return (
        <>
        {!movies && <Loader timeout={3000}/>}
        {movies &&(
        <>
        <PageHeading text={movies.title}/>
        <Button type={'button'} children={location?.state?.label ?? 'Go Back'} onClick={GoBack}/>
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
                  to={`/movies/${moviesId.moviesId}/cast`}
                  state={{
                    from: location
                  }}
                >
                  Cast
                </Link>
                
              </li>

              <li>
                <Link
                  to={`/movies/${moviesId.moviesId}/reviews `}
                  state={{
                    from: location
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet/>
          </div>
        

        </>
        )}
  
        
        </>

    )
}