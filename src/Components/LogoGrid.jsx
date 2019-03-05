import React, { Component } from "react";
import Logo from "./Logo";
import YellowBubble from "./YellowBubble";
import "./logo.css";
import "./yellowBubble.css";

class LogoGrid extends Component {
  state = {};
  render() {
    return (
      <div className="logo-grid-bubble">
        <Logo className="main-logo" />
        <YellowBubble className="notification-count" notifications={8} />
      </div>
    );
  }
}

export default LogoGrid;
