import React, { Component } from "react";
import "./HeaderBar.css";
import HeadPhonesLogo from "./headPhonesLogo";
import SearchLogo from "./searchLogo";
import LogoGrid from "./LogoGrid";

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
    //   let className = 'top-bar';
    // if (this.state.isActive) {
    //   className += ' notification-expand';
    // }
    return (
      <div
        className={
          this.state.isActive
            ? "top-bar-container notification-expand"
            : "top-bar-container"
        }
      >
        <div className="top-bar">
          <button onClick={this.click}><LogoGrid /></button> 
          <h1 class="room-name">Room Name</h1>
          <span className="icons-right">
            <SearchLogo />
            <HeadPhonesLogo />
            
          </span>
          

        </div>
      </div>
    );
  }
}

export default HeaderBar;
