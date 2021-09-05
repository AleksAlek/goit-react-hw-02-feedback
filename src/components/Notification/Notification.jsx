import React from "react";

import { PropTypes } from "prop-types";

import "./Notification.styles.css";

const Notification = ({ message }) => (
  <div className="notification">{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
