import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

import Heading from './components/APOD/Heading';
import Image from './components/APOD/Image';
import Asteroid from './components/asteroid/Asteroid';



function App() {

  const [data, setData] = useState({});
  const [ast, setAst] = useState([]);
  const [displayImage, setDisplayImage] = useState(true);

  // useEffect(() => {
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=wSjoyed8oX9MH7x6htl3sYpBQqhu3benEdsE6DTs")
  //   .then(resp => {
  //     console.log(resp.data);
  //     setData(resp.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })

  // }, [])

  useEffect(() => {
    axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=wSjoyed8oX9MH7x6htl3sYpBQqhu3benEdsE6DTs")
      .then(resp => {
        console.log(resp.data.near_earth_objects);
        setAst(resp.data.near_earth_objects);

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

        <div className="apod-cont">

          <Heading data={data} setDisplayImage={setDisplayImage} displayImage={displayImage} />
          {displayImage && <Image data={data} />}

        </div>
        <div className="ast-cont">
          {
            ast.map((elem, index) => (
              <Asteroid key={index} ast={elem} />
            ))
          }
          <Asteroid ast={ast} />
        </div>



    </div>
  );
}

export default App;
