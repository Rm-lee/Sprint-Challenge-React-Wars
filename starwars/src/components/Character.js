import React, { Component } from 'react';

const Character = props => {

    return (
     <div className="character">
      {props.character.name}
      {props.character.homeworld}
     </div>
    );
}
export default Character;