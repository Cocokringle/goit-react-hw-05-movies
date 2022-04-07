import {lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import Appbar from './AppBar/AppBar';
import Loader from './Loader/Loader';

const HomePage = lazy(()=> import('pages/HomePage/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page"*/))
const MoviesDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */))
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "notFound-page"*/))
const Cast = lazy(() => import('components/Cast/Cast' /*webpackChunkName: "cast" */))
const Reviews = lazy(() => import('components/Reviews/Reviews' /*webpackChunkName: "reviews" */))

export const App = () => {
  return (
    <Container>
      <Appbar/>
      <Suspense fallback={<Loader timeout={3000}/>}>
      <Routes>
        <Route index path="/" element={<HomePage/>}/>

        <Route path="/movies" element={<MoviesPage/>}/> 
        
        <Route path="/movies/:moviesId" element={<MoviesDetailsPage/>}>         
                <Route path='cast' element={<Cast/>} />
                <Route path='reviews' element={<Reviews/>}/>
        </Route>

        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </Suspense>

    </Container>
  )
};
