import {lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import Appbar from './AppBar/AppBar';

const HomePage = lazy(()=> import('pages/HomePage/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page"*/))
const MoviesDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */))
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "notFound-page"*/))


export const App = () => {
  return (
    <Container>
      <Appbar/>
      <Suspense fallback={<h1>тут должен быть лоадер</h1>}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/movies" element={<MoviesPage/>}/> 
        
        <Route path="/movies/:moviesId/*" element={<MoviesDetailsPage/>}/>

        <Route element={<NotFoundPage/>}/>
      </Routes>
      </Suspense>

    </Container>
  )
};
