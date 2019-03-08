import React from "react";
import "./HeaderBar.css";
import HeadPhonesLogo from "./headPhonesLogo";
import SearchLogo from "./searchLogo";
import LogoGrid from "../LogoGrid";
import Notifications from "../Notifications";

let HeaderBar = (props) => {
    return (
      <div
        className={
          props.headerBarIsExpanded
            ? "top-bar-container notification-expand"
            : "top-bar-container"
        }
      >
        <div className="top-bar">
          <button className="button-null" onClick={props.expandHeaderBar}>
            <LogoGrid />
          </button>
          <h1 className="room-name">{props.roomName}</h1>
          <span className="icons-right">
            <SearchLogo />
            <HeadPhonesLogo />
          </span>
        </div>
        <div
          className={
            props.headerBarIsExpanded
              ? "top-bar-notification expand"
              : "top-bar-notification"
          }
        >
          {props.notificationData().map(n => (
            <Notifications
              roomKey={n.roomKey}
              roomName={n.roomName}
              number={n.number}
              avatars={n.avatars}
              goToRoom={props.goToRoom}
            />
          ))}
        </div>
      </div>
    );
}

export default HeaderBar;
