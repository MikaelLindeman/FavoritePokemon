import React, { useState, useEffect } from "react"
import Form from "./Form"
import Table from "./Table"
import { httpHelper } from "../helpers/httpHelper"
import SearchBar from "./Search"


const CrudPoke = () => {
	const [pokes, setPokes] = useState(null)
	//import helper earlier and executes it now
	const url = "http://localhost:5000/pokemons"
	const api = httpHelper()

	/** 
	 * Creates functions for each request the user wants to make
	 */
	useEffect(() => {
		getPokes()
	}, [])
	
	//Posts the pokemon
	const postPoke = poke => {
		api	
			.post(`${url}`, { body: poke })
			.then(res => getPokes())
			.catch(err => console.log(err))
	}

	//Updates the pokemon
	const updatePoke = (id, poke) => {
		api
			.put(`${url}/${id}`, { body: poke})
			.then(res => getPokes())
			.catch(err => console.log(err))
	}

	//Deletes the pokemon
	const deletePoke = id => {
		api	
			.del(`${url}/${id}`,{})
			.then(res => getPokes())
			.catch(err => console.log(err))
	}
	//Get all pokemons
	const getPokes = () => {
		api
			.get(`${url}?_expand=types`)
			.then(res => {
				setPokes(res)
			})
			.catch(err => console.log(err))
	}


	return (
		<>
		 <div className="about">
            <h2>Hello and welcome to Favorite Pokémon!</h2>
			<br/>
			<h4>This page was created with one thing in mind:
				to create a list of all your favorite Pokémon!
			<br/></h4>
      </div>
			<h1 className="center">Add a new Pokémon</h1>
			{/* The form of which you write your information */}
			<Form postPoke={postPoke} />

			<SearchBar 
			placeholder="Search"
			onChange={(e) => console.log(e.target.value)}/>
			<h3 className="center">All Pokémons</h3>
			{/* A table containing Pokémons, Update Pokémon and Delete Pokémon functions */}
			<Table 
					pokes={pokes}
					setPokes={setPokes}
					postPoke={postPoke}
					updatePoke={updatePoke}
					deletePoke={deletePoke}
					/>
		</>
	)
	}

export default CrudPoke