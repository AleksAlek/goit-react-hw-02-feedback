import React from "react";

import { PropTypes } from "prop-types";

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

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
