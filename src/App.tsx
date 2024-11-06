import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes'

function App() {
  const movieMock:MovieType[]  = [
    {
      idMovie: 1,
      titleMovie: 'Il Signore degli Anelli'
    },
    {
      idMovie: 2,
      titleMovie: 'Lo Hobbit'
    },
    {
      idMovie: 3,
      titleMovie: 'Harry Potter'
    }
  ]
  return (
    <>
      <h1>Questo è il componente React che rappresenta l'intera applicazione</h1>      {
        movieMock.map((movie) => {
          return <MovieCard idMovie={movie.idMovie} titleMovie={movie.titleMovie} />
        })
      }
    </>
  )
}

export default App
