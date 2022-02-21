import React from "react";
import LanguageGroup from "../../Buttons/LanguageGroup";

import "./styles.css";

function TranslateTo(props) {
  return (
    <div className="card">
      <h2>Translate to</h2>
      <LanguageGroup
        languageChoices={props.languageChoices}
        userlanguageSelection={props.languageToTranslateTo}
      />
      <h2>Your translated text</h2>
      <input
        className="input"
        placeholder="..."
        readOnly
        value={props.translatedText}
      />
    </div>
  );
}

export default TranslateTo;
