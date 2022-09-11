import React, { useState }from "react";
import { Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import StyleList from "./StyleList";
import StyleDisplay from "./StyleDisplay";


export default function Images() {
  const [styles, setStyles] = useState({
    1: { id: 1, title: "Rounded Corners" },
    2: { id: 2, title: "Circle" },
    3: { id: 3, title: "Grayscale" },
  });
  
  const match = useRouteMatch()
  console.log("Match: ", match)

  return (
    <Container>
      <Intro>
        <h2>Using CSS with Images</h2>
        <p>Styling images using CSS may seem more time consuming than editing an
        image in Photoshop, but there are many advantages to being able to
        control the appearance of images straight from the code. Manipulating
        content from CSS allows it to be more dynamic and change as users
        interact with the webpage. It also makes applying different effects to
        multiple images at once extremely easy by using class names.</p>
      </Intro>
     
      <StyleList styles={styles}  /> 

      <Route path={`${match.url}/:styleId`}>
        <StyleDisplay styles={styles} />
      </Route>
      
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

const Intro = styled.article`
  max-width: 100%;
  margin: 40px auto;
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
`;