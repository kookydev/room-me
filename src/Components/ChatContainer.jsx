import React, { Component } from 'react';
import AvatarAndBubble from "./components/Peertopeer/AvatarAndBubble";
import App from "../App";
import './App.css';
import './ChatContainer.css';

let ChatWindow = (props) => {
    return (
      <div className="chatWindow" messages={props.messages}>
        <AvatarAndBubble avatarUrl={props.messages[0].avatarUrl} message={props.messages[0].message}/>
        <AvatarAndBubble avatarUrl={props.messages[1].avatarUrl} message={props.messages[1].message}/>
        <AvatarAndBubble avatarUrl={props.messages[2].avatarUrl} message={props.messages[2].message}/>
      </div>
    );
}

export default ChatWindow;