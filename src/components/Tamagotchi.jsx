import React from "react";
import Energy from "./Energy";
import Health from "./Health";
import Hunger from "./Hunger";
import Moment from "moment";
import Start from "./Start";

class Tamagotchi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "HungryBastard",
      health: 100,
      hunger: 100,
      energy: 100,
      timeCreated: 0
    };
    this.handleEnergy = this.handleEnergy.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnergyDecrease = this.handleEnergyDecrease.bind(this);
  }

  handleEnergy() {
    var newEnergy = this.state.energy;
    newEnergy += 10;
    this.setState({ energy: newEnergy });
  }
  handleEnergyDecrease() {
    console.log("asdasdas");
    var newEnergy = this.state.energy;
    newEnergy--;
    this.setState({ energy: newEnergy });
    if (this.state.energy === 0) {
      return clearInterval(this.timeUpdate);
    }
    if (this.state.energy > 100) {
      console.log("asdasdas((((((");

      this.state.energy = 100;
    }
  }
  handleStart() {
    var newTimeCreated = this.state.timeCreated;
    newTimeCreated = new Moment();
    this.setState({ timeCreated: newTimeCreated });
    this.timeUpdate = setInterval(() => this.handleEnergyDecrease(), 1000);
  }

  render() {
    let feedButton = null;

    var imgStyle = {
      width: 200,
      height: 200
    };
    if (this.state.energy >= 100) {
      //   feedButton = "STOOOOOP Sleeping";
      this.state.energy = 100;
    } else feedButton = <Energy onEnergy={this.handleEnergy} />;
    return (
      <div>
        <img
          style={imgStyle}
          src="https://vignette.wikia.nocookie.net/muppet/images/0/08/CookieMonsterWaving.jpg/revision/latest?cb=20120128192952"
        />
        <h1>{this.state.name}</h1>
        <h3>Health: {this.state.health}</h3>
        <h3>Hunger: {this.state.hunger}</h3>
        <h3>Energy: {this.state.energy}</h3>
        {/* <h3>time: {this.state.timeCreated.from(new Moment(), true)}</h3> */}
        <Health />
        {feedButton}
        {/* <Energy onEnergy={this.handleEnergy} /> */}
        <Hunger />
        <Start onStart={this.handleStart} />
      </div>
    );
  }
}

export default Tamagotchi;
