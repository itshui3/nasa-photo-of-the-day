import React, {useState, useEffect} from "react";

export default Image;

function Image({data}) {
  return (
    <div>
      <img className="apod" src={data.url} alt={data.explanation}></img>
    </div>
  )
}