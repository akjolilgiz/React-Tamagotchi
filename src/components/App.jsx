import React from "react";
import { Switch, Route } from "react-router-dom";
import Tamagotchi from "./Tamagotchi";

function App() {
  var bodyStyle = {
    backgroundColor: "gray",
    height: "1500"
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
