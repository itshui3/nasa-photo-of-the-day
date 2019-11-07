import React, {useState, useEffect} from 'react';

export default Close;

function Close({data}) {
  
  console.log(data);

  return (
    <p>Close Approach Date: {data[0].close_approach_date}</p>
  )
}

