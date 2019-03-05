import React, { Component } from 'react';
import './HeaderBar.css'
import  Logo from './logo'
import HeadPhonesLogo from './headPhonesLogo'
import SearchLogo from './searchLogo'
import YellowBubble from './YellowBubble'
// import InputBar from './InputBar'


export class HeaderBar extends Component {
  render() {
    return (
      <div className="top-bar">
      <div className="logo-grid-bubble">
      <Logo className="main-logo" />
      <YellowBubble className="notification-count" />
      </div>
      <h1 class="room-name">Room Name</h1>
      <span className="icons-right">
      <SearchLogo />
      <HeadPhonesLogo />
      </span>
      </div>
    )
  }
}



export default HeaderBar;