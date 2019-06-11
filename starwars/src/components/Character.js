import React, { Component } from 'react';
import './ListChar.css'

const Character = props => {

 let newKeys = Object.keys(props.character).filter(item => item !== "name");
 newKeys = newKeys.filter(item => item !== "films");
 newKeys = newKeys.filter(item => item !== "starships");
 const keyNames = newKeys.map(key => {
  
  return (
      <p className="prop-name">
          {key}
      </p>
      );
 
 });
 const keyDetails = newKeys.map(key => {
  
  return (
      <p className="prop-details">
          {props.character[key]}
      </p>
      );
 
});

    return (
     <div className="character">
        <h2 className="name">{props.character.name}</h2>
        <div className="detail-container">
            <div className="key-names">{keyNames}</div> 
            <div className="key-details">{keyDetails}</div> 
        </div>
     </div>

    );
}
export default Character;