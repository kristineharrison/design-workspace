import React, { useState } from "react";
import styled from "styled-components";
import StyleList from "./StyleList";
import Styles from "./Styles"

export default function Images() {
  const [newStyle, setNewStyle] = useState([]);
  const [newTitle, setNewTitle] = useState([]);
  const [imagePlaceholder, setImagePlaceholder] = useState(true);
  const [descriptionPlaceholder, setDescriptionPlaceholder] = useState(true);
  const [titlePlaceholder, setTitlePlaceholder] = useState(true);
  const [codePlaceholder, setCodePlaceholder] = useState(true);

  function handleClick(newStyle) {
    setNewStyle(newStyle);
  }

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
      <StyleList
        setCodePlaceholder={setCodePlaceholder}
        setTitlePlaceholder={setTitlePlaceholder}
        setDescriptionPlaceholder={setDescriptionPlaceholder}
        setImagePlaceholder={setImagePlaceholder}
        handleClick={handleClick}
        newTitle={newTitle}
      /> 
      <Styles 
       codePlaceholder={codePlaceholder}
       titlePlaceholder={titlePlaceholder}
       descriptionPlaceholder={descriptionPlaceholder}
       imagePlaceholder={imagePlaceholder}
       newStyle={newStyle}
      />
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