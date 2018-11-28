import React, { Component } from "react";

const Hunger = props => {
  return (
    <button className="btn btn-primary" onClick={props.onHunger}>
      Feed
    </button>
  );
};

export default Hunger;
