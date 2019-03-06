import React, { Component } from "react";
import "./PlusButton.css";

class PlusButton extends Component {
  state = { active: false };
  click = () => {
    this.state.active
      ? this.setState({ active: false })
      : this.setState({ active: true });
  };
  render() {
    return (
      <div onClick={this.click} class="arrow-button-container">
        <div className={this.state.active ? "arrow1 arrow1-open" : "arrow1"} />
        <div className={this.state.active ? "arrow2 arrow2-open" : "arrow2"} />
      </div>
    );
  }
}

export default PlusButton;
