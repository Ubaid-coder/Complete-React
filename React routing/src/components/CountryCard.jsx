import { Link } from "react-router-dom"


function CountryCard({Image, CountryName,commonName, Population, Region, Capital}) {
    return (
        <>
            <Link className="country-card" to={`/${CountryName}`}>
                <img src= {Image} alt={commonName}  />
                    <div className="card-text">
                        <h3 className="card-title">{CountryName}</h3>
                        <p><b>Population: </b>{Population.toLocaleString()}</p>
                        <p><b>Region: </b>{Region}</p>
                        <p><b>Capital: </b>{Capital ? Capital :'!No-Capital'}</p>
                    </div>
            </Link>
        </>
    )
}

export default CountryCard
