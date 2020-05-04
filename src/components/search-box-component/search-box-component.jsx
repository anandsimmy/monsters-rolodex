import React from 'react'
import './styles.css'

export const SearchBoxComponent= ({ placeholder, handleChangeFunction }) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChangeFunction} 
    />
)