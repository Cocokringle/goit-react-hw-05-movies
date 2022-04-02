const BASE_URL = 'https://api.themoviedb.org/3'
const KEY = '8f3b565dfa705a44083795264ed307ec'

function fetchTrendingMovies () {

    return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`).then(response => {
        if (response.ok) {
          return response.json();
        }
    
        return Promise.reject(new Error(`Something went wrong :(`));
    });
}

function fetchMoviesDetails (movieId) {

    return fetch(`${BASE_URL}/movie/${movieId.moviesId}?api_key=${KEY}&language=en-US`).then(response => {
        if (response.ok) {
          return response.json();
        }
    
        return Promise.reject(new Error(`Something went wrong :(`));
    });
}

function fetchSearchMovie (searchQuery) {

    return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`).then(response => {
        if (response.ok) {
          return response.json();
        }
    
        return Promise.reject(new Error(`Something went wrong :(`));
    });
}

function fetchMovieCast (movieId) {

    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`).then(response => {
        if (response.ok) {
          return response.json();
        }
    
        return Promise.reject(new Error(`Something went wrong :(`));
    });
}

// function fetchMovieReviews (movieId) {

//     return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`).then(response => {
//         if (response.ok) {
//           return response.json();
//         }
    
//         return Promise.reject(new Error(`Something went wrong :(`));
//     });
// }

const api = {
    fetchTrendingMovies,
    fetchMoviesDetails,
    fetchSearchMovie,
    fetchMovieCast,
};
  
export default api;