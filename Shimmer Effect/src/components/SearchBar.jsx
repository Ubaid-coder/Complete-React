

function SearchBar({query}) {
    
    return (
        <>
            <div className="search-container">
                <i className="fa-solid fa-magnifying-glass" />
                <input  type="text" placeholder="Search for a country..." onChange={(e) => query(e.target.value.toLowerCase())} />
            </div>

        </>
    )
}

export default SearchBar
