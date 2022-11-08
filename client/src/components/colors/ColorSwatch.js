import React from "react"
import { useEffect, useState } from "react"
import SchemeList from "./SchemeList"
import styled from "styled-components"
import Button from 'react-bootstrap/Button'
import { Input } from "../ui"

export default function ColorSwatch() {
  const [ hexValue, setHexValue ] = useState("")
  const [ { data: colorData, error, status }, setColorData ] = useState({
    colorData: null,
    error: null,
    status: "pending",
  })

  // Fetch initial color data from The Color API and update status
  useEffect(() => {
    fetch(`https://www.thecolorapi.com/id?hex=E53F16`)
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
    <Container>
      <h2>Working with Hexadecimals</h2>
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
      <h3>{colorData.name.value}</h3>
      <img src={colorData.image.bare} alt={colorData.name.value} />
      <ul>
        <li><span>Hex: </span>{colorData.hex.value}</li>
        <li><span>RGB: </span>{colorData.rgb.value}</li>
        <li><span>CMYK: </span>{colorData.cmyk.value}</li>
        <li><span>HSL: </span>{colorData.hsl.value}</li>
      </ul>
      <SchemeList hexValue={hexValue}/>
    </Container>
  )
}
const Container = styled.section`
  width:  100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 1.5rem;
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

  img {
    height: 200px;
    margin-bottom: 20px;
  }

  span {
    text-transform: uppercase;
    font-weight: 600;
  }
`