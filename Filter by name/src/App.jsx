import './App.css'
import {useState} from 'react'
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchFilter from "./components/SearchFilter"
import CountriesList from './components/CountriesList.jsx'

function App() {

   const [query, setquery] = useState('');
    
    return (
        <>
            <Header />
            <main>
                <div className="search-filter-container">
                    <SearchBar query={setquery}/>
                    <SearchFilter />
                </div>
                
                {query === 'unmount'? 'Nothing':  <CountriesList query={query}/>}

            </main>
        </>
    )
}

export default App
