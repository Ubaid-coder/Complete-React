
// import CountriesData from '../Countriesdata.js'
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard.jsx'

function CountriesList({ query }) {

  const [CountriesData, setCountriesData] = useState([])
  const [count, setcount] = useState(0);


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then((data) => {
        setCountriesData(data)
      })

      const intervalId = setInterval(() => {
          console.log('Interval is running');
      }, [1000])
      
      return() => {
        console.log('CleanUP');
        clearInterval(intervalId);
      }
  }, [])

  useEffect(() => {
      console.log('changed')
  },[count, CountriesData])

  return (
    <>
    <h1>{count}</h1>
      <button onClick={(e) => setcount(count + 1)}>Increase Count</button>
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
