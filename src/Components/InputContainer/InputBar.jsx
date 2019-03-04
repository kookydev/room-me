import React, { Component } from 'react';
import Input from './input';
import SubmitButton from './SubmitButton';
import PaperClip from './PaperClip';
import './InputBar.css'

class InputBar extends Component {
  render() {
    return (
      <div className="InputBar">
        <Input />
        <SubmitButton />
        <PaperClip />
      </div>
    )
  }
}

export default InputBar

