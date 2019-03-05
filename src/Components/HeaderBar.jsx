import React, { Component } from 'react';
import './HeaderBar.css'
import  Logo from './logo'
import HeadPhonesLogo from './headPhonesLogo'
import SearchLogo from './searchLogo'
import YellowBubble from './YellowBubble'
import Notifications from './Notifications'


export class HeaderBar extends Component {
  state = {
    isActive: false
  }


 click = () => {
  this.state.isActive ? this.setState({isActive:false}) : this.setState({isActive:true})
}


 
  render() {
  //   let className = 'top-bar';
  // if (this.state.isActive) {
  //   className += ' notification-expand';
  // }
    return (
      <div className={this.state.isActive ? "top-bar-container notification-expand" : "top-bar-container"}>
      <div className="top-bar">
      <a onClick={this.click} className="logo-grid-bubble">
      <Logo className="main-logo" />
      <YellowBubble  className="notification-count" />
            </a>
      <h1  class="room-name">Room Name</h1>
      <span className="icons-right">
      <SearchLogo />
      <HeadPhonesLogo />
      </span>
      </div>
      </div>
    )
  }
}



export default HeaderBar;