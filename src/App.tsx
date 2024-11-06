import './App.css'
// import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'
import { MovieType } from './types/movieTypes'

function App() {
  let movies: MovieType[] = [];
  
const movieMock = async () => {
  movies = await getMovies();
}

movieMock();

  return (
    <>
     {
        // movies.map((movie) => {
        //   return <MovieCard key={movie.idMovie} movie = {movie} />
        // })
        console.log(movies)
      }
    </>
  )
}

export default App
