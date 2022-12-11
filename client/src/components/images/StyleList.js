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
    <div className="container">
      <h2>Image Styles</h2>
      <List>{renderStyles}</List>
    </div>
  )
}

// Styled-Components CSS
const List = styled.ul`
  margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
    width: 60%;
`