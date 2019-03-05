import React from 'react';
import './Avatar.css';

let Avatar = (props) => {
    return (
      <div className="Avatar" avatarUrl={props.avatarUrl}>
        <img src={props.avatarUrl} alt={props.authorName} className="avatarImg"/>
      </div>
    );
}

export default Avatar;