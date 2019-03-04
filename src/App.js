import React, { Component } from 'react';
import ChatContainer from "./Components/ChatContainer.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <ChatContainer messages={this.messages}/>
      </div>
    );
  }
}

export default App;
