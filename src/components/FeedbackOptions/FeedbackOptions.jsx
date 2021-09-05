import React from "react";

import "./FeedbackOptions.styles.css";

const FeedbackOptions = ({ handleFeedback, options }) => {
  return (
    <div className="controls-container">
      {options.map((option) => {
        const classes = "control control-" + option;

        return (
          <button
            className={classes}
            key={option}
            onClick={() => handleFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
