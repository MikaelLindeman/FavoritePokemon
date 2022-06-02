import React, { useEffect, useState } from 'react'
import { httpHelper } from '../helpers/httpHelper'
import SearchBar from './Search'
import Table from './Table'


const DropTypes = ({ typesId, handleValue }) => {
  const [types, setTypes] = useState(null)
  const [type, setType] = useState(typesId)

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