import React from "react";
import Input from "./Input";
import PlusButton from "./PlusButton";
import SubmitButton from "./SubmitButton";
import "./InputBar.css";

let InputBar = props => {
  return (
    <div className="input-bar">
      <Input />
      <SubmitButton />
      <PlusButton />
    </div>
  );
};

export default InputBar;
