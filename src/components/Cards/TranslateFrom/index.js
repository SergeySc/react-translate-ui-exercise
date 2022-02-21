import React, { PureComponent } from "react";
import LanguageGroup from "../../Buttons/LanguageGroup";

import "./../styles.css";

class TranslateFrom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  updateInputValue(evt) {
    this.setState({ inputValue: evt.target.value });
  }

  updateTextToTranslate() {
    this.props.textToTranslate(this.state.inputValue);
  }

  render() {
    return (
      <div className="card">
        <h2>Translate from</h2>
        <LanguageGroup
          languageChoices={this.props.languageChoices}
          userlanguageSelection={this.props.languageToTranslateFrom}
        />
        <h2>Enter text to translate</h2>
        <input
          className="input"
          placeholder="Enter text..."
          value={this.state.inputValue}
          onChange={evt => this.updateInputValue(evt)}
          onBlur={this.updateTextToTranslate.bind(this)}
        />
      </div>
    );
  }
}

export default TranslateFrom;
