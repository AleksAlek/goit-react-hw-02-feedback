import React from "react";

import { PropTypes } from "prop-types";

import "./Section.styles.css";

const Section = ({ title, children }) => {
  return (
    <div className="main-container">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
