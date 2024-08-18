import './Shimmer.css'

function CountryListShimmer() {

    // new Array(10).fill(1)

    const mapped = Array.from({length: 100}).map((element, index) => {
        return <div key={index} className='country-card shimmer-card'></div>
    })

    
     
    
  return (
    <div className="countries-container">
        {mapped}
    </div>
  )
}

export default CountryListShimmer
