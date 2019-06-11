import React, { Component } from 'react';
import Character from './Character'
const ListChar = props => {
 return (
  <div className="list-char">
   {props.characters.map(char => (
        <Character key={char.created} character={char}/>
   ))}

  </div>
 );
}

export default ListChar;