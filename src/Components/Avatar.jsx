import React, { Component } from 'react';
import '../../App.css';
import './Avatar.css';

let Avatar = (props) => {
    return (
      <div className="Avatar" avatarUrl={props.avatarUrl}>
        <img src={this.avatarUrl} className="avatarImg"/>
      </div>
    );
}

export default Avatar;