import './App.css'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'

function App() {
  const movieMock = getMovies()
  return (
    <>
     {
        movieMock.map((movie) => {
          return <MovieCard key={movie.idMovie} movie = {movie} />
        })
      }
    </>
  )
}

export default App
