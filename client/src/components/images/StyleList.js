import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function StyleList({ styles }) {
  
  // List of style links
  const renderStyles = Object.keys(styles).map((styleID) => (
    <li key={styleID}>
      <Link
        to={`/images/${styleID}/${styles[styleID].title.toLowerCase()}`}>
        {styles[styleID].title}
      </Link>
    </li>
  ))

  return (
    <Container>
      <h2>Image Styles</h2>
      <TextBox>
        <ul className="schemes">{renderStyles}</ul>
      </TextBox>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul.schemes {
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
  }

  li {
    font-size: 1.2 rem;
  }
`
const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`