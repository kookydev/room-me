import React from 'react'

let Input = (props) => {
    return ( 
      <div className="message-container"> 
        <textarea rows="1" cols="50" className="message-bar" type="text" placeholder="Message..."/>
      </div>
    )
}

export default Input