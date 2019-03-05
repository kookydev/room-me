import React, { Component } from 'react';
import './ChatBubble.css';

export class ChatBubble extends Component {
    render() {
    return (
      <div className="Bubble">
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default ChatBubble