import React, { Component } from "react";

export class PlayButtonContents extends Component {
  render() {
    return (
      <div className="play-button-container">
        <div className="share" />
        <div className="upload" />
        <div className="gallery" />
        <div className="gifs" />
        <div className="emojis" />
      </div>
    );
  }
}

export default PlayButtonContents;
