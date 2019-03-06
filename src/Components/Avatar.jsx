import React from 'react';
import './Avatar.css';

let Avatar = (props) => {
    return (
      <div className="avatar">
        <img src={props.avatarUrl} alt={props.authorName} className="avatar-img"/>
      </div>
    );
}

export default Avatar; 