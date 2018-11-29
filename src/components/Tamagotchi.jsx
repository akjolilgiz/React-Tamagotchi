import React from "react";
import Energy from "./Energy";
import Health from "./Health";
import Hunger from "./Hunger";
import Moment from "moment";
import Start from "./Start";
import Header from './Header';
import Navbar from './Navbar';

class Tamagotchi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tom",
      health: 100,
      hunger: 100,
      energy: 100,
      timeCreated: 0,
      
    };
    
    this.handleEnergy = this.handleEnergy.bind(this);
    this.handleHealth = this.handleHealth.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnergyDecrease = this.handleEnergyDecrease.bind(this);
    this.handleEnergy = this.handleEnergy.bind(this);
    this.handleHunger = this.handleHunger.bind(this);
    this.pickedOne=this.pickedOne.bind(this);
    this.pickedTwo=this.pickedTwo.bind(this);
    this.pickedThree=this.pickedThree.bind(this);
    this.pickedTamagotchi = 0;
  }
  

  handleStart() {
    
    
    clearInterval(this.EnergyTimer);
    clearInterval(this.HealthTimer);
    clearInterval(this.HungerTimer);
    
    let newTimeCreated = new Moment();
    
    this.setState({
      health: 100,
      hunger: 100,
      energy: 100,
      timeCreated: newTimeCreated
    })
    
    this.EnergyTimer = setInterval(() => this.handleEnergyDecrease(), 1000);
    this.HealthTimer = setInterval(() => this.handleHealthDecrease(), 1000);
    this.HungerTimer = setInterval(() => this.handleHungerDecrease(), 1000);
    
  }
  
  handleHunger() {
    var newHunger = this.state.hunger;
    newHunger += 2;
    this.setState({ hunger: newHunger });
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
    var newEnergy = this.state.energy;
    newEnergy -= 3;
    this.setState({ energy: newEnergy });
  }
  handleHealthDecrease() {
    var newHealth = this.state.health;
    newHealth--;
    this.setState({ health: newHealth });
  }
  handleHungerDecrease() {
    var newHunger = this.state.hunger;
    newHunger -= 2;
    this.setState({ hunger: newHunger });
  }

  pickedOne() {
    this.pickedTamagotchi = 1;
    alert(this.pickedTamagotchi)
 };
  pickedTwo() {
    this.pickedTamagotchi = 2; 
 };
  pickedThree() {
    this.pickedTamagotchi = 3; 
 };

  render() {
  
    let sleepButton = null;
    let cureButton = null;
    let feedButton = null;
    // let tom = null;

   

    let tom = <Header pickedTamagotchi = {this.pickedTamagotchi}/>;

    var imgStyle = {
      width: 200,
      height: 200
    };
    //let numbere = this.state.energy;
    //let newNumber = numbere.toString();
    if (
      this.state.hunger < 0 ||
      this.state.health < 0 ||
      this.state.energy < 0
    ) {
      tom =
        <div>
          <h1>Godzilla is dead</h1>
          <img
            height="300px"
            src="https://media2.giphy.com/media/3o85xr89frMOGSvSTK/giphy.gif?cid=3640f6095bff0d506371546963654d82"
          />
        </div>
      clearInterval(this.EnergyTimer),
        clearInterval(this.HungerTimer),
        clearInterval(this.HealthTimer),
        this.state.hunger = 0,
        this.state.energy = 0,
        this.state.health = 0;
    };

    let nameGif = {
      textAlign: "center"
    };
    let Bars = {
      marginLeft: "8%",
      marginRight: "5%",
      width: "80%"
    };
    let barNames = {
      textAlign: "center"
    };
    let newEnergyBar = {
      width: this.state.health.toString() + "%",
      ariaValuenow: "{this.state.energy}",
      ariaValuemin: "0",
      ariaValuemax: "100px",
      height: "20px"
    };
    let newHealthBar = {
      width: this.state.energy.toString() + "%",
      ariaValuenow: "{this.state.health}",
      ariaValuemin: "0",
      ariaValuemax: "100px",
      height: "20px"
    };
    let bodyStyle = {
      backgroundColor: "yellow"
    };

    let newHungerBar = {
      width: this.state.hunger.toString() + "%",
      ariaValuenow: "{this.state.hunger}",
      ariaValuemin: "0",
      ariaValuemax: "100px",
      height: "20px"
    };

    if (this.state.energy >= 100) {
      this.state.energy = 100;
    } else if (this.state.energy === 0) {
      sleepButton = null
    } else sleepButton = <Energy onEnergy={this.handleEnergy} />;

    if (this.state.health >= 100) {
      this.state.health = 100;
    } else if (this.state.health === 0) {
      cureButton = null
    }
    else cureButton = <Health onHealth={this.handleHealth} />;

    if (this.state.hunger >= 100) {
      this.state.hunger = 100;
    }
    else if (this.state.hunger === 0) {
      feedButton = null
    }
    else feedButton = <Hunger onHunger={this.handleHunger} />;

    return (
      <div>
         <h1>{this.pickedTamagotchi}</h1>
        <Navbar pickedOne = {this.pickedOne} pickedTwo = {this.pickedTwo} pickedThree = {this.pickedThree}/>
       
        <div style={nameGif}> {tom}</div>
        <hr />
        <h3 style={barNames}>Health: </h3>
        <div className="progress" style={Bars}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={newEnergyBar}
          >
            Health: {this.state.health}%
          </div>
        </div>

        <h3 style={barNames}>Hunger: </h3>
        <div className="progress" style={Bars}>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={newHungerBar}
          >
            Hunger: {this.state.hunger}%
          </div>
        </div>
        <h3 style={barNames}>Energy:</h3>
        <div className="progress" style={Bars}>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={newHealthBar}
          >
            Energy: {this.state.energy}%
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-1">{sleepButton}</div>
          <br />
          <div className="col-md-1">{cureButton}</div>
          <br />
          <div className="col-md-1">{feedButton}</div>
          <br />
          <div className="col-md-1">
            <Start onStart={this.handleStart} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tamagotchi;
