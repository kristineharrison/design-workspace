import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import uuid from "react-uuid"

export default function SchemeDisplay({ hexValue, schemes }) {
  const [monoData, setMonoData] = useState(null)
  const [monoLightData, setMonoLightData] = useState(null)
  const [monoDarkData, setMonoDarkData] = useState(null)
  const [analogData, setAnalogData] = useState(null)
  const [analogCompData, setAnalogCompData] = useState(null)
  const [compData, setCompData] = useState(null)
  const [triadData, setTriadData] = useState(null)
  const [quadData, setQuadData] = useState(null)
  const [status, setStatus] = useState("pending")

  const params = useParams()
  
  // Get color scheme data from The Color Api
  const fetchData = () => {
    const monoUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=monochrome&count=4`
    const monoDarkUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=monochrome-dark&count=4`
    const monoLightUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=monochrome-light&count=4`
    const analogUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=analogic&count=4`
    const analogCompUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=analogic-complement&count=4`
    const compUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=complement&count=1`
    const triadUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=triad&count=1`
    const quadUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=quad&count=1`

    const getMono = axios.get(monoUrl)
    const getMonoDark = axios.get(monoDarkUrl)
    const getMonoLight = axios.get(monoLightUrl)
    const getAnalog = axios.get(analogUrl)
    const getAnalogComp = axios.get(analogCompUrl)
    const getComp = axios.get(compUrl)
    const getTriad = axios.get(triadUrl)
    const getQuad = axios.get(quadUrl)

    axios.all([getMono, getMonoDark, getMonoLight, getAnalog, getAnalogComp, getComp, getTriad, getQuad]).then(
      axios.spread((...allData) => {
        const allMonoData = allData[0].data
        const allMonoDarkData = allData[1].data
        const allMonoLightData = allData[2].data
        const allAnalogData = allData[3].data
        const allAnalogCompData = allData[4].data
        const allCompData = allData[5].data
        const allTriadData = allData[6].data
        const allQuadData = allData[7].data
        
        setMonoData(allMonoData)
        setMonoDarkData(allMonoDarkData)
        setMonoLightData(allMonoLightData)
        setAnalogData(allAnalogData)
        setAnalogCompData(allAnalogCompData)
        setCompData(allCompData)
        setTriadData(allTriadData)
        setQuadData(allQuadData)
        setStatus("resolved")
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [hexValue])
 
  // Display selected color scheme and info
  const schemeName = schemes[params.schemeId].title
  let schemeImg = ""
  let schemeText = ""
  if (status === "resolved") {
    switch(schemeName) {
      case "Monochrome":
        const monoColors = monoData.colors.map(color => <li key={uuid()}>{color.name.value} • {color.hex.value} • {color.rgb.value}</li>)
        schemeImg = monoData.image.bare
        schemeText = 
          <div>
            <ul>
              {monoColors}
            </ul>
          </div>
        break

      case "Monochrome Dark":
        const monoDarkColors = monoDarkData.colors.map(color => <li key={uuid()}>{color.name.value} • {color.hex.value} • {color.rgb.value}</li>)
        schemeImg = monoDarkData.image.bare
        schemeText = 
          <div>
            <ul>
              {monoDarkColors}
            </ul>
          </div> 
        break

      case "Monochrome Light":
        const monoLightColors = monoLightData.colors.map(color => <li key={uuid()}>{color.name.value} • {color.hex.value} • {color.rgb.value}</li>)
        schemeImg = monoLightData.image.bare
        schemeText = 
          <div>
            <ul>
              {monoLightColors}
            </ul>
          </div> 
        break

      case "Analogic":
        const analogColors = analogData.colors.map(color => <li key={uuid()}>{color.name.value} • {color.hex.value} • {color.rgb.value}</li>)
        schemeImg = analogData.image.bare
        schemeText = 
          <div>
            <ul>
              {analogColors}
            </ul>
          </div> 
        break

      case "Analogic Complement":
        const analogCompColors = analogCompData.colors.map(color => <li key={uuid()}>{color.name.value} • {color.hex.value} • {color.rgb.value}</li>)
        schemeImg = analogCompData.image.bare
        schemeText = 
          <div>
            <ul>
              {analogCompColors}
            </ul>
          </div> 
        break
      
      case "Complement":
        const compColors = compData.colors.map(color => <li key={uuid()}>{color.name.value} • {color.hex.value} • {color.rgb.value}</li>)
        schemeImg = compData.image.bare
        schemeText = 
            <ul>
              {compColors}
            </ul>
        break

      case "Triad":
        const triadColors = triadData.colors.map(color => <li key={uuid()}>{color.name.value} • {color.hex.value} • {color.rgb.value}</li>)
        schemeImg = triadData.image.bare
        schemeText = 
          <div>
            <ul>
              {triadColors}
            </ul>
          </div> 
        break

      case "Quad":
        const quadColors = quadData.colors.map(color => <li key={uuid()}>{color.name.value} • {color.hex.value} • {color.rgb.value}</li>)
        schemeImg = quadData.image.bare
        schemeText = 
          <div>
            <ul>
              {quadColors}
            </ul>
          </div> 
        break
      
      default:
        console.log("no match")
        break
    }
  }

  // Update status state
  if (status === "pending") return <h1>Loading...</h1>
  // if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <SchemeBox>
      <h3>{schemes[params.schemeId].title}</h3>
      <Example>
        <img src={schemeImg} alt="Color scheme example" />
        <div>
          {schemeText}
        </div>
      </Example>
    </SchemeBox>
  )
}

// Styled-Components CSS
const SchemeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Example = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  img {
    height: 250px;
  }
`