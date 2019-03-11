import React from "react";
import LogoGrid from "./LogoGrid";
import Avatar from "./Avatar";
import "./notification.css";

let Notifications = props => {
  return (
    <div
      className="notification-bar"
      onClick={() => props.goToRoom(props.roomKey)}
    >
      <LogoGrid notifications={props.number} />
      <h1 className="room-name">{props.roomName}</h1>
      <div className="notification-avatar-grid">
        {props.avatars.map(i => (
          <Avatar avatarUrl={i.avatarUrl} authorName={i.authorName} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
