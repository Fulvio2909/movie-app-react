import { MovieType } from "../types/movieTypes";

export const getMovies = () => {
    const movieMock:MovieType[]  = [
        {
          idMovie: 1,
          titleMovie: 'Il Signore degli Anelli',
          descritption: 'Un film di Peter Jackson'
        },
        {
          idMovie: 2,
          titleMovie: 'Lo Hobbit',
          descritption: 'Un film di Peter Jackson'
        },
        {
          idMovie: 3,
          titleMovie: 'Harry Potter',
          descritption: 'Un film di David Yates'
        }   
      ]
    return movieMock;
} 