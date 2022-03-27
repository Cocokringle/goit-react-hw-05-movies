
import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import Appbar from './AppBar/AppBar';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <Container>
      <Appbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        </Route>

        <Route path="/movies" element={<MoviesPage/>}> 
        </Route>
        
        <Route element={<NotFoundPage/>}>
        </Route>
      </Routes>
    </Container>
  )
};
