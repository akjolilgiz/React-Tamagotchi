import React, { Component } from "react";
import PropTypes from "prop-types";

const Start = props => {
  return (
    <button className="btn btn-Warning" onClick={props.onStart}>
      START
    </button>
  );
};

export default Start;
