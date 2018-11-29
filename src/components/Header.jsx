import React, { Component } from 'react';
import PropTypes from "prop-types";

const Header = (props) => {
    if (props.pickedTamagotchi === 1)
    {
        return (
            <div>
            <h1>Godzilla</h1>
            <img
              height="300px"
              src="https://i.gifer.com/origin/c0/c0f164fe3a50f5349e0897e84aff798b_w200.webp"
            />
          </div>

        );}

      else {return (
        <div>
        <h1>Godzilla2</h1>
        <img
          height="300px"
          src="https://i.gifer.com/origin/c0/c0f164fe3a50f5349e0897e84aff798b_w200.webp"
        />
      </div>
      
      )}
}
 
export default Header;