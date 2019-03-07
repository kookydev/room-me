import React from 'react'

let SubmitButton = (props) => {
    return (
      <div className="grid-col2">
        <button className="submit-btn" onClick={()=>props.sendMessage("This is a test message.")}>SEND</button>
      </div>
    )
}

export default SubmitButton