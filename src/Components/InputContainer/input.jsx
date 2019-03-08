import React, { Component } from "react";
import autosize from "autosize";
import "./InputBar.css";

class Input extends Component {
  componentDidMount() {
    this.textarea.focus();
    autosize(this.textarea);
  }
  render() {
    const style = {
      resize: "none"
    };
    return (
      <div className="message-container">
        <textarea
          style={style}
          rows={1}
          data-min-rows={1}
          className="message-bar"
          placeholder="Message..."
          ref={c => (this.textarea = c)}
          defaultValue=""
        />
      </div>
    );
  }
}

export default Input;
