import React, { Component } from "react";
import PropTypes from "prop-types";

const Energy = props => {
  return <button onClick={props.onEnergy}>Sleep</button>;
};

export default Energy;
