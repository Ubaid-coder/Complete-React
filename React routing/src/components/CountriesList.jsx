
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard.jsx'
import Shimmer from './Shimmer.jsx'

function CountriesList({ query }) {

  const [CountriesData, setCountriesData] = useState([])
  // console.log(CountriesData.length)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then((data) => {
        setCountriesData(data)
      })
  }, [])



  return (
    CountriesData.length === 0 ? <Shimmer /> : (
      <div className="countries-container">
        {CountriesData.filter((country) => country.name.common.toLowerCase().includes(query)
        ).map((data, Index) => {
          return (
            <CountryCard
              key={data.name.common}
              Image={data.flags.png}
              CountryName={data.name.common}
              commonName={data.name.common}
              Population={data.population}
              Region={data.region}
              Capital={data.capital}
            />
          )
        })
        }</div>
    )



  )
}

export default CountriesList
