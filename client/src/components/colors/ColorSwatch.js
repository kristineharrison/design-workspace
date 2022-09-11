import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SchemeList from "./SchemeList"
import ColorScheme from "./ColorScheme"

import styled from "styled-components"
import { Button, Input } from "../ui"

export default function ColorSwatch() {
  const [ hexValue, setHexValue ] = useState("A52A2A")
  const [ { data: colorData, error, status }, setColorData ] = useState({
    colorData: null,
    error: null,
    status: "pending",
  })

  // Fetch initial color data and update status
  useEffect(() => {
    fetch(`https://www.thecolorapi.com/id?hex=${hexValue}`)
    .then((r) => {
      if (r.ok) {
        r.json().then((colorData) =>
          setColorData({ data: colorData, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setColorData({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://www.thecolorapi.com/id?hex=${hexValue}`)
    .then((r) => {
      if (r.ok) {
        r.json().then((colorData) =>
          setColorData({ data: colorData, error: null, status: "resolved"})
        )
      } else {
        r.json().then((err) => 
          setColorData({ data: null, error: err.error, status: "rejected"})
        )
      }
    })
    setHexValue(hexValue)
  }

  console.log(colorData)

  // Update status state
  // if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

 
  return (
    <Container>
      <h2>Working with Hexadecimals</h2>
      <p>What hexadecimal color is.</p>

  
      <form id="input-form" onSubmit={handleSubmit}>
        <label>Enter a Hex Number:</label>
        <Input 
          type="text" 
          name="hex" placeholder="e.g. FFAA88 - no #"
          pattern="[0-9a-fA-F]{3}([0-9a-fA-F]{3})?" 
          title="Please enter valid Hex code without #" 
          value={hexValue}
          onChange={(e) => setHexValue(e.target.value)}/>
        <Button id="hex-input-btn">Submit</Button>
      </form>
      
      <div>
        
        <h2>Hex Value: #{hexValue}</h2>
        {/* {colorData.name.value}
        <img src={colorData.image.named} alt={colorData.name.value} /> */}

       <SchemeList hexValue={hexValue}/>

      </div>
 
    </Container>
  
  );
}
const Container = styled.section`
  width:  100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;



// .then(res => res.json())
// .then(console.log)
// .then((data) => setColorData(data))
// .then(console.log("Color Data: ", colorData));