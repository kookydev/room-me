import React from "react";
import "./NotificationBubble.css";

let NotificationBubble = (props) => {
    return (
      <p
        className={
          props.notifications > 0
            ? "notification-bubble visible"
            : "notification-bubble"
        }
      >
        {props.notifications > 9 ? "9+" : props.notifications}
      </p>
    );
}

export default NotificationBubble