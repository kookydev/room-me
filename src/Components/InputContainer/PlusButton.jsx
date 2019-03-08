import React, { Component } from "react";
import PlayButtonContents from "./PlusButtonContents";
import "./PlusButton.css";
import "./InputBar.css";
import "../../index.css";

class PlusButton extends Component {
  state = { active: false };
  click = () => {
    this.state.active
      ? this.setState({ active: false })
      : this.setState({ active: true });
  };
  render() {
    return (
      <div>
        <PlayButtonContents
          class={
            this.state.active
              ? "play-button-container play-button-container-expand"
              : "play-button-container"
          }
        />
        <div onClick={this.click}>
          <div
            className={this.state.active ? "arrow1 arrow1-open" : "arrow1"}
          />
          <div
            className={this.state.active ? "arrow2 arrow2-open" : "arrow2"}
          />
        </div>
      </div>
    );
  }
}

export default PlusButton;
