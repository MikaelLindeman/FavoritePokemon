import React, { useEffect, useState } from 'react'
import { httpHelper } from '../helpers/httpHelper'

/**
 * Creating a drop-down list of items fetched from 'url' 
 * @param {*} param0 
 * @returns the list of all Pokémon types inside the server
 */

const DropTypes = ({ typesId, handleValue }) => {
  const [types, setTypes] = useState(null)
  const [type, setType] = useState(typesId)

  //Fetch the server and the httpHelper to help display everything
  const url = "http://localhost:5000/types"
	const api = httpHelper()


  useEffect(() => {
    api 
          .get(url)
          .then(res => {
                  setTypes([{ id: 0, name:"Select a type"}, ...res])
          })
          .catch(err => console.log(err))
  }, [])

  if (!types) return null

  return (
    <>
    <select
          name="typesId"
          value={type}
          onChange={e => {
                  setType(e.target.value)
                  handleValue(e)
          }}
        >
          {/* Map through all pokemon types to display the "type" attribute from the server */}
          {types.map(c => (
            <option value={c.id} key={c.id}>
                          {c.type}
            </option>
          ))}

    </select> 

   
    </>
  )
}
export default DropTypes