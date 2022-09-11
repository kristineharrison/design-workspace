import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function StyleList({ styles }) {
  
  // List of style links
  const renderStyles = Object.keys(styles).map((styleID) => (
    <li key={styleID}>
      <Link to={`/images/${styleID}`}>{styles[styleID].title}</Link>
    </li>
  ));


  return (
    <Container>
      <h2>Image Styles</h2>
      <p>Put in own words</p>
      
      <ul>{renderStyles}</ul>
    
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