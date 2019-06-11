import React, { Component } from 'react';
import './ListChar.css'

const Character = props => {
 
 const keyNames = Object.keys(props.character).map(key => {
  if (key !== "name" ){
  return (
      <p className="prop-name">
          {key}
      </p>
      );
 }
 });
 const keyDetails = Object.keys(props.character).map(key => {
  if (key !== "name" ){
  return (
      <p className="prop-details">
          {props.character[key]}
      </p>
      );
 }});

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