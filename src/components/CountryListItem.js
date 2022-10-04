import { useState } from "react";

const CountryListItem = ({countryName, onClick}) => {

    const [visited, setVisited] = useState(false)

    const handleClick = () => {
        const name = countryName
        onClick(name)
        setVisited(true)
    }

    const visitedCountry = () => {
        const newVisitList = []
        if( setVisited === true){
            newVisitList.push(countryName)
        }
    }


    
    return (
        visited ? <li style={{textDecoration: "line-through"}}>{countryName}</li> :
        <li>
            {countryName} <button onClick = {handleClick}>Visited Country</button>
        </li>
    );
}

export default CountryListItem;