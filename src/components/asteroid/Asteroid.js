import React, {useState, useEffect} from "react";
import Close from './Close';

export default Asteroid;

function Asteroid({ast}) {
  const {name, close_approach_data} = ast;
  // console.log(close_approach_data);
  return (
    <>
      <button>Show Asteroid Info for: {name}</button>
      <div className="asteroid">
        <h2>Name: {ast.name}</h2>
        <h3>Potentially Hazardous: {ast.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</h3>
        {close_approach_data !== undefined && <Close data={close_approach_data[0]} />}
      </div>
    </>

  )

}