import React from 'react';
import ChatRow from "./ChatRow.jsx";
import './ChatContainer.css';

class ChatContainer extends React.Component {
    state = {
      messages: [
        {
            avatarUrl: "https://farm2.staticflickr.com/1142/1139134023_c497d6b907_z.jpg",
            authorName:"Dog",
            message:"Woof!",
            key:101,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            message:"Miaow, miaow, miaow!",
            key:102,
        },
        {
            avatarUrl:"https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg",
            authorName:"Rabbit",
            message:"*Appropriate rabbit noises*",
            key:103,
        }
      ]
    };
    render() {
        return (
        <div className="chatContainer" messages={this.state.messages}>
            <ChatRow avatarUrl={this.state.messages[0].avatarUrl} authorName={this.state.messages[0].authorName} message={this.state.messages[0].message}/>
            <ChatRow avatarUrl={this.state.messages[1].avatarUrl} authorName={this.state.messages[1].authorName} message={this.state.messages[1].message}/>
            <ChatRow avatarUrl={this.state.messages[2].avatarUrl} authorName={this.state.messages[2].authorName} message={this.state.messages[2].message}/>
        </div>
        );
    }
}

export default ChatContainer;