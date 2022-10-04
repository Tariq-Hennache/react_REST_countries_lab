import CountryListItem from "./CountryListItem";

const CountriesList = ({allCountriesNames, onClick}) => {
    return(
        <>
            <h2>CountriesList here!</h2>
            <ul>
                {allCountriesNames.map((countryName) => {
                    return(<CountryListItem countryName={countryName} onClick={onClick}/>)
                })}
            </ul>
            
        </>
    );
}

export default CountriesList;