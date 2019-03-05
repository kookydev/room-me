import React, { Component } from "react";
import "./yellowBubble.css";

export default class YellowBubble extends Component {
  isVisibleHandler = () => {
    if (this.props.notifications > 0) {
      return "yellow-bubble visible";
    } else {
      return "yellow-bubble";
    }
  };

  render() {
    return (

        <p className={this.isVisibleHandler()}>{this.props.notifications}</p>

    );
  }
}
