import React, { Component } from "react";
import "../style.css";

class Header extends Component {
  render() {
    return (
      <header>
        <button type="button" className="headerButton">
          <img src={require("../img/logo.png")} aria-hidden="true" alt="Logo"/>
        </button>
      </header>
    );
  }
}

export default Header;
