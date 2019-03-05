import React, { Component } from 'react';

import './App.css';
import HeaderBar from './Components/HeaderBar.jsx';
import ChatContainer from "./Components/ChatContainer.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">

      <HeaderBar />
      <ChatContainer/>
      </div>
    );
  }
}

export default App;
