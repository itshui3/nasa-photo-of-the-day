import React, {useState, useEffect} from "react";
import styled from 'styled-components';

export default Image;

const StyledImage = styled.img`
  width: 100%;
  heigth: auto;
`;

function Image({src, index}) {
  return <StyledImage key={index} src={src}></StyledImage>

}