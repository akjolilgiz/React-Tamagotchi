import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

const Navbar= (props) => {
    return ( 
        <div>
            <button onClick = {props.pickedOne}>Button1</button>
            <button onClick = {props.pickedTwo}>Button2</button>
            <button onClick = {props.pickedThree}>Button3</button>
        </div>
     );
}
 Navbar.propTypes = {
     pickedOne: PropTypes.func,
     pickedTwo: PropTypes.func,
     pickedThree: PropTypes.func
 }
export default Navbar;
