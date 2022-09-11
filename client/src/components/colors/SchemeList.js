import React, { useState } from "react"
import { Link, Route, useRouteMatch } from "react-router-dom"
import uuid from "react-uuid"
import ColorScheme from "./ColorScheme"

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
      <p>Color schemes are multi-color combinations chosen according to color-wheel relationsships. Put in own words</p>
      
      <ul>{renderSchemes}</ul>
        
      <Route path={`${match.url}/:schemeId`}>
        <ColorScheme schemes={schemes} hexValue={hexValue}/>
      </Route>
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