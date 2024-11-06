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
            <h1>{movie.id}</h1>
            </div>
        </>
    );
}
