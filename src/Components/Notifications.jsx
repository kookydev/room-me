import React, { Component } from 'react'
import LogoGrid from './LogoGrid'
import Avatar from './Avatar'
import './notification.css'


export default class Notifications extends Component {
  render() {
    return (
      <div className="notification-bar">
      <LogoGrid />
      <h1 className="room-name">Room Name</h1>
      <Avatar />
      </div>
    )
  }
}


