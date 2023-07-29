import React from 'react'

export default function SearchBar({ }) {
    return (
        <div className='w-100'>
            <input type="text" id='search-bar' className='form-control' placeholder='Search. Ex: New york, tokyo, ...' />
        </div>
    )
}
