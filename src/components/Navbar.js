import React from 'react'
import favpoke from '../images/favpoke.png' 

function Navbar() {

  return (
    <div>
        <div className="topper">
            <img 
            src={favpoke} 
            className="favpoke" 
            alt='Logo' />
        </div>    
        <div className="botter">
        </div>  
    </div>
  )
}

export default Navbar