import React from "react"
import { ColorPicker, useColor } from "react-color-palette"
import "react-color-palette/lib/css/styles.css"

export default function ColorSelect() {
  // Set example color state to fixed hex value
  const [color, setColor] = useColor("hex", "#3e8156");
  
  return(
    <div className="container">
      <h2>Color Picker</h2>
      <p>Use the color picker to grab a hex value to  work with the color schemes below.</p>
      {/* Insert a custom color picker */}
      <ColorPicker width={400} height={171} 
                   color={color} 
                   onChange={setColor} hideHSV hideRGB light />
    </div>
  )
}