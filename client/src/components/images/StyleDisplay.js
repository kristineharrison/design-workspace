// .src/components/MovieShow.js
import React from "react";
import { useParams } from "react-router-dom";

import "./styles.css"
import styled from "styled-components";

export default function StyleDisplay({ styles }) {
  // call useParams to access the `params` from the url
  const params = useParams();

  const styleName = styles[params.styleId].title
  let styleClass= ""
  let styleText= ""

  switch(styleName) {
    case "Rounded Corners":
      styleClass= "rounded"
      styleText= 
        <div>
          Use the border-radius property to create rounded images.
          <p className="code">
            {`img { border-radius: 10px; }`}
          </p>
       </div>
      break

    case "Circle":
      styleClass= "circle"
      styleText= 
        <div>
          Use the border-radius property to create a circle or oval image.
          <p className="code">
            {`img { border-radius: 50% }`}
          </p>
        </div>
      break

    case "Grayscale":
      styleClass= "grayscale"
      styleText= 
      <div>
        Change a color image to black and white.
        <p className="code">
          {`img { filter: grayscale(100%); }`}
        </p>
      </div>
    break

    case "Opacity":
      styleClass= "opacity"
      styleText= 
      <div>
        The opacity property can take a value from 0.0-1.0, with 1 being the default. The lower the value, the more transparent the image.
        <p className="code">
          {`img { opacity: 0.5; }`}
        </p>
      </div>
    break

    case "Blur":
      styleClass= "blur"
      styleText= 
      <div>
        Apply a blur effect to an image.
        <p className="code">
          {`img { filter: blur(3px); }`}
        </p>
      </div>
    break

    case "Hue Rotation":
      styleClass= "hue"
      styleText= 
      <div>
        Apply a hue rotation to an image.
        <p className="code">
          {`img { filter: hue-rotate(90deg); }`}
        </p>
      </div>
    break

    case "Drop Shadow":
      styleClass= "dropshadow"
      styleText= 
      <div>
        Apply a drop shadow effect to an image.
        <p className="code">
          {`img {filter: drop-shadow(8px 8px 10px gray); }`}
        </p>
      </div>
    break

    default:
      console.log("no match")
      break
  }

  return (
    <Container>
      <h3>{styles[params.styleId].title}</h3>
      <div>
        <img src={"/images/examples/roses.jpg"} alt="Roses" width="300px" className={styleClass}/>
      </div>
      {styleText}

    </Container>
  );
}

const Container = styled.section`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;