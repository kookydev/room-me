import React from 'react';
import './MessageInfo.css';

let MessageInfo = (props) => {
    return (
      <div className="MessageInfo">
        <p><span className="AuthorName">{props.authorName}</span> <span className="MessageDate">{props.date}</span></p>
      </div>
    )
}

export default MessageInfo