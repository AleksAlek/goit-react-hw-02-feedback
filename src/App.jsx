import React, { Component } from "react";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

import "./App.css";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const totalCount = this.countTotalFeedback();

    return Math.round((this.state.good * 100) / totalCount);
  }

  handleFeedback(type) {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  }

  render() {
    const { handleFeedback, state } = this;
    const { good, neutral, bad } = state;

    const totalStatistic = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            handleFeedback={handleFeedback.bind(this)} //Без этого падает рендер
          />
        </Section>

        <Section title="Statistics">
          {totalStatistic ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalStatistic}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
