import { PersonType } from "../types/personTypes";

type MovieCardProps = {
    person: PersonType;
};

/*
* Questo componente rappresenta una card di un attore
* @param {MovieCardProps} props - Le props del componente
* 
* @returns {JSX.Element} - Il componente React che rappresenta la card di un film
*/

export const PeopleCard = ({ person }: MovieCardProps) => {
    return (
        <>
            <div style={{ backgroundColor: 'yellow', borderRadius: '3rem', padding: '10px', margin: '30px', color:'black' }}>
            <h1>{person.name}</h1>
            </div>
        </>
    );
}
