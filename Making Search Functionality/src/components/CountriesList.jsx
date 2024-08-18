import { useState } from 'react'
import CountriesData from '../Countriesdata.js'
import CountryCard from './CountryCard.jsx'

function CountriesList({query}) {

  
  

  return (
    <>
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
    </>
  )
}

export default CountriesList
