import React, { Component } from "react";
import Logo from "./Logo";
import YellowBubble from "./YellowBubble";
import "./logo.css";
import "./yellowBubble.css";

class LogoGrid extends Component {
  state = {};
  render() {
    return (
      <div className="logo-grid">
        <Logo />
        <YellowBubble notifications={1} />
      </div>
    );
  }
}



export default LogoGrid;
