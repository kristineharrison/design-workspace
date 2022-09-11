import React from "react"
import styled from "styled-components"
import ColorSwatch from "./ColorSwatch"
import ColorSelect from "./ColorSelect"

export default function Colors() {
  
  return (
    <Container>
      <h1>Using CSS with Colors</h1>
      <p>Why you want to use CSS to apply color transformations, etc.</p>
      <ColorSelect />
      <ColorSwatch />
    </Container>
  );
}

const Container = styled.section`
  max-width: 90%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// const Intro = styled.article`
//   max-width: 60%;
//   margin: 40px auto;
//   // display: flex;
//   // flex-direction: column;
//   // align-items: flex-start;
// `;