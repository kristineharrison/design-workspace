import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ColorScheme({ hexValue, schemes }) {
  // const [ monoData, setMonoData ] = useState({})
  // const [ error, setError ] = useState(null)
  // const [ status, setStatus ] = useState("pending")
  const [{ data: monoData, error, status }, setMonoData] = useState({
    data: null,
    error: null,
    status: "pending",
  })

  const params = useParams()
  console.log("Params: ", params)
  console.log("Schemes: ", schemes)
  
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
      case "Analogous":
        console.log("Analogous")
        break
      case "Complementary":
        console.log("Complementary")
        break
      default:
        console.log("no match")
        break
    }
  }

  useEffect(() => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=monochrome&count=4`)
    .then((r) => {
      if (r.ok) {
        r.json().then((scheme) =>
          setMonoData({ data: scheme, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setMonoData({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [hexValue]);

  console.log("MonoData: ", monoData)

  // Update status state
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div>
      <h3>{schemes[params.schemeId].title}</h3>
      <img src={schemeImg} alt="Color scheme example" />
      {schemeText}
    </div>
  );
}
