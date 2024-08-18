import './App.css'
import {useState} from 'react'
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchFilter from "./components/SearchFilter"
import CountriesList from './components/CountriesList.jsx'

function App() {

    
    return (
        <>
            <Header />
            <main>
                <div className="search-filter-container">
                    <SearchBar />
                    <SearchFilter />
                </div>
                <CountriesList />
            </main>
        </>
    )
}

export default App
