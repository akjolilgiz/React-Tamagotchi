import React from "react";
import { Switch, Route } from "react-router-dom";
import Tamagotchi from "./Tamagotchi";
import PropTypes from "prop-types";

function App() {
  var bodyStyle = {
    backgroundColor: "gray",
    height: "1500px"
  };
  return (
    <div style={bodyStyle}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <Tamagotchi />
    </div>
  );
}

export default App;
