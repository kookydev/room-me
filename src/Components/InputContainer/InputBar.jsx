import React from "react";
import Input from "./input";
import PlusButton from "./PlusButton";
import SubmitButton from "./SubmitButton";
import "./InputBar.css";

let InputBar = props => {
  return (
    <div className="input-bar">
      <Input inputHandler={props.inputHandler}/>
      <SubmitButton sendMessage={props.sendMessage}/>
      <PlusButton />
    </div>
  );
};

export default InputBar;
