import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"

export default function ColorScheme({ hexValue, schemes }) {
  const [ monoData, setMonoData ] = useState(null)
  const [ analogData, setAnalogData ] = useState(null)
  const [ compData, setCompData ] = useState(null)
  const [ status, setStatus ] = useState("pending")


  const params = useParams()
  console.log("Params: ", params)
  console.log("Schemes: ", schemes)

  const fetchData = () => {
    const monoUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=monochrome&count=4`
    const analogUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=analogic&count=4`
    const compUrl = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=complement&count=1`

    const getMono = axios.get(monoUrl)
    const getAnalog = axios.get(analogUrl)
    const getComp = axios.get(compUrl)

    axios.all([getMono, getAnalog, getComp]).then(
      axios.spread((...allData) => {
        const allMonoData = allData[0].data
        const allAnalogData = allData[1].data
        const allCompData = allData[2].data
        console.log("All Data: ", allData)
        setMonoData(allMonoData)
        setAnalogData(allAnalogData)
        setCompData(allCompData)
        setStatus("resolved")
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [hexValue])
  
  const schemeName = schemes[params.schemeId].title
  console.log("Id: ", schemeName)

  let schemeImg = ""
  let schemeText = ""

  if (status === "resolved") {
    switch(schemeName) {
      case "Monochrome":
        console.log("Monochrome")
        schemeImg = monoData.image.bare
        schemeText = 
          <div>
            <p><strong>Monochrome Color:</strong> variations of one color.</p>
            <ul>
              <li>{monoData.colors[0].name.value} • {monoData.colors[0].hex.value} • {monoData.colors[0].rgb.value}</li>
              <li>{monoData.colors[1].name.value} • {monoData.colors[1].hex.value} • {monoData.colors[1].rgb.value}</li>
              <li>{monoData.colors[2].name.value} • {monoData.colors[2].hex.value} • {monoData.colors[2].rgb.value}</li>
              <li>{monoData.colors[3].name.value} • {monoData.colors[3].hex.value} • {monoData.colors[3].rgb.value}</li>
            </ul>
          </div> 
        break
      case "Analogic":
        console.log("Analogic")
        schemeImg = analogData.image.bare
        schemeText = 
          <div>
            <p><strong>Analogous Color:</strong> next to each other on the color wheel.</p>
            <ul>
              <li>{analogData.colors[0].name.value} • {analogData.colors[0].hex.value} • {analogData.colors[0].rgb.value}</li>
              <li>{analogData.colors[1].name.value} • {analogData.colors[1].hex.value} • {analogData.colors[1].rgb.value}</li>
              <li>{analogData.colors[2].name.value} • {analogData.colors[2].hex.value} • {analogData.colors[2].rgb.value}</li>
              <li>{analogData.colors[3].name.value} • {analogData.colors[3].hex.value} • {analogData.colors[3].rgb.value}</li>
            </ul>
          </div> 
        break
      case "Complement":
        console.log(compData)
        schemeImg = compData.image.bare
        schemeText = 
          <div>
            <p><strong>Complementary color:</strong> on opposite side of the color wheel.</p>
            <ul>
              <li>{compData.colors[0].name.value} • {compData.colors[0].hex.value} • {compData.colors[0].rgb.value}</li>
              <li>{compData.colors[1].name.value} • {compData.colors[1].hex.value} • {compData.colors[1].rgb.value}</li>
              <li>{compData.colors[2].name.value} • {compData.colors[2].hex.value} • {compData.colors[2].rgb.value}</li>
            </ul>
          </div> 
        break
      default:
        console.log("no match")
        break
    }
  }

  // Update status state
  if (status === "pending") return <h1>Loading...</h1>;
  // if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div>
      <h3>{schemes[params.schemeId].title}</h3>
      <img src={schemeImg} alt="Color scheme example" />
      {schemeText}
    </div>
  );
}
