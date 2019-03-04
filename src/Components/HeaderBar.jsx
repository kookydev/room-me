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
      <div className="topBar">
      <div className="logoGridBubble">
      <Logo className="mainLogo" />
      <YellowBubble className="notificationCount" />
      </div>
      <h1 class="roomName">Room Name</h1>
      <span className="iconsRight">
      <SearchLogo />
      <HeadPhonesLogo />
      </span>
      </div>
    )
  }
}



export default HeaderBar;