import React, { useState } from 'react'
import DropTypes from './DropTypes'
import Form from './Form'
import Search from './Search'

const Table = ({ pokes, postPoke, updatePoke, deletePoke }) => {
    const showUpdatePoke = id => {
        const form = document.getElementsByClassName(`show-form-${id}`)
        form[0].classList.toggle("hide-form")
    }

// const TypeChange = [change, setChange] = useState([])


    const Row = ({ poke }) => {
        return ( 
            <>
            
                    <div className="row">
                        <div>{poke.name}</div>
                        <div>{poke.types.type}</div>
                        <div>{poke.level}</div>
                        <div className="buttons">
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
  
    <div className="table">
        <div className="titles">
            <div>Pokemon</div>
            <div>Type</div>
            <div>Level</div>
        </div>
        <div className='rows'>
            {pokes && pokes.map(u => <Row poke={u} key={u.id} />)}
        </div>
    </div>
    </>
  )
}

export default Table