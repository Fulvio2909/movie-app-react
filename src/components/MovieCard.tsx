import { MovieType } from "../types/movieTypes";

type MovieCardProps = {
    movie: MovieType;
};

/*
* Questo componente rappresenta una card di un film
* @param {MovieCardProps} props - Le props del componente
* 
* @returns {JSX.Element} - Il componente React che rappresenta la card di un film
*/

export const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <>
            <div style={{ backgroundColor: 'red', borderRadius: '3rem', padding: '10px', margin: '30px' }}>
            <h1>{movie.title}</h1>
            </div>
        </>
    );
}
