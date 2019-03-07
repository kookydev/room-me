<<<<<<< HEAD
import React, { Component } from "react";
import YellowBubble from "./NotificationBubble";
import Avatar from "./Avatar.jsx";
import "./notification.css";

let Notifications = props => {
  return (
    <div class="notification-bar">
      <YellowBubble />
      <h1 class="room-name">Room Name</h1>
      <Avatar />
    </div>
  );
};

export default Notifications;
=======
import React, { Component } from 'react'
import LogoGrid from './LogoGrid'
import Avatar from './Avatar'
import './notification.css'

let Notifications = (props) => {
    return (
      <div className="notification-bar">
      <LogoGrid />
      <h1 className="room-name">Room Name</h1>
      <Avatar />
      </div>
    )
}

export default Notifications


>>>>>>> 9bd898a64e8c5f973d9fe111b62b83c6c976904a
