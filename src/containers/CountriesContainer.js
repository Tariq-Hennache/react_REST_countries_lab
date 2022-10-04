import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    

    const fetchCountries = async () => {
        const allCountriesNames = []

        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        for(let i = 0; i<= 249; i++){
            allCountriesNames.push(jsonData[i].name.common)
        }
        setCountries(allCountriesNames)

    }

    /// the allcountriesnames could be wrong here
    /// look at this again

    const addVisitedCountry = (allCountriesNames) => {
        const updateVisitedCountry = [...visitedCountries, allCountriesNames];
        setVisitedCountries(updateVisitedCountry)
        console.log(updateVisitedCountry)
    }

   

    useEffect(() => {
        fetchCountries();
    }, [])

    /// look at this again


    return(
        <>
            <h1>I'm a country container!</h1>
            <CountriesList allCountriesNames={countries} onClick={addVisitedCountry}/>
            <VisitedCountriesList visitedCountries={visitedCountries}/>
        </>
    );
}

export default CountriesContainer;