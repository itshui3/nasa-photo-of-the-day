//import exports
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import { Button, Alert } from "reactstrap";

export default Heading;

const StyledButton = styled.button`

`;

const CenterAlert = styled(Alert)`
  text-align: center;
`;

function Heading({data, setDisplayImage, displayImage}) {

  const [btnText, setBtnText] = useState("Hide Image");

  useEffect(() => {
    if (displayImage) {
      setBtnText("Hide Image");
    } else {
      setBtnText("Show Image");
    }
  }, [displayImage])

  return (
    <CenterAlert color="secondary">
      <h1>{data.title}</h1>
      <h3>{data.date}</h3>
      <Button onClick={() => setDisplayImage(!displayImage)} type="success">{btnText}</Button>
    </CenterAlert>
  )

}