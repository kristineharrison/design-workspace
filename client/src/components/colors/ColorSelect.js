import React from "react"
import { ColorPicker, useColor } from "react-color-palette"
import "react-color-palette/lib/css/styles.css"


export default function ColorSelect() {
  const [color, setColor] = useColor("hex", "#3e8156");
  
  return(
    <div>
        <h1>Color Picker</h1>
        <ColorPicker width={456} height={228} 
                   color={color} 
                   onChange={setColor} hideHSV dark />
    </div>
  )
}

