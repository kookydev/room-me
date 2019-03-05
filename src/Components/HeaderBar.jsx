import React, { Component } from "react";
import "./HeaderBar.css";
import Logo from "./Logo";
import HeadPhonesLogo from "./headPhonesLogo";
import SearchLogo from "./searchLogo";
import LogoGrid from "./LogoGrid";
// import InputBar from './InputBar'

export class HeaderBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <LogoGrid />
        <h1 class="room-name">Room Name</h1>
        <span className="icons-right">
          <SearchLogo />
          <HeadPhonesLogo />
        </span>
      </div>
    );
  }
}

export default HeaderBar;
