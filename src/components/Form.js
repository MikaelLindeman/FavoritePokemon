import React, {useState} from 'react'
import DropTypes from './DropTypes'
import Search from './Search'


const Form = ({ userData = {}, postPoke, updatePoke }) => {
        const [poke, setPoke] = useState({
              name: userData.name ?? "",
              typesId: userData.typesId ?? "1",
              level: userData.level ?? "",
        })

        const handleValue = e => {
          setPoke({ ...poke, [e.target.name]: e.target.value })
        }
        //Submit your Pokemon, 
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
        
   <form onSubmit={submitPoke} className="row">
      <input 
            type='text'
            name='name'
            value={poke.name}
            placeholder='Pokemon'
            onChange={e => handleValue(e)}
      />
      <input 
            type='number'  
            name='level'
            value={poke.level}
            placeholder='level'
            className='level'
            max='100'
            onChange={e => handleValue(e)}
            
      />
      <DropTypes typesId={poke.typesId} handleValue={handleValue} />
      <input 
            className='btn-submit'
            type='submit'
            value={`${!userData.id ? "Add new pokemon" : "Save pokemon"}`}
      />
      
   </form>
   <br />
   {/* <h1 className="center">Search a Pokémon</h1>
   <Search /> */}
  </>
  )
}


export default Form