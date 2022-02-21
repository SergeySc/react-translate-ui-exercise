import React, { PureComponent } from "react";

import "./styles.css";

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <button
          className="translate-button"
          onClick={this.props.handleTranslateClick}
        >
          T R A N S L A T E
        </button>
      </div>
    );
  }
}

export default Footer;
