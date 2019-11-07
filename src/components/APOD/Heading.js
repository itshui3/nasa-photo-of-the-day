import React, {useState, useEffect} from "react";

export default Heading;

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
    <div className="header">
      <button onClick={() => setDisplayImage(!displayImage)}>{btnText}</button>
      <h1>{data.title}</h1>
      <h3>{data.date}</h3>
    </div>
  )

}