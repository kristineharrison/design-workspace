import React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Button, Input } from "../ui"

export default function ColorSwatch() {
  const [ hexValue, setHexValue ] = useState("")
  const [ colorData, setColorData ] = useState({
    hex: "",
    name: "",
    image: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    
    fetch(`https://www.thecolorapi.com/id?hex=${hexValue}`)
        .then(res => res.json())
        .then(console.log)
        .then((data) => setColorData(data));
  }


  return (
    <Container>
      <h2>Working with Hexadecimals</h2>
      <p>What hexadecimal color is.</p>

      
      {/* <p>Working on a project that involves both print and digital color and need various color formats? Need ideas for what matches a certain shade? Curious how a certain font looks in a specific color? All you need is the six digit hex color value! 
      </p> */}

      <form id="input-form" onSubmit={handleSubmit}>
        <label>Have a HEX value?</label>
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
        <h2>Hex Value: {hexValue}</h2>

        <ul id="scheme-defs" className="hidden">
          
          <li><strong>Complementary color:</strong> on opposite side of the color wheel.</li>
          <li><strong>Analogous Color:</strong> next to each other on the color wheel.</li>
          <li><strong>Monochrome Color:</strong> variations of one color.</li>
        </ul>
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