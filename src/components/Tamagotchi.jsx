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
      name: "Hungry",
      health: 100,
      hunger: 100,
      energy: 100,
      timeCreated: 0
    };
    this.handleEnergy = this.handleEnergy.bind(this);
    this.handleHealth = this.handleHealth.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnergyDecrease = this.handleEnergyDecrease.bind(this);
    this.handleEnergy = this.handleEnergy.bind(this);
  }

  handleEnergy() {
    var newEnergy = this.state.energy;
    newEnergy += 2;
    this.setState({ energy: newEnergy });
  }

  handleHealth() {
    var newHealth = this.state.health;
    newHealth++;
    this.setState({ health: newHealth });
  }

  handleEnergyDecrease() {
    console.log("asdasdas");
    var newEnergy = this.state.energy;
    newEnergy -= 3;
    this.setState({ energy: newEnergy });

    if (this.state.energy === 0) {
      this.state.energy = 0;
      return clearInterval(this.timeUpdate);
    }
    if (this.state.energy > 100) {
      console.log("asdasdas((((((");

      this.state.energy = 100;
    }
  }
  handleHealthDecrease() {
    console.log("handleHealthDecrease");
    var newHealth = this.state.health;
    newHealth--;
    this.setState({ health: newHealth });

    if (this.state.health === 0) {
      this.state.health = 0;
      return clearInterval(this.timeUpdate);
    }
    if (this.state.health > 100) {
      this.state.health = 100;
    }
  }

  handleStart() {
    var newTimeCreated = this.state.timeCreated;
    newTimeCreated = new Moment();
    this.setState({ timeCreated: newTimeCreated });
    this.timeUpdate = setInterval(() => this.handleEnergyDecrease(), 1000);
    this.timeUpdate = setInterval(() => this.handleHealthDecrease(), 1000);
  }

  render() {
    let feedButton = null;
    let cureButton = null;

    var imgStyle = {
      width: 200,
      height: 200
    };
    //let numbere = this.state.energy;
    //let newNumber = numbere.toString();
    let newEnergyBar = {
      width: this.state.energy.toString() + "%",
      ariaValuenow: "{this.state.energy}",
      ariaValuemin: "0",
      ariaValuemax: "100",
      height: "20"
    };

    let newHealthBar = {
      width: this.state.health.toString() + "%",
      ariaValuenow: "{this.state.health}",
      ariaValuemin: "0",
      ariaValuemax: "100",
      height: "20"
    };

    if (this.state.energy >= 100) {
      //   feedButton = "STOOOOOP Sleeping";
      this.state.energy = 100;
    } else feedButton = <Energy onEnergy={this.handleEnergy} />;

    if (this.state.health >= 100) {
      //   feedButton = "STOOOOOP Sleeping";
      this.state.health = 100;
    } else cureButton = <Health onHealth={this.handleHealth} />;

    return (
      <div>
        <img
          style={imgStyle}
          src="https://vignette.wikia.nocookie.net/muppet/images/0/08/CookieMonsterWaving.jpg/revision/latest?cb=20120128192952"
        />
        <h1>{this.state.name}</h1>

        <h3>Health: </h3>
        {/* {this.state.health} */}
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={newEnergyBar}
          >
            Energy: {this.state.health}%
          </div>
        </div>

        <h3>Hunger: {this.state.hunger}</h3>
        <h3>Energy:</h3>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={newHealthBar}
          >
            Energy: {this.state.energy}%
          </div>
        </div>
        {/* <h3>time: {this.state.timeCreated.from(new Moment(), true)}</h3> */}
        {/* {<Health />} */}
        {feedButton}
        {cureButton}

        {/* <Energy onEnergy={this.handleEnergy} /> */}
        <Hunger />
        <Start onStart={this.handleStart} />
      </div>
    );
  }
}

export default Tamagotchi;
