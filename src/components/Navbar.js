import React from 'react'
import favpoke from '../images/favpoke.png' 

/**
 * Simple Navbar/header for the website
 * @returns The picture favpoke and colors. More info on styling found at App.css
 */
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