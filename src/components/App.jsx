import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./Navbar"

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
      <Navbar/>
    </div>
  );
}

export default App;
