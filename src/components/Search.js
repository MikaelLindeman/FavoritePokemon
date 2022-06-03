import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DropTypes from './DropTypes'
import Form from './Form'

/**
 * Function to create a SearchBar 
 */
    const SearchBar = ({ onChange, placeholder }) => {
        return (
            <>
            <form className=''>
                <h2>Search a Pokémon</h2>
            <div className="search">
                <span className="SearchSpan">
                    <input 
                    className="SearchInput"
                    type="text"
                    onChange={onChange}
                    placeholder={placeholder}
                    />
                    </span>
                <input 
                className="btn-submit"
                type="submit"
            />
            </div>
            </form>
            </>
        )
 }

export default SearchBar