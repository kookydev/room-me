import React, { Component } from 'react';
import AvatarAndBubble from "./components/Peertopeer/AvatarAndBubble";
import App from "../App";
import '../App.css';
import './ChatContainer.css';

let ChatContainer = (props) => {
    state = {
      messages: [
        {
            avatarUrl: "",
            message:"Hello world!",
            key:101,
        },
        {
            avatarUrl:"",
            message:"Bonjour le monde!",
            key:102,
        },
        {
            avatarUrl:"",
            message:"Salvete omnes!",
            key:103,
        }
      ]
    }
    return (
      <div className="chatContainer" messages={this.state.messages}>
        <AvatarAndBubble avatarUrl={props.messages[0].avatarUrl} message={props.messages[0].message}/>
        <AvatarAndBubble avatarUrl={props.messages[1].avatarUrl} message={props.messages[1].message}/>
        <AvatarAndBubble avatarUrl={props.messages[2].avatarUrl} message={props.messages[2].message}/>
      </div>
    );
}

export default ChatContainer;