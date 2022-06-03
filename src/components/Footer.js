import React from 'react'
/**
 * Simple footer
 * @returns Displays the footer on the page with the text and red/black colors on the page.
 * see footerTop and footer in app.css for more info on styling
 */
function Footer() {
  return (
      <>
     <h2 className="endText">
       TIP:
       You can always update or delete a Pokémon from the list <br/>
       Just press the Update or Delete button! <br/>
       <br/>
       Mikael Kalaja Lindeman FE21 <br/>
       Made with React, Json-server and love©.
     </h2>
    <div className="footerTop">
    </div>
    <div className="footer">
     
    </div>
    </>
  )
}

export default Footer