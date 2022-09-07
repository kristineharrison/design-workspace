import React from "react";
import styled from "styled-components";

export default function Images() {
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
  max-width: 60%;
  margin: 40px auto;
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
`;