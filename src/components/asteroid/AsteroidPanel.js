import React, {useState, useEffect} from 'react';
import { Button, Col } from 'reactstrap';
import Asteroid from './Asteroid';

export default AsteroidPanel;

function AsteroidPanel({ast, data}) {
  const {name} = ast;
  const [show, setShow] = useState(false);

    return (
      <Col>
        <Button onClick={() => setShow(!show)}>Show Asteroid Info for: {name}</Button>
        {(show) && <Asteroid ast={ast} />}
      </Col>
    )
 
}