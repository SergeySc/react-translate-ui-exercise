import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";

import "./styles.css";

class Page extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      textToTranslate: null,
      languageToTranslateFrom: null,
      languageToTranslateto: null,
      translatedText: ""
    };
  }

  textToTranslate(text) {
    this.setState({ textToTranslate: text });
  }

  languageToTranslateFrom(lang) {
    this.setState({ languageToTranslateFrom: lang });
  }

  languageToTranslateTo(lang) {
    this.setState({ languageToTranslateTo: lang });
  }

  changeSideMenuState(isOpen) {
    this.setState({
      openMenu: isOpen === this.state.openMenu ? !isOpen : isOpen
    });
  }

  showOverlay() {
    if (this.state.openMenu) {
      return (
        <div
          className="overlay"
          onClick={() => this.changeSideMenuState(false)}
        />
      );
    }
  }

  handleTranslateClick() {
    const {
      textToTranslate,
      languageToTranslateFrom,
      languageToTranslateTo
    } = this.state;

    if (!textToTranslate || !languageToTranslateFrom || !languageToTranslateTo)
      return;

    this.setState({
      translatedText: `Translate ${textToTranslate} from ${languageToTranslateFrom} to ${languageToTranslateTo}`
    });
  }

  render() {
    return (
      <div className="App">
        {this.showOverlay()}
        <div className="wrapper">
          <LeftSide
            changeSideMenuState={this.changeSideMenuState.bind(this)}
            isMenuOpen={this.state.openMenu}
          />
          <RightSide
            changeSideMenuState={this.changeSideMenuState.bind(this)}
            textToTranslate={this.textToTranslate.bind(this)}
            languageToTranslateFrom={this.languageToTranslateFrom.bind(this)}
            languageToTranslateTo={this.languageToTranslateTo.bind(this)}
            translatedText={this.state.translatedText}
          />
          <Footer handleTranslateClick={this.handleTranslateClick.bind(this)} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Page />, rootElement);
