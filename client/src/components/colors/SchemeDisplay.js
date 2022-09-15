import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function SchemeDisplay({ hexValue, schemes }) {
  const [ monoData, setMonoData ] = useState(null)
  const [ monoLightData, setMonoLightData ] = useState(null)
  const [ monoDarkData, setMonoDarkData ] = useState(null)
  const [ analogData, setAnalogData ] = useState(null)
  const [ analogCompData, setAnalogCompData ] = useState(null)
  const [ compData, setCompData ] = useState(null)
  const [ triadData, setTriadData ] = useState(null)
  const [ quadData, setQuadData ] = useState(null)
  const [ status, setStatus ] = useState("pending")

  const params = useParams()

  const fetchData = () => {
    const monoUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=monochrome&count=4`
    const monoDarkUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=monochrome-dark&count=4`
    const monoLightUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=monochrome-light&count=4`
    const analogUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=analogic&count=4`
    const analogCompUrl =`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=analogic-complement&count=4`
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
  
  const schemeName = schemes[params.schemeId].title
  let schemeImg = ""
  let schemeText = ""
  let schemeDef = ""
  if (status === "resolved") {
    switch(schemeName) {
      case "Monochrome":
        schemeImg = monoData.image.bare
        schemeDef = <p>Monochromatic color schemes are easy to create because they use only one color. 
          Use different tones from the same angle on the color wheel (the same hue).</p>
        schemeText = 
          <div>
            <ul>
              <li>{monoData.colors[0].name.value} • {monoData.colors[0].hex.value} • {monoData.colors[0].rgb.value}</li>
              <li>{monoData.colors[1].name.value} • {monoData.colors[1].hex.value} • {monoData.colors[1].rgb.value}</li>
              <li>{monoData.colors[2].name.value} • {monoData.colors[2].hex.value} • {monoData.colors[2].rgb.value}</li>
              <li>{monoData.colors[3].name.value} • {monoData.colors[3].hex.value} • {monoData.colors[3].rgb.value}</li>
            </ul>
          </div> 
        break

      case "Monochrome Dark":
        schemeImg = monoDarkData.image.bare
        schemeDef = <p>Monochromatic color schemes are easy to create because they use only one color. 
        Use different tones from the same angle on the color wheel (the same hue).</p>
        schemeText = 
          <div>
            <ul>
              <li>{monoDarkData.colors[0].name.value} • {monoDarkData.colors[0].hex.value} • {monoDarkData.colors[0].rgb.value}</li>
              <li>{monoDarkData.colors[1].name.value} • {monoDarkData.colors[1].hex.value} • {monoDarkData.colors[1].rgb.value}</li>
              <li>{monoDarkData.colors[2].name.value} • {monoDarkData.colors[2].hex.value} • {monoDarkData.colors[2].rgb.value}</li>
              <li>{monoDarkData.colors[3].name.value} • {monoDarkData.colors[3].hex.value} • {monoDarkData.colors[3].rgb.value}</li>
            </ul>
          </div> 
        break

      case "Monochrome Light":
        schemeImg = monoLightData.image.bare
        schemeDef = <p>Monochromatic color schemes are easy to create because they use only one color. 
        Use different tones from the same angle on the color wheel (the same hue).</p>
        schemeText = 
          <div>
            <ul>
              <li>{monoLightData.colors[0].name.value} • {monoLightData.colors[0].hex.value} • {monoLightData.colors[0].rgb.value}</li>
              <li>{monoLightData.colors[1].name.value} • {monoLightData.colors[1].hex.value} • {monoLightData.colors[1].rgb.value}</li>
              <li>{monoLightData.colors[2].name.value} • {monoLightData.colors[2].hex.value} • {monoLightData.colors[2].rgb.value}</li>
              <li>{monoLightData.colors[3].name.value} • {monoLightData.colors[3].hex.value} • {monoLightData.colors[3].rgb.value}</li>
            </ul>
          </div> 
        break

      case "Analogic":
        console.log("Analogic")
        schemeImg = analogData.image.bare
        schemeDef = <p>Analogous color schemes are created by using colors that are next to each other on the color wheel.</p>
        schemeText = 
          <div>
            <ul>
              <li>{analogData.colors[0].name.value} • {analogData.colors[0].hex.value} • {analogData.colors[0].rgb.value}</li>
              <li>{analogData.colors[1].name.value} • {analogData.colors[1].hex.value} • {analogData.colors[1].rgb.value}</li>
              <li>{analogData.colors[2].name.value} • {analogData.colors[2].hex.value} • {analogData.colors[2].rgb.value}</li>
              <li>{analogData.colors[3].name.value} • {analogData.colors[3].hex.value} • {analogData.colors[3].rgb.value}</li>
            </ul>
          </div> 
        break

      case "Analogic Complement":
        schemeImg = analogCompData.image.bare
        schemeDef = <p>Analogous color schemes are created by using colors that are next to each other on the color wheel.</p>
        schemeText = 
          <div>
            <ul>
              <li>{analogCompData.colors[0].name.value} • {analogCompData.colors[0].hex.value} • {analogCompData.colors[0].rgb.value}</li>
              <li>{analogCompData.colors[1].name.value} • {analogCompData.colors[1].hex.value} • {analogCompData.colors[1].rgb.value}</li>
              <li>{analogCompData.colors[2].name.value} • {analogCompData.colors[2].hex.value} • {analogCompData.colors[2].rgb.value}</li>
              <li>{analogCompData.colors[3].name.value} • {analogCompData.colors[3].hex.value} • {analogCompData.colors[3].rgb.value}</li>
            </ul>
          </div> 
        break
      
      case "Complement":
        schemeImg = compData.image.bare
        schemeDef = <p>Complementary schemes are created by combining colors from opposite sides of the color wheel.</p>
        schemeText = 
            <ul>
              <li className="scheme-value">{compData.colors[0].name.value} • {compData.colors[0].hex.value} • {compData.colors[0].rgb.value}</li>
              <li className="scheme-value">{compData.colors[1].name.value} • {compData.colors[1].hex.value} • {compData.colors[1].rgb.value}</li>
              <li className="scheme-value">{compData.colors[2].name.value} • {compData.colors[2].hex.value} • {compData.colors[2].rgb.value}</li>
            </ul>
        break

      case "Triad":
        schemeImg = triadData.image.bare
        schemeDef = <p>Made up of hues equally spaced around color wheel.</p>
        schemeText = 
          <div>
            <ul>
              <li>{triadData.colors[0].name.value} • {triadData.colors[0].hex.value} • {triadData.colors[0].rgb.value}</li>
              <li>{triadData.colors[1].name.value} • {triadData.colors[1].hex.value} • {triadData.colors[1].rgb.value}</li>
              <li>{triadData.colors[2].name.value} • {triadData.colors[2].hex.value} • {triadData.colors[2].rgb.value}</li>
              <li>{triadData.colors[3].name.value} • {triadData.colors[3].hex.value} • {triadData.colors[3].rgb.value}</li>
              <li>{triadData.colors[4].name.value} • {triadData.colors[4].hex.value} • {triadData.colors[4].rgb.value}</li>
            </ul>
          </div> 
        break

      case "Quad":
        schemeImg = quadData.image.bare
        schemeDef = <p>Made up of hues equally spaced around color wheel.</p>
        schemeText = 
          <div>
            <ul>
              <li>{quadData.colors[0].name.value} • {quadData.colors[0].hex.value} • {quadData.colors[0].rgb.value}</li>
              <li>{quadData.colors[1].name.value} • {quadData.colors[1].hex.value} • {quadData.colors[1].rgb.value}</li>
              <li>{quadData.colors[2].name.value} • {quadData.colors[2].hex.value} • {quadData.colors[2].rgb.value}</li>
              <li>{quadData.colors[3].name.value} • {quadData.colors[3].hex.value} • {quadData.colors[3].rgb.value}</li>
              <li>{quadData.colors[4].name.value} • {quadData.colors[4].hex.value} • {quadData.colors[4].rgb.value}</li>
              <li>{quadData.colors[5].name.value} • {quadData.colors[5].hex.value} • {quadData.colors[5].rgb.value}</li>
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
    <Container>
      <h3>{schemes[params.schemeId].title}</h3>
      <TextBox>
        {schemeDef}
      </TextBox>
      <SchemeBox>
        <img src={schemeImg} alt="Color scheme example" />
       {schemeText}
      </SchemeBox>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TextBox = styled.div`
  width: 70%;
`
const SchemeBox = styled.div`
  display: flex;
  flex-direction: row;
  
  ul {
    margin-top: 10px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 10px;
  }

  img {
    height: 250px;
  }
`