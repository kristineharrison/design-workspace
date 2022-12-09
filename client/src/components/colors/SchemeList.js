import React, { useState } from "react"
import { Link, Route, useRouteMatch } from "react-router-dom"
import uuid from "react-uuid"
import SchemeDisplay from "./SchemeDisplay"
import styled from "styled-components"

export default function SchemeList({ hexValue }) {
  const [ schemes, setSchemes ] = useState({
    1: { id: 1, title: "Complement" },
    2: { id: 2, title: "Analogic" },
    3: { id: 3, title: "Analogic Complement"},
    4: { id: 4, title: "Monochrome" },
    5: { id: 5, title: "Monochrome Light" },
    6: { id: 6, title: "Monochrome Dark" },
    7: { id: 7, title: "Triad" },
    8: { id: 8, title: "Quad" },
  })

  const match = useRouteMatch()

  // List of color scheme links
  const renderSchemes = Object.keys(schemes).map((schemeId) => (
    <li key={uuid()}>
      <Link
        to={`/colors/${schemeId}/${schemes[schemeId].title.toLowerCase()}`}>
        {schemes[schemeId].title}
      </Link>
    </li>
  ))

  return (
    <>
      <TextBox>
        <h3>Color Schemes</h3>
        <ul>{renderSchemes}</ul>
      </TextBox>
      
      <Route path={`${match.url}/:schemeId`}>
        <SchemeDisplay schemes={schemes} hexValue={hexValue}/>
      </Route>
    </>
  )
}

// Styled-Components CSS
const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-flow: column;
    align-items: center;
    line-height: 1.7em;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 1.2em;
  }
`