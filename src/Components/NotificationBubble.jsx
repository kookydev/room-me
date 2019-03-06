import React, { Component } from "react";
import "./NotificationBubble.css";

export default class YellowBubble extends Component {
  render() {
    return (
      <p
        className={
          this.props.notifications > 0
            ? "notification-bubble visible"
            : "notification-bubble"
        }
      >
        {this.props.notifications > 9 ? "9+" : this.props.notifications}
      </p>
    );
  }
}
