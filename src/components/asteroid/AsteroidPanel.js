import React, {useState, useEffect} from 'react';
import Asteroid from './Asteroid';

export default AsteroidPanel;

function AsteroidPanel({ast}) {
  const {name} = ast;
  const [show, setShow] = useState(false);
  return (
    <>
    <button onClick={() => setShow(!show)}>Show Asteroid Info for: {name}</button>
    {(show) && <Asteroid ast={ast} />}
    </>
  )
}