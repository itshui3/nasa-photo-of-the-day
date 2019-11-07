import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AsteroidPanel from './AsteroidPanel';
import AsteroidModal from './Modal';

export default Drop;

const Item = styled(DropdownItem)`
  width: 100%;
  height: auto;

`;

function Drop({ast}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);


  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
      Asteroids
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Foo</DropdownItem>
        <DropdownItem divider />
        {ast.map((elem, index) => (
          <AsteroidModal key={index} ast={elem}/>
        ))}
        {/* {
          ast.map((elem, index) => {
            const asteroid = <AsteroidPanel key={index} ast={elem} data={elem.close_approach_data[0]} />

            if(elem.close_approach_data[0]) {
              // add close approach functionality
              // console.log(typeof elem.close_approach_data, elem.close_approach_data, "data");
              // console.log(typeof elem.close_approach_data[0],elem.close_approach_data[0], "0");
            } else {
              // console.log(typeof elem.close_approach_data, elem.close_approach_data, "data");
              // console.log(typeof elem.close_approach_data[0],elem.close_approach_data[0], "0");
            }

            return asteroid;

          })
        } */}

      </DropdownMenu>
    </Dropdown>
  );
}

