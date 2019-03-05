import React, { Component } from "react";
import Logo from "./Logo";
import NotificationBubble from "./NotificationBubble";
import "./logo.css";

class LogoGrid extends Component {
  state = {};
  render() {
    return (
      <div className="logo-grid">
        <Logo />
        <NotificationBubble notifications={10} />
      </div>
    );
  }
}



export default LogoGrid;
