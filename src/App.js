import React, { Component } from 'react';
import './App.css';
import HeaderBar from './Components/HeaderBar.jsx';
import InputBar from "./Components/InputContainer/InputBar"


class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderBar />
      <InputBar />
     </div>
    );
  }
}

export default App;
