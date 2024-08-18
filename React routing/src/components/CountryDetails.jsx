import { useState, useEffect } from "react";
import Shimmer from './Shimmer.jsx'
import './countryDetails.css'
import { useParams } from "react-router-dom";


function CountryDetails() {

    const [countryDetails, setcountryDetails] = useState(null);
    const [notFound, setnotFound] = useState(false);


    const params = useParams();
    const countryName = params.country;
    
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then(response => response.json())
            .then(([data]) => {
                setcountryDetails({
                    flag: data.flags.png,
                    name: data.name.common,
                    nativeName: data.name.official,
                    population: data.population.toLocaleString(),
                    region: data.region,
                    subregion: data.subregion,
                    capital: data.capital.join(', '),
                    topLevelDomain: data.tld,
                    currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
                    languages: Object.values(data.languages).join(', '),
                    borders: data.borders === undefined ? 'No border' : data.borders.join(', ')
                });
            })
            .catch(error => setnotFound(true));
    }, [])

    if(notFound) {
        return <div className="not-found">Country not found</div>
    }
    
    return (
        countryDetails === null ? <Shimmer /> : (
            <main>
                <div className="country-details-container">
                    <span className="back-button" onClick={() => history.back()}>
                        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                    </span>
                    <div className="country-details">
                        <img src={countryDetails.flag} alt={countryDetails.name} />
                        <div className="details-text-container">
                            <h1>{countryDetails.name} </h1>
                            <div className="details-text">
                                <p><b>Native Name: {countryDetails.nativeName} </b><span className="native-name"></span></p>
                                <p><b>Population: {countryDetails.population} </b><span className="population"></span></p>
                                <p><b>Region: {countryDetails.region} </b><span className="region"></span></p>
                                <p><b>Sub Region: {countryDetails.subregion} </b><span className="sub-region"></span></p>
                                <p><b>Capital: {countryDetails.capital}  </b><span className="capital"></span></p>
                                <p>
                                    <b>Top Level Domain: {countryDetails.topLevelDomain} </b><span className="top-level-domain"></span>
                                </p>
                                <p><b>Currencies: {countryDetails.currencies} </b><span className="currencies"></span></p>
                                <p><b>Languages: {countryDetails.languages} </b><span className="languages"></span></p>
                            </div>
                            <div className="border-countries"><b>Border Countries: {countryDetails.borders} </b>&nbsp;</div>
                        </div>
                    </div>
                </div>
            </main>
        )
    )
}

export default CountryDetails
