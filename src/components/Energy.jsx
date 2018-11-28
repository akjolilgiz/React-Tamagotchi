import React, { Component } from "react";
import PropTypes from "prop-types";

const Energy = props => {
  return (
    <button className="btn btn-info" onClick={props.onEnergy}>
      Sleep
    </button>
  );
};

export default Energy;
