import React, { Component } from "react";
import "./HeaderBar.css";
import HeadPhonesLogo from "./headPhonesLogo";
import SearchLogo from "./searchLogo";
import LogoGrid from "./LogoGrid";

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
