import React from "react";
import Logo from "./Logo";
import NotificationBubble from "./NotificationBubble";
import "./Logo.css";

let LogoGrid = (props) => {
    return (
      <div className="logo-grid">
        <Logo />
        <NotificationBubble notifications={6} />
      </div>
    );
}

export default LogoGrid;
