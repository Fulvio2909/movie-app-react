import { TvType } from "../types/tvTypes";

type MovieCardProps = {
    tv: TvType;
};

/*
* Questo componente rappresenta una card di una serie TV
* @param {MovieCardProps} props - Le props del componente
* 
* @returns {JSX.Element} - Il componente React che rappresenta la card di un film
*/

export const TvCard = ({ tv }: MovieCardProps) => {
    return (
        <>
            <div style={{ backgroundColor: 'lightblue', borderRadius: '3rem', padding: '10px', margin: '30px', color:'black' }}>
            <h1>{tv.name}</h1>
            </div>
        </>
    );
}
