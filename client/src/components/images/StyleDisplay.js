import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "./styles.css"

export default function StyleDisplay({ styles }) {
  const params = useParams()

  const styleName = styles[params.styleId].title
  let styleClass= ""
  let styleText= ""

  switch(styleName) {
    case "Rounded Corners":
      styleClass= "rounded"
      styleText= 
        <div>
          Use the border-radius property to create rounded images.
          <div className="code-container">
            <p className="code">
            {`img { border-radius: 10px; }`}
          </p>
          </div>
       </div>
      break

    case "Circle":
      styleClass= "circle"
      styleText= 
        <div>
          Use the border-radius property to create a circle or oval image.
          <div className="code-container">
            <p className="code">
              {`img { border-radius: 50% }`}
            </p>
          </div>
        </div>
      break

    case "Grayscale":
      styleClass= "grayscale"
      styleText= 
      <div>
        Change a color image to black and white.
        <div className="code-container">
          <p className="code">
            {`img { filter: grayscale(100%); }`}
          </p>
        </div>
      </div>
    break

    case "Opacity":
      styleClass= "opacity"
      styleText= 
      <div>
        The opacity property can take a value from 0.0-1.0, with 1 being the default. The lower the value, the more transparent the image.
        <div className="code-container">
          <p className="code">
            {`img { opacity: 0.5; }`}
          </p>
        </div>
      </div>
    break

    case "Blur":
      styleClass= "blur"
      styleText= 
      <div>
        Apply a blur effect to an image.
        <div className="code-container">
          <p className="code">
            {`img { filter: blur(3px); }`}
          </p>
        </div>
      </div>
    break

    case "Hue Rotation":
      styleClass= "hue"
      styleText= 
      <div>
        Apply a hue rotation to an image.
        <div className="code-container">
          <p className="code">
            {`img { filter: hue-rotate(90deg); }`}
          </p>
        </div>
      </div>
    break

    case "Drop Shadow":
      styleClass= "dropshadow"
      styleText= 
      <div>
        Apply a drop shadow effect to an image.
        <div className="code-container">
          <p className="code">
          {`img {filter: drop-shadow(8px 8px 10px gray); }`}
          </p>
        </div>
      </div>
    break

    default:
      styleClass= ""
      styleText= 
      <div>
        Image with no class applied.
      </div>
      break
  }

  return (
    <div className="container">
      <h3>{styles[params.styleId].title}</h3>
      <div>
        <img src={"/images/examples/roses.jpg"} alt="Roses" className={styleClass}/>
      </div>
      <TextBox>
        {styleText}
      </TextBox>
    </div>
  );
}

// Styled-Components CSS
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  max-width: 600px;

  .code-container {
    margin-top: 20px;
    margin-bottom: 40px;
    background-color: black;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
  }
  
  .code {
    color: rgb(0, 208, 255);
    font-family: "Courier New", Courier, monospace;
    font-weight: 900;
    text-align: center;
  }
`

