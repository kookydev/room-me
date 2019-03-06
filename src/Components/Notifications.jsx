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
