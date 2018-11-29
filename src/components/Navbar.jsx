import React, { Component } from 'react';
import Tamagotchi from './Tamagotchi';
import  Header from './Header'

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            pickedPokemon: 0
         };
        this.pickedOne = this.pickedOne.bind(this);
        this.pickedTwo = this.pickedTwo.bind(this); 
        this.pickedThree = this.pickedThree.bind(this); 

    }
    pickedOne() {
        var pickedPokemon = 1;
        this.setState({pickedPokemon})
    }
    pickedTwo() {
        var pickedPokemon = 2;
        this.setState({pickedPokemon})
    }
    pickedThree() {
        var pickedPokemon = 3;
        this.setState({pickedPokemon})
    }
    render() {
        let pickButtons = <div>
            <h1>Pick a tamagotchi</h1>
        <button onClick = {this.pickedOne}>Cool Tom</button>
        <button onClick = {this.pickedTwo}>Lazy Tom</button>
        <button onClick = {this.pickedThree}>Crazy Tom</button>
    </div>; 

        if (this.state.pickedPokemon !== 0) {
            pickButtons = null; 
        }
        let welcomeStyle = {
            textAlign: 'center', 
            backgroundColor: 'yellow',
            marginBottom: '10px'
        }
        return ( 
            <div>
            <div style = {welcomeStyle}>{pickButtons}</div>
            <div><Tamagotchi pickedPokemon = {this.state.pickedPokemon}/></div>
            <hr/>
            </div>

         );
    }
}
 
export default Navbar;