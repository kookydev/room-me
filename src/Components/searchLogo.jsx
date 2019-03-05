import React, { Component } from "react";
import "./searchLogo.css";

export default class SearchLogo extends Component {
  render() {
    return (
      <svg
        className="search-logo"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="17.801"
          cy="11.1256"
          r="6.367"
          transform="rotate(45 17.801 11.1256)"
          stroke="white"
          stroke-width="3"
        />
        <line
          x1="12.2382"
          y1="16.5846"
          x2="6.57157"
          y2="22.2512"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
