import React from "react";
import Input from "./Input";
import PlusButton from "./PlusButton";
import SubmitButton from "./SubmitButton";
import "./InputBar.css";

let InputBar = props => {
  return (
    <div className="input-bar">
      <Input inputHandler={props.inputHandler} inputValue={props.inputValue}/>
      <SubmitButton sendMessage={props.sendMessage}/>
      <PlusButton />
    </div>
  );
};

export default InputBar;
