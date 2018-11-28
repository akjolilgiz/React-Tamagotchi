import React, { Component } from "react";

const Health = props => {
  return (
    <button className="btn btn-success" onClick={props.onHealth}>
      Cure
    </button>
  );
};

export default Health;
