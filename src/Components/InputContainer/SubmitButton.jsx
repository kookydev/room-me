import React from 'react'

let SubmitButton = (props) => {
    return (
      <div className="grid-col2">
        <button className="submit-btn" onClick={props.sendMessage}>SEND</button>
      </div>
    )
}

export default SubmitButton