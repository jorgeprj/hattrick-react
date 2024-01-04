import React from 'react'
import './Search.css'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Search = ({search, setSearch}) => {
    return (
        <div className='search'>
        <FaMagnifyingGlass/>
        <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={'Search player...'}
            className='search-input'
        />
    </div>
    )
}

export default Search