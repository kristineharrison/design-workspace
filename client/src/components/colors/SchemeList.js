import React from "react"
import { useEffect, useState } from "react"
import { Link, Route, useRouteMatch } from "react-router-dom"
import ColorScheme from "./ColorScheme"

import styled from "styled-components"
import { Button, Input } from "../ui"

export default function SchemeList() {
  const [ schemes, setSchemes ] = useState({
    1: { id: 1, title: "Complementary" },
    2: { id: 2, title: "Analogous" },
    3: { id: 3, title: "Monochrome" },
  })

  const match = useRouteMatch();
  console.log(match);

  const renderSchemes = Object.keys(schemes).map((schemeId) => (
    <li key={schemeId}>
      <Link to={`/colors/${schemeId}`}>{schemes[schemeId].title}</Link>
    </li>
  ))


  return (
    <Container>
        <ul>{renderSchemes}</ul>
        
        <Route path={`${match.url}/:schemeId`}>
          <ColorScheme schemes={schemes} />
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



// .then(res => res.json())
// .then(console.log)
// .then((data) => setColorData(data))
// .then(console.log("Color Data: ", colorData));