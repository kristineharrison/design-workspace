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
    <li key={uuid}>
      <Link to={`/colors/${schemeId}/${schemes[schemeId].title.toLowerCase()}`}>{schemes[schemeId].title}</Link>
    </li>
  ))


  return (
    <Container>
      <h2>Color Schemes</h2>
      <TextBox>
        Color schemes are multi-color combinations chosen according to color-wheel relationships.
        The purpose of a color scheme is to create an aesthetic feeling of style and appeal.
        <ul className="schemes">{renderSchemes}</ul>
      </TextBox>
      
      <Route path={`${match.url}/:schemeId`}>
        <SchemeDisplay schemes={schemes} hexValue={hexValue}/>
      </Route>
    </Container>
  );
}
const Container = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul.schemes {
    margin-top: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
  }

  li {
    font-size: 1.25rem;
  }
`
const TextBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`