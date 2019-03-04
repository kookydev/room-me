import React, { Component } from 'react'
import './ChatBubble.css';

export class ChatBubble extends Component {
    state = {
        text: ''
    }

    // onSubmit = (e) => {
    //     e.preventDefault;
    //     this.setState({ text: ''})
    // }

    render() {
    return (
      <div style={bubbleStyle} className="Bubble">
        <p>{this.props.message}</p>
      </div>
    )
  }
}

const bubbleStyle = {
    background: "blue",
    font: "helvetica",
    borderRadius: "5px"
}

export default ChatBubble