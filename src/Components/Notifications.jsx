import React  from 'react'
import LogoGrid from './LogoGrid'
import Avatar from './Avatar'
import './notification.css'

let Notifications = (props) => {
    return (
      <div className="notification-bar">
      <LogoGrid />
      <h1 className="room-name">Room Name</h1>
      <Avatar />
      </div>
    )
}

export default Notifications


