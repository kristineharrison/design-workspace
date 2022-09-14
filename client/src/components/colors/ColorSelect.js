import React from "react"
import { ColorPicker, useColor } from "react-color-palette"
import "react-color-palette/lib/css/styles.css"
import styled from "styled-components"


export default function ColorSelect() {
  const [color, setColor] = useColor("hex", "#3e8156");
  
  return(
    <Container>
      <h2>Color Picker</h2>
      <ColorPicker width={400} height={171} 
                   color={color} 
                   onChange={setColor} hideHSV hideRGB light />
    </Container>
  )
}

const Container = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

