import React from 'react';
import './MessageInfo.css';

let MessageInfo = (props) => {
    return (
      <div className="message-info">
        <p><span className="author-name">{props.authorName}</span> <span className="message-date">{props.date}</span></p>
      </div>
    )
}

export default MessageInfo