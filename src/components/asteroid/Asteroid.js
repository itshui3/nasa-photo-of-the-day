import React, {useState, useEffect} from "react";
import Close from './Close';

export default Asteroid;

function Asteroid({ast}) {
  const {name, close_approach_data} = ast;
  console.log(ast.close_approach_data);
  console.log(ast.hasOwnProperty("close_approach_data"));

  return (
    <div className="asteroid">
      <h2>Name: {name}</h2>
      <h3>Potentially Hazardous: {ast.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</h3>
    </div>
  )
}

//{ast.close_approach_data ? <Close data={close_approach_data} /> : null}