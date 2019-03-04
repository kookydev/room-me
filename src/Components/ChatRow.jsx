import React from 'react';
import Avatar from "./Avatar.jsx";
import ChatBubble from "./ChatBubble.jsx";
import './ChatRow.css';

let ChatRow = (props) => {
    return (
      <div className="chatRow">
        <Avatar avatarUrl={props.avatarUrl} authorName={props.authorName}/>
        <ChatBubble message={props.message}/>
      </div>
    );
}

export default ChatRow;