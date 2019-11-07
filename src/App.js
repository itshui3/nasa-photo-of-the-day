import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';
import "./App.css";
import { Container, Jumbotron, Row, Col } from 'reactstrap';

import Heading from './components/APOD/Heading';
import Drop from './components/asteroid/Dropdown';
import Image from './components/APOD/Image';

export default App;

const StyledHeader = styled(Jumbotron)`
  // background-color: #282c34;
  // min-height: 100vh;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: flex-start;
  // font-size: calc(10px + 2vmin);
  // color: white;
`;

const StyledRow = styled(Row)`
  min-height: 19vh;
`;

function App() {

  const [data, setData] = useState([]);
  const [ast, setAst] = useState([]);
  const [displayImage, setDisplayImage] = useState(true);
  const [count, setCount] = useState("3");

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=wSjoyed8oX9MH7x6htl3sYpBQqhu3benEdsE6DTs&count=${count}`)
    .then(resp => {

      setData(resp.data);
      console.log(resp.data);

    })
    .catch(err => {
      console.log(err);
    })

  }, [])

    console.log(data);


  useEffect(() => {
    axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=wSjoyed8oX9MH7x6htl3sYpBQqhu3benEdsE6DTs")
      .then(resp => {
        setAst(resp.data.near_earth_objects);

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <Container>
      <StyledHeader>

        <Heading data={data} setDisplayImage={setDisplayImage} displayImage={displayImage} />
        <Drop ast={ast}></Drop>
        {
          data.map((d, i) => {
            return (
              <div key={i}>
                <Image index={i} src={d.url} />
              </div>
            )
      
          })
        }
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀!
        </p>
      </StyledHeader>

{/* elem.close_approach_data[0].close_approach_date 
and sometimes it has more than one */}


    </Container>
  );
}

