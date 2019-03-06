import React, { Component } from 'react'
import YellowBubble from './NotificationBubble'
import Avatar from './Avatar.jsx'
import './notification.css'

export default class Notifications extends Component {
  render() {
    return (
      <div class="notification-bar">
      <YellowBubble />
      <h1 class="room-name">Room Name</h1>
      <Avatar />
      </div>
    )
  }
}
