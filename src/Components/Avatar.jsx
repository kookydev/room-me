import React from 'react';
import './Avatar.css';

let Avatar = (props) => {
    return (
      <div className="avatar" avatarUrl={props.avatarUrl}>
        <img src={props.avatarUrl} alt={props.authorName} className="avatar-img"/>
      </div>
    );
}

export default Avatar;