import React from "react";

import "./Statistics.styles.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics-container">
      <p className="statistic statistic-good">Good: {good}</p>
      <p className="statistic statistic-neutral">Neutral: {neutral}</p>
      <p className="statistic statistic-bad">Bad: {bad}</p>
      <p className="statistic statistic-total">Total: {total}</p>
      <p className="statistic statistic-percentage">
        Positive feedback: {positivePercentage ? positivePercentage + "%" : 0}
      </p>
    </div>
  );
};

export default Statistics;
