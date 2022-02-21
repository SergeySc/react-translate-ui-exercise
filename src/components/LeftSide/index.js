import React, { PureComponent } from "react";
import About from "../Cards/About";
import { FaTimes } from "react-icons/fa";

import "./styles.css";

class LeftSide extends PureComponent {
  classToHideLeftSide = () => (!this.props.isMenuOpen ? "hide-left-side" : "");

  render() {
    return (
      <div className={`left-side ${this.classToHideLeftSide()}`.trim()}>
        <div className="card">
          <h1>
            <FaTimes
              className="x-icon"
              onClick={() => this.props.changeSideMenuState(false)}
            />Tech challenge
          </h1>
        </div>
        <About />
      </div>
    );
  }
}

export default LeftSide;
