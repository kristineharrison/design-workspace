import React from "react"
import styled from "styled-components"
import { Button, Input } from "../ui"

export default function ColorSwatch() {
  return (
    <Container>
      <h2>Working with Hexadecimals</h2>
      <p>What hexadecimal color is.</p>

      
      <p>Working on a project that involves both print and digital color and need various color formats? Need ideas for what matches a certain shade? Curious how a certain font looks in a specific color? All you need is the six digit hex color value! 
      </p>

      <form id="input-form">
        <label>Have a HEX value?</label>
        <Input type="text" name="hex" placeholder="e.g. FFAA88 - no #"
          pattern="[0-9a-fA-F]{3}([0-9a-fA-F]{3})?" title="Please enter valid Hex code without #" />
        <Button id="hex-input-btn">Submit</Button>
      </form>
              
      <div>
        <ul>
          <li><strong>Hexadecimal Color:</strong> supported in all browsers and specified with #RRGGBB. 
              <a href="https://www.w3schools.com/colors/colors_hexadecimal.asp"
                alt="Hex Calculator" target="_blank">Hex Calculator</a>
          </li>
          <li><strong>RGB Color:</strong> most often used for web and computer monitor colors.</li>
          <li><strong>CMYK Color:</strong> mainly used for print operations.</li>
          <li><strong>HSL Color:</strong>  stands for hue, saturation, and lightness. Is an alternative representation of RGB.</li>
        </ul>
      </div>
      
      <div>
        <figure id="complement" class="hidden">
          <img id="complementImg" src="./assets/placeholder.png" /> 
          <figcaption>Complement</figcaption>
        </figure>
        <figure id="analogous" class="hidden">
          <img id="analogousImg" src="./assets/placeholder.png" /> 
          <figcaption>Analogous</figcaption>
        </figure>
        <figure id="monochrome" class="hidden">
          <img id="monochromeImg" src="./assets/placeholder.png" /> 
            <figcaption>Monochrome</figcaption>
        </figure>
      </div>
      
      <div>
        <ul id="scheme-defs" class="hidden">
          <li><strong>Complementary color:</strong> on opposite side of the color wheel.</li>
          <li><strong>Analogous Color:</strong> next to each other on the color wheel.</li>
          <li><strong>Monochrome Color:</strong> variations of one color.</li>
        </ul>
      </div>
 
    </Container>
  
  );
}
const Container = styled.section`
  width:  100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;