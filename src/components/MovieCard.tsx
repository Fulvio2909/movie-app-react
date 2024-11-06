import { useState } from "react";
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

    const [clickCount, setClickCount] = useState(0);

    const handleClick = (message: string) => {
        console.log(`Hai cliccato su ${message}`);
    }

    const handleClickCount = () => {
        setClickCount(clickCount + 1);
        console.log(`Hai cliccato ${clickCount} volte`);
    }

    return (
        <>
            <div style={{ backgroundColor: 'grey', borderRadius: '3rem', padding: '10px', margin: '30px' }} onClick={handleClickCount}>
                <p>{movie.idMovie}</p>
                {
                    /*
                    * Se la funzione di handleClick ha dei parametri, usare una arrow function per passare i parametri
                    */
                }
                <h1 onClick={() => handleClick(movie.titleMovie)}>{movie.titleMovie}</h1>
                <h2 onClick={() => handleClick(movie.descritption)}>{movie.descritption}</h2 >
                <p>Numero di click: {clickCount}</p>
            </div>
        </>
    );
}
