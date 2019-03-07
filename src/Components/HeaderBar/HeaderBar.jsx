import React, { Component } from "react";
import "./HeaderBar.css";
import HeadPhonesLogo from "./headPhonesLogo";
import SearchLogo from "./searchLogo";
<<<<<<< HEAD:src/Components/HeaderBar/HeaderBar.jsx
import LogoGrid from "../LogoGrid";
=======
import LogoGrid from "./LogoGrid";
import Notifications from './Notifications'
>>>>>>> 9bd898a64e8c5f973d9fe111b62b83c6c976904a:src/Components/HeaderBar.jsx

export class HeaderBar extends Component {
  state = {
    isActive: false
  };

  click = () => {
    this.state.isActive
      ? this.setState({ isActive: false })
      : this.setState({ isActive: true });
  };

  render() {
    return (
      <div
        className={
          this.state.isActive
            ? "top-bar-container notification-expand"
            : "top-bar-container"}>
        <div className="top-bar">
          <button className="button-null" onClick={this.click}>
            <LogoGrid />
          </button>
          <h1 className="room-name">{this.props.roomName}</h1>
          <span className="icons-right">
            <SearchLogo />
            <HeadPhonesLogo />
          </span>
        </div>
        <div className={
          this.state.isActive
            ? "top-bar-notification expand"
            : "top-bar-notification"}>
         <Notifications />
         </div>
      </div>
    );
  }
}

export default HeaderBar;
