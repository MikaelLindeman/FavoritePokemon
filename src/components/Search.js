import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DropTypes from './DropTypes'
import Form from './Form'


    const SearchBar = ({ onChange, placeholder }) => {
        return (
            <div className="search">
                <span className="SearchSpan">
                    <input 
                    className="SearchInput"
                    type="text"
                    onChange={onChange}
                    placeholder={placeholder}
                    />
                </span>
                
                
                {/* 
                THIS IS the working one
                <SearchBar
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
        className="searchBar"
       />
    <div>
		    {types.map((item) => 
		    <p {...item} key={item.name} />
		    )}
	  </div> */}
            </div>
        )
    
// const [APIData, setAPIData] = useState([])
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/types`)
    //         .then((response) => {
    //             setAPIData(response.data);
    //         })
    // }, [])
    // const url = "http://localhost:5000/types"
  return (
      <>
    <div>
        <form onSubmit="findType">
            {/* <input
            type="text"
            name="search"
            placeholder="Search a Type"
            onChange={(e) => setSearch(e.target.value)} 
            
            /> */}
            <input 
            className="btn-submit"
            type="submit"
            />
        </form>
    </div>
    </>
  )
        }

export default SearchBar