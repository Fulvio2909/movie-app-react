import './App.css'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'
import { MovieType } from './types/movieTypes'
import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState<MovieType[]>([])

  //useEffect(parFunzione, parArrayDipendenze)
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies()
      setMovies(movies)
    }
    fetchMovies()
  }, [])

  return (
    <>
      {
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })
      }
    </>
  )
}

export default App
