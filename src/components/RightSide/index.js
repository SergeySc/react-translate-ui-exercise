import React, { PureComponent } from "react";
import TranslateFrom from "../Cards/TranslateFrom";
import TranslateTo from "../Cards/TranslateTo";
import { FaBars } from "react-icons/fa";

import "./styles.css";

class RightSide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      languageChoices: [
        "English",
        "Русский",
        "Italiano",
        "Geeberish",
        "French",
        "Latvian",
        "Spanish"
      ],
      isMenuOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen }, () =>
      this.props.changeSideMenuState(isMenuOpen)
    );
  }

  render() {
    return (
      <div className="right-side">
        <div className="card">
          <h1>
            <FaBars
              onClick={() => this.handleClick()}
              className="hamburger-icon"
            />
            Translate
          </h1>
        </div>
        <TranslateFrom
          textToTranslate={this.props.textToTranslate}
          languageChoices={this.state.languageChoices}
          languageToTranslateFrom={this.props.languageToTranslateFrom}
        />
        <TranslateTo
          translatedText={this.props.translatedText}
          languageChoices={this.state.languageChoices}
          languageToTranslateTo={this.props.languageToTranslateTo}
        />
      </div>
    );
  }
}

export default RightSide;
