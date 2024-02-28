import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Search = ({search, setSearch, className}) => {
    return (
        <form className={`${className}`}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-neutral-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FaMagnifyingGlass className='text-neutral-500'/>
                </div>
                <input 
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                    id="default-search" 
                    className="block w-full p-4 ps-10 text-xs text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50" 
                    placeholder="Search..." 
                />
                
            </div>
        </form>

    )
}

export default Search