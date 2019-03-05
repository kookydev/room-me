import React, { Component } from 'react';
import Input from './input';
import PaperClip from './PaperClip';
import SubmitButton from './SubmitButton';
import './InputBar.css'


class InputBar extends Component {
  render() {
    return (
      <div className="input-bar">
        <Input />
        <SubmitButton />
        <PaperClip />
      </div>
    )
  }
}

export default InputBar

