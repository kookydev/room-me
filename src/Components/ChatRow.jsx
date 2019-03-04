import React from 'react';
import Avatar from "./Avatar.jsx";
import ChatBubble from "./ChatBubble.jsx";
import './ChatRow.css';

let ChatRow = (props) => {
    return (
      <div className="chatRow" avatarUrl={props.avatarUrl} message={props.message}>
        <Avatar avatarUrl={props.avatarUrl}/>
        <ChatBubble message={props.message}/>
      </div>
    );
}

export default ChatRow;