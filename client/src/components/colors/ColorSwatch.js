import React from "react"
import { useEffect, useState } from "react"
import SchemeList from "./SchemeList"
import styled from "styled-components"
import Button from 'react-bootstrap/Button'
import { Input } from "../ui"

export default function ColorSwatch() {
  const [ hexValue, setHexValue ] = useState("3E8156")
  const [ { data: colorData, error, status }, setColorData ] = useState({
    colorData: null,
    error: null,
    status: "pending",
  })

  // Fetch initial color data from The Color API and update status
  useEffect(() => {
    fetch(`https://www.thecolorapi.com/id?hex=3e8156`)
    .then((r) => {
      if (r.ok) {
        r.json().then((colorData) =>
          setColorData({ data: colorData, error: null, status: "resolved" })
        )
      } else {
        r.json().then((err) =>
          setColorData({ data: null, error: err.error, status: "rejected" })
        )
      }
    })
  }, [])

  // Fetch color data from The Color API upon hexadecimal value submit
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://www.thecolorapi.com/id?hex=${hexValue}`)
    .then((r) => {
      if (r.ok) {
        r.json().then((colorData) =>
          setColorData({ data: colorData, error: null, status: "resolved"})
        )
      } else {
        r.json().then((err) => 
          setColorData({ data: null, error: err.error, status: "rejected"})
        )
      }
    })
    setHexValue(hexValue)
  }

  // Update status state
  if (status === "pending") return <h1>Loading...</h1>
  if (status === "rejected") return <h1>Error: {error.error}</h1>


  return (
    <div className="container">
      <h2>Working with Hexadecimals</h2>
      <ColorForm>
        <form id="input-form" onSubmit={handleSubmit}>
          <label>Enter a Hex Number:</label>
          <Input 
            type="text" 
            name="hex" placeholder="no #"
            pattern="[0-9a-fA-F]{3}([0-9a-fA-F]{3})?" 
            title="Please enter valid Hex code without #" 
            value={hexValue}
            onChange={(e) => setHexValue(e.target.value)}/>
          <Button variant="outline-secondary" id="hex-input-btn" type="submit">Submit</Button>
        </form>
      </ColorForm>
      <SmallContainer>
        <Swatch>
          {/* Show submitted hex color swatch and info */}
          <h3>{colorData.name.value}</h3>
          <img src={colorData.image.bare} alt={colorData.name.value} />
          <ul>
            <li><span>Hex: </span>{colorData.hex.value}</li>
            <li><span>RGB: </span>{colorData.rgb.value}</li>
            <li><span>CMYK: </span>{colorData.cmyk.value}</li>
            <li><span>HSL: </span>{colorData.hsl.value}</li>
          </ul>
        </Swatch>
        <SchemeList hexValue={hexValue}/>
      </SmallContainer>
      <TextBox>
        <p><strong>Color schemes</strong> are multi-color combinations chosen according to color-wheel
        relationships. The purpose of a color scheme is to create an aesthetic
        feeling of style and appeal.</p>
        <ul>
          <li><strong>Complementary</strong> schemes are created by combining colors from opposite sides of the color wheel.</li>
          <li><strong>Analogous</strong> color schemes are created by using colors that are next to each other on the color wheel.</li>
          <li><strong>Monochromatic</strong> color schemes are easy to create because they use only one color. 
            Use different tones from the same angle on the color wheel (the same hue).</li>
          <li><strong>Triad</strong> and <strong>Quad</strong> are made up of hues equally spaced around color wheel.</li>
        </ul>
      </TextBox>
    </div>
  )
}

// Styled-Components CSS
const ColorForm = styled.div`
  label {
    font-size: 1.4em;
    font-weight: 500;
  }

  form {
    margin: 15px 0 30px 0;
    display: flex;
    flex-direction: row;
    gap: 10px;

    input {
      width: 75px;
    }
  }
`
const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 85%;

  img {
    height: 200px;
    margin-bottom: 20px;
  }

  span {
    text-transform: uppercase;
    font-weight: 600;
  }

  li {
    font-size: .8em;
  }
`

const TextBox = styled.div`
  width: 75%;
  margin-top: 20px;

  li {
    font-size: .85em;
    list-style: circle;
  }
`

const Swatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: blue;
`