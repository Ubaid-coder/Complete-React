import { useState } from 'react'
import CountriesData from '../Countriesdata.js'
import CountryCard from './CountryCard.jsx'

function CountriesList() {

  
  

  return (
    <>
      <div className="countries-container">
        {CountriesData.map((data, Index) => {
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
