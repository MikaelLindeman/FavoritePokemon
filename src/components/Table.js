import React, { useState } from 'react'
import DropTypes from './DropTypes'
import Form from './Form'
import Search from './Search'

/**
 * Displays the Name, Type and Level from the Pokémons. 
 * The Type is fetched from another table (Foregin Key, required for this work)
 * @param {*} param0 
 * @returns The Name Type and Level from the database. 
 */

//Function to Hide the "update list" unless pressing the Update button. 
const Table = ({ pokes, postPoke, updatePoke, deletePoke }) => {
    const showUpdatePoke = id => {
        const form = document.getElementsByClassName(`show-form-${id}`)
        form[0].classList.toggle("hide-form")
    }

// The Row with all the information from the database, name type and level. 
    const Row = ({ poke }) => {
        return ( 
            <>
                    {/* Displays the Name, Type and Level.  */}
                    <div className="row">
                        <div>{poke.name}</div>
                        <div>{poke.types.type}</div>
                        <div>{poke.level}</div>
                        <div className="buttons">
                            {/* Update and Delete button, if pressing the button the
                            corresponding function happens */}
                            <button onClick={() => showUpdatePoke(poke.id)}>Update</button>
                            <button onClick={() => deletePoke(poke.id)}>Delete</button>
                        </div>
                    </div>
                    <div className={`hide-form show-form-${poke.id}`}>
                        <Form userData={poke} postPoke={postPoke} updatePoke={updatePoke} />
                    </div>
            </>
        )
    }



  return (
    <>
  {/* The black bar above the table with the text inside*/}
    <div className="table">
        <div className="titles">
            <div>Pokemon</div>
            <div>Type</div>
            <div>Level</div>
        </div>
        {/* Displays the pokemon Type from the 2nd database */}
        <div className='rows'>
            {pokes && pokes.map(u => <Row poke={u} key={u.id} />)}
        </div>
    </div>
    </>
  )
}

export default Table