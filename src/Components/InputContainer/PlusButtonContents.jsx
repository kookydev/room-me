import React, { Component } from "react";
import "./PlusButton.css";

export class PlayButtonContents extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className="share icon" />
        <div className="upload icon" />
        <div className="gallery icon" />
        <div className="gifs icon" />
        <div className="emojis icon" />
      </div>
    );
  }
}

export default PlayButtonContents;
