import React from "react"
import styled from "styled-components"
import ColorSwatch from "./ColorSwatch"
import ColorSelect from "./ColorSelect"

export default function Colors() {
  
  return (
    <Container>
      <h1>Digital Color</h1>
      <TextBox>
        <p>Colors you view on a screen are displayed combining red, green and
          blue light. CSS uses color values to specify a color; specifically by 
          color names, hexadecimal values, RGB value, or HSL value. CMYK is not
          used to display digital color.</p>
        <p>CSS is typically used to set font color, background element color,
          borders and other decorative elements.</p>
      </TextBox>
      <ColorSelect />
      <ColorSwatch />
    </Container>
  )
}

const Container = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`