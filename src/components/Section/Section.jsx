import React from "react";

import "./Section.styles.css";

const Section = ({ title, children }) => {
  return (
    <div className="main-container">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};

export default Section;
