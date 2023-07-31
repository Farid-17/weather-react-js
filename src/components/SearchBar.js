import React from 'react'
import { CONST } from '../helpers/general'

export default function SearchBar({ action, setPlaceName }) {
    const input = {
        color: CONST.lightColor,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: 'none',
    }

    const doAction = (event) => {
        if (event.key === 'Enter') {
            action();
        }
    }

    return (
        <div className='w-100'>
            <input type="text" id='search-bar' className='form-control' placeholder='Search. Ex: New york, tokyo, ...' style={input} onChange={e => setPlaceName(e.target.value)} onKeyPress={doAction} />
        </div>
    )
}
