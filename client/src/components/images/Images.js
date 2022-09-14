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
    4: { id: 4, title: "Opacity" },
    5: { id: 5, title: "Blur" },
    6: { id: 6, title: "Hue Rotation" },
    7: { id: 7, title: "Drop Shadow" },
  });
  
  const match = useRouteMatch()
  console.log("Match: ", match)

  return (
    <Container>
      <h2>Using CSS with Images</h2>
      <TextBox>
        <p>Styling images using CSS may seem more time consuming than editing an
        image in Photoshop, but there are many advantages to being able to
        control the appearance of images straight from the code. Manipulating
        content from CSS allows it to be more dynamic and change as users
        interact with the webpage. It also makes applying different effects to
        multiple images at once extremely easy by using class names.</p>
      </TextBox>
     
      <StyleList styles={styles}  /> 

      <Route path={`${match.url}/:styleId`}>
        <StyleDisplay styles={styles} />
      </Route>
      
    </Container>
  );
}

const Container = styled.section`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`