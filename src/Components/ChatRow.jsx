import React from 'react';
import Avatar from "./Avatar.jsx";
import ChatBubble from "./ChatBubble.jsx";
import MessageInfo from "./MessageInfo.jsx";
import './ChatRow.css';

let ChatRow = (props) => {
    return (
      <div className={props.authorName==="Cat" ? "chatRow ownChatRow" : "chatRow"}>
        <Avatar avatarUrl={props.avatarUrl} authorName={props.authorName}/>
        <MessageInfo authorName={props.authorName} date={props.date}/>
        <ChatBubble message={props.message}/>
      </div>
    );
}

export default ChatRow;