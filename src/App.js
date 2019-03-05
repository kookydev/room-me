import React, { Component } from 'react';
import './App.css';
import HeaderBar from './Components/HeaderBar.jsx';
import InputBar from "./Components/InputContainer/InputBar"
import  ChatContainer from "./Components/ChatContainer"


class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderBar />
      <ChatContainer />
      <InputBar />
     </div>
    );
  }
}

export default App;
