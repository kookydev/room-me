import React from 'react';
import Input from './input';
import PaperClip from './PaperClip';
import SubmitButton from './SubmitButton';
import './InputBar.css'


let InputBar = (props) => {
    return (
      <div className="input-bar">
        <Input />
        <SubmitButton />
        <PaperClip />
      </div>
    )
}

export default InputBar