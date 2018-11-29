import React, { Component } from 'react';
import PropTypes from "prop-types";

import Navbar from './Navbar'
const Header = (props) => {

    if (props.pickedPokemon === 1)
    {
        return (
            <div>
            <h1>Cool Tom</h1>
            <img
              height="300px"
              src="https://i.gifer.com/origin/c0/c0f164fe3a50f5349e0897e84aff798b_w200.webp"
            />
            </div>
        );
    } else if (props.pickedPokemon === 2){
        return (
        <div>
        <h1>Lazy Tom</h1>
        <img
          height="300px"
          src="https://media.giphy.com/media/RTIGQQZwkGy9q/giphy.gif"
        />
      </div>
      
      )}else if (props.pickedPokemon === 3){
          return  (
            <div>
            <h1>Crazy Tom</h1>
            <img
              height="300px"
              src="https://media.giphy.com/media/PfGZfvrugfsTS/giphy.gif"
            />
          </div>
          
          )}
          else {
              return (    <div>
              <img
                height="300px"
                src="https://media1.giphy.com/media/53c5BKEXahuwg/200w.webp?cid=3640f6095c006de43932364e45773973"
              />
              </div>
              )}
      
}
 
export default Header;