import React, {useState} from 'react'
import DropTypes from './DropTypes'

/**
 * Create inputboxes to fill out name, level and type of pokemon
 * @param {*} param0 
 * @returns 
 */

//The information that's going to be displayed in the database
const Form = ({ userData = {}, postPoke, updatePoke }) => {
        const [poke, setPoke] = useState({
              name: userData.name ?? "",
              typesId: userData.typesId ?? "1",
              level: userData.level ?? "",
        })

        //Handles the value(name) of the input 
        const handleValue = e => {
          setPoke({ ...poke, [e.target.name]: e.target.value })
        }
        //Submit your Pokemon, if nothing is displayed in type it stops. 
        const submitPoke = e => {
            e.preventDefault()

            if(poke.typesId === "0") return

            if(userData.id) {
                  updatePoke(userData.id, poke)
            } else { 
                  postPoke(poke)
            }
        }
      
        
  return (
        <>
        {/* The Form to write your information inside */}

        {/* Type in Pokémons name */}
   <form onSubmit={submitPoke} className="row">
      <input 
            type='text'
            name='name'
            value={poke.name}
            placeholder='Pokemon'
            onChange={e => handleValue(e)}
      />
      {/* Type in Pokémons level */}
      <input 
            type='number'  
            name='level'
            value={poke.level}
            placeholder='level'
            className='level'
            max='100'
            onChange={e => handleValue(e)}
            
      />
      {/* Chose the Pokémons type from server list then SUBMIT the form to save into server */}
      <DropTypes typesId={poke.typesId} handleValue={handleValue} />
      <input 
            className='btn-submit'
            type='submit'
            value={`${!userData.id ? "Add new pokemon" : "Save pokemon"}`}
      /> 
   </form>
   <br />
  </>
  )
}


export default Form