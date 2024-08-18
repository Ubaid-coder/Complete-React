import {useState} from 'react'
import SearchBar from "./SearchBar"
import SearchFilter from "./SearchFilter"
import CountriesList from './CountriesList.jsx'

export default function Home() {

    
   const [query, setquery] = useState('');
    
    
    return (
        <>
            <main>
                <div className="search-filter-container">
                    <SearchBar query={setquery} />
                    <SearchFilter />
                </div>

                <CountriesList query={query} />

            </main>
        </>
    )
}
