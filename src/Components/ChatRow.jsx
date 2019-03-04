import React, { Component } from 'react';
import "./Avatar";
import "./ChatBubble";
import '../../App.css';
import './ChatRow.css';

let AvatarAndBubble = (props) => {
    return (
      <div className="AvatarAndBubble" avatarUrl={props.avatarUrl} message={props.message}>
        <Avatar avatarUrl={this.avatarUrl}/>
        <ChatBubble message={this.message}/>
      </div>
    );
}

export default AvatarAndBubble;