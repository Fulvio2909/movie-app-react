type MovieCardProps = {
    idMovie: number;
    titleMovie: string;
};

/*
* Questo componente rappresenta una card di un film
* @param {MovieCardProps} props - Le props del componente
* 
* @returns {JSX.Element} - Il componente React che rappresenta una card di un film
*/

export const MovieCard = (props:MovieCardProps) => {

    return (
        <>
        <h1>{props.titleMovie}</h1>
        <p>{props.idMovie}</p>
        </>
    );

}
