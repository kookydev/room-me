import React from 'react';
import './ChatBubble.css';

let ChatBubble = (props) => {
    return (
      <div className="chat-bubble">
        <p>{props.message}</p>
      </div>
    )
}

export default ChatBubble